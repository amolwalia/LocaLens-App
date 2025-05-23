"use client";

export default function CenterMapButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-4 z-[9999] w-16 h-16 rounded-full bg-[#202229] shadow-lg flex items-center justify-center"
      title="Recenter map"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#D76A17"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M12 2L20 20L12 17L4 20L12 2Z" />
      </svg>
    </button>
  );
}
