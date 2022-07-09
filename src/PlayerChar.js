import React from 'react';
import './App.css';
import PlayerHealthBar from './PlayerHealthBar.js';
import PlayerXPBar from './PlayerXPBar.js';

const PlayerChar = ({ playerHealth, playerSprite, playerName, playerLevel, playerXP, XPToLevelUp, protectCounter }) => {
    
    return (
<div>
    <div className='playerInfo'>
        <div className='playerShadow'></div>
        <img className='playerCharacter' src={ playerSprite } alt='PlayerCharacter' />
        <div className='playerContainer' style={ protectCounter > 0 ? { border: '5px solid #6FE0EE' } : {} }>
        <span className='playerName'>{playerName}</span>
        <span className='playerLevel'>Level: {playerLevel}</span>
        <span className='health'>{playerHealth}</span>
        <PlayerHealthBar className='playerHealth' playerHealth={playerHealth} playerLevel={playerLevel} protectCounter={protectCounter}/>
        <PlayerXPBar playerXP={playerXP} XPToLevelUp={XPToLevelUp} />
        </div>
    </div>
</div>
    )
}

export default PlayerChar;