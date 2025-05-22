import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';
import myPhoto from '../assets/profile.jpg';
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div 
          className="section-title-container"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="image-container">
              <img 
                src={myPhoto} alt="My Portfolio Photo" 
              />
              <div className="about-pattern"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Full Stack Developer</h3>
            <p>
              I am a passionate Full Stack Developer with a strong foundation in web development. I have experience in building responsive and user-friendly applications using modern technologies.
            </p>
            <p>
              My expertise includes React, Express , and modern JavaScript frameworks (Vue). I focus on writing clean, efficient code and enjoy solving complex problems with simple, elegant solutions.
            </p>
            
            <div className="about-details">
              <div className="about-detail-item">
                <h4>Name:</h4>
                <p>Subramaniyasiva</p>
              </div>
              <div className="about-detail-item">
                <h4>Email:</h4>
                <p>sssubramaniyasiva@gmail.com</p>
              </div>
              <div className="about-detail-item">
                <h4>From:</h4>
                <p>Coimbatore , Tamil Nadu</p>
              </div>
              <div className="about-detail-item">
                <h4>Freelance:</h4>
                <p>Available</p>
              </div>
            </div>
            
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;