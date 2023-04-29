import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Swim from "../pages/Swim";
import Surf from "../pages/Surf";
import Windsurfing from "../pages/Windsurfing";

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Swim/>}/>
            <Route path="/surf" element={<Surf/>}/>
            <Route path="/windsurfing" element={<Windsurfing/>}/>
        </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
