import React from 'react';
import '../css/Loader.css';

const Loader = () => {
  return (
    <div className="loader-coffee-container">
      <div className="coffee-cup">
        <div className="steam steam1"></div>
        <div className="steam steam2"></div>
        <div className="steam steam3"></div>
        <div className="cup"></div>
        <div className="plate"></div>
      </div>
      <p className="loading-text">Preparando o portfólio...</p>
    </div>
  );
};

export default Loader;