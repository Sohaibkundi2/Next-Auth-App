"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const ProfilePage = () => {

    const router = useRouter()
    const logout= async()=>{
        try {
            await axios.get('/api/users/logout')
            toast.success("logout successfully")
            router.push('/login')
        } catch (error:any) {
            toast.error(error.message || "failed to logout")
        }
    }
    return (
        <div className="h-screen w-full md:w-1/2 bg-gray-800 flex flex-col items-center justify-center mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6 text-white">Profile</h2>
            <p className="text-white">This is your profile page. </p>
            <button onClick={logout} className="mt-5 px-4 py-2 rounded-4xl outline border-2 border-cyan-950 bg-red-600 text-blue-300 shadow-2xl hover:opacity-70 cursor-pointer">Logout</button>
        </div>
    )
}

export default ProfilePage