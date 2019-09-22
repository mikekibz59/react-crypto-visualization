import React from 'react';
import styled from 'styled-components';
import DashSpinnerIcon from './DashSpinnerIcon';

const DashStyled = styled.div`
	justify-self: center;
	margin-top: 100px;
`;

export default () => {
	return (
		<DashStyled>
			<DashSpinnerIcon />
		</DashStyled>
	);
};
