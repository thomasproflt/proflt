import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faArrowUpRightFromSquare, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "../css/Project.css";

import CatalogWithHoverEffectProject from '../components/CatalogWithHoverEffectProject';

import project1 from "../assets/project-1.webp";
import project2 from "../assets/project-2.webp";
import project3 from "../assets/project-3.webp";

const AnimatedCard = ({ children, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px 0px -100px 0px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="catalog-item"
  >
    {children}
  </motion.div>
);

const Project = () => {
  const projectHome = [
    {
        id: 1,
        icon: faListCheck,
        tag: "Projects",
        title: "Featured Projects",
        description: "Here are some of my recent projects. Each project was carefully crafted with attention to detail, perfomance, and user experience.",
    }
  ];

  const project = [
    {
        id: 1,
        image: project1,
        tags: ["UI Design", "Frontend", "React"], // ou "UI Design, Frontend, React"
        title: "Spotify Redesign",
        description: "Modern redesign of Spotify interface with dark mode and new features.",
        iconD: [faArrowUpRightFromSquare, faGithub],
    },
    {
        id: 2,
        image: project3,
        tags: ["tag1", "tag2", "tag3"],
        title: "DeepSeek",
        description: "Each course will take you through the entire process of completing and testing a project.",
        iconD: [faArrowUpRightFromSquare, faGithub],
    },
    {
        id: 3,
        image: project3,
        tags: ["tag1", "tag2"],
        title: "DeepSeek",
        description: "Each course will take you through the entire process of completing and testing a project.",
        iconD: [faArrowUpRightFromSquare, faGithub],
    }
  ];

  return (
    <section id="project">
      <div className="project-container">
        {projectHome.map((projectHome) => (
          <AnimatedCard key={projectHome.id}>
            <div className="project-container">
              <button className="tag-hero" id="tag-text"><a><FontAwesomeIcon icon={projectHome.icon} id="tag-icon" />{projectHome.tag}</a></button>
              <h1 className="title-project">{projectHome.title}</h1>
              <p className="description-project">{projectHome.description}</p>
            </div>
          </AnimatedCard>
        ))}
        <div className="container-catalogs-project">
          {project.map((project) => (
            <AnimatedCard key={project.id}>
            <CatalogWithHoverEffectProject>
            <div className="catalogs-project">
              <img src={project.image} className="img-project" />
              <div className="tags-catalog-project">
                {(Array.isArray(project.tags) ? project.tags : project.tags.split(',')).map((tag, i) => (
                  <span key={i} className="tag-item">{tag.trim()}</span>
                ))}
              </div>
              <h1 className="title-catalog-project">{project.title}</h1>
              <p className="description-catalog-project">{project.description}</p>
            </div>
            </CatalogWithHoverEffectProject>
            </AnimatedCard>
          ))}
        </div>
        <AnimatedCard>
            <button className="check-my-github">Check My Github <span><FontAwesomeIcon icon={faArrowRight} className="icon-arrow-project-btn" /></span></button>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default Project;