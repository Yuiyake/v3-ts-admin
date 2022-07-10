import React, {Component} from 'react';

class User extends Component {
    // 类组件的props是存储到类的实例对象中的
    // 可以直接通过实例对象访问
    // this.props
    // 类组件中 state统一存储到实例对象的state属性中，通过this.state访问，通过this.setState()修改
    // 当通过this.setState()修改state时，之前的属性都会被保留，而不是覆盖。但是仅限于直接存储于state中的属性。

    state = {
        count: 0
    }

    clickHandler = () => {
        // this.setState({count: this.state.count+1})  这样写会有异步问题，下面的写法可以解决
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.clickHandler}>1</button>
                <ul>
                    <li>姓名： {this.props.name}</li>
                    <li>年龄： {this.props.age}</li>
                    <li>性别： {this.props.gender}</li>
                </ul>
            </div>
        );
    }
}

export default User;
