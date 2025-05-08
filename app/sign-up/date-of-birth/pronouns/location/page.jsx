"use client";

import React from "react";
import Link from "next/link";

export default function LocationPermission() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[300px] bg-white rounded-xl p-4 text-center shadow-xl">
        <h1 className="text-base font-semibold text-black mb-2">
          Allow <span className="font-bold">LocaLens</span> to access this
          device’s location
        </h1>

        <div className="flex justify-center my-4">
          <img
            src="/map-permission.png"
            alt="Map placeholder"
            className="w-24 h-24 rounded-full border border-gray-300"
          />
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <button
            className="border border-gray-300 py-2 rounded-md"
            onClick={() => (window.location.href = "/home")}
          >
            While using the app
          </button>
          <button className="border border-gray-300 py-2 rounded-md">
            Only this time
          </button>
          <button
            className="border border-gray-300 py-2 rounded-md text-red-500"
            onClick={() => (window.location.href = "/")}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  );
}
