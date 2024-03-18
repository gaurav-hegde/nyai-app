import React from "react";

function OngoingTable({ data }) {
  return (
    <div className="overflow-x-auto w-[80%] h-[70%] rounded-lg border border-gray-200 mt-3">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Case ID
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Sender
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Receiver
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Title
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Short Description
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.case_id}>
              <td className="px-4 py-2">{item.case_id}</td>
              <td className="px-4 py-2">{item.sender}</td>
              <td className="px-4 py-2">{item.receiver}</td>
              <td className="px-4 py-2">{item.title}</td>
              <td className="px-4 py-2">{item.short_desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OngoingTable;
