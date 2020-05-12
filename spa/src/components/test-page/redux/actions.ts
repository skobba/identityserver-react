import axios from 'axios';
import { FETCH_MESSAGES_SUCCEEDED, MessageActionTypes } from './action-types';
import { Message } from '../../../types';

const { BACKEND } = process.env;

const apiUrl = `${BACKEND}/messages`;

export function fetchMessagesSucceeded(
  messages: Message[]
): MessageActionTypes {
  return {
    type: FETCH_MESSAGES_SUCCEEDED,
    payload: {
      messages
    }
  };
}

export const fetchAllMessages = () => {
  return (dispatch: any) => {
    return axios
      .get(apiUrl)
      .then(response => {
        dispatch(fetchMessagesSucceeded(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchAllMessages2 = () => async (dispatch: any) => {
  const response = await axios.get('http://localhost:3000/messages');
  dispatch({ type: FETCH_MESSAGES_SUCCEEDED, payload: response.data });
};
