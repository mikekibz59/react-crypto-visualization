import React from 'react';
import styled, { css } from 'styled-components';
import Page from '../shared/Page';
import PriceGrid from './PriceGrid';
import CoinSpotlight from './CoinSpotlight';
import PriceChart from './PriceChart';
import { AppContext } from '../App/AppProvider';

import DashSpinner from '../shared/DashSpinner';

const ChartGrid = styled.div`
	display: grid;
	margin-top: 20px;
	grid-gap: 15px;
	grid-template-columns: 1fr 3fr;
`;

const Emptydiv = styled.div`
	display: grid;
	grid-template-row: 1fr 3fr;
	grid-template-colum: 1fr;
	padding: 6px;
	font-size: 18px;
	text-align: center;
	border: 1px inherit;
	margin-top: 40px;
`;

function checkVisitor(firstvisit) {
	if (firstvisit === false) {
		return (
			<Page name='dashboard'>
				<PriceGrid />
				<ChartGrid>
					<CoinSpotlight />
					<PriceChart />
				</ChartGrid>
			</Page>
		);
	} else {
		return (
			<Emptydiv svgImg>
				{' '}
				Please choose your favorite coins in the settings
				<DashSpinner />
			</Emptydiv>
		);
	}
}

export default function() {
	return (
		<AppContext.Consumer>
			{({ firstVisit }) => checkVisitor(firstVisit)}
		</AppContext.Consumer>
	);
}
