import logo from "../assets/images/logo.svg";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo">
          <img src={logo} alt="website-logo" />
        </div>
        <ul className="navbar-link">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
