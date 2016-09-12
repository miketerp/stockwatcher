export const increment = (id) => {
  return {
    type: 'INCREMENT',
    payload: {
      id
    }
  }
}

//this action tell the reducer which counter with specified id needs to be
//decremented.
export const decrement = (id) => {
  return {
    type: 'DECREMENT',
    payload: {
      id
    }
  }
}

//tells the reducer, we need a new counter on the scene with a new ID
export const newCounter = () => {
  return {
    type: 'ADD_NEW_COUNTER'
  }
}


export const incrementWithDelay = (id) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: 'INCREMENT',
        payload: {
          id
        }
      })
    }, 1000)
  }
}