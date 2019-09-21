import React from 'react';
import styled from 'styled-components';
import Page from '../shared/Page';
import PriceGrid from './PriceGrid';
import CoinSpotlight from './CoinSpotlight';

const ChartGrid = styled.div`
	display: grid;
	margin-top: 20px;
	grid-gap: 15px;
	grid-template-columns: 1fr 3fr;
`;

export default function() {
	return (
		<Page name='dashboard'>
			<PriceGrid />
			<ChartGrid>
				<CoinSpotlight />
				<div>chart comes here</div>
			</ChartGrid>
		</Page>
	);
}
