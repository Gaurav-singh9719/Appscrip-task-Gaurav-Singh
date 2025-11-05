import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>BE THE FIRST TO KNOW</h2>
        <p>Sign up for updates from mettamuse.</p>
        <div className="footer-subscribe">
          <input type="email" placeholder="Enter your e-mail..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4>CURRENCY</h4>
          <p>USD</p>
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>FOLLOW US</h4>
          <p>Instagram / Facebook / LinkedIn</p>

          <h4>mettamuse ACCEPTS</h4>
          <div className="footer-payments">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/PayPal.svg" alt="PayPal" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Appscrip Task — Gaurav Thakur</p>
      </div>
    </footer>
  );
};

export default Footer;
