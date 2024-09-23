import React from 'react';
import './Skills.css';
import arrow from "../../../assets/images/arrow.png"

function Skills({ closeFile }) {
    return (
        <>
            <div className='mobile-skills-file-cont'>
                <h1 className='mobile-skills-file-title'>
                    Programming Languages
                </h1>

                <p className='mobile-skills-file-txt'>- Bash/Scripting</p>
                <p className='mobile-skills-file-txt'>- C, C++</p>
                <p className='mobile-skills-file-txt'>- Java (Springboot, Swing, Junit, Mockito)</p>
                <p className='mobile-skills-file-txt'>- Javascript (Express, Node, React, Vite, React Native)</p>
                <p className='mobile-skills-file-txt'>- PHP</p>
                <p className='mobile-skills-file-txt'>- Python (Flask, Tkinter, Numpy, Pandas, Matplotlib, Scikit)</p>
                <p className='mobile-skills-file-txt'>- Rust</p>
                <p className='mobile-skills-file-txt'>- MySQL (PostgreSQL)</p>

                <h1 className='mobile-skills-file-title'>
                    Software/Tools
                </h1>

                <p className='mobile-skills-file-txt'>- Amazon Web Services (RDS, Lambda, Lex, Kendra, Bedrock, S3)</p>
                <p className='mobile-skills-file-txt'>- Artifactory</p>
                <p className='mobile-skills-file-txt'>- Bitbucket</p>
                <p className='mobile-skills-file-txt'>- CockroachDB</p>
                <p className='mobile-skills-file-txt'>- Confluence</p>
                <p className='mobile-skills-file-txt'>- Docker</p>
                <p className='mobile-skills-file-txt'>- Figma</p>
                <p className='mobile-skills-file-txt'>- Git/Github</p>
                <p className='mobile-skills-file-txt'>- Gradle</p>
                <p className='mobile-skills-file-txt'>- Google Cloud (VM)</p>
                <p className='mobile-skills-file-txt'>- Jenkins</p>
                <p className='mobile-skills-file-txt'>- Jira</p>
                <p className='mobile-skills-file-txt'>- Kubernetes</p>
                <p className='mobile-skills-file-txt'>- Openshift</p>
                <p className='mobile-skills-file-txt'>- Poetry</p>
                <p className='mobile-skills-file-txt'>- Postman</p>
                <p className='mobile-skills-file-txt'>- Quay</p>
                <p className='mobile-skills-file-txt'>- Sharepoint</p>
                <p className='mobile-skills-file-txt'>- Virtualbox</p>
                <p className='mobile-skills-file-txt'>- Visual Studio Code</p>

                <h1 className='mobile-skills-file-title'>
                    Technical Skills
                </h1>

                <p className='mobile-skills-file-txt'>- Agile Software Development and Scrum Methodology</p>
                <p className='mobile-skills-file-txt'>- Analytical Thinking in Software Development</p>
                <p className='mobile-skills-file-txt'>- Technical Research and Exploration</p>
                <p className='mobile-skills-file-txt'>- Adherence to Software Development Best Practices</p>
                <p className='mobile-skills-file-txt'>- Complex Problem Solving</p>
                <p className='mobile-skills-file-txt'>- Scalable System Design and Software Architecture</p>
                <p className='mobile-skills-file-txt'>- Debugging and Issue Resolution</p>
                <p className='mobile-skills-file-txt'>- Performance Tuning and Optimization</p>
                <p className='mobile-skills-file-txt'>- Conducting Thorough Code Reviews</p>
                <p className='mobile-skills-file-txt'>- Creating Extensive and Precise Documentation</p>

                <h1 className='mobile-skills-file-title'>
                    Soft Skills
                </h1>

                <p className='mobile-skills-file-txt'>- Effective Communication (Multilingual)</p>
                <p className='mobile-skills-file-txt'>- Team Collaboration and Leadership</p>
                <p className='mobile-skills-file-txt'>- Time Management and Prioritization</p>
                <p className='mobile-skills-file-txt'>- Adaptability and Learning Agility</p>
                <p className='mobile-skills-file-txt'>- Creative Problem Solving</p>
                <p className='mobile-skills-file-txt'>- Conflict Resolution and Mediation</p>
                <p className='mobile-skills-file-txt'>- Decision Making Under Pressure</p>
                <p className='mobile-skills-file-txt'>- Attention to Detail</p>
                <p className='mobile-skills-file-txt'>- Mentorship and Knowledge Sharing</p>
            </div>

            <button className='mobile-back-btn' onClick={closeFile}>
                <img className='mobile-back-btn-img' src={arrow} alt='Back' />
            </button>
        </>
    );
}

export default Skills;