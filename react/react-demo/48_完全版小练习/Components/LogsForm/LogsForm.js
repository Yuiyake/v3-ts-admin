import React, {useState} from 'react';
import Card from "../UI/Card/Card";
import './LogsForm.css'

const LogsForm = (props) => {

    const [inputDate, setInputDate] = useState('')
    const [inputDesc, setInputDesc] = useState('')
    const [inputTime, setInputTime] = useState('')

    // const [formData, setFormData] = useState({
    //     inputDate: '',
    //     inputDesc: '',
    //     inputTime: '',
    // })

    // 获取日期的内容
    const dateChangeHandler = (e) => {
        // e.target指向触发事件的对象，返回就是原生的DOM对象
        setInputDate(e.target.value)
    }

    // 获取用户输入的内容
    const descChangeHandler = (e) => {
        setInputDesc(e.target.value)
    }

    // 获取日期的内容
    const timeChangeHandler = (e) => {
        setInputTime(e.target.value)
    }

    // 汇总数据
    // 在react中，通常表单不需要自行提交，而是通过react提交。
    const formSubmitHandler = (e) => {
        e.preventDefault()
        // console.log(inputDate, inputDesc, inputTime)
        const newLog = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime
        }
        // console.log(newLog)
        // 当添加新日志，调用父组件传递过来的函数
        props.onSaveLog(newLog);

        setInputDate('')
        setInputDesc('')
        setInputTime('')

    }

    return (
        <div>
            <Card className='logs-form'>
                <form onSubmit={formSubmitHandler}>
                    <div className="form-item">
                        <label htmlFor="date">日期</label>
                        <input onChange={dateChangeHandler} value={inputDate} id="date" type="date"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="desc">内容</label>
                        <input onChange={descChangeHandler} value={inputDesc} id="desc" type="text"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="time">时长</label>
                        <input onChange={timeChangeHandler} value={inputTime} id="time" type="number"/>
                    </div>
                    <div className="form-btn">
                        <button >添加</button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default LogsForm;
