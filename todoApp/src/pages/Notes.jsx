import { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";

export default function Notes() {
  const { notes, dispatch } = useContext(NoteContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);

  const addNote = () => {
    if (!title || !content) return;

    if (editId) {
      dispatch({
        type: "UPDATE_NOTE",
        payload: {
          id: editId,
          title,
          content,
        },
      });

      setEditId(null);
    } else {
      dispatch({
        type: "ADD_NOTE",
        payload: {
          id: Date.now(),
          title,
          content,
          completed: false,
        },
      });
    }

    setTitle("");
    setContent("");
  };

  const deleteNote = (id) => {
    dispatch({
      type: "DELETE_NOTE",
      payload: id,
    });
  };

  const editNote = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditId(note.id);
  };

  const toggleComplete = (id) => {
    dispatch({
      type: "TOGGLE_NOTE",
      payload: id,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* FORM CARD */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-6">

        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Notes App
        </h1>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Enter title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Write your note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border p-4 rounded-xl outline-none h-32 resize-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={addNote}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl font-bold hover:opacity-90 transition"
          >
            {editId ? "Update Note" : "Add Note"}
          </button>

        </div>
      </div>

      {/* NOTES CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white rounded-3xl shadow-lg p-5 hover:shadow-2xl transition flex flex-col justify-between min-h-[320px]"
          >

            {/* TOP */}
            <div>

              <div className="flex justify-between items-start gap-4">

                <h2 className="text-2xl font-bold text-gray-800 break-words">
                  {note.title}
                </h2>

                <button
                  onClick={() => toggleComplete(note.id)}
                  className={`px-3 py-1 rounded-full text-sm font-bold text-white shrink-0 ${
                    note.completed
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {note.completed ? "Completed" : "Pending"}
                </button>

              </div>

              {/* CONTENT */}
              <div className="mt-4 h-40 overflow-y-auto break-words">

                <p className="text-gray-600 leading-relaxed break-words">
                  {note.content}
                </p>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-6">

              <button
                onClick={() => editNote(note)}
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-xl font-semibold transition"
              >
                Update
              </button>

              <button
                onClick={() => deleteNote(note.id)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}