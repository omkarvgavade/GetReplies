import { useState } from "react";

export const NumberDropdown = ({
  onSelect,
  selectedNumber,
  numbers = [],
  onClick
}) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      onSelect(selectedValue);
    }
  };

  return (
    <div className="relative">
      <select
        onChange={handleChange}
        onClick={onClick}
        value={selectedNumber || ""}
        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <option value="" disabled>
          Select a number
        </option>
        {(numbers || [])?.map((number) => (
          <option key={number.sid} value={number.phoneNumber} className="text-gray-800">
            {number.phoneNumber}
          </option>
        ))}
      </select>
    </div>
  );
};
