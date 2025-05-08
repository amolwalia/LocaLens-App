// File: app/page.tsx (Splash Screen)

import React from "react";
import Link from "next/link";
import "./globals.css";

export default function SplashScreen() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white font-sans">
      <div className="w-[375px] h-[667px] mx-auto flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-10">LocaLens</h1>

        <div className="flex flex-col gap-2 w-[80%]">
          <Link href="/sign-up">
            <button className="bg-[#D76A17] text-white py-3 rounded-md w-full">
              Sign Up
            </button>
          </Link>

          <p className="text-sm text-black">or</p>

          <Link href="/sign-in">
            <button className="bg-[#D76A17] text-white py-3 rounded-md w-full">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
