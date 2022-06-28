import React, { useState } from 'react';
import './App.css';

import Charmander1 from './Assets/CharmanderDefault.png';
import Charmander2 from './Assets/CharmanderAlt.png';
import Bulbasaur1 from './Assets/BulbasaurDefault.png';
import Bulbasaur2 from './Assets/BulbasaurAlt.png';
import Squirtle1 from './Assets/SquirtleDefault.png';
import Squirtle2 from './Assets/SquirtleAlt.png';

import MoveList from './MoveList.js';



const CharacterSelect  = ({ count, playerSelect, setPlayerSprite, setMenu, playerName, playerMoveList, setMusic }) => {

        const Bulbasaur = [Bulbasaur1, Bulbasaur2];
        const Charmander = [Charmander1, Charmander2];
        const Squirtle = [Squirtle1, Squirtle2];

        const [BulbasaurSprite, setBulbasaurSprite] = useState(Bulbasaur[0]);
        const [CharmanderSprite, setCharmanderSprite] = useState(Charmander[0]);
        const [SquirtleSprite, setSquirtleSprite] = useState(Squirtle[0]);

        const animate = () => {
        if (count % 2 === 0) {
            setBulbasaurSprite(Bulbasaur[1]);
            setCharmanderSprite(Charmander[1]);
            setSquirtleSprite(Squirtle[1]);
        } else {
            setBulbasaurSprite(Bulbasaur[0]);
            setCharmanderSprite(Charmander[0]);
            setSquirtleSprite(Squirtle[0]);
        }
    }
    setTimeout(animate, 1000);

    const selectBulbasaur = () => {
        playerSelect.push(Bulbasaur[0], Bulbasaur[1])
        setPlayerSprite(prevSprite => playerSelect[0]);
        playerName.push('Bulbasaur');
        playerMoveList.push(MoveList[0][0][0], MoveList[0][0][1], MoveList[0][0][2], MoveList[0][0][3]);
        setMenu('default');
    }

    const selectCharmander = () => {
        playerSelect.push(Charmander[0], Charmander[1]);
        setPlayerSprite(prevSprite => playerSelect[0]);
        playerName.push('Charmander');
        playerMoveList.push(MoveList[1][0][0], MoveList[1][0][1], MoveList[1][0][2], MoveList[1][0][3]);
        setMenu('default');
    }

    const selectSquirtle = () => {
        playerSelect.push(Squirtle[0], Squirtle[1]);
        setPlayerSprite(prevSprite => playerSelect[0]);
        playerName.push('Squirtle');
        playerMoveList.push(MoveList[2][0][0], MoveList[2][0][1], MoveList[2][0][2], MoveList[2][0][3]);
        setMenu('default');
    }

        return (
            <div className='nameContainer'>
                <p className='tagLine'>Choose your Starter Pokemon!</p>
                <div className="starter">
                    <div className='one'>
                    <img id='one' src={ BulbasaurSprite } alt="Bulbasaur" onClick={selectBulbasaur}/>
                    <span className='starterName'>Bulbasaur</span>
                    </div>
                </div>
                <div className="starter">
                    <div className='four'>
                    <img id='four' src={ CharmanderSprite } alt="Charmander" onClick={selectCharmander}/>
                    <span className='starterName'>Charmander</span>
                    </div>
                </div>
                <div className="starter">
                    <div className='seven'>
                    <img id='seven' src={ SquirtleSprite } alt="Squirtle" onClick={selectSquirtle}/>
                    <span className='starterName'>Squirtle</span>
                    </div>
                </div>
            </div>
        )
    
}

export default CharacterSelect;