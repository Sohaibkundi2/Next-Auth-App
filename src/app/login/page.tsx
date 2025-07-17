"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const isFilled = user.email.trim() && user.password.trim();
    setButtonDisabled(!isFilled);
  }, [user]);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      toast.success("Login successful");
      router.push("/profile");
    } catch (error: any) {
      console.error("Login error:", error.message);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
      <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md text-white flex flex-col space-y-6">
        <h2 className="text-3xl font-semibold text-center">
          {loading ? "Logging in..." : "Login to Your Account"}
        </h2>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="bg-gray-900 text-white border border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className="bg-gray-900 text-white border border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <Link href="/forgot-password" className="text-sm mt-2 text-blue-400">
  Forgot password?
</Link>


        <button
          onClick={onLogin}
          disabled={buttonDisabled}
          className={`w-full py-2 rounded text-sm font-semibold transition ${
            buttonDisabled
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500"
          }`}
        >
          {buttonDisabled ? "Enter credentials" : "Login"}
        </button>

        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-400 hover:underline transition"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
