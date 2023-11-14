import React from "react";
import "./index.css"
import Video from "../Video";
import Carousel from "./Carousel/index.js"
import CurrentProject from "./CurrentProject";

const Projects = () => {
    return (
        <div>
            <Video/>
            <div className="carousel">
                <Carousel className="large-slides"/>
            </div>
            <div>
                <CurrentProject/>
            </div>
        </div>
    );
}

export default Projects