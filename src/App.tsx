import React, {Component} from 'react';
import Button from './Button'
import './App.css';

const fn: React.MouseEventHandler = function (event) {
    console.log(event);
    console.log('fn');
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button onClick={fn} size="small">
                    <span>YES</span>
                    <span>NO</span>
                </Button>
                <Button>OK</Button>
                <Button size="large">Yes</Button>
            </div>
        );
    }
}

export default App;
