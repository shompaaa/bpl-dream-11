import React from "react";
import footerLogo from "../../assets/images/logo-footer.png";

const Footer = () => {
  return (
    <>
      {/* Newsletter section */}
      <div className="container newsletter-container">
        <div className="newsletter mx-auto d-flex flex-column justify-content-center align-items-center">
          <h4>Subscribe to our Newsletter</h4>
          <p>Get the latest updates and news right in your inbox!</p>
          <div className="d-flex gap-2">
            <input
              className="input1"
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
            />
            <button className="btn1">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black mt-5 footer">
        <div className="text-center">
          <img className="footer-logo" src={footerLogo} alt="" />
        </div>
        <div className="d-lg-flex container justify-content-between w-100">
          <div className="w-25">
            <h6>About Us</h6>
            <p>
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="w-25">
            <h6>Quick Links</h6>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="w-25">
            <h6>Subscribe</h6>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className="d-flex">
              <input
                className="input2"
                type="email"
                name=""
                id=""
                placeholder="Email"
              />
              <button className="btn2">Subscribe</button>
            </div>
          </div>
        </div>
        <footer className="text-secondary text-center mt-5">
          <small> &copy; All right reserved BPL Dream 11</small>
        </footer>
      </div>
    </>
  );
};

export default Footer;
