import React from 'react';
<<<<<<< HEAD
import '../style.css';

const About = () => (
    <div>
        <img src="https://images.pexels.com/photos/4933/lake-animals-dogs-pets.jpg" alt="" height="300px" width="500px"/>
=======
import '../styles.css';
import {Button} from '@material-ui/core';
import {Link} from "react-router-dom";


const About = () => (
    <div>
>>>>>>> 48d15bcfba8ad53c56051d49ea1e58e28b525a48
        <h1>About Barkr</h1>
        <p>
            Barkr will allow you to find your pet a playdate.
        </p>
        <p>
<<<<<<< HEAD
            If you are trying to meet new people and other animal lovers that has a pet or just trying to let your pet socialize, you've come to the right place.
=======
            If you are trying to meet new people and other animal 
            lovers that has a pet or just trying to let your pet socialize, 
            you've come to the right place.
>>>>>>> 48d15bcfba8ad53c56051d49ea1e58e28b525a48
        </p>
        <p>
            Just swipe right on any fabulous pets you'd like your pet to go on a date with.
        </p>
<<<<<<< HEAD
        <p>
        <a href="./Signup">Sign up now to get started!</a>
        </p> 
=======
        <Link to='/signup' className={{textDecoration: 'none', color: 'white'}}>
            <Button color='inherit'>Signup</Button>
        </Link>
>>>>>>> 48d15bcfba8ad53c56051d49ea1e58e28b525a48
    </div>
);

export default About;
