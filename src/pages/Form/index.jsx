// import React, { useState } from "react";
// import axios from "axios";

// import Image from "../../assets/bal.png";

// function Form() {
//   const [formData, setFormData] = useState({
//     sender: "",
//     receiver: "",
//     event_report: "",
//     event_proof: [],
//   });
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post(
//         `https://nyai-backend.onrender.com/create_case`,
//         formData
//       );

//       setShowSuccessPopup(true);
//       console.log(response);

//       setFormData({
//         sender: "",
//         receiver: "",
//         event_report: "",
//         event_proof: [],
//       });
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value, type } = event.target;

//     if (type === "file") {
//       const file = event.target.files[0];
//       const reader = new FileReader();

//       reader.onloadend = () => {
//         setFormData({
//           ...formData,
//           [name]: [...formData[name], reader.result],
//         });
//       };

//       reader.readAsDataURL(file);
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleClosePopup = () => {
//     setShowSuccessPopup(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-[#7334FA]">
//       <div className="bg-white flex justify-center items-center w-4/6 px-4 rounded-[16px] gap-x-8">
//         <div className="w-2/3 border-r-2 h-full flex items-center justify-center">
//           <img className="px-2" src={Image} alt="" />
//         </div>
//         <div className="w-2/3">
//           <form
//             className="w-[24rem] mx-auto p-4 rounded-md bg-white md:w-[42rem]"
//             onSubmit={handleSubmit}
//           >
//             <h2 className="text-3xl font-bold text-[#32009C] pb-2">
//               Complaint Form
//             </h2>

//             <div className="mb-4 flex flex-col items-start">
//               <label
//                 htmlFor="sender"
//                 className="text-[#32009C] text-sm font-bold mb-1"
//               >
//                 Your Email
//               </label>
//               <input
//                 type="text"
//                 name="sender"
//                 id="sender"
//                 placeholder="Email"
//                 value={formData.sender}
//                 onChange={handleChange}
//                 className="w-full py-2 px-3 leading-tight border-2 border-gray-300 rounded focus:outline-none focus:border-slate-400 hover:shadow"
//               />
//             </div>

//             <div className="mb-4 flex flex-col items-start">
//               <label
//                 htmlFor="receiver"
//                 className="text-[#32009C] text-sm font-bold mb-1"
//               >
//                 Accused Email
//               </label>
//               <input
//                 type="text"
//                 name="receiver"
//                 id="receiver"
//                 placeholder="Accused Email"
//                 value={formData.receiver}
//                 onChange={handleChange}
//                 className="w-full py-2 px-3 leading-tight border-2 border-gray-300 rounded focus:outline-none focus:border-slate-400 hover:shadow"
//               />
//             </div>

//             <div className="mb-4 flex flex-col items-start">
//               <label
//                 htmlFor="event_report"
//                 className="text-[#32009C] text-sm font-bold mb-1"
//               >
//                 Description of the Event
//               </label>
//               <textarea
//                 name="event_report"
//                 id="event_report"
//                 placeholder="Description"
//                 value={formData.event_report}
//                 onChange={handleChange}
//                 className="w-full py-2 px-3 h-[20rem] leading-tight border-2 border-gray-300 rounded focus:outline-none focus:border-slate-400 resize-none hover:shadow"
//               ></textarea>
//             </div>

//             <input
//               type="file"
//               name="event_proof"
//               id="event_proof"
//               accept="image/*"
//               onChange={handleChange}
//               className="text-base pb-3 hover:shadow text-slate-500 file:mx-3 file:py-2 file:px-8 file:border-[1px] file:text-md file:font-medium file:bg-stone-50 file:text-stone-700 hover:file:cursor-pointer hover:file:bg-slate-50 hover:file:text-slate-700"
//             />

//             <input
//               type="submit"
//               value="Submit"
//               className="w-full bg-[#450BC2] hover:bg-[#32009C] border-2 hover:border-2 text-white font-bold py-2 px-4 rounded cursor-pointer"
//             />
//           </form>

//           {showSuccessPopup && (
//             <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
//               <div className="bg-white rounded-lg p-8">
//                 <h2 className="text-2xl font-bold mb-4">Submitted!</h2>
//                 <p>Your form has been submitted successfully.</p>
//                 <button
//                   onClick={handleClosePopup}
//                   className="mt-4 bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Form;
import React, { useState, useEffect } from "react";
import axios from "axios";

import Image from "../../assets/bal.png";

function Form() {
  const [formData, setFormData] = useState({
    sender: "",
    receiver: "",
    event_report: "",
    event_proof: [],
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "m") {
        toggleDarkMode();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://nyai-backend.onrender.com/create_case`,
        formData
      );

      setShowSuccessPopup(true);
      console.log(response);

      setFormData({
        sender: "",
        receiver: "",
        event_report: "",
        event_proof: [],
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "file") {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData({
          ...formData,
          [name]: [...formData[name], reader.result],
        });
      };

      reader.readAsDataURL(file);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        darkMode ? "bg-[#1E1E1E]" : "bg-[#7334FA]"
      }`}
    >
      <div
        className={`bg-white flex justify-center items-center w-4/6 px-4 rounded-[16px] gap-x-8 ${
          darkMode ? "dark" : ""
        }`}
      >
        <div className="w-2/3 border-r-2 h-full flex items-center justify-center">
          <img className="px-2" src={Image} alt="" />
        </div>
        <div className="w-2/3">
          <form
            className={`w-[24rem] mx-auto p-4 rounded-md bg-white md:w-[42rem] ${
              darkMode ? "dark" : ""
            }`}
            onSubmit={handleSubmit}
          >
            <h2
              className={`text-3xl font-bold ${
                darkMode ? "text-black" : "text-[#32009C]"
              } pb-2`}
            >
              Complaint Form
            </h2>

            <div className="mb-4 flex flex-col items-start">
              <label
                htmlFor="sender"
                className={`text-[#32009C] text-sm font-bold mb-1 ${
                  darkMode ? "text-white" : ""
                }`}
              >
                Your Email
              </label>
              <input
                type="text"
                name="sender"
                id="sender"
                placeholder="Email"
                value={formData.sender}
                onChange={handleChange}
                className={`w-full py-2 px-3 leading-tight border-2 border-gray-300 rounded focus:outline-none focus:border-slate-400 hover:shadow ${
                  darkMode ? "bg-[#1E1E1E] text-white hover:shadow-black" : ""
                }`}
              />
            </div>

            <div className="mb-4 flex flex-col items-start">
              <label
                htmlFor="receiver"
                className={`text-[#32009C] text-sm font-bold mb-1 ${
                  darkMode ? "text-white" : ""
                }`}
              >
                Accused Email
              </label>
              <input
                type="text"
                name="receiver"
                id="receiver"
                placeholder="Accused Email"
                value={formData.receiver}
                onChange={handleChange}
                className={`w-full py-2 px-3 leading-tight border-2 border-gray-300 rounded focus:outline-none focus:border-slate-400 hover:shadow ${
                  darkMode ? "bg-[#1E1E1E] text-white hover:shadow-black" : ""
                }`}
              />
            </div>

            <div className="mb-4 flex flex-col items-start">
              <label
                htmlFor="event_report"
                className={`text-[#32009C] text-sm font-bold mb-1 ${
                  darkMode ? "text-white" : ""
                }`}
              >
                Description of the Event
              </label>
              <textarea
                name="event_report"
                id="event_report"
                placeholder="Description"
                value={formData.event_report}
                onChange={handleChange}
                className={`w-full py-2 px-3 h-[20rem] leading-tight border-2 border-gray-300 rounded focus:outline-none focus:border-slate-400 resize-none hover:shadow ${
                  darkMode ? "bg-[#1E1E1E] text-white hover:shadow-black" : ""
                }`}
              ></textarea>
            </div>

            <input
              type="file"
              name="event_proof"
              id="event_proof"
              accept="image/*"
              onChange={handleChange}
              className={`text-base pb-3 hover:shadow text-slate-500 file:mx-3 file:py-2 file:px-8 file:border-[1px] file:text-md file:font-medium file:bg-stone-50 file:text-stone-700 hover:file:cursor-pointer hover:file:bg-slate-50 hover:file:text-slate-700 ${
                darkMode ? "" : ""
              }`}
            />

            <input
              type="submit"
              value="Submit"
              className={`w-full ${
                darkMode
                  ? "bg-[#1E1E1E] hover:bg-gray-700 text-white"
                  : "bg-[#450BC2] hover:bg-[#32009C]"
              } border-2 hover:border-2 text-white font-bold py-2 px-4 rounded cursor-pointer`}
            />
          </form>

          {showSuccessPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
              <div className="bg-white rounded-lg p-8">
                <h2
                  className={`text-2xl font-bold ${
                    darkMode ? "text-gray-700" : "text-white"
                  } mb-4`}
                >
                  Submitted!
                </h2>
                <p className={`${darkMode ? "text-gray-800" : "text-white"}`}>
                  Your form has been submitted successfully.
                </p>
                <button
                  onClick={handleClosePopup}
                  className={`mt-4 ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-600"
                      : "bg-slate-500 hover:bg-slate-600"
                  } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <button
        className={`fixed top-4 right-4 p-2 rounded-full ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        } hover:bg-gray-200 hover:text-gray-800`}
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default Form;
