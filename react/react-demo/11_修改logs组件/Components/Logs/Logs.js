import LogItem from "./LogItem/LogItem";
import './Logs.css'

const Logs = () => {
    const logsData = [
        {
            id: '001',
            date: new Date(20221,1,20,18,30),
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
            date: new Date(20211,3,20,18,30),
            desc: '学习javascript',
            time: '40'
        },
        {
            id: '004',
            date: new Date(20211,4,20,18,30),
            desc: '学习react啦啦啦',
            time: '130'
        },
    ]

    const logItemData = logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time}></LogItem>)

    return <div className="logs">
        {/*<LogItem></LogItem>*/}
        {
            // logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time}></LogItem>)
            logItemData
        }

        {/*/!* 解构赋值写法 *!/*/}
        {/*{*/}
        {/*    logsData.map(item => <LogItem {...item}></LogItem>)*/}
        {/*}*/}

        {/*<LogItem date={logsData[0].date} desc={logsData[0].desc} time={logsData[0].time}></LogItem>*/}
        {/*<LogItem date={new Date(2022,10,6,20,6)} desc={"学习前端"} time={"50"}></LogItem>*/}
    </div>
}

export default Logs
