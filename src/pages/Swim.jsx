import React from "react";
import Image from "../assets/swim.jpg";
import BlurCard from "../components/BlurCard/BlurCard";

function Swim() {
    return (
        <div className="swim" style={{backgroundImage: `url(${Image})`}}>
            <BlurCard title="Experience Nature" description="Never seen before"/>
        </div>
    );
}

export default Swim;
