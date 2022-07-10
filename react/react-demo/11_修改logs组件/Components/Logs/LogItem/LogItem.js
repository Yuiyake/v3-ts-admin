import React from 'react';
import MyDate from "./MyDate/MyDate";
import './LogItem.css'

const LogItem = (props) => {
    // 在函数组件中，属性就相当于是函数的参数，可以通过参数来访问
    // 可以在函数组件的形参中定义一个props，props指向的是一个对象，包含了父组件中传递的参数
    // props是只读的，不能修改
    // console.log(props)
    return (
        <div className="item">
            {/*日志项容器*/}
            <MyDate date={props.date}></MyDate>
            {/*日志内容容器*/}
            <div className="content">
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time} min</div>
            </div>
        </div>
    );
};

export default LogItem;
