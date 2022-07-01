import React, { useState } from "react";
import OpeningTheme from './Assets/opening-theme.mp3';
import GameoverTheme from './Assets/gameover-theme.mp3';
import BattleTheme from './Assets/battle-theme.mp3';
import enemyAttackSound from './Assets/enemy-attack-sound.mp3';
import TitleScreen from './TitleScreen.js';
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
    const [enemyMaxHealth, setEnemyMaxHealth] = useState(enemyLevel * 20);
    const [enemyHealth, setEnemyHealth] = useState(enemyMaxHealth);
    const [count, setCount] = useState(0)
    const [menu, setMenu] = useState('titleScreen')
    // eslint-disable-next-line
    const [music, setMusic] = useState();
    const [effect, setEffect] = useState(false);
    const [effectText, setEffectText] = useState(false);
    const [effectCounter, setEffectCounter] = useState(0);

    /* Resets to initial game state on character death */
    const gameOver = () => {
        if (playerHealth <= 0) {
         setMenu('gameOver'); setNewPlayerHealth(1); setSelectedLevel(PokemonList[0]); setEnemySelect(PokemonList[0][0]);
          setEnemyLevel(PokemonList[0][0].level); setEnemyMaxHealth(60); setEnemyHealth(60); setEnemySprite(Caterpie01);
    }
}
    const newGame = () => {
        setMenu('characterSelect'); setPlayerName([]); setPlayerLevel(5); setNewPlayerHealth(playerMaxHealth); setPlayerSelect([]); 
        setPlayerSprite(null); setPlayerMoveList([]); setEvolveLevel(1); setPlayerXP(0); setEffect(false); setEffectCounter(0);  
        
    }
    const attackSound = (sound) => {
        let beat = new Audio(sound);
        beat.play();
    }

    /* Functions that govern the 4 Attacks the player can have at any given time & handles damage calculation */

    /* Establishes debuff from GROWL and burn damage from BURN */
    const growlModified = (enemyDamage * 0.6);
    const burnDamage = effect == 'BURN' ? (playerDamage * 0.4) : (playerDamage * 0);

    const enemyAttack = () => {
    if (effectCounter > 0 && effect == 'GROWL') {
        setNewPlayerHealth(prevHealth => Math.floor(prevHealth - growlModified));
        attackSound(enemyAttackSound);
        setEffectCounter(prevCount => effectCounter - 1);
        setMenu('default');
    } else if (effectCounter > 0 && effect == 'BURN') {
        setNewPlayerHealth(prevHealth => Math.floor(prevHealth - enemyDamage));
        setEnemyHealth(prevHealth => prevHealth - Math.ceil(burnDamage))
        attackSound(enemyAttackSound);
        setEffectCounter(prevCount => effectCounter - 1);
        setMenu('default');
    } else {
        setNewPlayerHealth(prevHealth => Math.floor(prevHealth - enemyDamage));
        attackSound(enemyAttackSound);
        setMenu('default');
    }
}
    /*First if statement makes sure that players can't multiply by NaN if a move hasn't been loaded into a placeholder */
    const playerAttack1 = () => {
        let totalDamage = (playerDamage * playerMoveList[0].damageModifier);
        if (playerMoveList[0].strongAgainst.includes(enemySelect.type)) {
            totalDamage = totalDamage * 2.5;
        }
        if (enemyHealth > 0) {
        setEnemyHealth(prevHealth => Math.ceil(prevHealth - totalDamage));
        attackSound(playerMoveList[0].attackSound);
        } 
        if (enemyHealth - totalDamage > 0) {
            setMenu('enemy');
            setTimeout(enemyAttack, 2500);
        } else if (enemyHealth - (totalDamage + burnDamage) <= 0) {
            setEnemySelect(prevEnemy => selectedLevel[Math.floor(Math.random()*selectedLevel.length)]);
            setEnemyHealth(prevhealth => 0);
            setEffect(false);
            rewardXP();
            levelUp();
            setMenu('enemy');
            setTimeout(() => setMenu('default'), 2000);
        }
        console.log(totalDamage);
        console.log(playerDamage);
        console.log(burnDamage);
    }

    /*First if statement makes sure that players can't multiply by NaN if a move hasn't been loaded into a placeholder */
    const playerAttack2 = () => {
        if (playerMoveList[1].name !== '---') {
        let totalDamage = (playerDamage * playerMoveList[1].damageModifier);
        if (playerMoveList[1].strongAgainst.includes(enemySelect.type)) {
            totalDamage = totalDamage * 2.5;
        }
        if (enemyHealth > 0) {
        setEnemyHealth(prevHealth => Math.ceil(prevHealth - totalDamage));
        attackSound(playerMoveList[1].attackSound);
        } 
        if (enemyHealth - (totalDamage + burnDamage) > 0) {
            setMenu('enemy');
            setTimeout(enemyAttack, 2500);
        } else if (0 >= enemyHealth - totalDamage) {
            setEnemySelect(prevEnemy => selectedLevel[Math.floor(Math.random()*selectedLevel.length)]);
            setEnemyHealth(prevhealth => 0);
            rewardXP();
            levelUp();
            setEffect(false);
            setMenu('enemy');
            setTimeout(() => setMenu('default'), 2000);
        }  
    } 
}
    /*Second if statement makes sure that players can't multiply by NaN if a move hasn't been loaded into a placeholder */
    const playerAttack3 = () => {
        if (effect === false) {
        if (playerMoveList[2].name !== '---') {
        let totalDamage = (playerDamage * playerMoveList[2].damageModifier);
        if (playerMoveList[2].strongAgainst.includes(enemySelect.type)) {
            totalDamage = totalDamage * 2.5;
        }
        if (enemyHealth > 0) {
        setEnemyHealth(prevHealth => Math.ceil(prevHealth - totalDamage));
        attackSound(playerMoveList[2].attackSound);
        } 
        if (enemyHealth - totalDamage > 0) {
            setMenu('enemy');
            setTimeout(enemyAttack, 2500);
        } else if (enemyHealth - (totalDamage + burnDamage) <= 0) {
            setEnemySelect(prevEnemy => selectedLevel[Math.floor(Math.random()*selectedLevel.length)]);
            setEnemyHealth(prevhealth => 0);
            rewardXP();
            levelUp();
            setMenu('enemy');
            setTimeout(() => setMenu('default'), 2000);
        }
    }
    if (playerMoveList[2].effect == 'BURN') {
        setEffect('BURN');
        setEffectText(playerMoveList[2].effectText);
        setEffectCounter(3);
    }
}
    }

    const playerAttack4 = () => {
        if (effect === false) {
        setEffect('GROWL')
        setEffectText(playerMoveList[3].effectText)
        setEffectCounter(2);
        let totalDamage = (playerDamage * playerMoveList[3].damageModifier);
        if (enemyHealth > 0) {
        setEnemyHealth(prevHealth => Math.ceil(prevHealth - totalDamage));
        attackSound(playerMoveList[3].attackSound);
        } 
        if (enemyHealth - totalDamage > 0) {
            setMenu('enemy');
            setTimeout(enemyAttack, 2500);
        } 
        setTimeout(() => setMenu('default'), 2000);
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
    // eslint-disable-next-line
    if (playerLevel === 7 && levelingUp && playerName == 'Bulbasaur') {
        setPlayerMoveList(MoveList[0][1])
    }
    // eslint-disable-next-line
    if (playerLevel === 7 && levelingUp && playerName == 'Charmander') {
        setPlayerMoveList(MoveList[1][1])
    }
    // eslint-disable-next-line
    if (playerLevel === 7 && levelingUp && playerName == 'Squirtle') {
        setPlayerMoveList(MoveList[2][1])
    }
    // eslint-disable-next-line
    if (playerLevel === 8 && levelingUp && playerName == 'Bulbasaur') {
        setPlayerMoveList(MoveList[0][2])
    }
    // eslint-disable-next-line
    if (playerLevel === 8 && levelingUp && playerName == 'Charmander') {
        setPlayerMoveList(MoveList[1][2])
    }
    // eslint-disable-next-line
    if (playerLevel === 8 && levelingUp && playerName == 'Squirtle') {
        setPlayerMoveList(MoveList[2][2])
    }
    // eslint-disable-next-line
    if (playerLevel === 12 && levelingUp && playerName == 'Bulbasaur') {
        setPlayerMoveList(MoveList[0][3])
    }
    // eslint-disable-next-line
    if (playerLevel === 12 && levelingUp && playerName == 'Charmander') {
        setPlayerMoveList(MoveList[1][3])
    }
    // eslint-disable-next-line
    if (playerLevel === 12 && levelingUp && playerName == 'Squirtle') {
        setPlayerMoveList(MoveList[2][3])
    }
    // eslint-disable-next-line
    if (playerLevel === 20 && levelingUp && playerName == 'Ivysaur') {
        setPlayerMoveList(MoveList[0][4])
    }
    // eslint-disable-next-line
    if (playerLevel === 20 && levelingUp && playerName == 'Charmeleon') {
        setPlayerMoveList(MoveList[1][4])
    }
    // eslint-disable-next-line
    if (playerLevel === 20 && levelingUp && playerName == 'Wartortle') {
        setPlayerMoveList(MoveList[2][4])
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
        // eslint-disable-next-line
        if (playerLevel === 15 && playerName == 'Charmander') {
           playerSelect[0] = Charmeleon01;
           playerSelect[1] = Charmeleon02;
           setPlayerName('Charmeleon');
           setEvolveLevel(prevEvolveLevel => evolveLevel + 0.1);
           // eslint-disable-next-line
        } if (playerLevel === 35 && playerName == 'Charmeleon') {
            playerSelect[0] = Charizard01;
            playerSelect[1] = Charizard02;
            setPlayerName('Charizard');
            setEvolveLevel(prevEvolveLevel => evolveLevel + 0.1);
            // eslint-disable-next-line
        } if (playerLevel === 15 && playerName == 'Bulbasaur') {
            playerSelect[0] = Ivysaur01;
            playerSelect[1] = Ivysaur02;
            setPlayerName('Ivysaur');
            setEvolveLevel(prevEvolveLevel => evolveLevel + 0.1);
            // eslint-disable-next-line
        } if (playerLevel === 31 && playerName == 'Ivysaur') {
             playerSelect[0] = Venusaur01;
             playerSelect[1] = Venusaur02;
             setPlayerName('Venusaur');
             setEvolveLevel(prevEvolveLevel => evolveLevel + 0.1);
             // eslint-disable-next-line
        } if (playerLevel === 15 && playerName == 'Squirtle') {
            playerSelect[0] = Wartortle01;
            playerSelect[1] = Wartortle02;
            setPlayerName('Wartortle');
            setEvolveLevel(prevEvolveLevel => evolveLevel + 0.1);
            // eslint-disable-next-line
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


/*Function caps player health after a level up to make sure it doesn't exceed maximum */
    const healthCap = () => {
        if (playerHealth > playerMaxHealth) {
            setNewPlayerHealth(playerLevel * 20);
        }
    }


    /*counter runs to time animations without getting stuck in recursion loop, also now handles updating of monster level and HP on new spawn
    as well as changing the combat zone*/
   const counter = () => { 
    /* FIRST IF STATEMENT IS FOR SETTLING REGULAR COMBAT DEATH */
    if (enemyHealth < 0) {
        setEnemyHealth(0);
        setEnemySelect(prevEnemy => selectedLevel[Math.floor(Math.random()*selectedLevel.length)]);
    }
    if (count >= 0 && enemyHealth === 0) {
        setEnemyLevel(prevLevel => enemySelect.level);
        setEnemyHealth(prevHealth => enemySelect.health);
        setEffect(false);
        setEffectText(false);
        setEffectCounter(0);
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
}
  
setTimeout(counter, 1000);
    
    if (menu === 'titleScreen') {
        return(
            <div>
                <TitleScreen 
                setMusic={setMusic}
                setMenu={setMenu} />
            </div>
        )
    }
    if (menu === 'characterSelect') {
    return (
        <div>
            <audio src={OpeningTheme} loop autoPlay='true' />
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
        )
    } 
    if (menu === 'gameOver') {
        return (
            <div>
                <audio src={GameoverTheme} loop autoPlay='true' />
                <GameOver 
                newGame={newGame} 
                count={count}/>
            </div>
        )
} else {
        return (
            <div>
            <audio src={BattleTheme} loop autoPlay='true' />
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
                enemySelect={enemySelect}
                effect={effect}
                effectText={effectText}
                effectCounter={effectCounter} />
            <Options    
                playerAttack1={playerAttack1}
                playerAttack2={playerAttack2}
                playerAttack3={playerAttack3}
                playerAttack4={playerAttack4}
                playerMoveList={playerMoveList}
                enemySelect={enemySelect}
                fight={fight} 
                goBack={goBack} 
                menu={menu}/>
            </div>
    )
        }
    }