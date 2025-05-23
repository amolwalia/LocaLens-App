// File: app/page.tsx (Splash Screen)

import React from "react";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";

export default function SplashScreen() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white font-sans">
      <div className="w-[375px] h-[667px] mx-auto flex flex-col justify-center items-center text-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={350}
          height={350}
          className="object-cover mb-8"
        />
        <div className="w-full aspect-video overflow-hidden rounded-md">
          <Link href="/sign-in">
            <button className="bg-[#D76A17] text-white py-3 rounded-md w-5/6 mb-4">
              Log In
            </button>
          </Link>

          <p className="text-sm text-black">or</p>

          <Link href="/sign-up">
            <button className="border text-black py-3 rounded-md w-5/6 mt-4">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
