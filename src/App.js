import React, {Component} from 'react';
import logo from './logo.png'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="base">
                <header className="App-header">
                    <center><img src={logo} className="App-logo" alt="logo"/></center>
                </header>
                <br/>
                <center>
                    <div className="search-box">
                        <input type="text"/>
                        <br/><br/>
                    </div>
                </center>
                <a id="button1" href="https://www.google.com">Google Search</a>
                <a id="button2" href="https://www.google.com">I'm Feeling lucky</a>
                <div className="fbar">
                    <div className="fbar-1">
                        <span id="country">Morocco</span>
                    </div>
                    <div className="fbar-2">
                        <span id="bottom-links-left">
                            <a href="https://www.google.com/ads/">Advertising</a>
                            <a href="https://www.google.fr/services/#?modal_active=none">Businness</a>
                            <a href="https://www.google.fr/intl/en_ma/about/">About</a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
