import React, { useState } from 'react';
import './App.css';
import Charmander1 from './Assets/CharmanderDefault.png';
import Charmander2 from './Assets/CharmanderAlt.png';
import Bulbasaur1 from './Assets/BulbasaurDefault.png';
import Bulbasaur2 from './Assets/BulbasaurAlt.png';
import Squirtle1 from './Assets/SquirtleDefault.png';
import Squirtle2 from './Assets/SquirtleAlt.png';




const CharacterSelect  = ({ characterSelection, count }) => {

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
            console.log(count);
        } else {
            setBulbasaurSprite(Bulbasaur[0]);
            setCharmanderSprite(Charmander[0]);
            setSquirtleSprite(Squirtle[0]);
            console.log(count);
        }
    }
    setTimeout(animate, 1000);




        return (
            <div className='nameContainer'>
                <p className='tagLine'>Choose your Starter Pokemon!</p>
                <div className="starter">
                    <div className='one'>
                    <img id='one' src={ BulbasaurSprite } alt="Bulbasaur" onClick={characterSelection}/>
                    <span className='starterName'>Bulbasaur</span>
                    </div>
                </div>
                <div className="starter">
                    <div className='four'>
                    <img id='four' src={ CharmanderSprite } alt="Charmander" onClick={characterSelection}/>
                    <span className='starterName'>Charmander</span>
                    </div>
                </div>
                <div className="starter">
                    <div className='seven'>
                    <img id='seven' src={ SquirtleSprite } alt="Squirtle" onClick={characterSelection}/>
                    <span className='starterName'>Squirtle</span>
                    </div>
                </div>
            </div>
        )
    
}

export default CharacterSelect;