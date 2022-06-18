import React from 'react';
import './App.css';
import PlayerHealthBar from './PlayerHealthBar.js';
import PlayerXPBar from './PlayerXPBar.js';

const PlayerChar = ({ playerHealth, playerSprite, playerName, playerLevel, playerXP, XPToLevelUp }) => {
    
    return (
<div>
    <div className='playerInfo'>
        <img className='playerCharacter' src={ playerSprite } alt='PlayerCharacter' />
        <div className='playerContainer'>
        <span className='playerName'>{playerName}</span>
        <span className='playerLevel'>Level: {playerLevel}</span>
        <span className='health'>{playerHealth}</span>
        <PlayerHealthBar className='playerHealth' playerHealth={playerHealth} playerLevel={playerLevel} />
        <PlayerXPBar playerXP={playerXP} XPToLevelUp={XPToLevelUp} />
        </div>
    </div>
</div>
    )
}

export default PlayerChar;