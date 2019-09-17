import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;
const Logo = styled.div`
  font-size: 1.5em;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 1px 1px 2px pink;
    `}
`;

//function used to Capitalize the page name
function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

//used to set the page on which you are currently working on
// the active attribute/prop is used to add somestyling
//to show the user which page he/she is currently on
function ControlButton({ name, active }) {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButtonElem active={page === name} onClick={() => setPage(name)}>
          {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  );
}

export default function() {
  return (
    <Bar>
      <Logo> Cryptodash</Logo>
      <div />
      <ControlButton active name='dashboard' />
      <ControlButton name='settings' />
    </Bar>
  );
}
