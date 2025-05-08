"use client";

// File: components/Map.jsx

import React, { useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";

export default function Map() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const userMarker = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const loadGoogleMaps = async () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCDZVgWayOKwBrm9K9kFgWEaEb3Yi0QxAQ&libraries=places`;
        script.async = true;
        script.onload = initMap;
        document.body.appendChild(script);
      } else {
        initMap();
      }
    };

    const initMap = () => {
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: 49.2827, lng: -123.1207 },
        zoom: 15,
      });

      const input = inputRef.current;
      const autocomplete = new window.google.maps.places.Autocomplete(input);
      autocomplete.bindTo("bounds", mapInstance.current);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.geometry.location) return;
        mapInstance.current.setCenter(place.geometry.location);
        mapInstance.current.setZoom(15);

        new window.google.maps.Marker({
          position: place.geometry.location,
          map: mapInstance.current,
          title: place.name,
        });
      });

      const posts = [
        {
          lat: 49.2809,
          lng: -123.1171,
          title: "Cool graffiti alley",
          image: "/sample1.jpg",
        },
        {
          lat: 49.2843,
          lng: -123.1124,
          title: "Sunset view point",
          image: "/sample2.jpg",
        },
        {
          lat: 49.2796,
          lng: -123.1235,
          title: "Local café corner",
          image: "/sample3.jpg",
        },
      ];

      const infoWindow = new window.google.maps.InfoWindow();

      posts.forEach((post) => {
        const marker = new window.google.maps.Marker({
          position: { lat: post.lat, lng: post.lng },
          map: mapInstance.current,
          icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
          },
        });

        marker.addListener("click", () => {
          const content = `
            <div style='max-width: 200px;'>
              <img src="${post.image}" alt="${post.title}" style="width: 100%; border-radius: 8px; margin-bottom: 6px;" />
              <div class='text-sm'>${post.title}</div>
            </div>`;
          infoWindow.setContent(content);
          infoWindow.open(mapInstance.current, marker);
        });
      });

      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            if (!userMarker.current) {
              mapInstance.current.setCenter(userLocation);
            }

            if (userMarker.current) {
              userMarker.current.setPosition(userLocation);
            } else {
              userMarker.current = new window.google.maps.Marker({
                position: userLocation,
                map: mapInstance.current,
                icon: {
                  path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                  scale: 5,
                  fillColor: "#1E90FF",
                  fillOpacity: 1,
                  strokeColor: "#ffffff",
                  strokeWeight: 2,
                  rotation: 0,
                  anchor: new window.google.maps.Point(0, 2),
                },
                title: "You are here",
              });
            }
          },
          (error) => {
            console.warn("Geolocation error:", error);
          },
          {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 5000,
          }
        );
      }
    };

    loadGoogleMaps();
  }, []);

  return (
    <div className="relative w-full h-screen">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search places..."
        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-80 px-4 py-2 border border-gray-300 rounded-md shadow-md bg-white"
      />
      <div ref={mapRef} className="w-full h-full" />
      <NavBar />
    </div>
  );
}
