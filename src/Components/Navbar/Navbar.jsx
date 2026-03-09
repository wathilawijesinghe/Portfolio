import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
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

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Portfolio", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

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
          <AnchorLink href="#home">
            <h1 style={{ color: "white", fontSize: "2rem", margin: 0, fontWeight: "bold" }}>Portfolio<span style={{color: "#a855f7"}}>.</span></h1>
          </AnchorLink>
        </motion.div>
        
        <ul className="nav-menu">
          {navItems.map((item) => (
            <motion.li 
              key={item.name}
              className={activeItem === item.name ? "active" : ""}
              onClick={() => setActiveItem(item.name)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <AnchorLink className="anchor-link" href={`#${item.id}`}>
                {item.name}
              </AnchorLink>
              {activeItem === item.name && (
                <motion.div 
                  layoutId="nav-indicator"
                  className="nav-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>
        
        <motion.div 
          className="nav-connect"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          <AnchorLink className="anchor-link-btn" href="#contact">Connect With Me</AnchorLink>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;