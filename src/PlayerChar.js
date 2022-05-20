import React from 'react';
import './App.css';
import PlayerHealthBar from './PlayerHealthBar.js';

const PlayerChar = ({ playerHealth, playerSprite }) => {
    
    return (
<div>
    <div className='playerInfo'>
        <img className='playerCharacter' src={ playerSprite } alt='PlayerCharacter' />
        <div className='playerContainer'>
        <span className='playerName'>Charmander</span>
        <PlayerHealthBar className='playerHealth' playerHealth={playerHealth}/>
        </div>
    </div>
</div>
    )
}

export default PlayerChar;