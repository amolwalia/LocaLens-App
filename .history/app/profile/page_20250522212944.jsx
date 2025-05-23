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
      <Input label="First Name" id="firstName" type="text" />
      <Input label="Last Name" id="lastName" type="text" />
            <Input label="User Name" id="userName" type="text" />
                  <Input label="Pro Nouns" id="proNouns" type="text" />
                        <Input label="First Name" id="firstName" type="text" />
    </div>
  );
}
