import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Hide intro after exactly 2.5s
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);

    // Inject image exact at 1.6s
    const imgTimer = setTimeout(() => {
      setImageSrc("https://res.cloudinary.com/dphe5xhwj/image/upload/f_auto,q_auto,fl_progressive:steep/v1777359711/f_u_upi_oudsix.jpg");
    }, 1600);

    return () => {
      clearTimeout(timer);
      clearTimeout(imgTimer);
    };
  }, []);

  return (
    <>
      {showIntro && (
        <div className="intro-container" style={{ position: 'fixed', top: 0, left: 0, zIndex: 50 }}>
          <h1 className="intro-title">
            <span className="i-orange">I</span>
            <span className="i-white">I</span>
            <span className="i-green">I</span> UNITED UPI
          </h1>
          <h2 className="intro-subtitle typewriter-effect">
            <span className="text-dark">Digital India </span>
            <span className="text-orange">Pays widely, </span>
            <span className="text-green">But tracks partially.</span>
          </h2>
        </div>
      )}

      <div className="main-container">
        {imageSrc && (
          <img
            src={imageSrc}
            alt="United UPI Case Study"
            className="case-study-image"
            loading="eager"
            fetchPriority="high"
          />
        )}
      </div>
    </>
  );
}

export default App;
