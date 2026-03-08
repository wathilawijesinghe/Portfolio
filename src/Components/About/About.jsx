import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import './About.css'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div id="about" className="about" ref={ref}>
            <motion.div 
                className="about-title"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
            >
                <h2>About <span className="text-accent-gradient">Me</span></h2>
                <div className="title-underline"></div>
            </motion.div>
            
            <div className="about-sections">
                <motion.div 
                    className="about-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="about-img-wrapper glass-panel">
                        <img src={profile_img} alt="Profile" />
                    </div>
                </motion.div>
                
                <motion.div 
                    className="about-right glass-panel"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="about-para">
                        <p>I’m Wathila Wijesinghe, a passionate Fullstack developer based in Sri Lanka. I enjoy creating modern, responsive, and visually appealing web applications with a strong focus on user experience. I love turning ideas into interactive digital products using clean code and thoughtful design.</p>
                        <p>I specialize in building interfaces with React.js, JavaScript, HTML, and CSS, and I’m always eager to learn new technologies and improve my skills. I enjoy solving problems, experimenting with creative designs, and continuously growing as a developer to deliver high-quality and user-friendly solutions.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About