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
//write a way to handle it
export default function() {
	return (
		<AppContext.Consumer>
			{({ prices }) => (
				<PriceGrid key={prices}>
					{prices.map((price, index) => (
						<PriceTile price={price} index={index}>
							{' '}
							{Object.keys(price)[0]}
						</PriceTile>
					))}
				</PriceGrid>
			)}
		</AppContext.Consumer>
	);
}
