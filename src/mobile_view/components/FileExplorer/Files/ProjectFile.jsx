import React from 'react';
import './ProjectFile.css';
import web from "../../../assets/images/web.png";
import github from "../../../assets/images/code.png";
import arrow from "../../../assets/images/arrow.png"

function ProjectFile({ closeFile, name, content, stack, repoLink, link, imgs }) {
    return (
        <>
            <div className='mobile-project-file-cont'>
                <div className='mobile-project-file-header'>
                    <h1 className='mobile-project-file-title'>{name}</h1>
                </div>
                <div className='mobile-project-file-body'>
                    <div className='mobile-project-file-desc-cont'>
                        <p className='mobile-project-file-desc'>{content}</p>
                        <br />
                        <p className='mobile-project-file-desc'>Tech Stack: {stack}</p>
                    </div>
                    <div className='mobile-project-file-imgs'>
                        {imgs.map((img, index) => (
                            <div className='mobile-project-file-img-cont'>
                                <p className='mobile-project-file-img-desc'>{img.desc}</p>
                                <img key={index} src={img.src} alt='Project Image' className='mobile-project-file-img' />
                            </div>
                        ))}
                    </div>
                    <div className='mobile-project-file-links' style={{ borderTop: link || repoLink ? '2px solid #39FF14' : 'none' }}>
                        {
                            link ?
                                <div className='mobile-project-file-link-cont'>
                                    <img onClick={() => window.open(link)} className='mobile-project-file-link-img' src={web} alt='Link' />
                                    <a href={link} target='_blank' rel='noreferrer' className='mobile-project-file-link'>Website Link</a>
                                </div>
                                :
                                null
                        }
                        {
                            repoLink ?
                                <div className='mobile-project-file-link-cont'>
                                    <img onClick={() => window.open(repoLink)} className='mobile-project-file-link-img' src={code} alt='Github' />
                                    <a href={repoLink} target='_blank' rel='noreferrer' className='mobile-project-file-link'>Repository Link</a>
                                </div>
                                :
                                null
                        }
                    </div>
                </div>
            </div>


            <button className='mobile-back-btn' onClick={closeFile}>
                <img className='mobile-back-btn-img' src={arrow} alt='Back' />
            </button>
        </>
    );
}

export default ProjectFile;