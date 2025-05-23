"use client";

import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Input from "@/components/Input/Input";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "Samuel L.",
    lastName: "Jackson",
    username: "@jackson.jpeg",
    pronouns: "He/Him",
    bio: "I take pictures because I like to. Follow me and my journey",
    links: "https://shorturl.at/xvcix",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <NavBar />
      <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>
      <Input
        label="First Name"
        id="firstName"
        type="text"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Enter first name"
      />
      <Input
        label="Last Name"
        id="lastName"
        type="text"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Enter last name"
      />
      <Input
        label="Username"
        id="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
        placeholder="@username"
      />
      <Input
        label="Pronouns"
        id="pronouns"
        type="text"
        value={formData.pronouns}
        onChange={handleChange}
        placeholder="Enter pronouns"
      />
      <Input
        label="Bio"
        id="bio"
        type="text"
        value={formData.bio}
        onChange={handleChange}
        placeholder="150 character limit"
      />
      <Input
        label="Links"
        id="links"
        type="text"
        value={formData.links}
        onChange={handleChange}
        placeholder="Website or social media"
      />
    </div>
  );
}
