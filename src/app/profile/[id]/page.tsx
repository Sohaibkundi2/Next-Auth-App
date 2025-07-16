const UserProfile = ({ params }: any) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
      <div className="bg-gray-800 rounded-2xl shadow-lg p-8 w-full max-w-md text-white flex flex-col items-center space-y-6">
        <h2 className="text-3xl font-semibold tracking-wide">Public Profile</h2>

        <p className="text-sm text-gray-300 text-center">
          You're viewing the profile of:
        </p>

        <span className="text-blue-400 bg-gray-900 border border-blue-600 px-4 py-2 rounded-xl font-mono text-sm tracking-wide shadow-inner">
          {params.id}
        </span>
      </div>
    </div>
  )
}

export default UserProfile
