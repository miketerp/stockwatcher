import fetch from 'isomorphic-fetch';

function sendFetchQuotesRequest() {
  return {
    type: 'FETCHING',
    status: 'busy'
  };
}

function receiveFetchQuotesRequest(json) {
  return {
    type: 'RECEIVING',
    status: 'free',
    data: json.data,
    timestamp: Date.now()
  };
}

export const fetchQuotes = () => {
  return function (dispatch) {
    dispatch(sendFetchQuotesRequest());

    return fetch('http://sanghokeem.com/api/stocks')
      .then(res => res.json())
      .then(json => {
        dispatch(receiveFetchQuotesRequest(json));
      });
  }
}