"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleResetPassword = async () => {
    if (!token) {
      setMessage("Invalid or missing token.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/api/users/reset-password", {
        token,
        newPassword,
      });

      setMessage(res.data.message);
      toast.success("Password reset successful!");
    } catch (error: any) {
      setMessage(
        error.response?.data?.message || "Something went wrong. Try again."
      );
      toast.error(error.response?.data?.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Reset Your Password</h2>

      <input
        type="password"
        placeholder="Enter new password"
        className="w-full px-3 py-2 border mb-3 rounded"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <button
        onClick={handleResetPassword}
        disabled={loading || newPassword.length < 6}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        {loading ? "Resetting..." : "Reset Password"}
      </button>

      {message && (
        <p className="mt-4 text-sm text-center text-gray-700">{message}</p>
      )}
    </div>
  );
}
