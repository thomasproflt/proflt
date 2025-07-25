import React, { useRef } from 'react';
import '../css/CatalogWithHoverEffect.css';

const CatalogWithHoverEffect = ({ children }) => {
  const catalogRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!catalogRef.current) return;
    
    const rect = catalogRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    catalogRef.current.style.setProperty('--mouse-x', `${x}px`);
    catalogRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={catalogRef}
      className="catalogs-about"
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export default CatalogWithHoverEffect;