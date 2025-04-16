"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">Todo App</div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link href="/todos" className="text-gray-700 hover:text-blue-500">
            Todo List
          </Link>
        </div>
      </div>
    </nav>
  );
};
