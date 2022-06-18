import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const EnemyHealthBar = ({ enemyHealth, enemyLevel }) => {
  
    return (
        <progress className='healthbar' value={enemyHealth} max={enemyLevel * 20}/>
    )
    
}

EnemyHealthBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number
}



export default EnemyHealthBar;
