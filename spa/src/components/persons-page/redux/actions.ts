import axios from 'axios';
import {
  FETCH_PERSONS_REQUESTED,
  FETCH_PERSONS_SUCCEEDED,
  FETCH_PERSONS_FAILED,
  PersonActionTypes
} from './action-types';

const { BACKEND } = process.env;

const apiUrl = `${BACKEND}/persons/1`;

export function fetchPersonRequested() {
  return {
    type: FETCH_PERSONS_REQUESTED
  };
}
// TODO: add typings -> import { Person } from '../../../types';
export function fetchPersonSucceeded(person: any): PersonActionTypes {
  return {
    type: FETCH_PERSONS_SUCCEEDED,
    payload: {
      person
    }
  };
}

export function fetchPersonFailed(message: string) {
  return {
    type: FETCH_PERSONS_FAILED,
    payload: {
      message
    }
  };
}

export function fetchPerson() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch: any) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(fetchPersonRequested());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return axios
      .get(apiUrl)
      .then(
        response => response.data,
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => {
          console.warn('An error occurred.', error); // eslint-disable-line
          dispatch(fetchPersonFailed(error));
        }
      )
      .then(response =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(fetchPersonSucceeded(response))
      );
  };
}

export function fetchAllPersons() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch: any) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(fetchPersonRequested());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return axios
      .get(apiUrl)
      .then(
        response => response.data,
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => {
          console.warn('An error occurred.', error); // eslint-disable-line
          dispatch(fetchPersonFailed(error));
        }
      )
      .then(response =>
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(fetchPersonSucceeded(response))
      );
  };
}
