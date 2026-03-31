import React from "react";
import '../../App.css'
import bannerLogo from '../../assets/images/banner-main.png'

const Hero = () => {
  return (
    <div className="hero card text-center container">
      <div className="my-auto">
        <img src={bannerLogo} alt="" />
        <h5 className="display-6 fw-bold text-white mt-4 mb-3">Assemble Your Ultimate Dream 11 Cricket Team</h5>
        <p className="lead fw-semibold">
          Beyond Boundaries Beyond Limits
        </p>
       <button className="rounded-3 py-1">
         <a href="#" className="btn text-black fw-semibold rounded-3">
          Claim Free Credit
        </a>
       </button>
      </div>
    </div>
  );
};

export default Hero;
