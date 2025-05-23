"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import Input from "@/components/Input/Input";

const user = {
  name: "Samuel L. Jackson",
  username: "@jackson.jpeg",
  pronouns: "He/Him",
  bio: "I take pictures because I like to. Follow me and my journey",
  website: "https://shorturl.at/xvcix",
  avatar: "/app/images/samuel-l-jackson-star-wars.jpg",
};

export default function ProfilePage() {
  return (
    <div>
      <NavBar />
      <Input
        label="First Name"
        id="firstName"
        type="text"
        placeholder="enter first name"
      />
      <Input
        label="Last Name"
        id="lastName"
        type="text"
        placeholder="enter last name"
      />
      <Input
        label="Username"
        id="userName"
        type="text"
        placeholder="@johndoe123"
      />
      <Input label="Pronouns" id="proNouns" type="text" />
      <Input
        label="Bio"
        id="userBio"
        type="text"
        placeholder="150 character limit"
      />
      <Input label="Links" id="userBioLinks" type="text" />
    </div>
  );
}
