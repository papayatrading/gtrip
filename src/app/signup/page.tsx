"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import RegisterForm from "@/components/auth/RegisterForm";
import { useAuth } from "@/context/AuthContext";

export default function Signup() {
  const { register, loading, error, isAuthenticated } = useAuth();
  const router = useRouter();
  // Redirect if already logged in
  React.useEffect(() => {
    if (isAuthenticated) {
      // Redirect based on user type
      if (localStorage.getItem("userType") === "business") {
        router.push("/business-dashboard");
      } else {
        router.push("/dashboard");
      }
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {" "}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              href="/login"
              className="font-medium text-red-600 hover:text-red-500"
            >
              log in to your existing account
            </Link>
          </p>
          <p className="mt-2 text-center text-sm text-gray-600">
            Are you a business?{" "}
            <Link
              href="/business-signup"
              className="font-medium text-red-600 hover:text-red-500"
            >
              Create a business account
            </Link>
          </p>
        </div>
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <RegisterForm onSubmit={register} loading={loading} error={error} />
          <div className="mt-4 text-center">
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
