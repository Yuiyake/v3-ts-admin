import React from 'react';
import './BackDrop.css'
import ReactDOM from "react-dom";

// 获取backdrop内容
const backdropRoot = document.getElementById('backdrop-root')

const Backdrop = (props) => {
    return(
        ReactDOM.createPortal( <div className="backDrop">
            {props.children}
        </div>, backdropRoot)
    )
};

export default Backdrop;
