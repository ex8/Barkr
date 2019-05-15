import React from 'react';
import '../styles.css';
import {Button} from '@material-ui/core';
import {Link} from "react-router-dom";


const About = () => (
    <div>
        <h1>About Barkr</h1>
        <p>
            Barkr will allow you to find your pet a playdate.
        </p>
        <p>
            If you are trying to meet new people and other animal 
            lovers that has a pet or just trying to let your pet socialize, 
            you've come to the right place.
        </p>
        <p>
            Just swipe right on any fabulous pets you'd like your pet to go on a date with.
        </p>
        <Link to='/signup' className={{textDecoration: 'none', color: 'white'}}>
            <Button color='inherit'>Signup</Button>
        </Link>
    </div>
);

export default About;