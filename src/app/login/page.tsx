"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast"

const LoginPage = () => {
    const router = useRouter()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [loading, setLoading] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(() => {

        if(user.email.length >0 && user.password.length >0){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }

    }, [user])
    

    const onLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post('./api/users/login',user)

            console.log('login success', response.data)
            toast.success("Login success")
            router.push('/profile')
        } catch (error: any) {
            console.log(error?.message || "error while login")
            toast.error(error.response?.data?.message || "Login failed")
        } finally{
            setLoading(false)
        }
    }

    return (
        <div className="h-screen w-full md:w-1/2 bg-gray-800 flex flex-col items-center justify-center mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6 text-white">
                {loading ? "Logging in..." : "Login"}
            </h2>

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
                {buttonDisabled ? "Not Login":"Login"}
            </button>

            <Link className="text-sm mt-2 text-blue-400" href="/signup">
                Don't have account? Signup
            </Link>
        </div>
    )
}

export default LoginPage
