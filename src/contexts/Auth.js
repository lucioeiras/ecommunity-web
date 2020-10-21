import React, { createContext } from 'react';

import useAuth from '../hooks/useAuth';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const {
    loading, 
    authenticated, 
    handleSignInWithGoogle, 
    handleSignInWithTwitter, 
  } = useAuth();

  return (
    <AuthContext.Provider 
      value={{ 
        loading, 
        authenticated, 
        handleSignInWithGoogle, 
        handleSignInWithTwitter, 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };