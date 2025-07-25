import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import "../css/Community.css";

import imgCM from "../assets/discord-community.png";
import CatalogWithHoverEffect from "./CatalogWithHoverEffect";

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

const Community = () => {
  const communityHome = [
    {
      id: 1,
      icon: faCommentDots,
      tag: "Community",
      title: "My Community",
      description: "A community focused on connecting people generating ideas and creative work.",
    }
  ];

  const community = [
    {
      id: 1,
      image: imgCM,
      title: "Question 1",
      description: "Each course will take you through the entire process of completing and testing a project.",
    }
  ];

  return (
    <section id="community">
      <div className="community-container">
        {communityHome.map((communityHome) => (
          <AnimatedCard key={communityHome.id}>
            <div className="community-container">
              <button className="tag-hero" id="tag-text"><a><FontAwesomeIcon icon={communityHome.icon} id="tag-icon" />{communityHome.tag}</a></button>
              <h1 className="title-community">{communityHome.title}</h1>
              <p className="description-community">{communityHome.description}</p>
            </div>
          </AnimatedCard>
        ))}
        <div className="container-catalogs-community">
          {community.map((community) => (
            <AnimatedCard key={community.id}>
              <div className="catalogs-community">
                <img src={community.image} alt={community.title} className="img-community" />
                <h1 className="title-catalog-community">{community.title}</h1>
                <p className="description-catalog-community">{community.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;