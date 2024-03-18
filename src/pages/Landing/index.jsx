import React, { useState, useEffect } from "react";
import Image from "../../assets/logo.png";

function Landing() {
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
  return (
    <>
      <div className="flex justify-center items-center">
        <img className="w-1/2" src={Image} alt="" />
      </div>
      <div className="text-3xl font-bold">
        <span className="fw-equality">Fostering Workplace Equality:</span>{" "}
        <span style={{ height: "40px", overflow: "hidden" }}>
          {nyayaLanguages[nyayaIndex]}
        </span>
      </div>
      <div className="py-12">
        <button className="w-1/4 mx-4 py-2 border-2">HR</button>
        <button className="w-1/4 mx-4 py-2 border-2">Employee</button>
      </div>
    </>
  );
}

export default Landing;
