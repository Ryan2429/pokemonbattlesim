import React, { useState } from "react";
import CharacterSelect from './CharacterSelect.js';
import PlayerChar from './PlayerChar.js';
import Enemy from './Enemy.js';
import Options from './Options.js';
import Caterpie01 from './Assets/Caterpie01.png';
import Caterpie02 from './Assets/Caterpie02.png';
import Metapod01 from './Assets/Metapod01.png';
import Metapod02 from './Assets/Metapod02.png';
import Pidgey01 from './Assets/Pidgey01.png';
import Pidgey02 from './Assets/Pidgey02.png';
import Rattata01 from './Assets/Rattata01.png';
import Rattata02 from './Assets/Rattata02.png';
import Weedle01 from './Assets/Weedle01.png';
import Weedle02 from './Assets/Weedle02.png';
import Kakuna01 from './Assets/Kakuna01.png';
import Kakuna02 from './Assets/Kakuna02.png';
import Pikachu01 from './Assets/Pikachu01.png';
import Pikachu02 from './Assets/Pikachu02.png';
import Zubat01 from './Assets/Zubat01.png';
import Zubat02 from './Assets/Zubat02.png';
import Geodude01 from './Assets/Geodude01.png';
import Geodude02 from './Assets/Geodude02.png';
import Clefairy01 from './Assets/Clefairy01.png';
import Clefairy02 from './Assets/Clefairy02.png';
import Jigglypuff01 from './Assets/Jigglypuff01.png';
import Jigglypuff02 from './Assets/Jigglypuff02.png';
import './App.css';

export default function App() {
/* Protoype Object to create all Pokemon */
    function Pokemon(name, type, level, health, damageModifier, xpReward, image1, image2) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.health = health;
        this.damageModifier = damageModifier;
        this.xpReward = xpReward;
        this.image1 = image1;
        this.image2 = image2;
    }

    const Caterpie = new Pokemon('Caterpie', 'Bug', 3, 60, 0.4, 120, Caterpie01, Caterpie02);
    const Metapod = new Pokemon('Metapod', 'Bug', 4, 80, 0.3, 140, Metapod01, Metapod02);
    const Weedle = new Pokemon('Weedle', 'Bug', 3, 60, 0.4, 120, Weedle01, Weedle02);
    const Kakuna = new Pokemon('Kakuna', 'Bug', 4, 80, 0.3, 140, Kakuna01, Kakuna02);
    const Pidgey = new Pokemon('Pidgey', 'Flying', 5, 100, 0.45, 160, Pidgey01, Pidgey02);
    const Rattata = new Pokemon('Rattata', 'Normal', 5, 100, 0.45, 160, Rattata01, Rattata02);
    const Pikachu = new Pokemon('Pikachu', 'Electric', 6, 120, 0.5, 200, Pikachu01, Pikachu02);
    const Zubat = new Pokemon('Zubat', 'Poison', 6, 120, 0.45, 180, Zubat01, Zubat02);
    const Geodude = new Pokemon('Geodude', 'Rock', 7, 140, 0.45, 200, Geodude01, Geodude02);
    const Jigglypuff = new Pokemon('Jigglypuff', 'Fairy', 8, 160, 0.5, 230, Jigglypuff01, Jigglypuff02);
    const Clefairy = new Pokemon('Clefairy', 'Fairy', 8, 160, 0.5, 230, Clefairy01, Clefairy02);

    const VeridianForestPokemon = [ Caterpie, Metapod, Pidgey, Rattata, Weedle, Kakuna, Pikachu ]
    const MtMoonPokemon = [ Zubat, Geodude, Jigglypuff, Clefairy ];

    const [selectedLevel, setSelectedLevel] = useState(VeridianForestPokemon);
    const [enemySelect, setEnemySelect] = useState(selectedLevel[0]);
    const [enemyLevel, setEnemyLevel] = useState(enemySelect.level);
    const [playerLevel, setPlayerLevel] = useState(5);
    const playerDamage = (playerLevel * 2) * 2;
    const [playerXP, setPlayerXP] = useState(0);
    const XPToLevelUp = playerLevel * 10;
    const enemyDamage = enemyLevel * 6 * enemySelect.damageModifier;
    const [playerName, setPlayerName] = useState([]);
    const playerMaxHealth = playerLevel * 20;
    const [playerHealth, setNewPlayerHealth] = useState(playerMaxHealth);
    const [enemySprite, setEnemySprite] = useState(Caterpie01);
    const enemyMaxHealth = enemyLevel * 20;
    const [enemyHealth, setNewEnemyHealth] = useState(enemyMaxHealth)
    const [count, setCount] = useState(0)
    const [menu, setMenu] = useState('characterSelect')
    const [playerSelect, setPlayerSelect] = useState([])
    const [playerSprite, setPlayerSprite] = useState(null)
    
/* Function controls spawns based upon game progression */
    const changeZone = () => {
        if (playerLevel >= 8 && playerLevel <= 13) {
            setSelectedLevel(prevLevel => MtMoonPokemon);
        }
    }

    const rewardXP = () => {
        setPlayerXP(prevXP => playerXP + enemySelect.xpReward);
    }

    const levelUp = () => {
        if (playerXP >= XPToLevelUp) {
            setPlayerLevel(prevLevel => playerLevel + 1);
            setNewPlayerHealth(prevHealth => playerMaxHealth + 20);
            setPlayerXP(prevXP => 0);
        }
    }

    /*THESE FUNCTIONS HANDLE ALL STATE CHANGES RELATIVE TO MENU SELECTIONS BETWEEN PLAYER AND ENEMY CHARACTERS*/
    /* Handles damage calculation when attacking enemy and switches state to enemy turn */
    const newEnemy = () => {
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
            setEnemySelect(prevEnemy => selectedLevel[Math.floor(Math.random()*selectedLevel.length)]);
            rewardXP();
            levelUp();
            setTimeout(newEnemy, 1000);
        }
        changeZone();
    }
    
    /*Handles changing of menu states restricting or allowing player selections */
    const fight = () => {
        setMenu('fight');
    }
    
    const goBack = () => {
        setMenu('default');
    }
    
  /*counter runs to time animations without getting stuck in recursion loop, also now handles updating of monster level and HP on new spawn
    as well as changing the combat zone*/
   
   const counter = () => { 
   if (count >= 0 && enemyHealth === 0) {
    setEnemyLevel(prevLevel => enemySelect.level);
    setNewEnemyHealth(prevHealth => enemySelect.health);
    } else if (count === 3) {
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