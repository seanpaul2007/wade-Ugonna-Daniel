import '../styles/Skill.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', icon: 'g', level: 95 },
    { name: 'CSS', icon: 'f', level: 90 },
    { name: 'JavaScript', icon: 'd', level: 85 },
    { name: 'React', icon: 's', level: 80 },
    { name: 'Node.js', icon: 'a', level: 20 },
    { name: 'Tailwind CSS', icon: 'x', level: 90 },
    { name: 'MongoDB', icon: 'v', level: 50 },
    { name: 'Git', icon: 'n', level: 85 },
    { name: 'Figma', icon: 'm', level: 85 },
  ];

  const professionalSkills = [
    { name: 'Communication', level: 90 },
    { name: 'Teamwork', level: 95 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Creativity', level: 80 },
    { name: 'Project Management', level: 75 },
    { name: 'Time Management', level: 85 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        
        <div className="skills-container">
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="progress-bar">
                      <div 
                        className="progress" 
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="progress-text">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="professional-skills">
            <h3>Professional Skills</h3>
            <div className="prof-skills-container">
              {professionalSkills.map((skill, index) => (
                <div className="prof-skill-item" key={index}>
                  <div className="prof-skill-info">
                    <h4>{skill.name}</h4>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="prof-progress-bar">
                    <div 
                      className="prof-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;