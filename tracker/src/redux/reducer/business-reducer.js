export default (state = [], action = {}) => {
  switch(action.type) {
    case 'BUSINESS_CREATE':
      return [ ...state, action.payload ];
    case 'BUSINESS_DELETE':
      return state.filter(business => business._id !== action.payload._id)
    default:
      return state;
  }
  
}