import React, { Component } from 'react';
import _ from 'lodash';

const cc = require('cryptocompare');
export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'dashboard',
			favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
			...this.savedSettings(),
			setPage: this.setPage,
			addCoin: this.addCoin,
			isInFavorites: this.isInFavorites,
			removeCoin: this.removeCoin,
			confirmFavorites: this.confirmFavorites,
			setFilteredCoins: this.setFilteredCoins,
			setCurrentFavorite: this.setCurrentFavorite,
		};
	}

	//a function to fetch all coins and prices
	componentDidMount() {
		this.fetchCoins();
		this.fetchPrices();
	}

	fetchCoins = async () => {
		let coinlist = (await cc.coinList()).Data;
		this.setState({ coinlist });
	};

	addCoin = (key) => {
		let favorites = [...this.state.favorites];
		if (favorites.length < MAX_FAVORITES) {
			if (!favorites.includes(key)) favorites.push(key);
			this.setState({ favorites });
		}
	};

	removeCoin = (key) => {
		let favorites = [...this.state.favorites].filter((favorite) => {
			return favorite !== key;
		});
		this.setState({ favorites });
	};

	setCurrentFavorite = (sym) => {
		this.setState({ currentFavorite: sym });
		localStorage.setItem(
			'cryptoDash',
			JSON.stringify({
				...JSON.parse(localStorage.getItem('cryptoDash')),
				currentFavorite: sym,
			})
		);
	};

	isInFavorites = (key) => _.includes(this.state.favorites, key);

	setPage = (page) => this.setState({ page });

	setFilteredCoins = (filteredCoins) => this.setState({ filteredCoins });

	savedSettings() {
		let cryptoData = JSON.parse(localStorage.getItem('cryptoDash'));
		if (!cryptoData) {
			return { page: 'dashboard', firstVisit: true };
		}
		let { favorites, currentFavorite } = cryptoData;
		return { favorites, currentFavorite };
	}

	fetchPrices = async () => {
		if (this.state.firstVisit) return;
		let prices = await this.prices();
		console.log(prices);
		prices = prices.filter((price) => Object.keys(price).length);
		this.setState({ prices });
	};

	prices = async () => {
		let returnData = [];
		for (let i = 0; i < this.state.favorites.length; i++) {
			try {
				let priceData = await cc.priceFull(this.state.favorites[i], 'USD');
				returnData.push(priceData);
			} catch (e) {
				console.warn('fetch price error: ', e);
			}
		}
		return returnData;
	};

	confirmFavorites = () => {
		let currentFavorite = this.state.favorites[0];
		this.setState(
			{
				firstVisit: false,
				page: 'dashboard',
				currentFavorite: currentFavorite,
			},
			() => {
				this.fetchPrices();
			}
		);
		localStorage.setItem(
			'cryptoDash',
			JSON.stringify({
				favorites: this.state.favorites,
				currentFavorite: currentFavorite,
			})
		);
	};

	render() {
		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
