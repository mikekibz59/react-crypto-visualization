import highChartsConfig from './HighChartsConfig';
import React from 'react';
import ReactHighCharts from 'react-highcharts';
import { Tile } from '../shared/Tile';
import { AppContext } from '../App/AppProvider';
import { theme } from './HighChartsTheme';
import Spinner from '../shared/Spinner';
import styled from 'styled-components';
import ChartSelect from './ChartSelect';

const SpinnerPos = styled.div`
	justify-self: right;
`;
ReactHighCharts.Highcharts.setOptions(theme);

export default function() {
	return (
		<AppContext.Consumer>
			{({ historical, changeChartSelect }) => (
				<Tile>
					<ChartSelect
						defaultValue={'months'}
						onChange={(e) => {
							changeChartSelect(e.target.value);
						}}>
						<option value={'days'}>days</option>
						<option value={'weeks'}>weeks</option>
						<option value={'months'}>months</option>
					</ChartSelect>
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
