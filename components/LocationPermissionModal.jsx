"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function LocationPermissionModal({ isOpen, onClose }) {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-80 max-w-full shadow-lg text-center">
        <h2 className="text-lg font-bold mb-4">Allow Location Access?</h2>
        <p className="text-sm text-gray-600 mb-6">
          Let Localens access your location while using the app to recommend
          photo-worthy spots nearby.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => router.push("/home")}
            className="bg-[#202229] text-white py-2 rounded-md"
          >
            While using the app
          </button>
          <button
            onClick={() => router.push("/")}
            className="text-[#202229] text-sm underline"
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  );
}
