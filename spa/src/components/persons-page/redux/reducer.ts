// import { fromJS } from 'immutable';
import { FETCH_PERSONS_SUCCEEDED, PersonActionTypes } from './action-types';
import { Person } from '../../../types';

// const initialState = fromJS({
//   id: 1,
//   firstName: 'Kalle',
//   lastName: 'Person',
//   healthStatus: 'valid',
//   healthStatusText: 'Gyldig t.o.m. 12.12.2021'
// });

const initialState: Person = {
  id: 1,
  firstName: 'Saul',
  lastName: 'Goodman'
};

export default function reducer(
  state = initialState,
  action: PersonActionTypes // Actions<typeof actions>
) {
  switch (action.type) {
    case FETCH_PERSONS_SUCCEEDED:
      console.log('action.payload: ' + JSON.stringify(action.payload, null, 2)); // eslint-disable-line
      return action.payload.person;
    default:
      return state;
  }
}
