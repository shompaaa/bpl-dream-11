import React, { useState } from "react";
import "../../App.css";
import { useLoaderData } from "react-router";
import Player from "../Player/Player";

const Players = () => {
  const players = useLoaderData();
  const [showAll, setShowAll] = useState(false)
  const visiblePlayers = showAll ? players : players.slice(0,8)
  return (
    <div className="container">
      <div className="players d-md-flex justify-content-between align-items-center">
        <h3 className="fw-bold">Available Players</h3>
        <div>
          <ul className="nav nav-tabs card-header-tabs ">
            <li className="nav-item">
              <a className="nav-link " aria-current="true" href="#">
                Available
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Selected(0)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="players-container">
        {visiblePlayers.map((player) => (
          <Player key={player.id} player={player}></Player>
        ))}
      </div>
      <div className="mt-2 text-center">
        <button onClick={()=>setShowAll(true)} className="btn btn-success">Show All Players</button>
      </div>
    </div>
  );
};

export default Players;
