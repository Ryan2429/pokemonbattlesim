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


 
 

 
 
 
    const Caterpie = new Pokemon('Caterpie', 'Bug', 3, 60, 0.3, 150, Caterpie01, Caterpie02);
    const Metapod = new Pokemon('Metapod', 'Bug', 4, 80, 0.25, 170, Metapod01, Metapod02);
    const Weedle = new Pokemon('Weedle', 'Bug', 3, 60, 0.3, 150, Weedle01, Weedle02);
    const Kakuna = new Pokemon('Kakuna', 'Bug', 4, 80, 0.25, 170, Kakuna01, Kakuna02);
    const Pidgey = new Pokemon('Pidgey', 'Flying', 5, 100, 0.40, 190, Pidgey01, Pidgey02);
    const Rattata = new Pokemon('Rattata', 'Normal', 5, 100, 0.40, 190, Rattata01, Rattata02);
    const Pikachu = new Pokemon('Pikachu', 'Electric', 6, 120, 0.5, 230, Pikachu01, Pikachu02);
    const Zubat = new Pokemon('Zubat', 'Poison', 6, 120, 0.45, 120, Zubat01, Zubat02);
    const Geodude = new Pokemon('Geodude', 'Rock', 7, 140, 0.45, 230, Geodude01, Geodude02);
    const Jigglypuff = new Pokemon('Jigglypuff', 'Fairy', 8, 160, 0.5, 260, Jigglypuff01, Jigglypuff02);
    const Clefairy = new Pokemon('Clefairy', 'Fairy', 8, 160, 0.5, 260, Clefairy01, Clefairy02);

    const VeridianForestPokemon = [ Caterpie, Metapod, Pidgey, Rattata, Weedle, Kakuna, Pikachu ];
    const MtMoonPokemon = [ Zubat, Geodude, Jigglypuff, Clefairy ];
   
    const PokemonList = [VeridianForestPokemon, MtMoonPokemon]


    export default PokemonList;