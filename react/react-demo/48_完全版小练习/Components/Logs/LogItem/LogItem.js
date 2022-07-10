import React, {useState} from 'react';
import MyDate from "./MyDate/MyDate";
import './LogItem.css'
import Card from "../../UI/Card/Card";
import ComfirmModel from "../../UI/ComfirmModel/ComfirmModel";

const LogItem = (props) => {

    // 添加一个state，记录是否显示确认窗口
    const [showConfirm, setShowConfirm] = useState(false)

    const deleteHandler = () => {
        setShowConfirm(true)

        // const isDel = window.confirm('确认删除？')
        // if(isDel){
        // //    删除当前item，从数据state移除指定数组
        //     props.onDelLog()
        // }
    }

    const cancelHandler = () => {
        setShowConfirm(false)
    }

    const okHandler = () => {
        props.onDelLog()
        setShowConfirm(false)
    }

    // portal 传送门，把组件传送到指定的位置渲染


    // 在函数组件中，属性就相当于是函数的参数，可以通过参数来访问
    // 可以在函数组件的形参中定义一个props，props指向的是一个对象，包含了父组件中传递的参数
    // props是只读的，不能修改
    // console.log(props)
    return (
        <Card className="item">
            {showConfirm && <ComfirmModel confirmText="确认delete？" onCancel={cancelHandler} onOkH={okHandler}></ComfirmModel>}
            {/*日志项容器*/}
            <MyDate date={props.date}></MyDate>
            {/*日志内容容器*/}
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time} min</div>
            </div>
        {/*  删除btn  */}
            <div>
                <div className='delete' onClick={deleteHandler}>x</div>
            </div>
        </Card>
    );
};

export default LogItem;
