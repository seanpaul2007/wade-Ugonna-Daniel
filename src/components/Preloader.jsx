import React, { useEffect } from 'react';
import '../styles/Preloader.css';

const Preloader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          if (preloader.parentNode) {
            preloader.parentNode.removeChild(preloader);
          }
        }, 1000);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preloader">
      <div className="circle-loader">
        {[...Array(8)].map((_, i) => (
          <div className="orbit-dot" key={i} style={{ '--i': i }}></div>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
