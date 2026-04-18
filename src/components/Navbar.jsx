import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import nclogo from "../assets/Nepalese_Election_Symbol_Tree_Green.svg.png";
import ncflag from "../assets/image.png";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="navbar">
      {/* Top strip */}
      <div className="navbar-top-strip">
        <span>नेपाली कांग्रेस — राष्ट्रियता लोकतन्त्र समाजवाद</span>
      </div>

      {/* Main header */}
      <div className="navbar-main">
        <Link to="/" className="navbar-brand">
          <div className="nc-flag-container">
            <img src={nclogo} alt="NC Logo" className="nc-flag" />
          </div>
          <div className="navbar-title-group">
            <span className="navbar-title-main">नेपाली कांग्रेस</span>
            <span className="navbar-title-sub">
              कुश्मी-गाउँ काठमाडौं सम्पर्क समिति
            </span>
          </div>
        </Link>

        <nav className="navbar-nav">
          <Link
            to="/"
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
          >
            🏠 गृहपृष्ठ
          </Link>
          <Link
            to="/samiti"
            className={`nav-link ${pathname === "/samiti" ? "active" : ""}`}
          >
            👥 समिति
          </Link>
          <Link
            to="/notice"
            className={`nav-link ${pathname === "/notice" ? "active" : ""}`}
          >
            📢 सूचना
          </Link>
          <div className="nc-flag-container">
            <img src={ncflag} alt="NC Flag" className="nc-flag" />
          </div>
        </nav>
      </div>
    </header>
  );
}
