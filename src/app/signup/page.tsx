"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isFilled =
      user.username.trim() && user.email.trim() && user.password.trim();
    setButtonDisabled(!isFilled);
  }, [user]);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      toast.success("Signup successful");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
      <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md text-white flex flex-col space-y-6">
        <h2 className="text-3xl font-semibold text-center">
          {loading ? "Creating Account..." : "Create an Account"}
        </h2>

        <div className="flex flex-col space-y-2">
          <label htmlFor="username" className="text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            className="bg-gray-900 text-white border border-gray-600 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={user.username}
            onChange={(e) =>
              setUser({ ...user, username: e.target.value })
            }
          />
        </div>

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
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
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
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            }
          />
        </div>

        <button
          onClick={onSignup}
          disabled={buttonDisabled}
          className={`w-full py-2 rounded text-sm font-semibold transition ${
            buttonDisabled
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500"
          }`}
        >
          {buttonDisabled ? "Complete the form" : "Sign Up"}
        </button>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-400 hover:underline transition"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
