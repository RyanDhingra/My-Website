import React from "react";
import "./index.css"
import Video from "../Video";
import Slider from "./Slider";
import TypeAnimation from "react-type-animation";

const About = () => {
    return (
        <>
        <div className="background">
            <Video/>
            <div className="aboutSlider">
                <Slider/>
            </div>
        </div>
        <div className="lowerBG">
            <div className="aboutText">
                <h1 className="title">
                    <TypeAnimation cursor={false} sequence={["Get to know me!"]} />
                </h1>
                <p className="aboutPara">
                    Hello and welcome! This is where you can come and see amazing photos like these, but more importantly, my exciting and creative projects. Some of which I have finished, and others that I'm currently working on. Here's a little bit of background info about myself; I'm a 3rd year Computer Science student at Toronto Metropolitan University. On the side, I'm also a passionate badminton player, as well as a motorcycle enthusiast. I'm part of a few startups, including one of my own. I obviously love to code, and that includes freeflance development... so if you want a cool website like the one you're looking at, or any other type of software, I'm available for hire :). Feel free to reach out to me anytime!
                </p>
            </div>
        </div>
        </>
    )
}

export default About