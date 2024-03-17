import React from "react";

function SuccessPopup({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Success!</h2>
        <p>Your form has been submitted successfully.</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SuccessPopup;
