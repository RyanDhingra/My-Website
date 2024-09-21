import React from 'react';
import './Menu.css';
import client from "../../../assets/images/client.png"
import dev from "../../../assets/images/dev.png"
import employer from "../../../assets/images/employer.png"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BackgroundVideo from '../../BackGround/Background';

function Menu() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(false);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleNavigate = async (path) => {
        setSelected(true);
        await sleep(500);
        navigate(path);
    }
    
    return (
        <div className='menu-container' style={{ opacity: selected ? 0 : 1 }}>
            <h1 className='menu-title'>What role best describes you?</h1>
            <div className='menu-buttons'>
                <div className='menu-button' onClick={() => window.open("mailto:ryandhingra@gmail.com")}> {/* onClick={() => handleNavigate('/portfolio')} */}
                    <img className='menu-img' src={client} alt='Client' />
                    <h2 className='menu-text'>Client</h2>
                </div>
                <div className='menu-button' onClick={() => handleNavigate('/dev')}>
                    <img className='menu-img' src={dev} alt='Developer' />
                    <h2 className='menu-text'>Dev</h2>
                </div>
                <div className='menu-button' onClick={() => handleNavigate('/bio')}>
                    <img className='menu-img' src={employer} alt='Employer' />
                    <h2 className='menu-text'>Employer</h2>
                </div>
            </div>
        </div>
    );
}

export default Menu;

// neon green #39FF14
