"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Link from "next/link"

const signupPage = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const onSignup = async () => {
    }

    return (
        <div className="h-screen w-full md:w-1/2 bg-gray-800 flex flex-col items-center justify-center mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                placeholder="username"
                className="text-white border border-gray-300 p-2 rounded mb-4 w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                placeholder="email"
                className="text-white border border-gray-300 p-2 rounded mb-4 w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                placeholder="password"
                className="text-white border border-gray-300 p-2 rounded mb-4 w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

            <button
                onClick={onSignup}
                className="px-4 py-2 rounded text-lg border m-2 bg-blue-500 text-white hover:bg-blue-600 transition"
            >
                Signup
            </button>

            <Link className="text-sm mt-2 text-blue-400" href="/login">
                Already have an account? Login
            </Link>
        </div>
    )
}

export default signupPage
