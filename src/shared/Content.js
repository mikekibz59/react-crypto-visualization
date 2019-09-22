import React from 'react';
import { AppContext } from '../App/AppProvider';
import styled from 'styled-components';
import Spinner from './Spinner';

const LoadingPosition = styled.div`
	font-size: 20px;
	text-align: center;
	text-transform: capitalize;
`;

export default function(props) {
	return (
		<AppContext.Consumer>
			{({ coinlist, prices, firstVisit }) => {
				if (!coinlist) {
					return (
						<LoadingPosition>
							<Spinner />
							Loading coins
						</LoadingPosition>
					);
				}
				if (!firstVisit && !prices) {
					return (
						<LoadingPosition>
							{' '}
							<Spinner /> Loading prices
						</LoadingPosition>
					);
				}
				return <div>{props.children}</div>;
			}}
		</AppContext.Consumer>
	);
}
