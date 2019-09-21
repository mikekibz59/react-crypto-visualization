import React from 'react';
import styled from 'styled-components';
import { DeletableTile } from '../shared/Tile';

//This is a component for the header section for
//CoinTile component

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;

//In this function we pass the topSection parameter
//to determine whether or not the coin is in the top
export default function({ name, symbol, topSection }) {
  return (
    <CoinHeaderGridStyled>
      <div>{name}</div>
      {topSection ? (
        <DeleteIcon> X </DeleteIcon>
      ) : (
        <CoinSymbol>{symbol}</CoinSymbol>
      )}
    </CoinHeaderGridStyled>
  );
}
