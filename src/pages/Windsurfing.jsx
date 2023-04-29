import React from "react";
import Image from "../assets/windsurfing.jpg";
import BlurCard from "../components/BlurCard/BlurCard";

function Windsurfing() {
    return (
        <div className="windsurfing" style={{backgroundImage: `url(${Image})`}}>
            <BlurCard title="Experience Nature" description="Once in a life time"/>
        </div>
    );
}

export default Windsurfing;
