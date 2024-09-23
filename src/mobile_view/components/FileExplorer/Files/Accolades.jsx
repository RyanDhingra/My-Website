import React from 'react';
import './Accolades.css';
import arrow from "../../../assets/images/arrow.png"

function Accolades({ closeFile }) {
    return (
        <>
            <div className='mobile-accolades-file-cont'>
                <h1 className='mobile-accolades-file-title'>
                    Accolades
                </h1>

                <p className='mobile-accolades-file-txt'>
                    2021-2022 Dean's List Recognition for Academic Achievement
                    <br />
                    <br />
                    2021-2022 Ontario University Athletics Academic Award Winner
                    <br />
                    <br />
                    2022-2023 Dean's List Recognition for Academic Achievement
                    <br />
                    <br />
                    2022-2023 Ontario University Athletics Academic Award Winner
                    <br />
                    <br />
                    2024 Sun Life Co-Op Bolder Award Nominee: Biased for Action Category
                    <br />
                    <br />
                    <br />
                </p>

            </div>

            <button className='mobile-back-btn' onClick={closeFile}>
                <img className='mobile-back-btn-img' src={arrow} alt='Back' />
            </button>
        </>
    );
}

export default Accolades;