import React from "react";
import TypeAnimation from "react-type-animation";
import "./index.css"
import codeclashImg from "../../../assets/projectsMedia/codeclashImg.png"

export default function CurrentProject() {
    return (
        <div className="currProject">
            <div className="currProjText">
                <h1>
                    <TypeAnimation cursor={false} sequence={["Currently working on: Code-Clash"]} />
                </h1>
                <p1>
                    Embark on an exhilarating coding adventure with Code-Clash, an upcoming online multiplayer game that promises to revolutionize the coding challenge experience. Engage in fierce 1v1 or collaborative 2v2 coding competitions, featuring diverse challenges like time trials, clean code contests, code efficiency battles, and timed debugging showdowns. Immerse yourself in a dynamic and competitive coding environment, where every keystroke counts.

                    But Code-Clash isn't just about competition—it's a platform designed to boost your coding skills. Dive into learning modules crafted to enhance your programming prowess, making it an ideal space for both beginners and seasoned coders alike. Get ready to code, compete, and elevate your skills in the electrifying world of Code-Clash.
                </p1>
            </div>
            <div className="currProjImage">
                <img className="projImage"src={codeclashImg} alt="txt" />
            </div>
        </div>
    );
}