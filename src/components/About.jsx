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
      title: "What's in it for you?",
      description: "Gain all the skills you need to kick-start your profissional path through mentoring by industry professionals.",
    }
  ];

  const about = [
    {
      id: 1,
      title: "Hands-on learning",
      description: "Each course will take you through the entire process of completing and testing a project.",
      number: "01",
    },
    {
      id: 2,
      title: "Mentorship by our experts",
      description: "Take advantage of your mentor's expertise and gain industry-relevant feedback.",
      number: "02",
    },
    {
      id: 3,
      title: "Widely applicable skills",
      description: "The Academy is designed to give you a solid foundation and boost your professional growth.",
      number: "03",
    },
    {
      id: 4,
      title: "Street cred",
      description: "Upon completion you will receive a certificate verifying your new skills!",
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