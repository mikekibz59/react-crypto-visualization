import highChartsConfig from './HighChartsConfig';
import React from 'react';
import ReactHighCharts from 'react-highcharts';
import { Tile } from '../shared/Tile';
import { AppContext } from '../App/AppProvider';
import { theme } from './HighChartsTheme';
import Spinner from '../shared/Spinner';
import styled from 'styled-components';

const SpinnerPos = styled.div`
	justify-self: right;
`;
ReactHighCharts.Highcharts.setOptions(theme);

export default function() {
	return (
		<AppContext.Consumer>
			{({ historical }) => (
				<Tile>
					{historical ? (
						<ReactHighCharts config={highChartsConfig(historical)} />
					) : (
						<SpinnerPos>
							<Spinner /> Loading data
						</SpinnerPos>
					)}
				</Tile>
			)}
		</AppContext.Consumer>
	);
}
