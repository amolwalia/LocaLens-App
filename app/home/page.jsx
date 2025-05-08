"use client";

// File: app/home/page.jsx

import React from "react";
import dynamic from "next/dynamic";
import NavBar from "@/components/NavBar";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function HomePage() {
  return (
    <main className="relative w-full h-screen">
      <Map />
      <NavBar />
    </main>
  );
}
