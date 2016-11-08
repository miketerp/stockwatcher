import marketData from './../data/market.json';

const initialState = marketData;

function market(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default market;