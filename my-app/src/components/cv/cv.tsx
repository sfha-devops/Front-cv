import React from 'react';
import './cv.css'
import SideBar from "../side-bar-components/side-bar/sideBar";
import MainCv from "../main-cv-components/main-cv/mainCv";


function Cv() {
    return (
        <div className="cv">
            <SideBar />
            <MainCv />
        </div>
    );
}

export default Cv;
