"use client";
import react, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [butttonDisabled, setButttonDisabled] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    if(email?.trim().length >0){
        setButttonDisabled(false)
    }else{
        setButttonDisabled(true)
    }
  }, [email])
  

  const handleSubmit = async () => {
    try {
        if(butttonDisabled){
            toast.error("email is empty")
            return
        }
        setLoading(true)
      await axios.post("/api/users/forgot-password", { email });
      toast.success("Password reset email sent");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to send email");
    }finally{
        setLoading(false)
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-800">
      <h2 className="text-xl font-semibold text-white mb-4">{loading ? "Verifing..." : "Forgot Password"}</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="border  text-white p-2 rounded w-4/5 md:w-1/2 mb-4 bg-gray-900 active: border-blue-600 outline"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
        <button
        onClick={handleSubmit}
        className="mt-2"
        >
        {butttonDisabled ? (
            <span className="bg-gray-500 text-white px-4 py-2 rounded hover:border cursor-not-allowed">Enter Your Email</span>
        ) : (
            <span className="bg-blue-500 text-white px-4 py-2 rounded hover:border cursor-pointer">Send Reset Link</span>
        )}
        </button>
    </div>
  );
}
