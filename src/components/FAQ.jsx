import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "../css/FAQ.css";

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

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedCard index={index}>
      <motion.div 
        className={`faq-item ${isOpen ? 'open' : ''}`}
        initial={false}
      >
        <motion.div 
          className="faq-question" 
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <h3>{question}</h3>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
          </motion.div>
        </motion.div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="faq-answer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p>{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatedCard>
  );
};

const FAQ = () => {
  const faqHome = {
    id: 1,
    icon: faQuestion,
    tag: "FAQ",
    title: "Frequently Asked Questions",
    description: "Find answers to the most common questions about our products and services.",
  };

  const faqItems = [
    {
      id: 1,
      question: "How can I apply?",
      answer: "You can register via our website by clicking the 'Register' button in the top right corner.",
    },
    {
      id: 2,
      question: "What are the payment methods?",
      answer: "We accept credit cards, debit cards, Pix and bank slips.",
    },
    {
      id: 3,
      question: "What is the refund policy?",
      answer: "We offer full refunds within the first 30 days of purchase.",
    },
    {
      id: 4,
      question: "How do I contact support?",
      answer: "You can contact us via our online chat or by sending an email to suporte@empresa.com.",
    },
  ];

  return (
    <section id="faq">
      <div className="faq-container">
        <AnimatedCard key={faqHome.id} index={0}>
          <div className="faq-header">
            <button className="tag-hero" id="tag-text"><a><FontAwesomeIcon icon={faqHome.icon} id="tag-icon" />{faqHome.tag}</a></button>
            {/*<span className="tag-faq">
                            
              {faqHome.icon && <FontAwesomeIcon icon={faqHome.icon} className="tag-text" />} {faqHome.tag}
            </span>*/}
            <h1 className="title-faq">{faqHome.title}</h1>
            <p className="description-faq">{faqHome.description}</p>
          </div>
        </AnimatedCard>
        
        <div className="faq-items-container">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={item.id}
              question={item.question}
              answer={item.answer}
              index={index + 1} // +1 porque o header é index 0
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;