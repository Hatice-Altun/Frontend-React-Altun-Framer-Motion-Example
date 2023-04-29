import React from "react";
import Image from "../assets/windsurfing.jpg";
import BlurCard from "../components/BlurCard/BlurCard";
import {motion} from "framer-motion";

function Windsurfing() {
    return (
        <motion.div className="windsurfing"
                    style={{backgroundImage: `url(${Image})`}}

                    initial={{width: 0}}
                    animate={{width: "100%"}}
                    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
        >
            <BlurCard title="Experience Nature" description="Once in a life time"/>
        </motion.div>
    );
}

export default Windsurfing;
