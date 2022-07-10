import React from 'react';
import './ComfirmModel.css'
import Card from "../Card/Card";
import Backdrop from "../BackDrop/BackDrop";

const ComfirmModel = (props) => {
    return (
        <Backdrop>
            <Card className="confirmModel">
                <div className="confirmText">
                    <p>{props.confirmText}</p>
                </div>
                <div className="confirmBtn">
                    <button onClick={props.onOkH} className="okBtn" >确认</button>
                    <button onClick={props.onCancel}>取消</button>
                </div>
            </Card>
        </Backdrop>

    );
};

export default ComfirmModel;
