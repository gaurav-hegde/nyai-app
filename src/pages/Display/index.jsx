import React, { useEffect, useState } from "react";
import axios from "axios";
import CaseDetails from "../../components/CaseDetails";

function Display({ caseId }) {
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    const fetchCaseData = async () => {
      try {
        const response = await axios.get(
          `https://nyai-backend.onrender.com/case/3FM1CW4Z2P`
        );
        setCaseData(response.data);
      } catch (error) {
        console.error("Error fetching case data:", error);
      }
    };

    fetchCaseData();
  }, [caseId]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Case Details</h1>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        {caseData ? (
          <CaseDetails caseData={caseData} />
        ) : (
          <p>Loading case details...</p>
        )}
      </div>
    </div>
  );
}

export default Display;
