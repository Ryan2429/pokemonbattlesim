import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const PlayerXPBar = ({ playerXP, XPToLevelUp }) => {

    return (
        <progress className='playerXPBar' value={playerXP} max={XPToLevelUp} />
    )
    
}

PlayerXPBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number
}



export default PlayerXPBar;