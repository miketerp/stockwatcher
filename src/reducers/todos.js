const initialState = [
  'apples'
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ action.text ])
    default:
      return state
  }
}