"use client";

import React, { useRef } from "react";
import Map from "@/components/Map";
import NavBar from "@/components/NavBar";
import CenterMapButton from "@/components/CenterMapButton";
import SavedLocations from "@/components/SavedLocations";

export default function HomePage() {
  const mapRef = useRef(null);

  const handleCenter = () => {
    if (mapRef.current?.setCenterToUserLocation) {
      mapRef.current.setCenterToUserLocation();
    }
  };

  return (
    <div className="relative w-full h-screen">
      <Map ref={mapRef} />
      <SavedLocations onClick={handleCenter} />
      <CenterMapButton onClick={handleCenter} />
      <NavBar />
    </div>
  );
}
