import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const skills = [
    { name: 'HTML & CSS', level: 80 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 75 },
    { name: 'Python', level: 90 },
    { name: 'Vue', level: 80 },
    { name: 'MySQL', level: 80 },
    { name: 'Bootstrap', level: 65 },
  ];
  
  const technologies = [
    'React', 'Express', 'MongoDB', 'MySQL', 
    'Bootstrap', 'JavaScript', 'TailwindCSS', 'Git',
     'Python', 'Vue.js'
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div 
          className="section-title-container"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            My technical level and technologies I've been working with
          </p>
        </motion.div>
        
        <div className="skills-content">
          <motion.div 
            className="skills-bars"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Technical Skills</h3>
            
            <div className="skill-bars-container">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="skills-tags"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Technologies</h3>
            
            <div className="skill-tags-container">
              {technologies.map((tech, index) => (
                <motion.div 
                  className="skill-tag" 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'var(--accent)' }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;