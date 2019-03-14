import React, {Component} from 'react';
import Button from './Button'
import ClassButton from './ClassButton'
import './App.css';

const fn: React.MouseEventHandler = function (event) {
    console.log(event);
    console.log('fn');
}

const classFn: React.MouseEventHandler = function (event) {
    console.log(event)
    console.log('classFn');
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
                <ClassButton onClick={classFn} size="large">ClassButton</ClassButton>
                <ClassButton>ClassButton</ClassButton>
            </div>
        );
    }
}

export default App;
