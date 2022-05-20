import React, { useState } from "react";
import CharacterSelect from './CharacterSelect.js';
import PlayerChar from './PlayerChar.js';
import Enemy from './Enemy.js';
import Options from './Options.js';
import Pikachu1 from './Assets/PikachuDefault.png';
import Pikachu2 from './Assets/PikachuAlt.png';
import './App.css';

export default function App() {

    
    const playerLevel = 1;
    const playerDamage = playerLevel * 5;
    const [playerHealth, setNewPlayerHealth] = useState(100);
    const enemySelect = [Pikachu1, Pikachu2]
    const [enemySprite, setEnemySprite] = useState(enemySelect[0]) 
    const [enemyHealth, setNewEnemyHealth] = useState(100)
    const [count, setCount] = useState(0)
    const [menu, setMenu] = useState('characterSelect')
    const playerSelect = []
    const [playerSprite, setPlayerSprite] = useState(null)

    const characterSelection = (e) => {
        setPlayerSprite(e.target.value);
        console.log('working');
        console.log({ characterSelection });
    }


    /*THESE FUNCTIONS HANDLE ALL STATE CHANGES RELATIVE TO MENU SELECTIONS BETWEEN PLAYER AND ENEMY CHARACTERS*/
    /* Handles damage calculation when attacking enemy and switches state to enemy turn */
    const enemyAttacked = () => {
        setNewEnemyHealth(prevHealth => prevHealth - playerDamage)
        setMenu('enemy');
        console.log(menu);
    }
    /*Handles changing of menu states restricting or allowing player selections */
    const fight = () => {
        setMenu('fight');
        console.log(menu);
    }
    
    const goBack = () => {
        setMenu('default');
        console.log(menu);
    }

  /*counter runs to time animations without getting stuck in recursion loop*/
   
   const counter = () => { 
    if (count === 3) {
        setPlayerSprite(prevSprite => playerSelect[0])
        setEnemySprite(prevSprite => enemySelect[1])
        setCount(prevCount => 0);
    } else if (count % 2 === 0) {
            setPlayerSprite(prevSprite => playerSelect[0])
            setEnemySprite(prevSprite => enemySelect[1])
            setCount(count+1); 
    } else if (count % 2 !== 0){
            setPlayerSprite(prevSprite => playerSelect[1])
            setEnemySprite(prevSprite => enemySelect[0])
            setCount(count+1);
    } 
}  
setTimeout(counter, 1000);   


    if (menu === 'characterSelect') {
    return (
        <div>
            <CharacterSelect playerSprite={playerSprite} characterSelection={characterSelection} menu={menu} count={count}/>
        </div>
    )} else { 
        return (
            <div>
            <PlayerChar playerHealth={playerHealth} playerSprite={playerSprite}/>
            <Enemy enemyHealth={enemyHealth} enemySprite={enemySprite}/>
            <Options enemyAttacked={enemyAttacked} fight={fight} goBack={goBack} menu={menu} count={count} setCount={setCount}/>
            </div>
    )
        }
    }

