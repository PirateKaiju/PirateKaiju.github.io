import React from 'react';
import "./aboutbutton.css";

const AboutButton = (props) => (
    <button className="btn" onClick={() => {window.open(props.linkTo, "_blank")}}>
        { props.btntext }
    </button>
)

export default AboutButton;