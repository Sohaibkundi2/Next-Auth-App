import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start px-4 py-12 bg-gradient-to-br from-gray-900 to-black">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
        Welcome to the Home Page
      </h1>

      <div className="text-gray-400 text-center max-w-xl">
        <p>This is the starting point of your application.</p>
        <p className="mt-2">i will try to add more sections, so stay tuned.....</p>
        <h3 className="mt-8 px-2 py-3 bg-fuchsia-400 text-black font-bold rounded-lg ">Thanks for visiting the site.</h3>
      </div>
    </main>
  );
}
