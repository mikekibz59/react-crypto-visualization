import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';

const cc = require('cryptocompare');

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;
const TIME_UNITS = 10;

export class AppProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'dashboard',
			favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
			firstVisit: false,
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
		this.fetchHistorical();
	}

	fetchCoins = async () => {
		let coinlist = (await cc.coinList()).Data;
		console.log('coinList:', coinlist);
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
		this.setState(
			{ currentFavorite: sym, historical: null },
			this.fetchHistorical
		);
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
		console.log('currentFavorite', currentFavorite);
		return { favorites, currentFavorite };
	}

	fetchPrices = async () => {
		if (this.state.firstVisit) return;
		let prices = await this.prices();
		console.log('prices', prices);
		prices = prices.filter((price) => Object.keys(price).length);
		this.setState({ prices });
	};

	fetchHistorical = async () => {
		if (this.state.firstVisit) return;
		let results = await this.historical();
		let historical = [
			{
				name: this.state.currentFavorite,
				data: results.map((ticker, index) => [
					moment()
						.subtract({ months: TIME_UNITS - index })
						.valueOf(),
					ticker.USD,
				]),
			},
		];
		this.setState({ historical });
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

	historical = () => {
		let promises = [];
		for (let units = TIME_UNITS; units > 0; units--) {
			promises.push(
				cc.priceHistorical(
					this.state.currentFavorite,
					['USD'],
					moment()
						.subtract({ months: units })
						.toDate()
				)
			);
		}
		return Promise.all(promises);
	};

	confirmFavorites = () => {
		let currentFavorite = this.state.favorites[0];
		this.setState(
			{
				firstVisit: false,
				page: 'dashboard',
				currentFavorite: currentFavorite,
				prices: null,
				historical: null,
			},
			() => {
				this.fetchPrices();
				this.fetchHistorical();
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
