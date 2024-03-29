import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import Image from "../../assets/white_logo.png";
import { useNavigate } from "react-router-dom";
import darkModeIcon from "../../assets/dark.png";
import lightModeIcon from "../../assets/light.png";
import Background from "../../assets/background.png";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAW7Le8Z4S9CDMuQlsQ9qWFa0F50SZDhqs",
  authDomain: "nyai-fc749.firebaseapp.com",
  projectId: "nyai-fc749",
  storageBucket: "nyai-fc749.appspot.com",
  messagingSenderId: "729652119854",
  appId: "1:729652119854:web:18efc648080ad7169a92bf",
  measurementId: "G-HZ7SP6PNMC",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const history = useNavigate();
  const [nyayaIndex, setNyayaIndex] = useState(0);
  const [showNyaya, setShowNyaya] = useState(true); // State to control the visibility of the text
  const [darkMode, setDarkMode] = useState(false);

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "m") {
        setDarkMode((prevMode) => !prevMode);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSubmit = async () => {
    setSubmitted(true);
    if (!(username.trim() === "" && password.trim() === "")) {
      try {
        await firebase.auth().signInWithEmailAndPassword(username, password);
        history("/victimform");
      } catch (error) {
        setError("Invalid email or password");
        setIsError(true);
      }
    }
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
    >
      <div
        className={`flex flex-col justify-center items-center h-screen ${
          darkMode ? "bg-[#1E1E1E]" : ""
        }`}
      >
        <div
          className={`md:w-1/2 w-1/2 flex flex-col justify-center ${
            darkMode ? "dark" : ""
          }`}
        >
          <div className="flex mt-16 justify-center items-center">
            <img className="md:w-1/2 py-2" src={Image} alt="" />
          </div>
          <div
            className={`text-3xl font-bold py-2 ${
              darkMode ? "text-white" : "text-white"
            }`}
          >
            <span className="fw-equality">Fostering Workplace Equality:</span>{" "}
            <span style={{ height: "40px", overflow: "hidden" }}>
              {nyayaLanguages[nyayaIndex]}
            </span>
          </div>
        </div>
        <div
          // className={`h-screen md:w-1/2 ${
          //   darkMode ? "bg-gray-300" : "bg-[#9C6EFF]"
          // } flex justify-center items-center`}
          className={`h-screen md:w-1/2 flex justify-center items-center`}
        >
          <div
            className={` md:h-[75%] w-[90%] flex-cols border-2 border-black come_right rounded-lg ${
              darkMode ? "bg-[#1E1E1E]" : "bg-white/35 "
            }`}
          >
            <div
              className={`px-16 pt-16 text-4xl font-bold ${
                darkMode ? "text-white" : "text-white"
              }`}
            >
              Login
            </div>
            <div
              className={`px-16 pt-16 font-bold ${
                darkMode ? "text-white" : "text-white"
              } text-left`}
            >
              Enter Email
              <input
                className={`hover:shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight my-2 ${
                  darkMode ? "text-white hover:shadow-white" : ""
                }`}
                id="username"
                type="text"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div
              className={`px-16 pt-4 font-bold ${
                darkMode ? "text-white" : "text-white"
              } text-left`}
            >
              Enter Password
              <input
                className={`hover:shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight my-2 ${
                  darkMode ? "text-white hover:shadow-white " : ""
                }`}
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {submitted &&
              (username.trim() === "" || password.trim() === "") && (
                <div
                  className={`px-16 pt-2 ${
                    darkMode ? "text-red-900" : "text-red-400"
                  }`}
                >
                  Please fill all fields
                </div>
              )}
            {isError &&
              submitted &&
              !(username.trim() === "" || password.trim() === "") && (
                <div
                  className={`px-16 pt-2 ${
                    darkMode ? "text-red-300" : "text-red-400"
                  }`}
                >
                  {error}
                </div>
              )}
            <div className="flex flex-rows gap-x-4 px-16 py-16">
              <div className="flex-1">
                <button
                  className={`border-2  py-1 w-full rounded-lg ${
                    darkMode
                      ? "bg-white hover:bg-gray-300 hover:text-black "
                      : "bg-white text-black hover:bg-[#32009C]  border-[#32009C]"
                  } font-semibold`}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* /* <div className="absolute top-1 right-1 md:absolute top-4 right-4 z-10">
          <button
            className={`p-2 flex items-center rounded-full ${
              darkMode ? "bg-white" : "bg-gray-700 text-white"
            }`}
            onClick={() => setDarkMode((prevMode) => !prevMode)}
          >
            {darkMode ? "Light" : "Dark"} Mode
            <img
              src={darkMode ? lightModeIcon : darkModeIcon}
              alt="Mode Icon"
              className="w-6 h-6 ml-2"
            />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
