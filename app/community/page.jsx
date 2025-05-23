"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";

const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
];

export default function CommunityPage() {
  return (
    <div className="relative min-h-screen bg-white pb-20">
      {/* Sticky Header (Title + Search) */}
      <div className="sticky top-0 z-50 bg-white pb-2">
        {/* Title Bar */}
        <div className="flex items-center px-4 py-3 bg-[#202229] text-white">
          <button className="mr-2 text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.8082 7.19167C21.2545 7.63798 21.2545 8.3616 20.8082 8.80791L13.6163 15.9998L20.8082 23.1917C21.2545 23.638 21.2545 24.3616 20.8082 24.8079C20.3619 25.2542 19.6383 25.2542 19.192 24.8079L11.394 17.0099C10.8361 16.452 10.8361 15.5475 11.394 14.9896L19.192 7.19167C19.6383 6.74536 20.3619 6.74536 20.8082 7.19167Z"
                fill="#F1F1F1"
              />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-center">Media</h1>
        </div>

        {/* Search + Filter */}
        <div className="flex items-center gap-2 px-4 pt-3">
          <div className="flex flex-1 items-center px-3 py-2 border border-gray-300 rounded-md bg-white shadow-sm">
            <span className="text-lg mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6198 5C8.19799 5 5.4241 7.68629 5.4241 11C5.4241 14.3137 8.19799 17 11.6198 17C15.0415 17 17.8154 14.3137 17.8154 11C17.8154 7.68629 15.0415 5 11.6198 5ZM3.35889 11C3.35889 6.58172 7.0574 3 11.6198 3C16.1821 3 19.8806 6.58172 19.8806 11C19.8806 12.8487 19.2331 14.551 18.1457 15.9056L21.6434 19.2929C22.0467 19.6834 22.0467 20.3166 21.6434 20.7071C21.2401 21.0976 20.5863 21.0976 20.1831 20.7071L16.6854 17.3199C15.2865 18.3729 13.5288 19 11.6198 19C7.0574 19 3.35889 15.4183 3.35889 11Z"
                  fill="#202229"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full focus:outline-none text-sm"
            />
          </div>
          <button className="text-2xl px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="21"
              viewBox="0 0 31 21"
              fill="none"
            >
              <g clipPath="url(#clip0_259_2772)">
                <path
                  d="M12.0556 19.25C12.0556 20.2165 12.8391 21 13.8056 21H17.1944C18.1609 21 18.9444 20.2165 18.9444 19.25C18.9444 18.2835 18.1609 17.5 17.1944 17.5H13.8056C12.8391 17.5 12.0556 18.2835 12.0556 19.25ZM1.75 0C0.783502 0 0 0.783502 0 1.75C0 2.7165 0.783502 3.5 1.75 3.5H29.25C30.2165 3.5 31 2.7165 31 1.75C31 0.783502 30.2165 0 29.25 0H1.75ZM5.16667 10.5C5.16667 11.4665 5.95017 12.25 6.91667 12.25H24.0833C25.0498 12.25 25.8333 11.4665 25.8333 10.5C25.8333 9.5335 25.0498 8.75 24.0833 8.75H6.91667C5.95017 8.75 5.16667 9.5335 5.16667 10.5Z"
                  fill="#202229"
                />
              </g>
              <defs>
                <clipPath id="clip0_259_2772">
                  <rect width="31" height="21" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>

      {/* Manual Staggered Image Layout */}
      <div className="px-4 space-y-2 pb-24">
        {/* 1 - full width */}
        <div className="w-full aspect-video overflow-hidden rounded-md">
          <Image
            src={images[0]}
            alt="Image 1"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* 2 + 3 - side by side */}
        <div className="flex gap-2">
          <div className="flex-1 aspect-[3/4] overflow-hidden rounded-md">
            <Link href="/final-post">
              <Image
                src={images[1]}
                alt="Image 2"
                width={400}
                height={600}
                className="object-cover w-full h-full cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex-1 aspect-[3/4] overflow-hidden rounded-md">
            <Image
              src={images[2]}
              alt="Image 3"
              width={400}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* 4 - full width */}
        <div className="w-full aspect-video overflow-hidden rounded-md">
          <Image
            src={images[3]}
            alt="Image 4"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* 5 + 6 - side by side */}
        <div className="flex gap-2">
          <div className="flex-1 aspect-[3/4] overflow-hidden rounded-md">
            <Image
              src={images[4]}
              alt="Image 5"
              width={400}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 aspect-[3/4] overflow-hidden rounded-md">
            <Image
              src={images[5]}
              alt="Image 6"
              width={400}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* 7 - full width */}
        <div className="w-full aspect-video overflow-hidden rounded-md">
          <Image
            src={images[6]}
            alt="Image 7"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Floating FAB */}
      <Link href="/new-post">
        <button className="fixed bottom-24 right-4 z-50 bg-[#D76A17] text-white w-16 h-16 rounded-full shadow-lg text-3xl flex items-center justify-center">
          +
        </button>
      </Link>

      {/* Bottom NavBar */}
      <NavBar />
    </div>
  );
}
