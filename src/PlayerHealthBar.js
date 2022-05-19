import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const PlayerHealthBar = ({ max, playerHealth }) => {

    return (
        <progress value={playerHealth} max={max}/>
    )
    
}

PlayerHealthBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number
}

PlayerHealthBar.defaultProps = {
    max: 100,
}

export default PlayerHealthBar;