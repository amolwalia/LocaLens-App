"use client";

// File: app/sign-up/date-of-birth/pronouns/page.jsx (Next.js App Router)

import React from "react";
import Link from "next/link";

export default function PronounsPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white font-sans">
      <div className="w-[375px] h-[667px] mx-auto flex flex-col justify-center p-6 text-center">
        <h1 className="text-xl font-semibold text-black">
          What are your pronouns?
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          You can choose to display this information in the Settings panel
        </p>

        <input
          type="text"
          placeholder="He/Him"
          className="w-full px-4 py-2 border border-gray-400 rounded-md text-center mb-10"
        />

        <Link href="/sign-up/date-of-birth/pronouns/location">
          <button className="w-full bg-[#D76A17] text-white py-3 rounded-md mb-4">
            Next
          </button>
        </Link>

        <Link href="#" className="text-sm text-black">
          Skip
        </Link>
      </div>
    </main>
  );
}
