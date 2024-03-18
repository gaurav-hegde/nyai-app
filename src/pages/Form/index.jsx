import React, { useState } from "react";
import axios from "axios";

import Image from "../../assets/bal.jpg";

function Form() {
  const [formData, setFormData] = useState({
    sender: "",
    receiver: "",
    event_report: "",
    event_proof: [],
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

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
    <div className="flex flex-col items-center justify-center h-screen bg-[#dfc7a7]">
      <div className="bg-white flex justify-center items-center w-4/6 px-4 rounded-[16px] gap-x-8">
        <div className="w-2/3 border-r-2 h-full flex items-center justify-center">
          <img className="px-2" src={Image} alt="" />
        </div>
        <div className="w-2/3">
          <form
            className="w-[24rem] h-[39rem] mx-auto p-4 rounded-md bg-white md:w-[42rem]"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl pb-2">Complaint Form</h2>
            <input
              type="text"
              name="sender"
              placeholder="Your email"
              value={formData.sender}
              onChange={handleChange}
              className="w-full py-2 px-3 mb-4 leading-tight border-2 border-gray-300 rounded focus:outline-none focus:border-slate-400"
            />
            <input
              type="text"
              name="receiver"
              placeholder="Guilty party email"
              value={formData.receiver}
              onChange={handleChange}
              className="w-full py-2 px-3 mb-4 leading-tight border-2 border-gray-300 rounded focus:outline-none focus:border-slate-400"
            />
            <textarea
              name="event_report"
              placeholder="Description of the event"
              value={formData.event_report}
              onChange={handleChange}
              className="w-full py-2 px-3 mb-4 h-[20rem] leading-tight border-2 border-gray-300 rounded focus:outline-none focus:border-slate-400 resize-none"
            ></textarea>
            <input
              type="file"
              name="event_proof"
              accept="image/*"
              onChange={handleChange}
              className="text-base mx-auto pb-3 text-slate-500 file:mx-3 file:py-2 file:px-8 file:border-[1px] file:text-md file:font-medium file:bg-stone-50 file:text-stone-700 hover:file:cursor-pointer hover:file:bg-slate-50 hover:file:text-slate-700"
            />
            <input
              type="submit"
              value="Submit"
              className="w-full bg-black border-2 hover:bg-gray-300 hover:text-black hover:border-2 text-white font-bold py-2 px-4 rounded cursor-pointer"
            />
          </form>

          {showSuccessPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Submitted!</h2>
                <p>Your form has been submitted successfully.</p>
                <button
                  onClick={handleClosePopup}
                  className="mt-4 bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
