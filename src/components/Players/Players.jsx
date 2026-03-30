import React from "react";
import "../../App.css";
import { useLoaderData } from "react-router";
import Player from "../Player/Player";

const Players = () => {
  const players = useLoaderData();
  return (
    <>
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
         {players.map((player) => (
        <Player key={player.id} player={player}></Player>
      ))}
     </div>
    </>
  );
};

export default Players;
