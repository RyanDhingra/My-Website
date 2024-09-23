import React from 'react';
import './WorkFile.css';

function WorkFile({ title, company, date, location, summary, skills }) {
    return (
        <div className='work-file-cont'>
            <div className='work-file-header'>
                <h1 className='work-file-title'>{title}</h1>
                <h2 className='work-file-subtitle'>{company}</h2>
                <h2 className='work-file-subtitle'>{location} | {date}</h2>
            </div>
            <div className='work-file-body'>
                <h3 className='work-file-body-title'>Summary</h3>
                <p className='work-file-body-summary'>
                    <br />
                    {summary}
                </p>

                <h3 className='work-file-body-title'>Related Skills</h3>
                <p className='work-file-body-skills'>
                    {skills}
                </p>
            </div>
        </div>
    );
}

export default WorkFile;