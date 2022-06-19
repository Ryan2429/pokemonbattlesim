import React from 'react';

const Options = ({ playerAttack, menu, fight, goBack }) => {
    
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
        <div className='listItem1' onClick={playerAttack}>Scratch</div>
        <div className='listItem2'>----</div>
        <div className='listItem3'>----</div>
        <div className='listItem4'>----</div>
     </div>
        )
    }
    
    
    }
        
export default Options;