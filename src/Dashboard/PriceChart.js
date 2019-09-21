import highChartsConfig from './HighChartsConfig';
import React from 'react';
import { Tile } from '../shared/Tile';
import { AppContext } from '../App/AppProvider';
import ReactHighCharts from 'react-highcharts';

export default function() {
	return (
		<AppContext.Consumer>
			{(props) => (
				<Tile>
					{console.log(highChartsConfig())}
					<ReactHighCharts config={highChartsConfig()} />
				</Tile>
			)}
		</AppContext.Consumer>
	);
}
