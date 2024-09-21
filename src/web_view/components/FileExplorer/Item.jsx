import React, { useState } from 'react';
import "./Item.css";

function Item({ icon, name, setItem }) {
    return (
        <div className='item-cont'>
            <div className='item' onClick={() => setItem(name)}>
                <img className='item-icon' src={icon} />
                <p className='item-name'>{name}</p>
            </div>
        </div>
    );
}

export default Item;