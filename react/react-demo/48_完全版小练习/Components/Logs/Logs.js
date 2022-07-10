import LogItem from "./LogItem/LogItem";
import './Logs.css'
import Card from "../UI/Card/Card";
import LogFilter from "./LogFilter/LogFilter";
import {useState} from "react";

const Logs = (props) => {

    // 创建存储年份的state
    const [year, setYear] = useState(2022);

    // 创建一个修改年份的函数
    const changeYearHandler = (year) => {
        setYear(year)
    }

    // 过滤数据
    let filterData = props.logsData.filter(item => item.date.getFullYear() === year)

    // logsDate 用来存储学习的日志，这个数据除了Logs需要用，LogsForm也需要。当一个数据需要被多个组件使用，我们可以
    // 将数据放入这些组件共同的祖先元素中,(这就是状态提升)
    let logItemData = filterData.map((item, index) => <LogItem onDelLog={()=>props.onDelLog(item.id)} key={item.id} date={item.date} desc={item.desc} time={item.time}></LogItem>)

    if (logItemData.length === 0){
        logItemData = <p className='no-logs'>没有找到日志！</p>
    }
    return <Card className="logs">
        {/* 引入年份选择器 */}
        <LogFilter year={year} onYear={changeYearHandler}></LogFilter>
        {/*<LogItem></LogItem>*/}
        {
            // logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time}></LogItem>)
            // logItemData.length !== 0 ? logItemData : <p className='no-logs'>没有找到日志！</p>
            logItemData
        }

        {/*/!* 解构赋值写法 *!/*/}
        {/*{*/}
        {/*    logsData.map(item => <LogItem {...item}></LogItem>)*/}
        {/*}*/}

        {/*<LogItem date={logsData[0].date} desc={logsData[0].desc} time={logsData[0].time}></LogItem>*/}
        {/*<LogItem date={new Date(2022,10,6,20,6)} desc={"学习前端"} time={"50"}></LogItem>*/}
    </Card>
}

export default Logs
