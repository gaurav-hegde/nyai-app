import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import Image from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

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
      <div className="flex bg-[#FFFBD7] h-screen">
        <div className="w-1/2 flex justify-center items-center">
          <img className="w-1/2" src={Image} alt="" />
        </div>
        <div className="w-1/2">
          <div className="bg-white my-40 mx-32 flex-cols border-2 border-black">
            <div className="px-16 pt-16 text-4xl font-bold">Login</div>
            <div className="px-16 pt-16 font-bold">
              Email
              <input
                className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
                id="username"
                type="text"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="px-16 pt-4 font-bold">
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
                  className="border-2 border-black py-1 w-full rounded-full"
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
