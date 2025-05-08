"use client";

import React from "react";
import Link from "next/link";

export default function DateOfBirthPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white font-sans">
      <div className="w-[375px] h-[667px] mx-auto flex flex-col justify-center p-6 text-center">
        <h1 className="text-xl font-semibold text-black">
          When is your birthday?
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          This information will not be displayed
        </p>

        <input
          type="text"
          placeholder="DD/MM/YYYY"
          className="w-full px-4 py-2 border border-gray-400 rounded-md text-center mb-10"
        />

        <Link href="/sign-up/date-of-birth/pronouns">
          <button className="w-full bg-[#D76A17] text-white py-3 rounded-md mb-4">
            Next
          </button>
        </Link>

        <Link href="#" className="text-sm text-black">
          Back
        </Link>
      </div>
    </main>
  );
}
