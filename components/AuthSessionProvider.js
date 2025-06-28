'use client';

// Simple mock session provider since we removed NextAuth
import React, { createContext, useContext } from 'react';

const AuthContext = createContext({});

export const useSession = () => {
  return { data: null, status: 'unauthenticated' };
};

export default function AuthSessionProvider({ children }) {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
}