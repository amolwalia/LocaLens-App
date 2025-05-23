"use client";

import React from "react";
import Link from "next/link";

export default function MIA() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">M.I.A.</h1>

      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3dzOXNhMXByeHVvMHk3YzZyeWd0MnZrM2s1dGVyejcxeTRvM2U4aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UqjFFGXaamm8ddfh5Y/giphy.gif"
        alt="MIA gif"
        className="w-96 h-auto rounded-lg shadow-md"
      />
      <p className="text-lg text-gray-600 mt-4">
        "M.I.A." is a term used to describe someone who is missing in action. It
        can refer to a person who is unaccounted for, often in a military
        context, or someone who has disappeared from a situation or location.
      </p>
      <Link
        href="/community"
        className="text-xl border text-black py-3 rounded-md w-5/6 mt-4"
      >
        Let's Go Back 😪
      </Link>
    </div>
  );
}
