
import { Bell } from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow p-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back, Student!</h1>
          <p className="text-gray-500 text-sm">
            Here's what's happening with your courses today.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="text-gray-500" />
          <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold">
            S
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <StatCard title="Average Grade" value="88%" icon="📊" />
        <StatCard title="Courses" value="3" icon="📚" />
        <StatCard title="Study Hours" value="45h" icon="⏰" />
        <StatCard title="Assignments" value="12" icon="✍️" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Course Progress */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold mb-4">Course Progress</h2>
          <Course
            title="React Fundamentals"
            progress={75}
            next="Components & Props"
            teacher="Sarah Wilson"
          />
          <Course
            title="JavaScript Advanced"
            progress={45}
            next="Async/Await"
            teacher="Mike Johnson"
          />
          <Course
            title="UI/UX Design"
            progress={90}
            next="Color Theory"
            teacher="Emily Chen"
          />
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Assignments */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-semibold mb-4">Upcoming Assignments</h2>
            <Assignment
              title="Build a Todo App"
              course="React Fundamentals"
              status="pending"
              date="2024-03-20"
            />
            <Assignment
              title="API Integration"
              course="JavaScript Advanced"
              status="completed"
              date="2024-03-18"
            />
            <Assignment
              title="Design System"
              course="UI/UX Design"
              status="progress"
              date="2024-03-25"
            />
          </div>

          {/* Announcements */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-semibold mb-4">Announcements</h2>
            <div className="border-l-2 border-blue-500 pl-3 mb-4">
              <p className="font-medium">New Course Available</p>
              <p className="text-sm text-gray-500">
                Check out our new TypeScript course!
              </p>
              <span className="text-xs text-gray-400">2 hours ago</span>
            </div>
            <div className="border-l-2 border-blue-500 pl-3">
              <p className="font-medium">Maintenance Notice</p>
              <p className="text-sm text-gray-500">
                Platform updates scheduled for tonight
              </p>
              <span className="text-xs text-gray-400">5 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-xl font-semibold">{value}</h3>
      </div>
      <div className="text-2xl">{icon}</div>
    </div>
  );
}

function Course({ title, progress, next, teacher }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between text-sm mb-1">
        <span>{title}</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full mb-2">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>Next: {next}</span>
        <span>{teacher}</span>
      </div>
    </div>
  );
}

function Assignment({ title, course, status, date }) {
  const statusStyles = {
    pending: "bg-red-100 text-red-500",
    completed: "bg-green-100 text-green-500",
    progress: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-xs text-gray-500">{course}</p>
      </div>
      <div className="text-right">
        <span
          className={`text-xs px-2 py-1 rounded-full ${statusStyles[status]}`}
        >
          {status}
        </span>
        <p className="text-xs text-gray-400 mt-1">Due {date}</p>
      </div>
    </div>
  );
}
