import React, { useEffect, useState } from 'react';
import Menu from './Menu/Menu.jsx';
import './Landing.css';

function Landing({ mode, setMode }) {
    const [initText, setInitText] = useState([
        <p className='mobile-init-char'>-</p>,
        <p className='mobile-init-char'>3</p>,
        <p className='mobile-init-char'>&</p>,
        <p className='mobile-init-char'>4</p>,
        <p className='mobile-init-char'>!</p>,
        <p className='mobile-init-char'>7</p>,
        <p className='mobile-init-char'>#</p>,
        <p className='mobile-init-char'>&nbsp;</p>,
        <p className='mobile-init-char'>+</p>,
        <p className='mobile-init-char'>9</p>,
        <p className='mobile-init-char'>&nbsp;</p>,
        <p className='mobile-init-char'>0</p>,
        <p className='mobile-init-char'>@</p>,
        <p className='mobile-init-char'>5</p>,
        <p className='mobile-init-char'>&nbsp;</p>,
        <p className='mobile-init-char'>2</p>,
        <p className='mobile-init-char'>&</p>,
        <p className='mobile-init-char'>6</p>,
        <p className='mobile-init-char'>$</p>,
        <p className='mobile-init-char'>8</p>,
        <p className='mobile-init-char'>=</p>,
    ]);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleInitText = async () => {

        const finalText = "WELCOME TO THE FUTURE";

        const symbols = [
            "1",  // XOR (Exclusive OR)
            "2",  // Logical AND
            "3",  // Logical OR
            "4",  // Logical NOT
            "5",  // Equivalent to
            "6",  // Less than or equal to
            "7",  // Greater than or equal to
            "8",  // Infinity
            "9",  // Square root
            "0",  // Summation
            "#",  // Lambda (used in cryptography)
            "$",  // Phi (related to the golden ratio)
            "!",  // Omega (used in cryptography)
            "@",  // Delta (change or difference)
            "%",  // Therefore symbol
            "^",  // Approximately equal
            "&",  // Bidirectional arrow
            "*",  // Subset
            "+",  // Empty set
            "-"   // Check mark
        ];

        let index = 0;

        for (let charToFix of finalText) {
            console.log(charToFix);

            if (charToFix !== " ") {
                for (let i = 0; i < 10; i++) {
                    setInitText((prev) => {
                        // Copy the fixed portion of the text
                        let newChars = prev.slice(0, index);

                        // Add random symbols to the remaining portion
                        for (let j = index; j < finalText.length; j++) {
                            if (finalText[j] !== " ") {
                                let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
                                newChars.push(<p className='mobile-init-char'>{randomSymbol}</p>);
                            } else {
                                newChars.push(<p className='mobile-init-char'>{finalText[j]}</p>);
                            }
                        }

                        return newChars;
                    });

                    await sleep(25);
                }
            }

            setInitText((prev) => {
                let newChars = [...prev];  // Copy the previous array
                newChars[index] = <p className='mobile-init-char'>{charToFix}</p>;  // Set the fixed character
                return newChars;
            });

            await sleep(0);
            index++;
        }

        await sleep(1000);
        document.getElementById('mobile-init-cont').style.opacity = 0;
        await sleep(500);
        setMode('menu');
    }

    useEffect(() => {
        handleInitText();
    }, [])

    const handleMode = () => {
        if (mode === 'init') {
            return (
                <div id='mobile-init-cont' className='mobile-init-cont'>
                    <div className='mobile-init-text-cont'>
                        {initText.slice(0, 7)}
                    </div>
                    <div className='mobile-init-text-cont'>
                        {initText.slice(8, 10)}
                    </div>
                    <div className='mobile-init-text-cont'>
                        {initText.slice(11, 14)}
                    </div>
                    <div className='mobile-init-text-cont'>
                        {initText.slice(15, 21)}
                    </div>
                </div>
            )
        } else if (mode === 'menu') {
            return (
                <Menu setMode={setMode} />
            );
        }
    }

    return (
        <div className='mobile-home-page'>
            {handleMode()}
        </div>
    );
}

export default Landing;