import { useEffect } from 'react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import "../css/home.css";
import About from "../components/About";
{/*import Community from '../components/Community';*/}
import Project from '../components/Project';
import FAQ from '../components/FAQ';

const Home = ({ scrollTo }) => {
  useEffect(() => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [scrollTo]);

  const hero = [
    {
      id: 1,
      icon: faWandMagicSparkles,
      tag: "Dev & Deisng Internship",
      title: "Developer Full Stack",
      description: "Leveraging cutting-edge AI technologies into your workflow, driving efficiency, innovation, and growth.",
      btnTwo: "Book a work",
    }
  ];

  return (
    <div className="home-container">
      <section id="hero">
        {hero.map((hero, index) => (
        <motion.div
          key={hero.id}
          initial={{ 
            opacity: 0, 
            x: index % 2 === 0 ? -50 : 50
          }}
          whileInView={{ 
            opacity: 1, 
            x: 0 
          }}
          viewport={{ once: true, margin: "-50px 0px -100px 0px" }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut" 
          }}
          className="catalog-item"
        >
          <div className="hero-container">
            <div className="floating-items">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="floating-item" style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${5 + Math.random() * 10}s`
                }} />
              ))}
            </div>
            <button className="tag-hero" id="tag-text"><a><FontAwesomeIcon icon={hero.icon} id="tag-icon" />{hero.tag}</a></button>
            {/*<span className="tag-hero" id="tag-text"><a><FontAwesomeIcon icon={hero.icon} id="tag-icon" /></a>{hero.tag}</span>*/}
            <h1 className="title-hero">{hero.title}</h1>
            <p className="subtitle-hero">{hero.description}</p>
            <button className="btn-book-a-call">{hero.btnTwo}</button>
          </div>
        </motion.div>
        ))}
      </section>
      <About />
      {/*<Community />*/}
      <Project />
      <FAQ />
    </div>
  );
};

export default Home;