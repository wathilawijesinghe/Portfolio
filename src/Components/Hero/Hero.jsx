import { motion } from 'framer-motion';
import AnchorLink from "react-anchor-link-smooth-scroll";
import './Hero.css'
import profile_img from '../../assets/wathila.jpg'

const Hero = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                current: { staggerChildren: 0.2 },
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            id="home"
            className='hero'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="hero-glow-orb"></div>

            <motion.div variants={itemVariants} className="hero-img-container">
                <img src={profile_img} alt="Wathila Wijesinghe" />
            </motion.div>

            <motion.h1 variants={itemVariants}>
                <span className="text-accent-gradient">I'm Wathila Wijesinghe,</span><br /> frontend developer based in Sri Lanka.
            </motion.h1>

            <motion.p variants={itemVariants}>
                I’m a passionate Frontend Developer with a strong interest in creating modern, responsive, and user-friendly web applications. I specialize in React and enjoy building clean interfaces with smooth interactions. I’m always eager to learn new technologies and improve my skills while turning creative ideas into real-world solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-action">
                <AnchorLink className="hero-anchor" href="#contact" offset={50}>
                    <motion.div
                        className="hero-connect"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Connect with me
                    </motion.div>
                </AnchorLink>
                <AnchorLink className="hero-anchor" href="#about" offset={50}>
                    <motion.div
                        className="hero-resume glass-panel"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        My resume
                    </motion.div>
                </AnchorLink>
            </motion.div>
        </motion.div>
    )
}

export default Hero