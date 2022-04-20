import React from "react";

export default function Vote() {
  return (
    <div>
      <label>
        Vote Type:
        <select>
          <option value="hire">Hire CEO</option>
          <option value="fire">Fire CEO</option>
          <option value="empty">Empty</option>
          <option value="fill">Fill</option>
          <option value="weekly">Change Weekly CEO Allowance</option>
        </select>
        <button>Cast Vote</button>
      </label>
    </div>
  );
}
