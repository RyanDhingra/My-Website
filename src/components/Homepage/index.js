import React from "react";
import "./index.css"
import Video from "../Video";
import TypeAnimation from "react-type-animation";

function Homepage() {
    return (
        <div>
            <Video/>
            <div className="nameText">
                <TypeAnimation cursor={false} sequence={["Welcome to Ryan Dhingra's personal website!"]}/>
            </div>
        </div>
    );
}

export default Homepage