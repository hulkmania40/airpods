import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);  // Fade in when the section is in view
          } else {
            setIsVisible(false); // Fade out when the section goes out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger the observer when at least 50% of the section is in view
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-us ${isVisible ? 'visible' : ''}`}
    >
      <h2>About Us</h2>
      <p>We are passionate about bringing you the best tech content and experiences.</p>
    </section>
  );
};

export default About;
