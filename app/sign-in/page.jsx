import React from "react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white font-sans">
      <div className="w-[375px] h-[667px] mx-auto flex flex-col justify-center p-6">
        <h1 className="text-2xl font-bold text-center text-black">Sign In</h1>
        <p className="text-sm text-center text-gray-600 mt-1 mb-6">
          Hi! Welcome Back, you’ve been missed
        </p>

        <label className="text-sm text-black mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="abcd.12@gmail.com"
          className="w-full px-4 py-2 border border-gray-400 rounded-md mb-4"
        />

        <label className="text-sm text-black mb-1" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="***********"
          className="w-full px-4 py-2 border border-gray-400 rounded-md mb-2"
        />

        <div className="text-right mb-6">
          <Link href="#" className="text-sm text-gray-600 underline">
            Forgot Password?
          </Link>
        </div>

        <Link href="/home">
          <button className="bg-[#D76A17] text-white py-3 rounded-md w-full mb-4">
            Log In
          </button>
        </Link>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <div className="flex-grow h-px bg-gray-300" />
          <span>or sign in with</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
            <span className="text-xl"></span>
          </button>
          <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
            <img src="/googi.png" alt="Google" />
          </button>
          <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
            <img src="/fb.png" alt="Facebook" />
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link href="/sign-up" className="underline">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
