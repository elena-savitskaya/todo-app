"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-full p-4 md:p-6 bg-gray-100 flex flex-col items-center justify-center gap-4 py-20 px-4">
      <h1 className="text-4xl font-bold text-gray-80">Welcome to Todo App</h1>
      <p className="text-lg text-gray-600 max-w-xl text-center">
        Keep track of your daily tasks easily. Create, manage and delete your
        todos with a clean interface.
      </p>
      <Link
        href="/todos"
        className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition"
      >
        Go to Todo List
      </Link>
    </div>
  );
}
