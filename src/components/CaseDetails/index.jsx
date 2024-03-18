import React from "react";

function CaseDetails({ caseData }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Case Details</h1>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Case Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>
              <span className="font-semibold">Case ID:</span> {caseData.case_id}
            </p>
            <p>
              <span className="font-semibold">Sender:</span> {caseData.sender}
            </p>
            <p>
              <span className="font-semibold">Receiver:</span>{" "}
              {caseData.receiver}
            </p>
            <p>
              <span className="font-semibold">Event Report:</span>{" "}
              {caseData.event_report}
            </p>
            <p>
              <span className="font-semibold">Receiver Report:</span>{" "}
              {caseData.receiver_report}
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Title:</span> {caseData.title}
            </p>
            <p>
              <span className="font-semibold">Short Description:</span>{" "}
              {caseData.short_desc}
            </p>
            <p>
              <span className="font-semibold">Judgement:</span>{" "}
              {caseData.judgement ? "True" : "False"}
            </p>
            <p>
              <span className="font-semibold">Reasoning:</span>{" "}
              {caseData.reasoning}
            </p>
            <p>
              <span className="font-semibold">Confidence:</span>{" "}
              {caseData.confidence}
            </p>
            <p>
              <span className="font-semibold">Approval:</span>{" "}
              {caseData.approval}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-bold mb-2">Proofs</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Event Proofs:</p>
            <div className="flex flex-wrap gap-2">
              {caseData.event_proof.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Event Proof ${index}`}
                  className="max-w-full h-auto"
                />
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold">Receiver Proofs:</p>
            <div className="flex flex-wrap gap-2">
              {caseData.receiver_proof.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Receiver Proof ${index}`}
                  className="max-w-full h-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseDetails;
