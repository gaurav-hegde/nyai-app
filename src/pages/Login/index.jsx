import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import Image from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import CSS file for styling

// Initialize Firebase
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
  const [iserror, setIserror] = useState(false);
  const history = useNavigate();
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

  const handleSubmit = async () => {
    setSubmitted(true);
    if (!(username.trim() === "" && password.trim() === "")) {
      try {
        await firebase.auth().signInWithEmailAndPassword(username, password);
        history("/victimform");
      } catch (error) {
        setError("Invalid email or password");
        setIserror(true);
      }
    }
  };

  return (
    <>
      <div className="flex  h-screen">
        <div className="w-1/2 flex flex-col justify-center">
          <div className="flex justify-center items-center">
            <img className="w-1/2" src={Image} alt="" />
          </div>
          <div className="text-3xl font-bold">
            <span className="fw-equality">Fostering Workplace Equality:</span>{" "}
            <span style={{ height: "40px", overflow: "hidden" }}>
              {nyayaLanguages[nyayaIndex]}
            </span>
          </div>
        </div>
        <div className="w-1/2 bg-[#ffde5a] flex justify-center items-center">
          <div className="bg-white h-3/5 w-4/6 flex-cols border-2 border-black come_right rounded-lg">
            <div className="px-16 pt-16 text-4xl font-bold">Login</div>
            <div className="px-16 pt-16 font-bold text-left">
              {" "}
              {/* Set text alignment to left */}
              Enter Email
              <input
                className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
                id="username"
                type="text"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="px-16 pt-4 font-bold text-left">
              {" "}
              {/* Set text alignment to left */}
              Enter Password
              <input
                className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {submitted &&
              (username.trim() === "" || password.trim() === "") && (
                <div className="px-16 pt-2 text-red-600">
                  Please fill all fields
                </div>
              )}
            {iserror &&
              submitted &&
              !(username.trim() === "" || password.trim() === "") && (
                <div className="px-16 pt-2 text-red-600">{error}</div>
              )}
            <div className="flex flex-rows gap-x-4 px-16 py-16">
              <div className="flex-1">
                <button
                  className="border-2 border-black py-1 w-full rounded-lg bg-black text-white font-semibold"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
