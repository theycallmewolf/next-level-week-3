import React, { createContext, FormEvent } from 'react';
import api from "../services/api";

interface AuthContextData {
  login: boolean;
  // token: string;
  user: object;
  // signIn() : Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export function AuthProvider({children}: any) {

  async function signIn(event:FormEvent, username : string, password : string, remind : boolean) {
    event.preventDefault();

    const loginCredentials = {
      username : username,
      password : password,
      remind : remind
    }

    const response = await api.post('user', loginCredentials)
    console.log(response)
  }

  return (
    <AuthContext.Provider value={{login: false, user: {}}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;