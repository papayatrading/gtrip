"use client";

import React, { useState } from "react";
import { LoginCredentials, UserType } from "@/types/auth";

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, loading, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<UserType>("regular");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({ email, password, userType });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex space-x-4 mb-4">
        <button
          type="button"
          onClick={() => setUserType("regular")}
          className={`flex-1 py-2 px-4 border ${
            userType === "regular"
              ? "border-red-600 bg-red-50 text-red-600"
              : "border-gray-300 text-gray-700"
          } rounded-md focus:outline-none`}
        >
          Regular User
        </button>
        <button
          type="button"
          onClick={() => setUserType("business")}
          className={`flex-1 py-2 px-4 border ${
            userType === "business"
              ? "border-red-600 bg-red-50 text-red-600"
              : "border-gray-300 text-gray-700"
          } rounded-md focus:outline-none`}
        >
          Business User
        </button>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Log in"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
