import React from 'react';

const Options = ({ playerAttack, menu, fight, goBack, enemyAttack }) => {
    
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
    setTimeout(enemyAttack, 3500);

    /* Handles combat menu state */

    if (menu === 'fight') {
        return(
    <div className='options'>
        <div className='back' onClick={goBack}>Back</div>
        <div className='listItem1' onClick={playerAttack}>MOVE1</div>
        <div className='listItem2'>MOVE2</div>
        <div className='listItem3'>MOVE4</div>
        <div className='listItem4'>MOVE3</div>
     </div>
        )
    }
    
    
    }
        
    






export default Options;