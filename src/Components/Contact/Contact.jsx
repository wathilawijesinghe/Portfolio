import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div id="contact" className="contact" ref={ref}>
      <motion.div 
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Get in <span className="text-accent-gradient">Touch</span></h2>
        <div className="title-underline"></div>
      </motion.div>

      <div className="contact-sections">
        <motion.div 
          className="contact-left glass-panel"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 variants={itemVariants}>Let's talk</motion.h3>
          <motion.p variants={itemVariants}>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </motion.p>
          
          <div className="contact-details">
            <motion.div className="contact-detail" variants={itemVariants}>
              <div className="contact-icon"><Mail size={24} /></div>
              <p>hello@wathila.com</p>
            </motion.div>
            <motion.div className="contact-detail" variants={itemVariants}>
              <div className="contact-icon"><Phone size={24} /></div>
              <p>+94 77 123 4567</p>
            </motion.div>
            <motion.div className="contact-detail" variants={itemVariants}>
              <div className="contact-icon"><MapPin size={24} /></div>
              <p>Colombo, Sri Lanka</p>
            </motion.div>
          </div>

          <motion.div className="contact-socials" variants={itemVariants}>
            <a href="#" className="social-icon"><Github size={24} /></a>
            <a href="#" className="social-icon"><Linkedin size={24} /></a>
            <a href="#" className="social-icon"><Twitter size={24} /></a>
          </motion.div>
        </motion.div>

        <motion.form 
          className="contact-right glass-panel"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Write your message here</label>
            <textarea id="message" rows="6" placeholder="Enter your message"></textarea>
          </div>
          <motion.button 
            type="submit" 
            className="submit-btn"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Submit now
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
