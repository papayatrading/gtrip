"use client";

import React, { useState } from "react";
import { RegisterCredentials } from "@/types/auth";

interface BusinessRegisterFormProps {
  onSubmit: (credentials: RegisterCredentials) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const BusinessRegisterForm: React.FC<BusinessRegisterFormProps> = ({
  onSubmit,
  loading,
  error,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [taxId, setTaxId] = useState("");
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setPasswordError(null);
    await onSubmit({
      name,
      email,
      password,
      userType: "business",
      businessName,
      address,
      phoneNumber,
      taxId,
      isVerified: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h3 className="text-lg font-medium text-gray-900">
          Personal Information
        </h3>
      </div>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
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
      <div className="border-b border-gray-200 pb-4 mb-4 mt-8">
        <h3 className="text-lg font-medium text-gray-900">
          Business Information
        </h3>
      </div>
      <div>
        <label
          htmlFor="businessName"
          className="block text-sm font-medium text-gray-700"
        >
          Business Name
        </label>
        <input
          id="businessName"
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>{" "}
      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Business Address
        </label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Business Phone
        </label>
        <input
          id="phoneNumber"
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label
          htmlFor="taxId"
          className="block text-sm font-medium text-gray-700"
        >
          Tax ID
        </label>
        <input
          id="taxId"
          type="text"
          value={taxId}
          onChange={(e) => setTaxId(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="border-b border-gray-200 pb-4 mb-4 mt-8">
        <h3 className="text-lg font-medium text-gray-900">Account Security</h3>
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
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      {passwordError && (
        <div className="text-red-500 text-sm">{passwordError}</div>
      )}
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Create Business Account"}
        </button>
      </div>
    </form>
  );
};

export default BusinessRegisterForm;
