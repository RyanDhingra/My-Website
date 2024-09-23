import React from 'react';
import './WorkFile.css';
import arrow from "../../../assets/images/arrow.png"

function WorkFile({ title, company, date, location, summary, skills, closeFile }) {
    return (
        <>
            <div className='mobile-work-file-cont'>
                <div className='mobile-work-file-header'>
                    <h1 className='mobile-work-file-title'>{title}</h1>
                    <h2 className='mobile-work-file-subtitle'>{company}</h2>
                    <h2 className='mobile-work-file-subtitle'>{location} | {date}</h2>
                </div>
                <div className='mobile-work-file-body'>
                    <h3 className='mobile-work-file-body-title'>Summary</h3>
                    <p className='mobile-work-file-body-summary'>
                        <br />
                        {summary}
                    </p>

                    <h3 className='mobile-work-file-body-title'>Related Skills</h3>
                    <p className='mobile-work-file-body-skills'>
                        {skills}
                    </p>
                </div>
            </div>

            <button className='mobile-back-btn' onClick={closeFile}>
                <img className='mobile-back-btn-img' src={arrow} alt='Back' />
            </button>
        </>
    );
}

export default WorkFile;