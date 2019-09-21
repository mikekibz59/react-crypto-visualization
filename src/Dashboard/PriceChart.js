import highChartsConfig from './HighChartsConfig';
import React from 'react';
import ReactHighCharts from 'react-highcharts';
import { Tile } from '../shared/Tile';
import { AppContext } from '../App/AppProvider';
import { theme } from './HighChartsTheme';

ReactHighCharts.Highcharts.setOptions(theme);

export default function() {
	return (
		<AppContext.Consumer>
			{(props) => (
				<Tile>
					<ReactHighCharts config={highChartsConfig()} />
				</Tile>
			)}
		</AppContext.Consumer>
	);
}
