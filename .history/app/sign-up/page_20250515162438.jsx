"use client";

// File: app/sign-up/page.jsx (Next.js App Router)

import React, { useState } from "react";
import Link from "next/link";
import Input from "@/components/Input/"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex items-center justify-center min-h-screen bg-white font-sans">
      <div className="w-[375px] h-[667px] mx-auto flex flex-col justify-center p-6">
        <h1 className="text-2xl font-bold text-center text-black">Sign Up</h1>
        <p className="text-sm text-center text-gray-600 mt-1 mb-6">
          Hi! Let’s get you up and going
        </p>

        <label className="text-sm text-black mb-1" htmlFor="firstName">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          placeholder="First Name"
          className="w-full px-4 py-2 border border-gray-400 rounded-md mb-4"
        />

        <label className="text-sm text-black mb-1" htmlFor="lastName">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          placeholder="Last Name"
          className="w-full px-4 py-2 border border-gray-400 rounded-md mb-4"
        />




        <label className="text-sm text-black mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="abcd.12@gmail.com"
          className="w-full px-4 py-2 border border-gray-400 rounded-md mb-4"
        />

        <label className="text-sm text-black mb-1" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="@username"
          className="w-full px-4 py-2 border border-gray-400 rounded-md mb-4"
        />

        <label className="text-sm text-black mb-1" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="***********"
          className="w-full px-4 py-2 border border-gray-400 rounded-md mb-1"
        />
        <div className="text-right mb-6">
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-sm text-gray-600 underline"
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>

        <Link href="/sign-up/date-of-birth">
          <button className="w-full bg-[#D76A17] text-white py-3 rounded-md mb-6">
            Sign Up
          </button>
        </Link>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/sign-in" className="underline">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}
