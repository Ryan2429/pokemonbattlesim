import React from 'react';
import EnemyHealthBar from './EnemyHealthBar.js';
import './App.css';

const Enemy = ({ enemyHealth, enemySprite }) => {
    
        return (
    <div>
        <div className='enemyInfo'>
            <img className='enemyCharacter' src={ enemySprite } alt='EnemyCharacter'/>
            <div className='enemyContainer'>
             <span className='enemyName'>Pikachu</span>
            <EnemyHealthBar className='enemyHealth' enemyHealth={enemyHealth}/>
        </div>
        </div>
    </div>
        )
    }

export default Enemy;