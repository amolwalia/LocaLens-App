"use client";

export default function SavedLocations({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-44 right-4 z-[9999] w-16 h-16 rounded-full bg-[#202229] shadow-lg flex items-center justify-center"
      title="Recenter map"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-[#D76A17]"
        fill="#D76A17"
        viewBox="0 0 24 24"
      >
        <path d="M6 4c-1.1 0-2 .9-2 2v16l8-3.2 8 3.2V6c0-1.1-.9-2-2-2H6z" />
      </svg>
    </button>
  );
}
