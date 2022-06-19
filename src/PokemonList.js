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
import Onyx01 from './Assets/Onyx01.png';
import Onyx02 from './Assets/Onyx02.png';
import Clefairy01 from './Assets/Clefairy01.png';
import Clefairy02 from './Assets/Clefairy02.png';
import Jigglypuff01 from './Assets/Jigglypuff01.png';
import Jigglypuff02 from './Assets/Jigglypuff02.png';
import NidoranM01 from './Assets/NidoranM01.png';
import NidoranM02 from './Assets/NidoranM02.png';
import NidoranF01 from './Assets/NidoranF01.png';
import NidoranF02 from './Assets/NidoranF02.png';
import Ekans01 from './Assets/Ekans01.png';
import Ekans02 from './Assets/Ekans02.png';
import Koffing01 from './Assets/Koffing01.png';
import Koffing02 from './Assets/Koffing02.png';
import Sandshrew01 from './Assets/Sandshrew01.png';
import Sandshrew02 from './Assets/Sandshrew02.png';
import Mankey01 from './Assets/Mankey01.png';
import Mankey02 from './Assets/Mankey02.png';
import Butterfree01 from './Assets/Butterfree01.png';
import Butterfree02 from './Assets/Butterfree02.png';
import Beedrill01 from './Assets/Beedrill01.png';
import Beedrill02 from './Assets/Beedrill01.png';
import Magikarp01 from './Assets/Magikarp01.png';
import Magikarp02 from './Assets/Magikarp02.png';
import Abra01 from './Assets/Abra01.png';
import Abra02 from './Assets/Abra02.png';


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
    const Metapod = new Pokemon('Metapod', 'Bug', 4, 80, 0.25, 200, Metapod01, Metapod02);
    const Weedle = new Pokemon('Weedle', 'Bug', 3, 60, 0.3, 150, Weedle01, Weedle02);
    const Kakuna = new Pokemon('Kakuna', 'Bug', 4, 80, 0.25, 200, Kakuna01, Kakuna02);
    const Pidgey = new Pokemon('Pidgey', 'Flying', 5, 100, 0.4, 250, Pidgey01, Pidgey02);
    const Rattata = new Pokemon('Rattata', 'Normal', 5, 100, 0.4, 250, Rattata01, Rattata02);
    const Pikachu = new Pokemon('Pikachu', 'Electric', 6, 120, 0.45, 300, Pikachu01, Pikachu02);
    const Zubat = new Pokemon('Zubat', 'Poison', 6, 120, 0.4, 300, Zubat01, Zubat02);
    const Geodude = new Pokemon('Geodude', 'Rock', 7, 140, 0.4, 350, Geodude01, Geodude02);
    const Onyx = new Pokemon('Onyx', 'Rock', 9, 180, 0.5, 450, Onyx01, Onyx02)
    const Jigglypuff = new Pokemon('Jigglypuff', 'Fairy', 8, 160, 0.45, 400, Jigglypuff01, Jigglypuff02);
    const Clefairy = new Pokemon('Clefairy', 'Fairy', 8, 160, 0.45, 400, Clefairy01, Clefairy02);
    const NidoranM = new Pokemon('Nidoran ♂', 'Poison', 9, 180, 0.5, 450, NidoranM01, NidoranM02);
    const NidoranF = new Pokemon('Nidoran ♀', 'Poison', 9, 180, 0.5, 450, NidoranF01, NidoranF02);
    const Sandshrew = new Pokemon('Sandshrew', 'Ground', 11, 220, 0.45, 550, Sandshrew01, Sandshrew02);
    const Ekans = new Pokemon('Ekans', 'Poison', 12, 240, 0.5, 600, Ekans01, Ekans02);
    const Koffing = new Pokemon('Koffing', 'Poison', 12, 240, 0.5, 600, Koffing01, Koffing02)
    const Butterfree = new Pokemon('Butterfree', 'Bug', 13, 260, 0.45, 650, Butterfree01, Butterfree02);
    const Beedrill = new Pokemon('Beedrill', 'Bug', 13, 260, 0.5, 680, Beedrill01, Beedrill02);
    const Mankey = new Pokemon('Mankey', 'Fighting', 14, 280, 0.45, 700, Mankey01, Mankey02);
    const Magikarp = new Pokemon('Magikarp', 'Water', 15, 300, 0.2, 500, Magikarp01, Magikarp02);
    const Abra = new Pokemon('Abra', 'Psychic', 15, 300, 0.2, 700, Abra01, Abra02);



    const VeridianForestPokemon = [ Caterpie, Metapod, Pidgey, Rattata, Weedle, Kakuna, Pikachu ];
    const MtMoonPokemon = [ Zubat, Geodude, Jigglypuff, Clefairy, Onyx ];
    const Route4Pokemon = [ NidoranM, NidoranF, Ekans, Koffing, Sandshrew ];
    const PreCeruleanGymPokemon = [ Butterfree, Beedrill, Mankey, Magikarp, Abra ]
   
    const PokemonList = [VeridianForestPokemon, MtMoonPokemon, Route4Pokemon, PreCeruleanGymPokemon]


    export default PokemonList;