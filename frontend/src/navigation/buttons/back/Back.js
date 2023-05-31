import React from 'react';
import { useNavigate } from "react-router-dom"
import './Back.css';


const Back = () => {
    let navigate = useNavigate();
    return (<div className="Back" onClick={() => navigate(-1)}>
        <div className="arrow"></div>
        {/* <p>{"<"}</p> */}
    </div>);
}

export default Back;