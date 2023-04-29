import React from "react";
import BlurCard from "../components/BlurCard/BlurCard";
import Image from "../assets/surf.jpeg";


function Surf() {
    return (
        <div className="surf" style={{backgroundImage: `url(${Image})`}}>
            <BlurCard title="Experience Nature" description="Enjoy Your Moment!"/>
        </div>
    );
}

export default Surf;
