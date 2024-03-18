import React, { useState, useEffect } from "react";
import Image from "../../assets/logo.png";
import ApprovalsTable from "../../components/ApprovalsTable";
import OngoingTable from "../../components/OngoingTable";
import HistoryTable from "../../components/HistoryTable";

function Dashboard() {
  const [data, setData] = useState([]);
  const [editActive, setEditActive] = useState(false);
  const [viewActive, setViewActive] = useState(true); // Set default state to View
  const [deleteActive, setDeleteActive] = useState(false);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("https://nyai-backend.onrender.com/get_cases")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleEditClick = () => {
    setEditActive(true);
    setViewActive(false);
    setDeleteActive(false);
  };

  const handleViewClick = () => {
    setEditActive(false);
    setViewActive(true);
    setDeleteActive(false);
  };

  const handleDeleteClick = () => {
    setEditActive(false);
    setViewActive(false);
    setDeleteActive(true);
  };

  const approvalsData = data.filter(
    (item) => item.receiver_report !== "" && item.approval === "pending"
  );
  const historyData = data.filter((item) => item.approval === "False");
  const ongoingData = data.filter((item) => item.receiver_report === "");

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <img src={Image} className="w-[28rem]" alt="logo" />
      <div className="inline-flex rounded-lg border border-gray-100 bg-gray-500 p-1">
        <button
          className={`inline-block rounded-md px-4 py-2 text-sm ${
            editActive
              ? "text-black-500 bg-white shadow-sm"
              : "text-white hover:text-gray-700"
          }`}
          onClick={handleEditClick}
        >
          Approvals
        </button>

        <button
          className={`inline-block rounded-md px-4 py-2 text-sm ${
            viewActive
              ? "text-black-500 bg-white shadow-sm"
              : "text-white hover:text-gray-700"
          }`}
          onClick={handleViewClick}
        >
          Ongoing
        </button>

        <button
          className={`inline-block rounded-md px-4 py-2 text-sm ${
            deleteActive
              ? "text-black-500 bg-white shadow-sm"
              : "text-white hover:text-gray-700"
          }`}
          onClick={handleDeleteClick}
        >
          History
        </button>
      </div>

      {editActive && <ApprovalsTable data={approvalsData} />}
      {viewActive && <OngoingTable data={ongoingData} />}
      {deleteActive && <HistoryTable data={historyData} />}
    </div>
  );
}

export default Dashboard;
