import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projectsData = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing products, orders, and users with real-time analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Node.js", "Tailwind", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "AI Image Generator",
      description: "A web application that generates images from text prompts using OpenAI's DALL-E API.",
      image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2032&auto=format&fit=crop",
      tags: ["Next.js", "OpenAI", "Framer Motion", "CSS"],
      github: "#",
      live: "#"
    },
    {
      title: "Real Estate Platform",
      description: "A property listing platform with advanced filtering, map integration, and virtual tours.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
      tags: ["React", "Firebase", "Google Maps", "Sass"],
      github: "#",
      live: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div id="projects" className="projects" ref={ref}>
      <motion.div 
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Latest <span className="text-accent-gradient">Projects</span></h2>
        <div className="title-underline"></div>
      </motion.div>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projectsData.map((project, index) => (
          <motion.div key={index} className="project-card glass-panel" variants={itemVariants}>
            <div className="project-img-container">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.github} className="project-link">
                  <Github size={20} />
                </a>
                <a href={project.live} className="project-link">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.button 
        className="view-more-btn"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Show More
      </motion.button>
    </div>
  );
};

export default Projects;
