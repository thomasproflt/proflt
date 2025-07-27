import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import "../css/About.css";
import CatalogWithHoverEffect from '../components/CatalogWithHoverEffect';

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

const About = () => {
  const aboutHome = [
    {
      id: 1,
      icon: faLink,
      tag: "Learn more about me",
      title: "What You Will Find Here",
      description: "Some things I can help you with in your projects",
    }
  ];

  const about = [
    {
      id: 1,
      title: "Mentoring and Practical Experience",
      description: "I believe the best learning comes from practice. Every project I develop is designed to solve real problems and improve the user experience. I've also had the opportunity to receive mentorship and feedback from experienced professionals in the field.",
      number: "01",
    },
    {
      id: 2,
      title: "Hands-on Learning",
      description: "Each project is a new journey: from conception to final testing. I've learned to deal with errors, think of creative solutions, and apply best practices in software development.",
      number: "02",
    },
    {
      id: 3,
      title: "Valuable Knowledge",
      description: "My focus is on acquiring skills that really matter to the market: front-end development with React.js, back-end with Node.js, database, deployment, responsiveness, performance, and much more.",
      number: "03",
    },
    {
      id: 4,
      title: "Certifications and Recognition",
      description: "Throughout my journey, I've earned certifications that attest to my commitment and continuous development. They reflect my hard work and the quality of my work.",
      number: "04",
    }
  ];

  return (
    <section id="about">
      <div className="about-container">
        {aboutHome.map((aboutHome, index) => (
          <AnimatedCard key={aboutHome.id}>
            <div className="about-container-two">
              <button className="tag-hero" id="tag-text"><a><FontAwesomeIcon icon={aboutHome.icon} id="tag-icon" />{aboutHome.tag}</a></button>
              <h1 className="title-about">{aboutHome.title}</h1>
              <p className="description-about">{aboutHome.description}</p>
            </div>
          </AnimatedCard>
        ))}
        <div className="container-catalogs-about">
          {about.map((about, index) => (
            <AnimatedCard key={about.id}>
              <CatalogWithHoverEffect>
              <div className="catalogs-about">
                <h1 className="title-catalog-about">{about.title}</h1>
                <p className="description-catalog-about">{about.description}</p>
                <span className="number-catalog-about">{about.number}</span>
              </div>
              </CatalogWithHoverEffect>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;