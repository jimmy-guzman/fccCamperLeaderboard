import React from "react";
import { fetchTopCampers } from "../utils/api";

import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Loading from "./Loading";

class Leaderboard extends React.Component {
  state = {
    selectedTimeframe: "alltime",
    campers: null
  };

  componentDidMount() {
    this.updateCampers(this.state.selectedTimeframe);
  }

  updateCampers = async time => {
    this.setState(() => ({ selectedTimeframe: time, campers: null }));

    const campers = await fetchTopCampers(time);
    this.setState(() => ({ campers }));
  };

  render() {
    return (
      <div className="leaderboard">
        {!this.state.campers ? <Loading /> : <h2> Leaderboard </h2>}

        <hr />
        <table>
          <TableHeader
            selectedTimeframe={this.state.selectedTimeframe}
            onSelect={this.updateCampers}
          />
          {!this.state.campers ? null : (
            <TableBody campers={this.state.campers} />
          )}
        </table>
      </div>
    );
  }
}

export default Leaderboard;
