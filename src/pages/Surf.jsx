import React from "react";
import BlurCard from "../components/BlurCard/BlurCard";
import Image from "../assets/surf.jpeg";
import {motion} from "framer-motion";

function Surf() {
    return (
        <motion.div
            className="surf"
            style={{backgroundImage: `url(${Image})`}}

            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth, transition: {duration: 0.1}}}
        >
            <BlurCard title="Experience Nature" description="Enjoy Your Moment!"/>
        </motion.div>
    );
}

export default Surf;
