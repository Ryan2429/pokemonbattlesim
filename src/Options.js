import React from 'react';

const Options = ({ playerAttack1, playerAttack2, playerAttack3, playerAttack4, menu, fight, goBack, playerMoveList }) => {
    
/* Handles default menu state where Player is primary */

    if (menu === 'default') {
        return(
    <div className='options'>
        <div className='back' onClick={goBack}>Back</div>
        <div className='listItem1' onClick={fight}>FIGHT</div>
        <div className='listItem2'>BAG</div>
        <div className='listItem3'>PKMN</div>
        <div className='listItem4'>RUN</div>
     </div>
        )
    }

    if (menu === 'enemy') {
        return(
    <div className='options'>
        <div className='back'>Back</div>
        <div className='listItem1'>FIGHT</div>
        <div className='listItem2'>BAG</div>
        <div className='listItem3'>PKMN</div>
        <div className='listItem4'>RUN</div>
     </div>
        )
    }

    /* Handles combat menu state */

    if (menu === 'fight') {
        return(
    <div className='options'>
        <div className='back' onClick={goBack}>Back</div>
        <div className='listItem1' onClick={playerAttack1}>{playerMoveList[0].name}</div>
        <div className='listItem2' onClick={playerAttack2}>{playerMoveList[1].name}</div>
        <div className='listItem3' onClick={playerAttack4}>{playerMoveList[3].name}</div>
        <div className='listItem4' onClick={playerAttack3}>{playerMoveList[2].name}</div>
     </div>
        )
    }
    
    
    }
        
export default Options;