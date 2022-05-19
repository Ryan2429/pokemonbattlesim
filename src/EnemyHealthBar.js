import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const EnemyHealthBar = ({ max, enemyHealth }) => {

    
    return (
        <progress value={enemyHealth} max={max}/>
    )
    
}

EnemyHealthBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number
}

EnemyHealthBar.defaultProps = {
    max: 100,
}

export default EnemyHealthBar;
