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
      setFilteredCoins: this.setFilteredCoins
    };
  }

  //a function to fetch all coins
  componentDidMount() {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    let coinlist = (await cc.coinList()).Data;
    this.setState({ coinlist });
  };

  addCoin = key => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES) {
      if (!favorites.includes(key)) favorites.push(key);
      this.setState({ favorites });
    }
  };

  removeCoin = key => {
    let favorites = [...this.state.favorites].filter(favorite => {
      return favorite !== key;
    });
    this.setState({ favorites });
  };

  isInFavorites = key => _.includes(this.state.favorites, key);

  setPage = page => this.setState({ page });

  setFilteredCoins = filteredCoins => this.setState({ filteredCoins });

  savedSettings() {
    let cryptoData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoData) {
      return { page: 'dashboard', firstVisit: true };
    }
    let { favorites } = cryptoData;
    return { favorites };
  }

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({ favorites: this.state.favorites })
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
