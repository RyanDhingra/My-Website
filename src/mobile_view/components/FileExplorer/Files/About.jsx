import React from 'react';
import './About.css';
import arrow from "../../../assets/images/arrow.png"

function About({ closeFile }) {
    return (
        <>
            <div className='mobile-about-file-cont'>
                <h1 className='mobile-about-file-title'>About Me</h1>

                <p className='mobile-about-file-txt'>Hello there! My name is Ryan, and I'm currently a Computer Science student at Toronto Metropolitan University. I've worked multiple terms as a Co-op at Sun Life Financial, gaining experience in software development, cloud technologies, and DevOps. In addition to my studies, I freelance in software and web development, helping clients build tailored web applications. I'm passionate about exploring areas like machine learning, computer vision, and cybersecurity. Outside of tech, I'm a former varsity badminton player and volunteer coach for kids. I'm always open to connecting with new people and exploring exciting opportunities!</p>
            </div>

            <button onClick={closeFile} className='mobile-back-btn'>
                <img className='mobile-back-btn-img' src={arrow} alt='Back' />
            </button>
        </>
    );
}

export default About;