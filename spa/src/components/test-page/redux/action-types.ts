import { TestState } from '../../../types';

export const FETCH_MESSAGES_REQUESTED = 'FETCH_MESSAGES_REQUESTED' as const;
export const FETCH_MESSAGES_SUCCEEDED = 'FETCH_MESSAGES_SUCCEEDED' as const;
export const FETCH_MESSAGES_FAILED = 'FETCH_MESSAGES_FAILED' as const;

interface FetchMessageSucceeded {
  type: typeof FETCH_MESSAGES_SUCCEEDED;
  payload: TestState;
}

export type MessageActionTypes = FetchMessageSucceeded; // | FetchMessageRequested;
