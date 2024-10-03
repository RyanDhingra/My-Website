import React from 'react';
import "./Item.css";

function Item({ icon, name, setItem }) {
    return (
        <div className='mobile-item-cont'>
            <div className='mobile-item' onClick={() => setItem(name)}>
                <img className='mobile-item-icon' src={icon} />
                <p className='mobile-item-name'>{name}</p>
            </div>
        </div>
    );
}

export default Item;