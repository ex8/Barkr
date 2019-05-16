import React from 'react';
import '../styles.css';

const Pet = ({pet, handleDislikeClick, handleLikeClick}) => (
    <div className="card">
        <img src={`/uploads/${pet.thumbnail}`} alt={pet.name}/>
        <div className="container">
            <h1>{pet.name}</h1> 
            <h2><b>{pet.breed}</b></h2> 
            <p>Location: {pet.city}, {pet.state}</p>
            <p>{pet.description}</p>
            <button onClick={handleDislikeClick} className="btn btn-red">&#x2716;</button>
            <div className="divider"/>
            <button onClick={handleLikeClick} className="btn btn-green">&#x2714;</button>
        </div>
    </div>
);

export default Pet;