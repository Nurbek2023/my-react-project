import React, { useState } from "react";

const PersonInfo = () => {
  const person = {
    name: "Nurbek Mamasaliev",
    jobTitle: "Frontend Developer",
    company: "Tech Solutions Inc.",
    age: 20,
    location: "Kyzyl Kya, Kyrgyzstan",
    hobbies: "Coding, Reading, Hiking",
  };

  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Вы нажали «Повысить в должности»!");
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
      
      {/* Сообщение над кнопкой*/}
      {message && <p style={{ color: "green", marginBottom: "10px" }}>{message}</p>}

      {/* Кнопка */}
      <button 
        onClick={handleClick} 
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Повысить в должности
      </button>
    </div>
  );
};

export default PersonInfo;
