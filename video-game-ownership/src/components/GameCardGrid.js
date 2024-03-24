import React from 'react'
import './GameCardGrid.css'
import GameCard from './GameCard';
const CardGrid = (props) => (
  <div className="cardGrid">
    {props.data.map((game, index) => {
        return <GameCard gameData = {game} index = {index}/>;
    })}
  </div>
)
export default CardGrid