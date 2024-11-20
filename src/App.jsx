import React, { useState } from "react";

const PersonInfo = () => {
  const person = {
    name: "Nurbek Mamasaliev",
    company: "Tech Solutions Inc.",
    age: 20,
    location: "Kyzyl Kya, Kyrgyzstan",
    hobbies: "Coding, Reading, Hiking",
  };

  // Добавляем состояние для должности
  const [jobTitle, setJobTitle] = useState("Frontend Developer");
  const [message, setMessage] = useState("");

  // Функция изменения должности
  const handlePromotion = () => {
    setJobTitle("Senior Frontend Developer");
    setMessage("Congratulations! You have been promoted.");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>About the Person</h1>
      <p><strong>Name:</strong> {person.name}</p>
      <p><strong>Job Title:</strong> {jobTitle}</p>
      <p><strong>Company:</strong> {person.company}</p>
      <p><strong>Age:</strong> {person.age}</p>
      <p><strong>Location:</strong> {person.location}</p>
      <p><strong>Hobbies:</strong> {person.hobbies}</p>
      
      {/* Сообщение над кнопкой */}
      {message && <p style={{ color: "green", marginBottom: "10px" }}>{message}</p>}

      {/* Кнопка для повышения должности */}
      <button 
        onClick={handlePromotion} 
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
