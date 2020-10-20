import React from 'react'
import './Card.css'
function Card({ monsters }) {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${monsters.id}?set=set2&size=180x180`} alt="monsters.name" />
            <h2 >{monsters.name}</h2>
            <p>{monsters.email}</p>
        </div>
    )
}

export default Card
