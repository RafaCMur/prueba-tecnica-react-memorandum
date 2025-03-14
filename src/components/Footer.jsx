import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="w-100 mt-4 flex-col align-center justify-center">
      <div className="footer-content flex flex-row space-evenly mb-2 flex-wrap">
        <div className="flex flex-col gap-2">
          <div>
            <span>Home</span> |<span>Terms and Conditions</span> |
            <span>Privacy Policy</span> |<span>Collection Statement</span> |
            <span>Help</span> |<span>Manage Account</span>
          </div>
          <p className="mb-2">2016 DEMO Streaming. All Rights Reserved.</p>
        </div>
        <div className="flex flex-row gap-2 space-between w-100">
          <div className="flex flex-row gap-2">
            <img
              className="social-icon"
              src="/prueba-react/assets/social/facebook-white.svg"
              alt="Facebook"
            />
            <img
              className="social-icon"
              src="/prueba-react/assets/social/twitter-white.svg"
              alt="Twitter"
            />
            <img
              className="social-icon"
              src="/prueba-react/assets/social/instagram-white.svg"
              alt="Instagram"
            />
          </div>
          <div className="flex flex-row gap-2">
            <img
              className="store-icon"
              src="/prueba-react/assets/store/app-store.svg"
              alt="App Store"
            />
            <img
              className="store-icon"
              src="/prueba-react/assets/store/play-store.svg"
              alt="Google Play"
            />
            <img
              className="store-icon"
              src="/prueba-react/assets/store/windows-store.svg"
              alt="Microsoft Store"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
