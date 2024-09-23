import React from 'react';
import './ProjectFile.css';
import web from "../../../assets/images/web.png";
import github from "../../../assets/images/code.png";

function ProjectFile({ name, content, stack, repoLink, link, imgs }) {
    return (
        <div className='project-file-cont'>
            <div className='project-file-header'>
                <h1 className='project-file-title'>{name}</h1>
            </div>
            <div className='project-file-body'>
                <div className='project-file-desc-cont'>
                    <p className='project-file-desc'>{content}</p>
                    <br />
                    <p className='project-file-desc'>Tech Stack: {stack}</p>
                </div>
                <div className='project-file-imgs'>
                    {imgs.map((img, index) => (
                        <div className='project-file-img-cont'>
                            <p className='project-file-img-desc'>{img.desc}</p>
                            <img key={index} src={img.src} alt='Project Image' className='project-file-img' />
                        </div>
                    ))}
                </div>
                <div className='project-file-links' style={{borderTop: link || repoLink ? '2px solid #39FF14':'none'}}>
                    {
                        link ?
                            <div className='project-file-link-cont'>
                                <img onClick={() => window.open(link)} className='project-file-link-img' src={web} alt='Link'/>
                                <a href={link} target='_blank' rel='noreferrer' className='project-file-link'>Website Link</a>
                            </div>
                            :
                            null
                    }
                    {
                        repoLink ?
                            <div className='project-file-link-cont'>
                                <img onClick={() => window.open(repoLink)} className='project-file-link-img' src={github} alt='Github' />
                                <a href={repoLink} target='_blank' rel='noreferrer' className='project-file-link'>Repository Link</a>
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectFile;