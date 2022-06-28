import React, { useState } from 'react';
import EggLeft from './Assets/EggLeft.png';
import EggRight from './Assets/EggRight.png';

const GameOver = ( { newGame, count }) => {

    const [eggImage, setEggImage] = useState(EggRight);

    const animateEgg = () => {
    if (count % 2 === 0) {
        setEggImage(EggLeft);
        console.log(eggImage);
    } else {
        setEggImage(EggRight);
        console.log(eggImage);
    }
}
    

    setTimeout(animateEgg, 1500);



return (
    <div className='gameOver'>
    <div> Oh No! Your Pokemon Has Fainted! </div>
    <div>Hatch the egg to start a new game!</div>
    <div className='eggShadow'></div>
    <img className='egg' src={eggImage} alt='egg' onClick={newGame}/>
    </div>
)

}

export default GameOver;