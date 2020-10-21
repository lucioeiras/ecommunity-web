import React, { createContext } from 'react';

import useAuth from '../hooks/useAuth';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const {
    loading, 
    authenticated, 
    handleSignIn, 
  } = useAuth();

  return (
    <AuthContext.Provider 
      value={{ 
        loading, 
        authenticated, 
        handleSignIn,  
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };