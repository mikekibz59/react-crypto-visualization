import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import PriceTile from './PriceTile';

const PriceGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 15px;
	margin-top: 40px;
`;

export default function() {
	return (
		<AppContext.Consumer>
			{({ prices }) => (
				<PriceGrid>
					{Object.keys(prices).map((priceKey, index) => (
						<PriceTile key={`price-key${index}`} price={prices[priceKey]} index={index}>
							{' '}
							{priceKey}
						</PriceTile>
					))}
				</PriceGrid>
			)}
		</AppContext.Consumer>
	);
}
