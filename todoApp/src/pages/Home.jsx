import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center overflow-hidden ">

      {/* Shapes */}
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full top-10 left-10 opacity-30 blur-3xl"></div>
      <div className="absolute w-72 h-72 bg-yellow-300 rounded-full bottom-10 right-10 opacity-30 blur-3xl"></div>

      {/* Content */}
      <div className="text-center z-10">
        <h1 className="text-5xl font-bold mb-4">
          Notes App
        </h1>

        <p className="mb-6 text-lg">
          Save your ideas, manage notes, and stay organized
        </p>

        <Link
          to="/notes"
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Go to Notes
        </Link>
      </div>
    </div>
  );
}