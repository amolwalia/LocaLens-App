"use client";

// File: components/NavBar.jsx

import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around items-center h-14 z-50 text-sm text-gray-700">
      <Link href="/home" className="flex flex-col items-center">
        <span className="text-lg">🏠</span>
        Home
      </Link>
      <Link href="/post" className="flex flex-col items-center">
        <span className="text-lg">📸</span>
        Post
      </Link>
      <Link href="/profile" className="flex flex-col items-center">
        <span className="text-lg">👤</span>
        Profile
      </Link>
    </nav>
  );
}
