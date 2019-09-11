import React, { Component } from 'react';

export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    };
  }
  setPage = page => this.setState({ page });

  savedSettings() {
    let cryptoData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoData) {
      return { page: 'dashboard', firstVisit: true };
    }
    return {};
  }

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });
    localStorage.setItem('cryptoDash', JSON.stringify({ test: 'hello' }));
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
