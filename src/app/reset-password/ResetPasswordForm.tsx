"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      setMessage("Invalid or expired reset token.");
    }
  }, [token]);

  const handleResetPassword = async () => {
    if (!token) return;

    try {
      setLoading(true);
      const res = await fetch("/api/users/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword, token }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setMessage(" Password has been reset successfully.");
      setNewPassword("");

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: any) {
      setMessage(` ${err.message}`);
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
        className="bg-blue-600 text-white px-4 py-2 rounded w-full disabled:opacity-50"
      >
        {loading ? "Resetting..." : "Reset Password"}
      </button>

      {message && (
        <p className="mt-4 text-sm text-center text-gray-500">{message}</p>
      )}
    </div>
  );
}
