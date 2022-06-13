import React from 'react';
import EnemyHealthBar from './EnemyHealthBar.js';
import './App.css';

const Enemy = ({ enemyHealth, enemySprite, enemySelect, enemyLevel}) => {
    
        return (
    <div>
        <div className='enemyInfo'>
            <img className='enemyCharacter' src={ enemySprite } alt='EnemyCharacter'/>
            <div className='enemyContainer'>
             <span className='enemyName'>{enemySelect.name}</span>
             <span className='enemyLevel'>Level: {enemySelect.level}</span>
             <span className='health'>{enemyHealth}</span>
            <EnemyHealthBar className='enemyHealth' enemyHealth={enemyHealth} enemyLevel={enemyLevel}/>
        </div>
        </div>
    </div>
        )
    }

export default Enemy;