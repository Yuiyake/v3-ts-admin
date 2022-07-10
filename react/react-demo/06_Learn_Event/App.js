
const App = () => {
    const clickHandler = (e) => {
    //    react的事件对象是包装过的对象，使用过程中我们无序再考虑兼容性
    //    react事件中同样会传递事件对象，用响应函数中定义参数来接收事件对象
        e.preventDefault() // 取消默认行为
        e.stopPropagation() // 取消冒泡
        alert('123')
    }
    return <div>
        我是组件
        <button onClick={() => {alert('123')}}>click me</button>
        <a href="https://www.baidu.com" onClick={clickHandler}>click me2</a>
    </div>
}


export default App;
