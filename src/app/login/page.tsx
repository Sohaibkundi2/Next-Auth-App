"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Link from "next/link"

const LoginPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const onLogin = async () => {
        // Your login logic here
    }

    return (
        <div className="h-screen w-full md:w-1/2 bg-gray-800 flex flex-col items-center justify-center mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6 text-white">Login</h2>

            <label htmlFor="email" className="text-white">Email:</label>
            <input
                type="email"
                id="email"
                placeholder="email"
                className="border border-gray-300 text-white p-2 rounded mb-4 w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />

            <label htmlFor="password" className="text-white">Password:</label>
            <input
                type="password"
                id="password"
                placeholder="password"
                className="border border-gray-300 text-white p-2 rounded mb-4 w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

            <button
                onClick={onLogin}
                className="px-4 py-2 rounded text-lg border m-2 bg-blue-500 text-white hover:bg-blue-600 transition"
            >
                Login
            </button>

            <Link className="text-sm mt-2 text-blue-400" href="/signup">
                Don't have account? Signup
            </Link>
        </div>
    )
}

export default LoginPage
