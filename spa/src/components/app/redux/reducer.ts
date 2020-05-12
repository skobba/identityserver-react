import { combineReducers } from 'redux';

import personPageReducer from '../../persons-page/redux/reducer';
import testPageReducer from '../../test-page/redux/reducer';

export default combineReducers({
  person: personPageReducer,
  messages: testPageReducer
});
