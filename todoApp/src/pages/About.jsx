import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-6">

      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 max-w-lg text-center border border-white/30">

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          About This App
        </h1>

        <p className="text-gray-600 leading-relaxed">
          This Notes App was designed and developed by a young developer named
          <span className="font-semibold text-gray-800"> Amiisha Dhool</span>.
          The idea behind this project is to make note management simple, fast,
          and user-friendly for everyone.
        </p>

        <div className="mt-5 text-sm text-gray-500 space-y-1">
          <p>⚡ Simple & Fast Experience</p>
          <p>📝 Easy Note Management</p>
          <p>🎨 Clean and Modern UI Design</p>
        </div>

        <Link
          to="/"
          className="inline-block mt-6 px-4 py-1.5 text-sm bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
        >
          ← Home
        </Link>

      </div>
    </div>
  );
}