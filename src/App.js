import React, { useState } from "react";
import CharacterSelect from './CharacterSelect.js';
import PlayerChar from './PlayerChar.js';
import Enemy from './Enemy.js';
import Options from './Options.js';
import Caterpie01 from './Assets/Caterpie01.png';
import Caterpie02 from './Assets/Caterpie02.png';
import Metapod01 from './Assets/Metapod01.png';
import Metapod02 from './Assets/Metapod02.png';
import './App.css';

export default function App() {

    function Pokemon(name, type, level, health, damageModifier, image1, image2) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.health = health;
        this.damageModifier = damageModifier;
        this.image1 = image1;
        this.image2 = image2;
    }

    const Caterpie = new Pokemon('Caterpie', 'Bug', 3, 60, 0.5, Caterpie01, Caterpie02);
    const Metapod = new Pokemon('Metapod', 'Bug', 4, 80, 0.8, Metapod01, Metapod02);

    const VeridianForestPokemon = [ Caterpie, Metapod ]
    const [selectedLevel, setSelectedLevel] = useState(VeridianForestPokemon);
    const [enemySelect, setEnemySelect] = useState(selectedLevel[0]);
    const [enemyLevel, setEnemyLevel] = useState(enemySelect.level);
    const playerLevel = 5;
    const playerDamage = (playerLevel * 2) * 2.5;
    const enemyDamage = enemyLevel * 6 * enemySelect.damageModifier;
    const [playerName, setPlayerName] = useState([]);
    const [playerHealth, setNewPlayerHealth] = useState(playerLevel * 20);
    const [enemySprite, setEnemySprite] = useState(Caterpie01);
    const enemyMaxHealth = enemyLevel * 20;
    const [enemyHealth, setNewEnemyHealth] = useState(enemyMaxHealth)
    const [count, setCount] = useState(0)
    const [menu, setMenu] = useState('characterSelect')
    const [playerSelect, setPlayerSelect] = useState([])
    const [playerSprite, setPlayerSprite] = useState(null)
    






    /*THESE FUNCTIONS HANDLE ALL STATE CHANGES RELATIVE TO MENU SELECTIONS BETWEEN PLAYER AND ENEMY CHARACTERS*/
    /* Handles damage calculation when attacking enemy and switches state to enemy turn */
    const newEnemy = () => {
        setEnemySelect(prevEnemy => selectedLevel[Math.floor(Math.random()*selectedLevel.length)]);
        setEnemyLevel(prevLevel => enemySelect.level);
        setNewEnemyHealth(prevHealth => enemySelect.level * 20);
        setMenu('default');
        
    }
       

    const playerAttack = () => {
        if (enemyHealth > 0) {
        setNewEnemyHealth(prevHealth => Math.floor(prevHealth - playerDamage))
        } 
        const enemyAttack = () => {
            setNewPlayerHealth(prevHealth => Math.floor(prevHealth - enemyDamage))
            setMenu('default');
        }
        if (enemyHealth - playerDamage > 0) {
            setMenu('enemy');
            setTimeout(enemyAttack, 3000);
        } else if (enemyHealth - playerDamage <= 0) {
            setNewEnemyHealth(prevhealth => 0);
            setMenu('enemy');
            setTimeout(newEnemy, 2000);
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
        setEnemySprite(prevSprite => enemySelect.image1)
        setCount(prevCount => 0); 
    } else if (count % 2 === 0) {
            setPlayerSprite(prevSprite => playerSelect[0])
            setEnemySprite(prevSprite => enemySelect.image1)
            setCount(count+1); 
    } else if (count % 2 !== 0){
            setPlayerSprite(prevSprite => playerSelect[1])
            setEnemySprite(prevSprite => enemySelect.image2)
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
                setMenu={setMenu}
                setEnemySelect={setEnemySelect}/>
                
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
                enemyMaxHealth={enemyMaxHealth}
                enemyLevel={enemyLevel}
                enemySprite={enemySprite}
                enemySelect={enemySelect}/>
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