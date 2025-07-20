"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  User,
  AuthState,
  LoginCredentials,
  RegisterCredentials,
  AuthResponse,
} from "@/types/auth";

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
}

const defaultAuthState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: true,
  error: null,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>(defaultAuthState);
  useEffect(() => {
    // Check local storage for existing token on initial load
    const loadAuthState = () => {
      try {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        const userType = localStorage.getItem("userType");

        if (token && user) {
          const userData = JSON.parse(user);
          // Ensure the user object has the type property
          if (!userData.type && userType) {
            userData.type = userType;
          }

          setAuthState({
            user: userData,
            token,
            isAuthenticated: true,
            loading: false,
            error: null,
          });
        } else {
          setAuthState({
            ...defaultAuthState,
            loading: false,
          });
        }
      } catch (error) {
        console.error("Failed to load auth state:", error);
        setAuthState({
          ...defaultAuthState,
          loading: false,
        });
      }
    };

    loadAuthState();
  }, []);
  const login = async (credentials: LoginCredentials) => {
    setAuthState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      // Select the appropriate login endpoint based on user type
      const endpoint =
        credentials.userType === "business"
          ? "http://localhost:4005/auth/business/login"
          : "http://localhost:4005/auth/login";

      // Remove userType from the payload as it's not expected by the API
      const { userType, ...loginPayload } = credentials;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginPayload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data: AuthResponse = await response.json();

      // Save to localStorage
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem(
        "userType",
        data.user.type || credentials.userType || "regular"
      );

      setAuthState({
        user: data.user,
        token: data.access_token,
        isAuthenticated: true,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("Login error:", error);
      setAuthState((prev) => ({
        ...prev,
        loading: false,
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      }));
    }
  };
  const register = async (credentials: RegisterCredentials) => {
    setAuthState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      // Select the appropriate registration endpoint based on user type
      const endpoint =
        credentials.userType === "business"
          ? "http://localhost:4005/auth/business/register"
          : "http://localhost:4005/auth/register";

      // Remove userType from the payload as it's not expected by the API
      // and rename fields to match API expectations
      const { userType, ...apiCredentials } = credentials;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiCredentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const data: AuthResponse = await response.json();

      // Save to localStorage
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem(
        "userType",
        data.user.type || credentials.userType || "regular"
      );

      setAuthState({
        user: data.user,
        token: data.access_token,
        isAuthenticated: true,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("Registration error:", error);
      setAuthState((prev) => ({
        ...prev,
        loading: false,
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      }));
    }
  };
  const logout = () => {
    // Remove from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userType");

    // Reset state
    setAuthState({
      ...defaultAuthState,
      loading: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
