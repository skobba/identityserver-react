import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from './styles';
import Router from '../router';
import store from './redux/store';
import { AuthProvider } from '../../providers/auth';

export default function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <GlobalStyles />
        <Router />
      </Provider>
    </AuthProvider>
  );
}
