import React from 'react';
import '../styles.css';

const Pet = ({pet}) => (
    <div class="card">
        <img src="https://images.pexels.com/photos/4933/lake-animals-dogs-pets.jpg" alt="Photo of pet"></img>
        <div class="container">
            <h1>{pet.name}</h1> 
            <h2><b>{pet.breed}</b></h2> 
            <p>Location: {pet.city}, {pet.state}</p> 
            <button class="btn btn-red">&#x2716;</button>
            <div class="divider"/>
            <button class="btn btn-green">&#x2714;</button>
        </div>
    </div>
);

export default Pet;