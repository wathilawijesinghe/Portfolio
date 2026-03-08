import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [visibleCount, setVisibleCount] = useState(3);

  const projectsData = [
    {
      title: "Job Application Tracker",
      description: "A web application to track job applications, their statuses, and relevant notes.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "JavaScript", "CSS"],
      github: "https://github.com/wathilawijesinghe/Job-Application-Tracker",
      live: "#"
    },
    {
      title: "Calculator App",
      description: "A functional calculator application for basic arithmetic operations.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=2000&auto=format&fit=crop",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/wathilawijesinghe/Calculator-App",
      live: "#"
    },
    {
      title: "ToDo App",
      description: "A task management application to keep track of daily goals and activities.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
      tags: ["React", "JavaScript"],
      github: "https://github.com/wathilawijesinghe/ToDo-App",
      live: "#"
    },
    {
      title: "Zip Trip",
      description: "A comprehensive backend system for a trip planning and booking application.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
      tags: ["Java", "Spring Boot", "MySQL"],
      github: "https://github.com/wathilawijesinghe/ZipTripNew",
      live: "#"
    },
    {
      title: "Nature Pollution Web App",
      description: "An educational web platform highlighting the impact of environmental pollution and promoting conservation.",
      image: "https://images.unsplash.com/photo-1621451537084-482c73073e0f?q=80&w=1974&auto=format&fit=crop",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/wathilawijesinghe/Nature-Pollution-Web-App",
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
        {projectsData.slice(0, visibleCount).map((project, index) => (
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
      
      {visibleCount < projectsData.length ? (
        <motion.button 
          className="view-more-btn"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setVisibleCount(projectsData.length)}
        >
          Show More
        </motion.button>
      ) : (
        <motion.button 
          className="view-more-btn"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setVisibleCount(3)}
        >
          Show Less
        </motion.button>
      )}
    </div>
  );
};

export default Projects;
