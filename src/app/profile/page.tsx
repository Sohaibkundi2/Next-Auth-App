"use client"

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

const ProfilePage = () => {
  const [data, setData] = useState<string | null>(null)
  const router = useRouter()

  const getUserData = async () => {
    try {
      const res = await axios.get('/api/users/me')
      setData(res.data.data._id)
    } catch (error: any) {
      toast.error(error.message || "Failed to fetch user data")
    }
  }

  const logout = async () => {
    try {
      await axios.get('/api/users/logout')
      toast.success("Logged out successfully")
      router.push('/login')
    } catch (error: any) {
      toast.error(error.message || "Failed to logout")
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
      <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md text-white flex flex-col items-center space-y-6">
        <h2 className="text-3xl font-semibold tracking-wide">Your Profile</h2>

        <div className="w-full text-center">
          {data ? (
            <Link
              href={`/profile/${data}`}
              className="inline-block px-4 py-2 bg-purple-700 rounded-xl text-white text-sm font-medium hover:bg-purple-600 transition"
            >
              View Profile: {data}
            </Link>
          ) : (
            <p className="text-sm text-gray-300 italic">No data loaded</p>
          )}
        </div>

        <p className="text-sm text-gray-400 text-center">Manage your session and view your details.</p>

        <div className="flex gap-4">
          <button
            onClick={getUserData}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 transition rounded-xl text-sm font-medium shadow-md"
          >
            Load Profile Data
          </button>
          <Link className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 transition rounded-xl text-sm font-medium shadow-md" href={'/'}>Home</Link>

          <button
            onClick={logout}
            className="px-5 py-2 bg-red-600 hover:bg-red-500 transition rounded-xl text-sm font-medium shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
