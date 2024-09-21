import React, { useState } from 'react';

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    return (
        <div className={navActive ? 'navbar active':'navbar'}>
            
        </div>
    );
}

export default Navbar;