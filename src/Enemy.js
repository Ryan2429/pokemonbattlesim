import React from 'react';
import EnemyHealthBar from './EnemyHealthBar.js';
import './App.css';

const Enemy = ({ enemyHealth, enemySprite, enemySelect, enemyLevel, effect, effectText, effectCounter}) => {
    
        return (
    <div>
        <div className='enemyInfo'>
            <div className='enemyShadow'></div>
            <img className='enemyCharacter' src={ enemySprite } alt='EnemyCharacter'/>
            <div className='enemyContainer'>
             <span className='enemyName'>{enemySelect.name}</span>
             <span className='enemyLevel'>Level: {enemySelect.level}</span>
             <span className='health'>{enemyHealth}</span>
            <EnemyHealthBar className='enemyHealth' enemyHealth={enemyHealth} enemyLevel={enemyLevel}/>
            {effectCounter > 0 &&
            <span className='statusEffect'>{effectText} {effectCounter} TURNS</span>
            }
        </div>
        </div>
    </div>
        )
    }

export default Enemy;