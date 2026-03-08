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
    },
    {
      title: "Task Management App",
      description: "A drag-and-drop Kanban board for managing personal and team tasks.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2064&auto=format&fit=crop",
      tags: ["React", "Redux", "Styled Components"],
      github: "#",
      live: "#"
    },
    {
      title: "Fitness Tracker API",
      description: "A RESTful backend service for logging workouts, tracking nutrition, and analyzing progress.",
      image: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?q=80&w=2070&auto=format&fit=crop",
      tags: ["Node.js", "Express", "PostgreSQL", "Jest"],
      github: "#",
      live: "#"
    },
    {
      title: "Crypto Portfolio Viewer",
      description: "A real-time cryptocurrency dashboard fetching live prices and historical data charts.",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002&auto=format&fit=crop",
      tags: ["React", "Chart.js", "CoinGecko API"],
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
