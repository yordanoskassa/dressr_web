import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { api } from '@/lib/api';

interface User {
  email: string;
  name?: string;
  picture?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const token = api.getToken();
    if (token) {
      // Load user from localStorage
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch {
          setUser({ email: 'user@example.com' });
        }
      } else {
        setUser({ email: 'user@example.com' });
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const response = await api.login({ username: email, password });
    const userData = { email, ...response.user };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const signup = async (email: string, password: string) => {
    const response = await api.signup({ email, password });
    const userData = { email, ...response.user };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const loginWithGoogle = () => {
    window.location.href = api.getGoogleAuthUrl();
  };

  const logout = () => {
    api.logout();
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
