// import Logs from "./Components/Logs/Logs"
import './App.css'
import {useState} from "react";

const App = () => {
    // 当组件渲染完毕后再修改组件中的变量，不会使组件重新渲染（异步dom？）
    // react的数据一被加载完数据是不能修改的，要想可以受变量影响，只能在变量修改后对组件进行重新渲染。
    // 需要一个特殊变量，当这个变量被修改，组件会重新渲染，那就是state(这个就是react的数据双绑吧）
    // 函数组件中，我们需要通过钩子函数获取state,useState会返回一个数组,第一个元素是初始值，第二个元素是函数
    // 调用setState()会触发组件重新渲染，但这个过程是异步的。为了避免这种情况，我们可以通过setState传递回调函数
    // 来修改state

    const res = useState(1)
    // let count = res[0];
    // // 一般函数命名以set开头
    // let setCount = res[1];

    const [count, setCount] = res

    // 加减法小程序 学state（组件之间的状态）
    const addHandler = () => {
        // 这样才能修改state的值
        setCount(count+1)
    }
    const lessHandler = () => {
        setCount(count-1)
    }
    return <div className='app'>
        <h1>{count}</h1>
        <button onClick={lessHandler}>-</button>
        <button onClick={addHandler}>+</button>
    </div>
}


export default App;
