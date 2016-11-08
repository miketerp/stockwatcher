function quotes(state = {}, action) {
  switch (action.type) {
    case 'FETCHING':
      return Object.assign({}, state, {
        'status': action.status
      });
    case 'RECEIVING':
      return Object.assign({}, state, {
        'status': action.status,
        'data': action.data,
        'time': action.timestamp
      });
    default:
      return state;
  }
}

export default quotes;