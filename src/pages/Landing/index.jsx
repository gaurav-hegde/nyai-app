import React, { useState, useEffect } from "react";
import Image from "../../assets/white_logo.png";
import { useNavigate } from "react-router-dom";
import Background from "../../assets/background.png";

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
        backgroundImage: `url(${Background})`, // Use imported background image
        backgroundSize: "cover",
      }}
      // className="bg-gradient-to-b from-white to-gray-400 border-[24px] border-black"
      className=""
    >
      <div className="shadow-black flex flex-row gap-32">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex justify-center items-center">
            <img className="w-2/5" src={Image} alt="" />
          </div>
          <div className="text-3xl font-bold text-white">
            <span className="fw-equality">Fostering Workplace Equality:</span>{" "}
            <span style={{ height: "40px", overflow: "hidden" }}>
              {nyayaLanguages[nyayaIndex]}
            </span>
          </div>
        </div>
        <div className="py-24 flex flex-col w-3/5 gap-12">
          <button
            className="w-1/2 py-4 border-2 text-xl font-semibold rounded-lg bg-black text-white"
            onClick={handleHRClick}
          >
            HR
          </button>
          <button
            className="w-1/2 py-4 px-10 border-2 text-xl font-semibold rounded-lg bg-black text-white"
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
