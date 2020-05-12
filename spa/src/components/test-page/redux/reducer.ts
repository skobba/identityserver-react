import { fromJS } from 'immutable';
import { FETCH_MESSAGES_SUCCEEDED, MessageActionTypes } from './action-types';

const initialState = fromJS([
  { id: 1, text: 'Msg01' },
  { id: 2, text: 'Msg02' }
]);

export default function reducer(
  state = initialState,
  action: MessageActionTypes // Actions<typeof actions>
) {
  switch (action.type) {
    case FETCH_MESSAGES_SUCCEEDED:
      console.log('FETCH_MESSAGES_SUCCEEDED'); // eslint-disable-line

      return action.payload.messages;

    default:
      // console.log(`state: ${JSON.stringify(state, null, 2)}`); // eslint-disable-line
      return state;
  }
}
