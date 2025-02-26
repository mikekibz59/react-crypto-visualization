import cc from 'cryptocompare';
cc.setApiKey(process.env.REACT_APP_CC_API);
export { cc }
