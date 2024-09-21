import React from 'react';
import './Menu.css';
import client from "../../../assets/images/client.png";
import dev from "../../../assets/images/dev.png"
import employer from "../../../assets/images/employer.png"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
        <div className='mobile-menu-container' style={{ opacity: selected ? 0 : 1 }}>
            <h1 className='mobile-menu-title'>What role best describes you?</h1>
            <div className='mobile-menu-buttons'>
                <div className='mobile-menu-button' onClick={() => window.open("mailto:ryandhingra@gmail.com")}> {/* onClick={() => handleNavigate('/portfolio')} */}
                    <h2 className='mobile-menu-text'>Client</h2>
                </div>
                <div className='mobile-menu-button' onClick={() => handleNavigate('/dev')}>
                    <h2 className='mobile-menu-text'>Dev</h2>
                </div>
                <div className='mobile-menu-button' onClick={() => handleNavigate('/bio')}>
                    <h2 className='mobile-menu-text'>Employer</h2>
                </div>
            </div>
        </div>
    );
}

export default Menu;

// neon green #39FF14
