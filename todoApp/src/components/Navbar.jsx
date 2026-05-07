import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const linkStyle = (path) =>
    `relative px-3 py-2 transition duration-300 rounded-lg
     ${
       location.pathname === path
         ? "text-yellow-400"
         : "text-white"
     }
     hover:text-yellow-300`;

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white px-6 md:px-8 py-4 flex justify-between items-center shadow-lg">

        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-wide">
          NotesApp
        </h1>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-6 text-sm md:text-base">

          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>

          <Link to="/about" className={linkStyle("/about")}>
            About
          </Link>

          <Link
            to="/dashboard"
            className={linkStyle("/dashboard")}
          >
            Dashboard
          </Link>

          <Link to="/notes" className={linkStyle("/notes")}>
            Notes
          </Link>

          <Link
            to="/profile"
            className={linkStyle("/profile")}
          >
            Profile
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden bg-white text-black p-2 rounded-2xl border-4 border-green-200 shadow-lg transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-[80px] left-0 w-full bg-gray-900 text-white flex flex-col items-center gap-6 py-8 shadow-2xl transition-all duration-300 md:hidden z-40 ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-[120%] opacity-0"
        }`}
      >

        <Link
          to="/"
          className={linkStyle("/")}
          onClick={() => setOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={linkStyle("/about")}
          onClick={() => setOpen(false)}
        >
          About
        </Link>

        <Link
          to="/dashboard"
          className={linkStyle("/dashboard")}
          onClick={() => setOpen(false)}
        >
          Dashboard
        </Link>

        <Link
          to="/notes"
          className={linkStyle("/notes")}
          onClick={() => setOpen(false)}
        >
          Notes
        </Link>

        <Link
          to="/profile"
          className={linkStyle("/profile")}
          onClick={() => setOpen(false)}
        >
          Profile
        </Link>

      </div>

      {/* NAVBAR SPACE */}
      <div className="h-[90px]"></div>
    </>
  );
}