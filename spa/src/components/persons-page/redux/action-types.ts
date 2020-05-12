import { PersonsState } from '../../../types';

export const FETCH_PERSONS_REQUESTED = 'FETCH_PERSONS_REQUESTED' as const;
export const FETCH_PERSONS_SUCCEEDED = 'FETCH_PERSONS_SUCCEEDED' as const;
export const FETCH_PERSONS_FAILED = 'FETCH_PERSONS_FAILED' as const;

interface FetchPersonsSucceeded {
  type: typeof FETCH_PERSONS_SUCCEEDED;
  payload: PersonsState;
}

export type PersonActionTypes = FetchPersonsSucceeded; // | FetchMessageRequested;
