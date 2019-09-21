import React from 'react';
import styled from 'styled-components';
import { backgroundColor2, fontSize2 } from '../shared/styles';
import { AppContext } from '../App/AppProvider';
import _ from 'lodash';
import fuzzy from 'fuzzy';

const SearchGrid = styled.div`
	display: grid;
	grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
	${backgroundColor2}
	${fontSize2}
  border: 1px solid;
	height: 25px;
	color: #1163c0;
	place-self: center left;
`;

const handleFilter = _.debounce((inputValue, coinlist, setFilteredCoins) => {
	let coinSymbols = Object.keys(coinlist);
	let coinNames = coinSymbols.map((sym) => coinlist[sym].CoinName);
	let allStringsToSearch = coinSymbols.concat(coinNames);
	let fuzzyResults = fuzzy
		.filter(inputValue, allStringsToSearch, {})
		.map((res) => res.string);
	let filteredCoins = _.pickBy(coinlist, (result, symkey) => {
		let coinName = result.CoinName;
		return (
			_.includes(fuzzyResults, symkey) || _.includes(fuzzyResults, coinName)
		);
	});
	setFilteredCoins(filteredCoins);
}, 500);

function filterCoins(e, setFilteredCoins, coinlist) {
	let inputValue = e.target.value;
	if (!inputValue) {
		setFilteredCoins(null);
		return;
	}
	handleFilter(inputValue, coinlist, setFilteredCoins);
}

export default function() {
	return (
		<AppContext.Consumer>
			{({ setFilteredCoins, coinlist }) => (
				<SearchGrid>
					<h2>Search all coins</h2>
					<SearchInput
						onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinlist)}
					/>
				</SearchGrid>
			)}
		</AppContext.Consumer>
	);
}
