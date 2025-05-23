"use client";

import { useState } from "react";
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

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Profile saved successfully!");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile");
    }
  };

  return (
    <div className="profileFormContainer">
      <NavBar />
      <h1 className="profileHeading">Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputSpaces">
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
          />
        </div>
        <div className="buttonContainer">
          <button type="submit" className="saveButton">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
