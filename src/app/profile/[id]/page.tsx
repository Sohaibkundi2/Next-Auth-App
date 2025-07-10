const userProfile = ({params}:any) => {
    return (
        <div className="h-screen w-full md:w-1/2 bg-gray-800 flex flex-col items-center justify-center mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6 text-white">Profile</h2>
            <p className="text-white">You are viewing the profile of <span className="text-blue-400 border-2 p-2 rounded ml-2 ">{params.id}</span></p>
        </div>
    )
}

export default userProfile