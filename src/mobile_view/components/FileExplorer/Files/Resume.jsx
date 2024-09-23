import React from 'react';
import './Resume.css';
import resume from "../../../assets/images/resume.png";
import download from "../../../assets/images/download.png";
import expand from "../../../assets/images/expand.png";
import arrow from "../../../assets/images/arrow.png";

function Resume({ closeFile }) {
    return (
        <div className='mobile-resume-file-cont'>
            <div className='mobile-resume-png-cont'>
                <img className='mobile-resume-png' src={resume} />
            </div>
            <div className='mobile-resume-file-actns'>
                <a className='mobile-resume-actn' onClick={closeFile}>
                    <img className='mobile-resume-icon' src={arrow} />
                </a>
                <a className='mobile-resume-actn' href='/resume.pdf' download="Ryan_Resume_2025.PDF">
                    <img className='mobile-resume-icon' src={download} />
                </a>
                <a className='mobile-resume-actn' href='/resume.pdf' target='_black' rel='noreferrer'>
                    <img className='mobile-resume-icon' src={expand} />
                </a>
            </div>
        </div>
    );
}

export default Resume;