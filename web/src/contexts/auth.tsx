import React, { createContext } from 'react';

interface AuthContextData {
  login: boolean,
  token: string,
  user: object
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
// <> tipagem

export const AuthProvider: React.FC = ({children}) => (
  <AuthContext.Provider value={{login: false, token: '', user: {}}}>
    {children}
  </AuthContext.Provider>
);

export default AuthContext;