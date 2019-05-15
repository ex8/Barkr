import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Login from "./components/Login";
import PetNavigator from "./components/PetNavigator";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Chat from './components/Chat';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation/>
                <Route exact path='/' component={PetNavigator}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/chats' component={Chat}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/signup' component={Signup}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
