import React, {Component} from 'react';
import Button from './Button'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button size="small">
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
