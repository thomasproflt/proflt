import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import navAetheris from "../assets/favicon.png";
import "../css/Navbar.css";

const Navbar = () => {
  const navbarRef = useRef(null);
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav ref={navbarRef} className="navbar">
      <div className="navbar-logo-container" onClick={() => scrollToSection("hero")}>
        <img src={navAetheris} alt="Logo-Aetheris" className="navbar-logo" />
      </div>

      <div className="navbar-links">
        <a className="nav-link" onClick={() => scrollToSection("about")}>About</a>
        <a className="nav-link" onClick={() => scrollToSection("courses")}>Courses</a>
        <a className="nav-link" onClick={() => scrollToSection("process")}>Process</a>
        <a className="nav-link" onClick={() => scrollToSection("community")}>Community</a>
        <a className="nav-link" onClick={() => scrollToSection("project")}>Project</a>
        <a className="nav-link" onClick={() => scrollToSection("faq")}>FAQ</a>
      </div>

      <button className="mobile-menu-button" onClick={toggleMobileMenu}>☰</button>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <a onClick={() => scrollToSection("about")}>About</a>
        <a onClick={() => scrollToSection("courses")}>Courses</a>
        <a onClick={() => scrollToSection("process")}>Process</a>
        <a onClick={() => scrollToSection("community")}>Community</a>
        <a onClick={() => scrollToSection("project")}>Project</a>
        <a onClick={() => scrollToSection("faq")}>FAQ</a>
      </div>
    </nav>
  );
};

export default Navbar;