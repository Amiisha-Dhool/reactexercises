import { NotebookPen } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">

      <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl text-center w-full max-w-sm border border-white/30">

        {/* Notebook Icon */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white shadow-lg p-3 rounded-full">
          <NotebookPen size={28} className="text-purple-600" />
        </div>

        {/* Profile Image (Unsplash notebook + pen) */}
        <img
          src="https://media.istockphoto.com/id/1226060530/photo/opened-book-lays-in-the-beautiful-meadow-of-blooming-wild-strawberries.webp?s=1024x1024&w=is&k=20&c=joELVULzoLIMBUwwo1X6k2gInPUNnFnIEZp4b4oEtPI="
          alt="amiishaDhool"
          className="rounded-full mx-auto mt-6 mb-4 border-4 border-purple-200"
        />

        <h2 className="text-2xl font-bold text-gray-800">AmiishaDhool</h2>

        <p className="text-gray-500 text-sm mt-1">amiishaDhool@email.com</p>

        <p className="text-gray-600 text-sm mt-4">
          Personal notebook profile where your notes and ideas live safely.
        </p>

      </div>
    </div>
  );
}