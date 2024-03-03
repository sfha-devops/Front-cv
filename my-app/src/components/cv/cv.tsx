import React from 'react';
import './cv.css'
import SideBar from "../side-bar-components/side-bar/sideBar";
import MainCv from "../main-cv-components/main-cv/mainCv";

interface SideBarProps {
    name: string; // Specify the type of the name prop
}
const Cv: React.FC<SideBarProps> = ({ name }) => {
    return (
        <div className="cv">
            <SideBar name={name} />
            <MainCv name={name} />
        </div>
    );
}

export default Cv;
