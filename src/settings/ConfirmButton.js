import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { greenBoxShadow, color3 } from '../shared/styles';

const ConfirmButtonStyled = styled.div`
	margin: 20px;
	color: ${color3};
	padding: 5px;
	cursor: pointer;
	&:hover {
		${greenBoxShadow}
	}
`;

export const CenterDiv = styled.div`
	display: grid;
	justify-content: center;
`;

export default function() {
	return (
		<AppContext.Consumer>
			{({ confirmFavorites }) => (
				<CenterDiv>
					<ConfirmButtonStyled onClick={confirmFavorites}>
						Confirm Favorites
					</ConfirmButtonStyled>
				</CenterDiv>
			)}
		</AppContext.Consumer>
	);
}
