import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

export default function Dashboard() {
  const { notes } = useContext(NoteContext);

  const totalNotes = notes.length;

  const completedNotes = notes.filter(
    (note) => note.completed
  ).length;

  const pendingNotes = notes.filter(
    (note) => !note.completed
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">

      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Dashboard
      </h1>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* TOTAL */}
        <div className="p-6 rounded-3xl text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-xl hover:scale-105 transition duration-300">
          <div className="text-5xl">📝</div>

          <h2 className="text-xl mt-5 font-semibold">
            Total Notes
          </h2>

          <p className="text-5xl font-bold mt-4">
            {totalNotes}
          </p>
        </div>

        {/* COMPLETED */}
        <div className="p-6 rounded-3xl text-white bg-gradient-to-r from-green-400 to-green-600 shadow-xl hover:scale-105 transition duration-300">
          <div className="text-5xl">✅</div>

          <h2 className="text-xl mt-5 font-semibold">
            Completed
          </h2>

          <p className="text-5xl font-bold mt-4">
            {completedNotes}
          </p>
        </div>

        {/* PENDING */}
        <div className="p-6 rounded-3xl text-white bg-gradient-to-r from-pink-500 to-red-500 shadow-xl hover:scale-105 transition duration-300">
          <div className="text-5xl">⏳</div>

          <h2 className="text-xl mt-5 font-semibold">
            Pending
          </h2>

          <p className="text-5xl font-bold mt-4">
            {pendingNotes}
          </p>
        </div>

      </div>
    </div>
  );
}