import { useContext, createContext } from 'react';

import P from 'prop-types';

const AuthContext = createContext();

export function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthValue() {
  return useContext(AuthContext);
}

AuthProvider.propTypes = {
  children: P.element.isRequired,
  value: P.instanceOf(Object).isRequired
}