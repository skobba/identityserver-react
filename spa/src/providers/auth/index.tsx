import React, {
  ComponentType,
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';
import authService from '../../services/auth';
import { Auth } from '../../lib/auth';
import { User } from '../../types';

const authContext = createContext<any>(null);

interface AuthProviderProps {}

interface State {
  service: Auth;
  instantiated: boolean;
}

export const AuthProvider = (({ children }: any) => {
  const initialState = {
    service: authService,
    user: null,
    instantiated: false
  };

  const [state] = useState(initialState);

  const { service } = state;

  service.isAuthenticated().then(isAuth => {
    if (isAuth) {
      console.log('*** isAuthenticated ****') // eslint-disable-line
    } else {
      console.log('*** NOT isAuthenticated ****') // eslint-disable-line
      service.login();
    }
  });

  return (
    <authContext.Provider value={{ service }}>{children}</authContext.Provider>
  );
}) as React.FC<AuthProviderProps>;

export const useAuth = () => {
  return useContext(authContext);
};
