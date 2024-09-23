import React from 'react';
import './Transcript.css';
import arrow from "../../../assets/images/arrow.png"

function Transcript({ closeFile }) {
    return (
        <>
            <div className='mobile-transcript-file-cont'>
                <div className='mobile-transcript-file-header'>
                    <h1 className='mobile-transcript-title'>Bachelors of Computer Science (Honours)</h1>
                    <h2 className='mobile-transcript-subtitle'>Toronto Metropolitan University Transcript</h2>
                </div>
                <div className='mobile-transcript-file-body'>
                    <h2 className='mobile-transcript-body-title'>Year 1</h2>

                    <h4 className='mobile-transcript-body-subtitle'>Fall 2021:</h4>
                    <p className='mobile-transcript-body-txt'>General Chemistry I</p>
                    <p className='mobile-transcript-body-txt'>Computer Science I</p>
                    <p className='mobile-transcript-body-txt'>Computer Organization I</p>
                    <p className='mobile-transcript-body-txt'>Discrete Mathematics I</p>
                    <p className='mobile-transcript-body-txt'>Intro to Astronomy</p>

                    <h4 className='mobile-transcript-body-subtitle'>Winter 2022:</h4>
                    <p className='mobile-transcript-body-txt'>Computer Science II</p>
                    <p className='mobile-transcript-body-txt'>Computer Organization II</p>
                    <p className='mobile-transcript-body-txt'>Social Issues, Ethics and Professionalism</p>
                    <p className='mobile-transcript-body-txt'>Calculus and Computational Methods I</p>
                    <p className='mobile-transcript-body-txt'>Problems in Philosophy</p>

                    <h2 className='mobile-transcript-body-title'>Year 2</h2>

                    <h4 className='mobile-transcript-body-subtitle'>Fall 2022:</h4>
                    <p className='mobile-transcript-body-txt'>Communication in the Computer Industry</p>
                    <p className='mobile-transcript-body-txt'>Data Structures</p>
                    <p className='mobile-transcript-body-txt'>Intro to C and UNIX</p>
                    <p className='mobile-transcript-body-txt'>Web Systems Development</p>
                    <p className='mobile-transcript-body-txt'>Linear Algebra</p>

                    <h4 className='mobile-transcript-body-subtitle'>Winter 2023:</h4>
                    <p className='mobile-transcript-body-txt'>Probability and Statistic I</p>
                    <p className='mobile-transcript-body-txt'>Operating Systems I</p>
                    <p className='mobile-transcript-body-txt'>Intro to Software Engineering</p>
                    <p className='mobile-transcript-body-txt'>Comparative Programming Languages</p>
                    <p className='mobile-transcript-body-txt'>Discrete Structures</p>

                    <h2 className='mobile-transcript-body-title'>Year 3</h2>

                    <h4 className='mobile-transcript-body-subtitle'>Fall 2023:</h4>
                    <p className='mobile-transcript-body-txt'>Alternative Energies</p>
                    <p className='mobile-transcript-body-txt'>Social Context of Human Sexuality</p>
                    <p className='mobile-transcript-body-txt'>The Physical Environment</p>
                    <p className='mobile-transcript-body-txt'>Database Systems I</p>
                    <p className='mobile-transcript-body-txt'>Computer Security I</p>
                    <p className='mobile-transcript-body-txt'>Artificial Intelligence I</p>
                    <p className='mobile-transcript-body-txt'>Intro to Global Management</p>

                    <h4 className='mobile-transcript-body-subtitle'>Winter 2024:</h4>
                    <p className='mobile-transcript-body-txt'>Geography of Canadian North</p>
                    <p className='mobile-transcript-body-txt'>Algorithms</p>
                    <p className='mobile-transcript-body-txt'>Intro to Multimedia Systems</p>
                    <p className='mobile-transcript-body-txt'>Web Applications</p>
                    <p className='mobile-transcript-body-txt'>Computer Networks I</p>
                    <p className='mobile-transcript-body-txt'>Data Mining</p>
                    <p className='mobile-transcript-body-txt'>Software Tools for Startups</p>

                    <h4 className='mobile-transcript-body-subtitle'>Summer 2024:</h4>
                    <p className='mobile-transcript-body-txt'>Photoshopped! The Art of Image Retouching</p>
                    <p className='mobile-transcript-body-txt'>Technology and the Contemporary Environment</p>

                    <h2 className='mobile-transcript-body-title'>Year 4</h2>

                    <h4 className='mobile-transcript-body-subtitle'>Fall 2024:</h4>
                    <p className='mobile-transcript-body-txt'>Intro to Game Design</p>
                    <p className='mobile-transcript-body-txt'>Computer Vision</p>
                    <p className='mobile-transcript-body-txt'>Computer Graphics</p>
                    <p className='mobile-transcript-body-txt'>3D Printing</p>


                    <br />
                    <br />
                    <br />
                </div>
            </div>

            <button className='mobile-back-btn' onClick={closeFile}>
                <img className='mobile-back-btn-img' src={arrow} alt='Back' />
            </button>
        </>
    );
}

export default Transcript;