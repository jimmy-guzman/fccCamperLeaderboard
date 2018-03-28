import React from "react";
import { fetchTopCampers } from "../utils/api";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class Leaderboard extends React.Component {
  state = {
    campers: null
  };

  componentDidMount() {
    this.updateCampers("alltime");
  }

  updateCampers = async time => {
    this.setState(() => ({ campers: null }));

    const campers = await fetchTopCampers(time);
    this.setState(() => ({ campers }));
  };

  render() {
    return (
      <div className="leaderboard">
        <h2> Leaderboard </h2>
        <hr />
        <table>
          <TableHeader />
          <TableBody />
        </table>
      </div>
    );
  }
}

export default Leaderboard;
