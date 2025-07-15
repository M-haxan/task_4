import React, { useState } from "react";

export default function DateRangeDropdown() {
  const [selectedRange, setSelectedRange] = useState("May 1 - 31, 2022");

  const handleChange = (e) => {
    setSelectedRange(e.target.value);
  };

  return (
    <div className="inline-block">
      <select
        value={selectedRange}
        onChange={handleChange}
        className=" w-50 px-4 py-2 border border-blue-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800"
      >
        <option value="May 1 - 31, 2022">May 1 - 31, 2022</option>
        <option value="June 1 - 30, 2022">June 1 - 30, 2022</option>
        <option value="July 1 - 31, 2022">July 1 - 31, 2022</option>
      </select>
    </div>
  );
}
