import React from 'react'
import '../components/Card-List.css'
import Card from './Card'

function CardList({monsters}) {
  
    return (
       
        <div className="card-list">
           {monsters.map(monster =>(<Card key={monster.id} monsters={monster}/>))}
        </div>
        
    )
}

export default CardList
