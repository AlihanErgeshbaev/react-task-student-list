import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer_1">
        <div className="container">
          <div className="nav_footer">
            <div caclassName="support">
              <h6>Company</h6>
              <ul>
                <li>About Us</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="support">
              <h6>Support</h6>
              <ul>
                <li>Help Center</li>
                <li>Safety Center</li>
                <li>Community</li>
              </ul>
            </div>
            <div className="support">
              <h6>Legal</h6>
              <ul>
                <li>Cookies Policy</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
