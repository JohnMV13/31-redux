export default (state = [], action = {}) => {
  switch(action.type) {
    case 'GAME_CREATE':
      return [ ...state, action.payload ];
    case 'GAME_DELETE':
      return state.filter(game => game._id !== action.payload._id);
    case 'GAME_UPDATE':
      return state.map(game => game._id === action.payload._id ? action.payload : game);
    default:
      return state;
  }
  
}