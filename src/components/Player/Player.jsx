import React from "react";

const Player = ({ player }) => {
  const { image, name, country, role, battingStyle, rating, price } = player;
  return (
    <div className="card player">
      <img src={image} className="card-img-top mb-0" alt="..." />
      <div className="card-body">
        <h5 className="card-title mb-0">{name}</h5>
        <div className="card-body d-flex justify-content-between align-items-center mb-0">
          <p>🏴{country}</p>
          <p className="badge text-bg-secondary p-2">{role}</p>
        </div>
        <hr className="mt-0" />
        <div className="d-flex justify-content-between">
          <p className="fw-semibold">Rating</p>
          <p>{rating}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="fw-semibold">Batting Style</p>
          <p>{battingStyle}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="fw-semibold">Price: {price}</p>
          <p className="btn btn-outline-secondary">Choose Player</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
