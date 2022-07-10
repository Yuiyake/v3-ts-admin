import './App.css'

import React, {Component} from 'react';
import User from "./components/user";

class App extends Component {
    render() {
        return (
            <div className="app">
                Hello App
                <User name={'猪八戒'} age={'18'} gender={'男'}></User>
            </div>
        );
    }
}

export default App;

