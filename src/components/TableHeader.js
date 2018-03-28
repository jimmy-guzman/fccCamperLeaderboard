import React from "react";

const TableHeader = ({ onSelect, selectedTimeframe }) => {
  return (
    <thead>
      <tr>
        <th className="numbers">#</th>
        <th className="users">Camper Name</th>
        <th
          className={selectedTimeframe === "recent" ? "time selected" : "time"}
          onClick={() => onSelect("recent")}
        >
          Past 30 Days Points {}
        </th>
        <th
          className={selectedTimeframe === "alltime" ? "time selected" : "time"}
          onClick={() => onSelect("alltime")}
        >
          All Time Points
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
