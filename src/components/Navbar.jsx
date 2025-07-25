import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import navAetheris from "../assets/monogram-ts.png";
import "../css/Navbar.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);
  const placeholderRef = useRef(null);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const navbar = navbarRef.current;
    const placeholder = placeholderRef.current;

    const onScroll = () => {
      if (!navbar) return;
      const offsetTop = placeholder.getBoundingClientRect().top;

      if (offsetTop <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Placeholder para manter o layout quando a navbar fixa */}
      <div ref={placeholderRef} style={{ height: isSticky ? `${navbarRef.current?.offsetHeight}px` : 0 }} />
      
      <nav ref={navbarRef} className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="navbar-logo-container" onClick={() => scrollToSection('hero')}>
          <img src={navAetheris} alt="Logo-Aetheris" className="navbar-logo" />
        </div>

        <div className="navbar-links">
          <a className="nav-link" onClick={() => scrollToSection('about')}>About</a>
          <a className="nav-link" onClick={() => scrollToSection('courses')}>Courses</a>
          <a className="nav-link" onClick={() => scrollToSection('process')}>Process</a>
          <a className="nav-link" onClick={() => scrollToSection('community')}>Community</a>
          <a className="nav-link" onClick={() => scrollToSection('project')}>Project</a>
          <a className="nav-link" onClick={() => scrollToSection('faq')}>FAQ</a>
        </div>

        <div className="button-book-a-work">
          <button className="btn-book-a-work">Book a Work</button>
        </div>

        <button className="mobile-menu-button" onClick={toggleMobileMenu}>☰</button>

        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('courses')}>Courses</a>
          <a onClick={() => scrollToSection('process')}>Process</a>
          <a onClick={() => scrollToSection('community')}>Community</a>
          <a onClick={() => scrollToSection('project')}>Project</a>
          <a onClick={() => scrollToSection('faq')}>FAQ</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
