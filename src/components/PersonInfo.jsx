import React from "react";

const PersonInfo = () => {
  const person = {
    name: "Nurbek Mamasaliev",
    jobTitle: "Frontend Developer",
    company: "Tech Solutions Inc.",
    age: 20,
    location: "Kyzyl Kya, Kyrgyzstan",
    hobbies: "Coding, Reading, Hiking",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>About the Person</h1>
      <p><strong>Name:</strong> {person.name}</p>
      <p><strong>Job Title:</strong> {person.jobTitle}</p>
      <p><strong>Company:</strong> {person.company}</p>
      <p><strong>Age:</strong> {person.age}</p>
      <p><strong>Location:</strong> {person.location}</p>
      <p><strong>Hobbies:</strong> {person.hobbies}</p>
    </div>
  );
};

export default PersonInfo;