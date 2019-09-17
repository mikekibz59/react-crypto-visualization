import React from 'react';
import { AppContext } from '../App/AppProvider';

export default function(props) {
  return (
    <AppContext.Consumer>
      {({ coinlist, prices, firstVisit }) => {
        if (!coinlist) {
          return <div>Loading coins</div>;
        }
        if (!firstVisit && !prices) {
          return <div> loading prices</div>;
        }
        return <div>{props.children}</div>;
      }}
    </AppContext.Consumer>
  );
}
