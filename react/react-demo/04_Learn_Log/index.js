// index.js入口文件

import reactDom from 'react-dom/client'
import './index.css'

const App = <div className="logs">
    {/*日志项容器*/}
    <div className="item">
        <div className="date">
            <div className="month">
                四月
            </div>
            <div className="day">
                19
            </div>
        </div>
        {/*日志内容容器*/}
        <div className="content">
            <h2 className="desc">学习React</h2>
            <div className="time">40 min</div>
        </div>
    </div>

</div>

const root = reactDom.createRoot(document.getElementById('root'))
root.render(App)
