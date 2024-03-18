// import React, { useState, useEffect, useCallback } from "react";
// import firebase from "firebase/app";
// import "firebase/auth";
// import Image from "../../assets/logo.png";
// import { useNavigate } from "react-router-dom";
// import "./Login.css"; // Import CSS file for styling

// // Initialize Firebase
// const firebaseConfig = {
//   // Your Firebase config
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(null);
//   const [isError, setIsError] = useState(false);
//   const history = useNavigate();
//   const [nyayaIndex, setNyayaIndex] = useState(0);
//   const [showNyaya, setShowNyaya] = useState(true); // State to control the visibility of the text
//   const [darkMode, setDarkMode] = useState(false);

//   const nyayaLanguages = [
//     "न्याय",
//     "நீதி",
//     "న్యాయం",
//     "നീതി",
//     "Justice",
//     "Justicia",
//     "正義",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setNyayaIndex((prevIndex) => (prevIndex + 1) % nyayaLanguages.length);
//       setShowNyaya(false); // Hide the text before changing
//       setTimeout(() => setShowNyaya(true), 500); // Show the text after a short delay
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.ctrlKey && event.key === "m") {
//         setDarkMode((prevMode) => !prevMode);
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   const handleSubmit = async () => {
//     setSubmitted(true);
//     if (!(username.trim() === "" && password.trim() === "")) {
//       try {
//         await firebase.auth().signInWithEmailAndPassword(username, password);
//         history("/victimform");
//       } catch (error) {
//         setError("Invalid email or password");
//         setIsError(true);
//       }
//     }
//   };

//   return (
//     <>
//       <div className={`flex h-screen ${darkMode ? "bg-[#1E1E1E]" : ""}`}>
//         <div
//           className={`w-1/2 flex flex-col justify-center ${
//             darkMode ? "dark" : ""
//           }`}
//         >
//           <div className="flex justify-center items-center">
//             <img className="w-1/2" src={Image} alt="" />
//           </div>
//           <div
//             className={`text-3xl font-bold ${
//               darkMode ? "text-white" : "text-[#32009C]"
//             }`}
//           >
//             <span className="fw-equality">Fostering Workplace Equality:</span>{" "}
//             <span style={{ height: "40px", overflow: "hidden" }}>
//               {nyayaLanguages[nyayaIndex]}
//             </span>
//           </div>
//         </div>
//         <div
//           className={`w-1/2 ${
//             darkMode ? "bg-gray-300" : "bg-[#9C6EFF]"
//           } flex justify-center items-center`}
//         >
//           <div
//             className={`bg-white h-3/5 w-4/6 flex-cols border-2 border-black come_right rounded-lg ${
//               darkMode ? "bg-[#1E1E1E]" : ""
//             }`}
//           >
//             <div
//               className={`px-16 pt-16 text-4xl font-bold ${
//                 darkMode ? "text-white" : "text-[#32009C]"
//               }`}
//             >
//               Login
//             </div>
//             <div
//               className={`px-16 pt-16 font-bold ${
//                 darkMode ? "text-white" : "text-[#32009C]"
//               } text-left`}
//             >
//               Enter Email
//               <input
//                 className={`hover:shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight my-2 ${
//                   darkMode ? "bg-gray-700 text-white hover:shadow-white" : ""
//                 }`}
//                 id="username"
//                 type="text"
//                 placeholder="Email"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div
//               className={`px-16 pt-4 font-bold ${
//                 darkMode ? "text-white" : "text-[#32009C]"
//               } text-left`}
//             >
//               Enter Password
//               <input
//                 className={`hover:shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight my-2 ${
//                   darkMode ? "bg-gray-700 text-white hover:shadow-white" : ""
//                 }`}
//                 id="password"
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             {submitted &&
//               (username.trim() === "" || password.trim() === "") && (
//                 <div
//                   className={`px-16 pt-2 ${
//                     darkMode ? "text-red-300" : "text-red-600"
//                   }`}
//                 >
//                   Please fill all fields
//                 </div>
//               )}
//             {isError &&
//               submitted &&
//               !(username.trim() === "" || password.trim() === "") && (
//                 <div
//                   className={`px-16 pt-2 ${
//                     darkMode ? "text-red-300" : "text-red-600"
//                   }`}
//                 >
//                   {error}
//                 </div>
//               )}
//             <div className="flex flex-rows gap-x-4 px-16 py-16">
//               <div className="flex-1">
//                 <button
//                   className={`border-2  py-1 w-full rounded-lg ${
//                     darkMode
//                       ? "bg-gray-700 text-white hover:bg-white hover:text-black "
//                       : "bg-[#450BC2] hover:bg-[#32009C] text-white border-[#32009C]"
//                   } font-semibold`}
//                   onClick={handleSubmit}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import Image from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import CSS file for styling

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase config
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
    <>
      <div className={`flex h-screen ${darkMode ? "bg-[#1E1E1E]" : ""}`}>
        <div
          className={`w-1/2 flex flex-col justify-center ${
            darkMode ? "dark" : ""
          }`}
        >
          <div className="flex justify-center items-center">
            <img className="w-1/2" src={Image} alt="" />
          </div>
          <div
            className={`text-3xl font-bold ${
              darkMode ? "text-white" : "text-[#32009C]"
            }`}
          >
            <span className="fw-equality">Fostering Workplace Equality:</span>{" "}
            <span style={{ height: "40px", overflow: "hidden" }}>
              {nyayaLanguages[nyayaIndex]}
            </span>
          </div>
        </div>
        <div
          className={`w-1/2 ${
            darkMode ? "bg-gray-300" : "bg-[#9C6EFF]"
          } flex justify-center items-center`}
        >
          <div
            className={`bg-white h-3/5 w-4/6 flex-cols border-2 border-black come_right rounded-lg ${
              darkMode ? "bg-[#1E1E1E]" : ""
            }`}
          >
            <div
              className={`px-16 pt-16 text-4xl font-bold ${
                darkMode ? "text-white" : "text-[#32009C]"
              }`}
            >
              Login
            </div>
            <div
              className={`px-16 pt-16 font-bold ${
                darkMode ? "text-white" : "text-[#32009C]"
              } text-left`}
            >
              Enter Email
              <input
                className={`hover:shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight my-2 ${
                  darkMode ? "bg-gray-700 text-white hover:shadow-white" : ""
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
                darkMode ? "text-white" : "text-[#32009C]"
              } text-left`}
            >
              Enter Password
              <input
                className={`hover:shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight my-2 ${
                  darkMode ? "bg-gray-700 text-white hover:shadow-white" : ""
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
                    darkMode ? "text-red-300" : "text-red-600"
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
                    darkMode ? "text-red-300" : "text-red-600"
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
                      ? "bg-gray-700 text-white hover:bg-white hover:text-black "
                      : "bg-[#450BC2] hover:bg-[#32009C] text-white border-[#32009C]"
                  } font-semibold`}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <button
            className={`p-2 rounded-full ${
              darkMode ? "bg-white" : "bg-gray-700 text-white"
            }`}
            onClick={() => setDarkMode((prevMode) => !prevMode)}
          >
            {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
