import React from 'react'
import './GameCard.css'
const GameCard = (props) => {
    const [image, setImage] = React.useState(props.gameData.Image);
    return (
        <div className="card">
            <img src={image !== 'n/a' ? `https://raw.githubusercontent.com/JakeTM9/video-game-ownership/main/images/${image}.png` : `https://raw.githubusercontent.com/JakeTM9/video-game-ownership/main/images/placeholder.png`} alt={image !== 'n/a' ? {image} : 'placeholder'}></img>
        </div>
    );
};
export default GameCard