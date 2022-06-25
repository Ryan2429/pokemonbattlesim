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
import GameOver from './GameOver.js';
import './App.css';
import PokemonList from './PokemonList.js';
import MoveList from './MoveList.js';


export default function App() {

    const [playerName, setPlayerName] = useState([]);
    const [playerLevel, setPlayerLevel] = useState(5);
    const playerMaxHealth = playerLevel * 20;
    const [playerHealth, setNewPlayerHealth] = useState(playerMaxHealth);
    const [playerSelect, setPlayerSelect] = useState([])
    const [playerSprite, setPlayerSprite] = useState(null)
    const [playerMoveList, setPlayerMoveList] = useState([]);
    const [evolveLevel, setEvolveLevel] = useState(1);
    const playerDamage = ((playerLevel * 2.35 * evolveLevel) * 2);
    const [playerXP, setPlayerXP] = useState(0);
    const XPToLevelUp = playerLevel * 80;
    const [selectedLevel, setSelectedLevel] = useState(PokemonList[0]);
    const [enemySelect, setEnemySelect] = useState(selectedLevel[0]);
    const [enemyLevel, setEnemyLevel] = useState(enemySelect.level);
    const enemyDamage = enemyLevel * 6 * enemySelect.damageModifier;
    const [enemySprite, setEnemySprite] = useState(Caterpie01);
    const enemyMaxHealth = enemyLevel * 20;
    const [enemyHealth, setNewEnemyHealth] = useState(enemyMaxHealth)
    const [count, setCount] = useState(0)
    const [menu, setMenu] = useState('characterSelect')
    

    /* Resets to initial game state on character death */
    const gameOver = () => {
        if (playerHealth <= 0) {
        setPlayerName([]); setPlayerLevel(5); setNewPlayerHealth(playerMaxHealth); setPlayerSelect([]); setPlayerSprite(null); 
        setPlayerMoveList([]); setEvolveLevel(1); setPlayerXP(0); setSelectedLevel(PokemonList[0]); setEnemySelect(selectedLevel[0]);
        setEnemySprite(Caterpie01); setNewEnemyHealth(enemyMaxHealth); setCount(0); setMenu('gameOver');
    }
}
    const newGame = () => {
        setMenu('characterSelect');
    }


    /* Functions that govern the 4 Attacks the player can have at any given time & handles damage calculation */
    /*First if statement makes sure that players can't multiply by NaN if a move hasn't been loaded into a placeholder */
    const playerAttack1 = () => {
        if (playerMoveList[0].name != '---') {
        let totalDamage = (playerDamage * playerMoveList[0].damageModifier);
        if (enemyHealth > 0) {
        setNewEnemyHealth(prevHealth => Math.ceil(prevHealth - totalDamage))
        } 
        const enemyAttack = () => {
            setNewPlayerHealth(prevHealth => Math.floor(prevHealth - enemyDamage))
            setMenu('default');
        }
        if (enemyHealth - totalDamage > 0) {
            setMenu('enemy');
            setTimeout(enemyAttack, 2500);
        } else if (enemyHealth - totalDamage <= 0) {
            setEnemySelect(prevEnemy => selectedLevel[Math.floor(Math.random()*selectedLevel.length)]);
            setNewEnemyHealth(prevhealth => 0);
            rewardXP();
            levelUp();
            setMenu('enemy');
            setTimeout(() => setMenu('default'), 2000);
        }
        if (playerMoveList[0].strongAgainst.includes(enemySelect.type)) {
            totalDamage = totalDamage * 1.5;
            console.log(totalDamage);
        }
    }
}

    const playerAttack2 = () => {
        if (playerMoveList[1].name !== '---') {
        let totalDamage = (playerDamage * playerMoveList[1].damageModifier);
        if (playerMoveList[1].strongAgainst.includes(enemySelect.type)) {
            totalDamage = totalDamage * 2;
        }
        if (enemyHealth > 0) {
        setNewEnemyHealth(prevHealth => Math.ceil(prevHealth - totalDamage))
        } 
        const enemyAttack = () => {
            setNewPlayerHealth(prevHealth => Math.floor(prevHealth - enemyDamage))
            setMenu('default');
        }
        if (enemyHealth - totalDamage > 0) {
            setMenu('enemy');
            setTimeout(enemyAttack, 2500);
        } else if (0 >= enemyHealth - totalDamage) {
            setEnemySelect(prevEnemy => selectedLevel[Math.floor(Math.random()*selectedLevel.length)]);
            setNewEnemyHealth(prevhealth => 0);
            rewardXP();
            levelUp();
            setMenu('enemy');
            setTimeout(() => setMenu('default'), 2000);
        }
        if (playerMoveList[1].strongAgainst.includes(enemySelect.type)) {
            totalDamage = totalDamage * 2;
        }
    }
}

    const playerAttack3 = () => {
        if (playerMoveList[2].name !== '---') {
        let totalDamage = (playerDamage * playerMoveList[2].damageModifier)
        if (enemyHealth > 0) {
        setNewEnemyHealth(prevHealth => Math.ceil(prevHealth - totalDamage))
        } 
        const enemyAttack = () => {
            setNewPlayerHealth(prevHealth => Math.floor(prevHealth - enemyDamage))
            setMenu('default');
        }
        if (enemyHealth - totalDamage > 0) {
            setMenu('enemy');
            setTimeout(enemyAttack, 2500);
        } else if (enemyHealth - totalDamage <= 0) {
            setEnemySelect(prevEnemy => selectedLevel[Math.floor(Math.random()*selectedLevel.length)]);
            setNewEnemyHealth(prevhealth => 0);
            rewardXP();
            levelUp();
            setMenu('enemy');
            setTimeout(() => setMenu('default'), 2000);
        }
        if (playerMoveList[2].strongAgainst.includes(enemySelect.type)) {
            totalDamage = totalDamage * 2;
        }
    }
}

    const playerAttack4 = () => {
        if (playerMoveList[3].name !== '---') {
        let totalDamage = (playerDamage * playerMoveList[3].damageModifier)
        if (enemyHealth > 0) {
        setNewEnemyHealth(prevHealth => Math.ceil(prevHealth - totalDamage))
        } 
        const enemyAttack = () => {
            setNewPlayerHealth(prevHealth => Math.floor(prevHealth - enemyDamage))
            setMenu('default');
        }
        if (enemyHealth - totalDamage > 0) {
            setMenu('enemy');
            setTimeout(enemyAttack, 2500);
        } else if (enemyHealth - totalDamage <= 0) {
            setEnemySelect(prevEnemy => selectedLevel[Math.floor(Math.random()*selectedLevel.length)]);
            setNewEnemyHealth(prevhealth => 0);
            rewardXP();
            levelUp();
            setMenu('enemy');
            setTimeout(() => setMenu('default'), 2000);
        }
        if (playerMoveList[3].strongAgainst.includes(enemySelect.type)) {
            totalDamage = totalDamage * 2;
        }
    }
}


    let levelingUp = (playerXP + enemySelect.xpReward) >= XPToLevelUp;
/* Function controls spawns based upon game progression */
const changeZone = () => {
    if (playerLevel === 7 && levelingUp) {
        setSelectedLevel(prevLevel => PokemonList[1]);
    }
    if (playerLevel === 10 && levelingUp) {
        setSelectedLevel(prevLevel => PokemonList[2]);
    }
    if (playerLevel === 14 && levelingUp) {
        setSelectedLevel(prevLevel => PokemonList[3]);
    }
    if (playerLevel === 16 && levelingUp) {
        setSelectedLevel(prevLevel => PokemonList[4]);
    }
    if (playerLevel === 19 && levelingUp) {
        setSelectedLevel(prevLevel => PokemonList[5]);
    }
}

const moveRefresh = () => {
    if (playerLevel === 7 && levelingUp && playerName == 'Bulbasaur') {
        setPlayerMoveList(MoveList[0][1])
    }
    if (playerLevel === 7 && levelingUp && playerName == 'Charmander') {
        setPlayerMoveList(MoveList[1][1])
    }
    if (playerLevel === 7 && levelingUp && playerName == 'Squirtle') {
        setPlayerMoveList(MoveList[2][1])
    }
}

/* Rewards xp after enemy defeated */
    const rewardXP = () => {
        setPlayerXP(prevXP => playerXP + enemySelect.xpReward);
}

/*Levels up character if xp bar will be full, or greater than full and rolls over extra xp to new level xp bar */
    const levelUp = () => { 
        if (levelingUp) {
            setPlayerXP(prevXP => (playerXP + enemySelect.xpReward) - XPToLevelUp);
            setPlayerLevel(prevLevel => playerLevel + 1);
            setNewPlayerHealth(prevHealth => prevHealth + (playerMaxHealth * 0.6));
            setEvolveLevel(prevEvolveLevel => evolveLevel + 0.01);
            moveRefresh();
            evolve();
        }    
    }

/* Function evolves pokemon at appropriate level, changes sprites & name, and renders a 1% damage boost per level */
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
       
    /*Handles changing of menu states restricting or allowing player selections */
    const fight = () => {
        setMenu('fight');
    }
    
    const goBack = () => {
        setMenu('default');
    }
    
/*counter runs to time animations without getting stuck in recursion loop, also now handles updating of monster level and HP on new spawn
    as well as changing the combat zone*/
   
    const healthCap = () => {
/*Function caps player health after a level up to make sure it doesn't exceed maximum */
        if (playerHealth > playerMaxHealth) {
            setNewPlayerHealth(playerLevel * 20);
        }
    }

   const counter = () => { 
    if (count >= 0 && enemyHealth === 0) {
        setEnemyLevel(prevLevel => enemySelect.level);
        setNewEnemyHealth(prevHealth => enemySelect.health);
    }
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
    healthCap();
    gameOver();
    console.log(count);
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
                playerMoveList={playerMoveList} 
                setPlayerMoveList={setPlayerMoveList}
                setMenu={setMenu}
                setEnemySelect={setEnemySelect}/>
                
        </div>
    )} else if (menu === 'gameOver') {
        return (
            <div>
                <GameOver newGame={newGame} count={count}/>
            </div>
        )
} else {
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
                playerAttack1={playerAttack1}
                playerAttack2={playerAttack2}
                playerAttack3={playerAttack3}
                playerAttack4={playerAttack4}
                playerMoveList={playerMoveList}
                fight={fight} 
                goBack={goBack} 
                menu={menu}/>
            </div>
    )
        }
    }