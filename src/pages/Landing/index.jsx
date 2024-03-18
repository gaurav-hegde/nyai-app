import React, { useState, useEffect } from "react";
import Image from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  const [nyayaIndex, setNyayaIndex] = useState(0);
  const [showNyaya, setShowNyaya] = useState(true); // State to control the visibility of the text

  const nyayaLanguages = [
    "न्याय",
    "நீதி",
    "న్యాయం",
    "നീതി",
    "Justice",
    "Justicia",
    "正義",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNyayaIndex((prevIndex) => (prevIndex + 1) % nyayaLanguages.length);
      setShowNyaya(false); // Hide the text before changing
      setTimeout(() => setShowNyaya(true), 500); // Show the text after a short delay
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  const handleHRClick = () => {
    // Navigate to HR route
    navigate("/loginhr");
  };

  const handleEmployeeClick = () => {
    // Navigate to Employee route
    navigate("/login");
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="bg-gradient-to-b from-white to-gray-400 border-[24px] border-black"
    >
      <div className="shadow-black">
        <div className="flex justify-center items-center">
          <img className="w-1/2" src={Image} alt="" />
        </div>
        <div className="text-3xl font-bold">
          <span className="fw-equality">Fostering Workplace Equality:</span>{" "}
          <span style={{ height: "40px", overflow: "hidden" }}>
            {nyayaLanguages[nyayaIndex]}
          </span>
        </div>
        <div className="py-24">
          <button
            className="w-1/5 mx-12 py-2 border-2 text-xl font-semibold rounded-lg bg-black text-white"
            onClick={handleHRClick}
          >
            HR
          </button>
          <button
            className="w-1/5 mx-12 py-2 border-2 text-xl font-semibold rounded-lg bg-black text-white"
            onClick={handleEmployeeClick}
          >
            Employee
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
