import React from "react";
import TypeAnimation from "react-type-animation";
import './index.css'

const Form = () => {
    return (
        <div className="header-text">
            <h1>
                <TypeAnimation cursor={false} sequence={["Get in touch:"]}/>
            </h1>
        </div>
    );
}

export default Form