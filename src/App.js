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
    const playerDamage = (playerLevel * 2) * 1.10;
    const enemyLevel = 5;
    const enemyDamage = enemyLevel * 1.5;
    const [playerHealth, setNewPlayerHealth] = useState(100);
    const enemySelect = [Pikachu1, Pikachu2]
    const [enemySprite, setEnemySprite] = useState(enemySelect[0]) 
    const [enemyHealth, setNewEnemyHealth] = useState(100)
    const [count, setCount] = useState(0)
    const [menu, setMenu] = useState('characterSelect')
    const [playerSelect, setPlayerSelect] = useState([])
    const [playerSprite, setPlayerSprite] = useState(null)
   
    /*THESE FUNCTIONS HANDLE ALL STATE CHANGES RELATIVE TO MENU SELECTIONS BETWEEN PLAYER AND ENEMY CHARACTERS*/
    /* Handles damage calculation when attacking enemy and switches state to enemy turn */
    const playerAttack = () => {
        setNewEnemyHealth(prevHealth => prevHealth - playerDamage)
        setMenu('enemy');
        console.log(menu);
    }
    /*Handles changing of menu states restricting or allowing player selections */
    const fight = () => {
        setMenu('fight');
    }
    
    const goBack = () => {
        setMenu('default');
    }
    const enemyAttack = () => {
        let moves = ['Scratch', 'Tackle'];
        let attackChosen = moves[Math.floor(Math.random()*moves.length)];
        if (attackChosen === 'Scratch') {
            setNewPlayerHealth(prevHealth => playerHealth - (enemyDamage * 1.5));
            console.log('scratch');
            
        } else if (attackChosen === 'Tackle') {
            setNewPlayerHealth(prevHealth => playerHealth - (enemyDamage * 1.25));
            console.log('tackle');
            
        }
        setMenu('default');
        console.log(playerHealth);
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
                playerHealth={playerHealth} 
                playerSprite={playerSprite}/>
            <Enemy 
                enemyHealth={enemyHealth} 
                enemySprite={enemySprite}/>
            <Options    
                playerAttack={playerAttack} 
                fight={fight} 
                goBack={goBack} 
                menu={menu} 
                count={count} 
                setCount={setCount} 
                enemyAttack={enemyAttack}/>
            </div>
    )
        }
    }

