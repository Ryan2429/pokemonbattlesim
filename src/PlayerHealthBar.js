import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const PlayerHealthBar = ({ playerHealth, playerLevel }) => {

    return (
        <progress value={playerHealth} max={playerLevel * 20}/>
    )
    
}

PlayerHealthBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number
}



export default PlayerHealthBar;