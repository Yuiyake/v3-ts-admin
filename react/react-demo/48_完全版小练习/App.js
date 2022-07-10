import Logs from "./Components/Logs/Logs"
import Card from "./Components/UI/Card/Card";
import LogsForm from "./Components/LogsForm/LogsForm";
import ComfirmModel from "./Components/UI/ComfirmModel/ComfirmModel";
import './App.css'
import {useState} from "react";

const App = () => {

    // 数据
    const [logsData, setLogsData] = useState([
        {
            id: '001',
            date: new Date(2021,1,20,18,30),
            desc: '学习前端啦啦啦',
            time: '30'
        },
        {
            id: '002',
            date: new Date(2022,2,20,18,30),
            desc: '学习降龙十八掌',
            time: '20'
        },
        {
            id: '003',
            date: new Date(2021,3,20,18,30),
            desc: '学习javascript',
            time: '40'
        },
        {
            id: '004',
            date: new Date(2022,4,20,18,30),
            desc: '学习react啦啦啦',
            time: '130'
        },
    ])

    const saveLogHandler = (newLog) => {
        //  向新日志中添加id
        newLog.id = Date.now() + '';
        // console.log(newLog);
        //  将新数据添加到数组中
        setLogsData([newLog, ...logsData])

    }

    const delLogByIndex = (index) => {
        setLogsData(prevState => {
            const newLogs = [...prevState]
            newLogs.splice(index, 1)
            return newLogs
        })
    }

    const delLogById = (id) => {
        setLogsData(prevState => {
            return  prevState.filter(item => item.id !== id)

        })
    }

    // 要把LogsForm的数据传递给App组件，然后App组件将新的日志添加到数组里。
    return <div className='app'>

        {/*引入logsForm*/}
        <LogsForm onSaveLog={saveLogHandler}></LogsForm>
        <Card></Card>
        <Logs logsData={logsData} onDelLog={delLogById}></Logs>
    </div>
}


export default App;
