import React, { Fragment } from "react";

const TableBody = ({ campers }) => (
  <tbody>
    {campers.map(({ username, img, alltime, recent }, index) => (
      <tr key={username}>
        <td className="number">{index + 1}</td>
        <td className="user">
          <a href={`https://www.freecodecamp.com/${username}`} target="_blank">
            <img src={img} />
            <span>{username}</span>
          </a>
        </td>
        <td>{recent}</td>
        <td>{alltime}</td>
      </tr>
    ))}
  </tbody>
);

export default TableBody;
