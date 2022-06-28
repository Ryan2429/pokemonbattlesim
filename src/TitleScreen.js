import React from 'react';
import OpeningTheme from './Assets/opening-theme.mp3';

const TitleScreen = ({ setMusic, setMenu }) => {
    const startGame = () => {
        setMusic(OpeningTheme);
        setMenu('characterSelect');
    }


    return(
        <div className='titleScreen'>
            <h1>Welcome to Pokemon Battle Simulator!</h1>
            <h2>This is a "boss rush" style game where you will face off against a gauntlet
                of Pokemon from across the Kanto region! 
            </h2>
            <h3>Make sure to take advantage of enemy type weaknesses to progress the game as efficiently as possible!</h3>
            <h3>**Be advised, music will begin to play once you hit start!**</h3>
            <button className='startButton' onClick={startGame}>START GAME</button>
        </div>
    )
}

export default TitleScreen;