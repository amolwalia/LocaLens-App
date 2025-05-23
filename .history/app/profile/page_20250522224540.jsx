"use client";

import { usestate } from "react";

import NavBar from "@/components/NavBar";
import Input from "@/components/Input/Input";

export default function ProfilePage() {
  const [formData, setFormData] = usestate({
    firstName: "Samuel L.",
    lastName: "Jackson",
    username: "@jackson.jpeg",
    pronouns: "He/Him",
    bio: "I take pictures because I like to. Follow me and my journey",
    links: "https://shorturl.at/xvcix",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({prev, [id]: value }));
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
        onchange={handleChange}
        placeholder="Enter first name"
      />
      <Input
        label="Last Name"
        id="lastName"
        type="text"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Enter Last Name"
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
        onchange={handleChange}
      />
      <Input
        label="Bio"
        id="bio"
        type="text"
        value={formData.bio}
        onChange={handleChange}
        placeholder="150 character limit"
      />
      <Input label="Links" id="links" type="text" onChange={handleChange} />
    </div>
  );
}
