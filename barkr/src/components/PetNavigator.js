import React from 'react';
import '../style.css';


const PetNavigator = () => (

<div class="card">
  <img src="https://images.pexels.com/photos/4933/lake-animals-dogs-pets.jpg" alt="Photo of pet"></img>
  <div class="container">
    <h1>Name</h1> 
    <h2><b>Breed</b></h2> 
    <p>Text here</p> 
    <button class="btn btn-red">&#x2716;</button>
    {/* need to implement on click action  */}
    <div class="divider"/>
    <button class="btn btn-green">&#x2714;</button>
  </div>
</div>
);

export default PetNavigator;
