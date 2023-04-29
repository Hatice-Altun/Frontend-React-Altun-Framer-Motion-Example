import React from "react";
import "./BlurCard.css";
function BlurCard({title, description}) {
    return (
        <section>
            <container>
                <h1>{title}</h1>
                <p>{description}</p>
                <button>Subscribe</button>
            </container>
        </section>
    );
}

export default BlurCard;
