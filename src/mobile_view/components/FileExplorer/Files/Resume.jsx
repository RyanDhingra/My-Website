import React from 'react';
import './Resume.css';
import resume from "../../../assets/images/resume.png";
import download from "../../../assets/images/download.png";
import expand from "../../../assets/images/expand.png";

function Resume() {
    return (
        <div className='resume-file-cont'>
            <div className='resume-png-cont'>
                <img className='resume-png' src={resume} />
            </div>
            <div className='resume-file-actns'>
                <a className='resume-actn' href='/resume.pdf' download="Ryan_Resume_2025.PDF">
                    <img className='resume-icon' src={download}/>
                </a>
                <a className='resume-actn' href='/resume.pdf' target='_black' rel='noreferrer'>
                    <img className='resume-icon' src={expand}/>
                </a>
            </div>
        </div>
    );
}

export default Resume;