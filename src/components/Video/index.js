import React from "react";
import vidBg from "../../assets/vidBg.mp4"
import "./index.css"


const Video = () => {
    return (
        <div className="vid">
            <video src={vidBg} autoPlay loop muted/>
        </div>
    )
}

export default Video