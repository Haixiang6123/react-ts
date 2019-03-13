import React, {Component} from 'react';
import Button from './Button'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button size="small"/>
                <Button/>
                <Button size="large"/>
            </div>
        );
    }
}

export default App;
