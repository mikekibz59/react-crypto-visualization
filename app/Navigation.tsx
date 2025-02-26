'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserCurrentPage } from '../src/store/selectors/userSelectors';
import { userPageTypes } from '../src/types/user';
import { setCurrentPage } from '../src/store/slices/userSlice';

const Bar = styled.div`
	display: grid;
	grid-template-columns: 180px auto 100px 100px;
`;

const Logo = styled.div`
	font-size: 1.5em;
`;

interface ControlButtonProps {
    $active?: boolean;
}

const ControlButtonElm = styled.div<ControlButtonProps>`
	cursor: pointer;
	${({ $active }) =>
        $active &&
        css`
			text-shadow: 1px 1px 2px pink;
		`}
`;

function toProperCase(lower: string) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({ name }: { name: userPageTypes }) {
    const currentPage = useSelector(selectUserCurrentPage);
    const dispatch = useDispatch();
    return (
        <ControlButtonElm
            $active={currentPage === name}
            onClick={() => dispatch(setCurrentPage(name))}>
            {' '}
            {toProperCase(name)}
        </ControlButtonElm>
    );
}

export default function () {
    return (<Bar>
        <Logo> CryptoFinance</Logo>
        <div />
        <ControlButton name='dashboard' />
        <ControlButton name='settings' />
    </Bar>)
}
