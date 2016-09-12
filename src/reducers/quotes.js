import quotes from './sample.json';

const initialState = quotes;

function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ action.text ]);
    default:
      return state;
  }
}

export default todos;