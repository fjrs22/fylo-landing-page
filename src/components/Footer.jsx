import footerLogo from "../assets/images/logo.svg";
import locationLogo from "../assets/images/icon-location.svg";
import phone from "../assets/images/icon-phone.svg";
import email from "../assets/images/icon-email.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img src={footerLogo} alt="footer-logo" className="footer-logo" />
      </div>
      <div className="footer-container container">
        <div className="footer-location">
          <img src={locationLogo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            cumque quae officia reprehenderit minus? Id!
          </p>
        </div>
        <div className="footer-contact">
          <div className="wrapper">
            <img src={phone} alt="logo" />
            <p>+1-543-123-4567</p>
          </div>
          <div className="wrapper">
            <img src={email} alt="logo" />
            <p>example@fylo.com</p>
          </div>
        </div>
        <div className="footer-nav">
          <ul>
            <li>About us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blogs</li>
          </ul>
          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="footer-sosmed">
          <FaFacebook className="sosmed" />
          <FaTwitter className="sosmed" />
          <FaInstagram className="sosmed" />
        </div>
      </div>
    </footer>
  );
}
