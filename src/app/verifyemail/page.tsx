"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.error(error.response?.data || error.message);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
      <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md text-white flex flex-col items-center space-y-6">
        <h1 className="text-3xl font-bold tracking-wide">Verify Your Email</h1>

        <div className="text-sm text-gray-300 text-center">
          {token ? (
            <p>
              Verifying with token:{" "}
              <span className="bg-gray-900 text-blue-400 border border-blue-600 px-3 py-1 rounded font-mono text-xs break-words">
                {token}
              </span>
            </p>
          ) : (
            <p className="text-red-400">No token found in URL.</p>
          )}
        </div>

        {verified && (
          <div className="w-full text-center space-y-2">
            <h2 className="text-green-400 text-lg font-semibold">
              Your email has been verified successfully.
            </h2>
            <Link
              href="/login"
              className="inline-block px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md text-sm font-medium text-white transition"
            >
              Go to Login
            </Link>
          </div>
        )}

        {error && (
          <div className="w-full text-center space-y-2">
            <h2 className="text-red-400 text-lg font-semibold">
              Verification failed. Invalid or expired token.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
