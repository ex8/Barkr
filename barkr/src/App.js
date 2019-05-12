import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Login from "./components/Login";
import PetNavigator from "./components/PetNavigator";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation/>
                <Route exact path='/' component={PetNavigator}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/Profile' component={Profile}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
