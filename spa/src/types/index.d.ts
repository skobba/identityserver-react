export interface Configuration {
  HOSTNAME: string;
  BACKEND: string;
  STS_DOMAIN: string;
  CLIENT_ID: string;
}
export interface User {
  fullName: string;
}
export interface Person {
  id: number;
  firstName: string;
  lastName: string;
}

export interface Persons {
  messages: Person[];
}

export interface PersonsState {
  person: Person;
}

export interface Message {
  text: string;
}

export interface TestState {
  messages: Message[];
}

export * from './common';
