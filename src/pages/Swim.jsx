import React from "react";
import Image from "../assets/swim.jpg";
import BlurCard from "../components/BlurCard/BlurCard";
import {motion} from "framer-motion";

function Swim() {
    return (
        <motion.div className="swim"
                    style={{backgroundImage: `url(${Image})`}}

                    initial={{width: 0}}
                    animate={{width: "100%"}}
                    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
        >
            <BlurCard title="Experience Nature" description="Never seen before"/>
        </motion.div>
    );
}

export default Swim;
