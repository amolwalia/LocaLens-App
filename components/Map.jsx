"use client";

import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

const Map = forwardRef((props, ref) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const userMarker = useRef(null);
  const currentPosition = useRef(null);
  const inputRef = useRef(null);
  const selectedMarker = useRef(null);

  const [searchActive, setSearchActive] = useState(false);

  useImperativeHandle(ref, () => ({
    setCenterToUserLocation: () => {
      if (mapInstance.current && currentPosition.current) {
        mapInstance.current.setCenter(currentPosition.current);
        mapInstance.current.setZoom(15);
      }
    },
  }));

  useEffect(() => {
    const loadGoogleMaps = async () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCDZVgWayOKwBrm9K9kFgWEaEb3Yi0QxAQ&libraries=places
`;
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
        mapTypeControl: false,
        disableDefaultUI: true,
      });

      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current
      );
      autocomplete.bindTo("bounds", mapInstance.current);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.geometry.location) return;

        // Remove existing marker if any
        if (selectedMarker.current) {
          selectedMarker.current.setMap(null);
        }

        // Add new marker
        selectedMarker.current = new window.google.maps.Marker({
          position: place.geometry.location,
          map: mapInstance.current,
          title: place.name,
        });

        mapInstance.current.setCenter(place.geometry.location);
        mapInstance.current.setZoom(15);
        setSearchActive(true);
      });

      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            currentPosition.current = userLocation;

            if (!userMarker.current) {
              userMarker.current = new window.google.maps.Marker({
                position: userLocation,
                map: mapInstance.current,
                title: "You are here",
                icon: {
                  path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                  scale: 5,
                  fillColor: "#1E90FF",
                  fillOpacity: 1,
                  strokeColor: "#ffffff",
                  strokeWeight: 2,
                  anchor: new window.google.maps.Point(0, 2),
                },
              });
              mapInstance.current.setCenter(userLocation);
            } else {
              userMarker.current.setPosition(userLocation);
            }
          },
          (error) => console.warn("Geolocation error:", error),
          { enableHighAccuracy: true }
        );
      }
    };

    loadGoogleMaps();
  }, []);

  const handleClearSearch = () => {
    inputRef.current.value = "";
    setSearchActive(false);
    if (selectedMarker.current) {
      selectedMarker.current.setMap(null);
      selectedMarker.current = null;
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Search Input */}
      <div className="fixed top-4 left-0 right-0 z-50 px-5">
        <div className="relative w-full">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search places..."
            className="w-full px-4 py-2 border-[2px] border-black rounded-md shadow bg-white pr-10"
          />
          {searchActive && (
            <button
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg"
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Google Map */}
      <div ref={mapRef} className="w-full h-full z-0" />
    </div>
  );
});

export default Map;
