import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    sender: "",
    receiver: "",
    event_report: "",
    event_proof: ["meow", "meow"],
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://nyai-backend.onrender.com/create_case",
        formData
      );

      setShowSuccessPopup(true);
      console.log(response);

      setFormData({
        sender: "",
        receiver: "",
        event_report: "",
        event_proof: null,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="max-w-md mx-auto p-4 rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="sender"
          placeholder="Your email"
          value={formData.sender}
          onChange={handleChange}
          className="w-full py-2 px-3 mb-4 leading-tight border-b border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="receiver"
          placeholder="Guilty party email"
          value={formData.receiver}
          onChange={handleChange}
          className="w-full py-2 px-3 mb-4 leading-tight border-b border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <textarea
          name="event_report"
          placeholder="Description of the event"
          value={formData.event_report}
          onChange={handleChange}
          className="w-full py-2 px-3 mb-4 leading-tight border-b border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-y"
        ></textarea>
        <input
          type="file"
          name="event_proof"
          accept="image/*"
          onChange={(event) =>
            setFormData({ ...formData, event_proof: event.target.files[0] })
          }
          className="w-full mb-4"
        />
        <input
          type="submit"
          value="Submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        />
      </form>

      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Success!</h2>
            <p>Your form has been submitted successfully.</p>
            <button
              onClick={handleClosePopup}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
