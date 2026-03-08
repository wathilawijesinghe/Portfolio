import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About Me", "Services", "Portfolio", "Contact"];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`navbar ${scrolled ? "scrolled glass-panel" : ""}`}
    >
      <div className="nav-content">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={logo} alt="Logo" />
        </motion.div>
        
        <ul className="nav-menu">
          {navItems.map((item) => (
            <motion.li 
              key={item}
              className={activeItem === item ? "active" : ""}
              onClick={() => setActiveItem(item)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item}
              {activeItem === item && (
                <motion.div 
                  layoutId="nav-indicator"
                  className="nav-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>
        
        <motion.button 
          className="nav-connect"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Connect With Me
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;