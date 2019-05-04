import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation/>
                <Route path='/about' component={About} />
            </div>
        </BrowserRouter>
    );
}

export default App;
