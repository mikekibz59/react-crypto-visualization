import React from 'react';
import styled from 'styled-components';
import { Tile } from '../shared/Tile';
import { AppContext } from '../App/AppProvider';
import CoinImage from '../shared/CoinImage';

const SpotlightName = styled.h2`
	text-align: center;
`;

export default function() {
	return (
		<AppContext.Consumer>
			{({ currentFavorite, coinlist }) => (
				<Tile>
					<SpotlightName>{coinlist[currentFavorite].CoinName}</SpotlightName>
					<CoinImage coin={coinlist[currentFavorite]} spotlight />
				</Tile>
			)}
		</AppContext.Consumer>
	);
}
