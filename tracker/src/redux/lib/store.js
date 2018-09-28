// This is state now
import { createStore } from 'redux';
import reducer from '../reducer/business-reducer';

export default () => {
  return createStore(reducer);
}