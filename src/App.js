import React, { useState } from "react";
import CharacterSelect from './CharacterSelect.js';
import PlayerChar from './PlayerChar.js';
import Ivysaur01 from './Assets/Ivysaur01.png';
import Ivysaur02 from './Assets/Ivysaur02.png';
import Venusaur01 from './Assets/Venusaur01.png';
import Venusaur02 from './Assets/Venusaur02.png';
import Charmeleon01 from './Assets/Charmeleon01.png';
import Charmeleon02 from './Assets/Charmeleon02.png';
import Charizard01 from './Assets/Charizard01.png';
import Charizard02 from './Assets/Charizard02.png';
import Wartortle01 from './Assets/Wartortle01.png';
import Wartortle02 from './Assets/Wartortle02.png';
import Blastoise01 from './Assets/Blastoise01.png';
import Blastoise02 from './Assets/Blastoise02.png';
import Enemy from './Enemy.js';
import Caterpie01 from './Assets/Caterpie01.png';
import Options from './Options.js';
import './App.css';

import PokemonList from './PokemonList.js';

export default function App() {

    const [selectedLevel, setSelectedLevel] = useState(PokemonList[0]);
    const [enemySelect, setEnemySelect] = useState(selectedLevel[0]);
    const [enemyLevel, setEnemyLevel] = useState(enemySelect.level);
    const [playerLevel, setPlayerLevel] = useState(5);
    const [evolveLevel, setEvolveLevel] = useState(1);
    const playerDamage = (playerLevel * 2.15 * evolveLevel) * 2;
    const [playerXP, setPlayerXP] = useState(0);
    const XPToLevelUp = playerLevel * 80;
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
    let levelingUp = (playerXP + enemySelect.xpReward) >= XPToLevelUp;
    if (playerLevel === 7 && levelingUp) {
        setSelectedLevel(prevLevel => PokemonList[1]);
    }
    if (playerLevel === 10 && levelingUp) {
        setSelectedLevel(prevLevel => PokemonList[2]);
    }
    if (playerLevel === 14 && levelingUp) {
        setSelectedLevel(prevLevel => PokemonList[3]);
    }
}
/* Rewards xp after enemy defeated */
    const rewardXP = () => {
        setPlayerXP(prevXP => playerXP + enemySelect.xpReward);
}
/*Levels up character if xp bar will be full, or greater than full and rolls over extra xp to new level xp bar */
    const levelUp = () => {
        if (playerXP + enemySelect.xpReward >= XPToLevelUp) {
            setPlayerXP(prevXP => (playerXP + enemySelect.xpReward) - XPToLevelUp);
            setPlayerLevel(prevLevel => playerLevel + 1);
            setNewPlayerHealth(prevHealth => playerMaxHealth + 20);
            setEvolveLevel(prevEvolveLevel => evolveLevel + 0.01);
            evolve();
        }
    }

    const setNewEnemy = () => {
        setEnemyLevel(prevLevel => enemySelect.level);
        setEnemySprite(prevSprite => enemySelect.image1);
        setNewEnemyHealth(prevHealth => enemySelect.health);
    }
/* Function evolves pokemon at appropriate level, changes sprites & name, and renders a 10% damage boost per level */
    const evolve = () => {
        if (playerLevel === 15 && playerName == 'Charmander') {
           playerSelect[0] = Charmeleon01;
           playerSelect[1] = Charmeleon02;
           setPlayerName('Charmeleon');
           setEvolveLevel(prevEvolveLevel => evolveLevel + 0.1);
        } if (playerLevel === 35 && playerName == 'Charmeleon') {
            playerSelect[0] = Charizard01;
            playerSelect[1] = Charizard02;
            setPlayerName('Charizard');
            setEvolveLevel(prevEvolveLevel => evolveLevel + 0.1);
        } if (playerLevel === 15 && playerName == 'Bulbasaur') {
            playerSelect[0] = Ivysaur01;
            playerSelect[1] = Ivysaur02;
            setPlayerName('Ivysaur');
            setEvolveLevel(prevEvolveLevel => evolveLevel + 0.1);
        } if (playerLevel === 31 && playerName == 'Ivysaur') {
             playerSelect[0] = Venusaur01;
             playerSelect[1] = Venusaur02;
             setPlayerName('Venusaur');
             setEvolveLevel(prevEvolveLevel => evolveLevel + 0.1);
        } if (playerLevel === 15 && playerName == 'Squirtle') {
            playerSelect[0] = Wartortle01;
            playerSelect[1] = Wartortle02;
            setPlayerName('Wartortle');
            setEvolveLevel(prevEvolveLevel => evolveLevel + 0.1);
        } if (playerLevel === 35 && playerName == 'Wartortle') {
             playerSelect[0] = Blastoise01;
             playerSelect[1] = Blastoise02;
             setPlayerName('Blastoise');
             setEvolveLevel(prevEvolveLevel => evolveLevel + 0.1);
        }
}

    /*THESE FUNCTIONS HANDLE ALL STATE CHANGES RELATIVE TO MENU SELECTIONS BETWEEN PLAYER AND ENEMY CHARACTERS*/
    /* Handles damage calculation when attacking enemy and switches state to enemy turn */
       
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
            setTimeout(enemyAttack, 2500);
        } else if ((enemyHealth - playerDamage) <= 0) {
            setEnemySelect(prevEnemy => selectedLevel[Math.floor(Math.random()*selectedLevel.length)]);
            setNewEnemyHealth(prevhealth => 0);
            rewardXP();
            levelUp();
            setNewEnemy();
            setMenu('enemy');
            setTimeout(() => setMenu('default'), 2000);
        }
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
    changeZone();
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
                playerSprite={playerSprite}
                playerXP={playerXP}
                XPToLevelUp={XPToLevelUp}/>
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
                menu={menu}/>
            </div>
    )
        }
    }