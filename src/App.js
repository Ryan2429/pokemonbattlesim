import React, { useState } from "react";
import CharacterSelect from './CharacterSelect.js';
import PlayerChar from './PlayerChar.js';
import Enemy from './Enemy.js';
import Options from './Options.js';
import Pikachu1 from './Assets/PikachuDefault.png';
import Pikachu2 from './Assets/PikachuAlt.png';
import './App.css';

export default function App() {

    
    const playerLevel = 5;
    const playerDamage = (playerLevel * 2) * 4;
    const enemyLevel = 5;
    const enemyDamage = enemyLevel * 6;
    const [playerName, setPlayerName] = useState([]);
    const [playerHealth, setNewPlayerHealth] = useState(playerLevel * 20);
    const enemySelect = [Pikachu1, Pikachu2]
    const [enemySprite, setEnemySprite] = useState(enemySelect[0]) 
    const [enemyHealth, setNewEnemyHealth] = useState(enemyLevel * 20)
    const [count, setCount] = useState(0)
    const [menu, setMenu] = useState('characterSelect')
    const [playerSelect, setPlayerSelect] = useState([])
    const [playerSprite, setPlayerSprite] = useState(null)
   
    /*THESE FUNCTIONS HANDLE ALL STATE CHANGES RELATIVE TO MENU SELECTIONS BETWEEN PLAYER AND ENEMY CHARACTERS*/
    /* Handles damage calculation when attacking enemy and switches state to enemy turn */
    const playerAttack = () => {
        if (enemyHealth > 0) {
        setNewEnemyHealth(prevHealth => prevHealth - playerDamage)
        } 
        const enemyAttack = () => {
            setNewPlayerHealth(prevHealth => prevHealth - enemyDamage)
            setMenu('default');
        }
        if (enemyHealth - playerDamage > 0) {
            setMenu('enemy');
            setTimeout(enemyAttack, 3000);
            console.log(menu)
        } else if (enemyHealth - playerDamage < 0) {
            /* placeholder menu so that you can't spam between states while waiting to impliment pokemon respawns, THIS WILL CHANGE */
            setMenu('enemy');
        }
    }
    
    

    
  


    /*Handles changing of menu states restricting or allowing player selections */
    const fight = () => {
        setMenu('fight');
    }
    
    const goBack = () => {
        setMenu('default');
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
            <CharacterSelect 
                playerName={playerName}
                setPlayerName={setPlayerName}
                menu={menu} 
                count={count} 
                playerSelect={playerSelect} 
                setPlayerSelect={setPlayerSelect} 
                setPlayerSprite={setPlayerSprite} 
                setMenu={setMenu}/>
        </div>
    )} else { 
        return (
            <div>
            <PlayerChar 
                playerName={playerName}
                playerHealth={playerHealth} 
                playerLevel={playerLevel}
                playerSprite={playerSprite}/>
            <Enemy 
                enemyHealth={enemyHealth} 
                enemyLevel={enemyLevel}
                enemySprite={enemySprite}/>
            <Options    
                playerAttack={playerAttack} 
                fight={fight} 
                goBack={goBack} 
                menu={menu} 
                count={count} 
                setCount={setCount}/>
            </div>
    )
        }
    }