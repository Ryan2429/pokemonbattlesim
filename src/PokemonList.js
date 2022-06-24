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
import Beedrill02 from './Assets/Beedrill02.png';
import Magikarp01 from './Assets/Magikarp01.png';
import Magikarp02 from './Assets/Magikarp02.png';
import Abra01 from './Assets/Abra01.png';
import Abra02 from './Assets/Abra02.png';
import Staryu01 from './Assets/Staryu01.png';
import Staryu02 from './Assets/Staryu02.png';
import Starmie01 from './Assets/Starmie01.png';
import Starmie02 from './Assets/Starmie02.png';
import Goldeen01 from './Assets/Goldeen01.png';
import Goldeen02 from './Assets/Goldeen02.png';
import Krabby01 from './Assets/Krabby01.png';
import Krabby02 from './Assets/Krabby02.png';
import Pidgeotto01 from './Assets/Pidgeotto01.png';
import Pidgeotto02 from './Assets/Pidgeotto02.png';
import Bellsprout01 from './Assets/Bellsprout01.png';
import Bellsprout02 from './Assets/Bellsprout02.png';
import Meowth01 from './Assets/Meowth01.png';
import Meowth02 from './Assets/Meowth02.png';
import Shellder01 from './Assets/Shellder01.png';
import Shellder02 from './Assets/Shellder02.png';
import Raticate01 from './Assets/Raticate01.png';
import Raticate02 from './Assets/Raticate02.png';



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
    const Caterpie = new Pokemon('Caterpie', 'Bug', 3, 60, 0.35, 180, Caterpie01, Caterpie02);
    const Metapod = new Pokemon('Metapod', 'Bug', 4, 80, 0.3, 240, Metapod01, Metapod02);
    const Weedle = new Pokemon('Weedle', 'Bug', 3, 60, 0.35, 180, Weedle01, Weedle02);
    const Kakuna = new Pokemon('Kakuna', 'Bug', 4, 80, 0.3, 240, Kakuna01, Kakuna02);
    const Pidgey = new Pokemon('Pidgey', 'Flying', 5, 100, 0.4, 300, Pidgey01, Pidgey02);
    const Rattata = new Pokemon('Rattata', 'Normal', 5, 100, 0.4, 300, Rattata01, Rattata02);
    const Pikachu = new Pokemon('Pikachu', 'Electric', 6, 120, 0.4, 360, Pikachu01, Pikachu02);
    const Zubat = new Pokemon('Zubat', 'Poison', 6, 120, 0.4, 360, Zubat01, Zubat02);
    const Geodude = new Pokemon('Geodude', 'Rock', 7, 140, 0.4, 420, Geodude01, Geodude02);
    const Onyx = new Pokemon('Onyx', 'Rock', 9, 180, 0.4, 450, Onyx01, Onyx02)
    const Jigglypuff = new Pokemon('Jigglypuff', 'Fairy', 8, 160, 0.4, 450, Jigglypuff01, Jigglypuff02);
    const Clefairy = new Pokemon('Clefairy', 'Fairy', 8, 160, 0.4, 450, Clefairy01, Clefairy02);
    const NidoranM = new Pokemon('Nidoran ♂', 'Poison', 9, 180, 0.45, 500, NidoranM01, NidoranM02);
    const NidoranF = new Pokemon('Nidoran ♀', 'Poison', 9, 180, 0.45, 500, NidoranF01, NidoranF02);
    const Sandshrew = new Pokemon('Sandshrew', 'Ground', 11, 220, 0.4, 580, Sandshrew01, Sandshrew02);
    const Ekans = new Pokemon('Ekans', 'Poison', 12, 240, 0.45, 630, Ekans01, Ekans02);
    const Koffing = new Pokemon('Koffing', 'Poison', 12, 240, 0.45, 630, Koffing01, Koffing02)
    const Butterfree = new Pokemon('Butterfree', 'Bug', 13, 260, 0.45, 650, Butterfree01, Butterfree02);
    const Beedrill = new Pokemon('Beedrill', 'Bug', 13, 260, 0.5, 680, Beedrill01, Beedrill02);
    const Mankey = new Pokemon('Mankey', 'Fighting', 14, 280, 0.45, 700, Mankey01, Mankey02);
    const Magikarp = new Pokemon('Magikarp', 'Water', 15, 300, 0.2, 500, Magikarp01, Magikarp02);
    const Abra = new Pokemon('Abra', 'Psychic', 15, 300, 0.2, 500, Abra01, Abra02);
    const Staryu = new Pokemon('Staryu', 'Water', 16, 320, 0.45, 800, Staryu01, Staryu02);
    const Goldeen = new Pokemon('Goldeen', 'Water', 16, 320, 0.35, 800, Goldeen01, Goldeen02);
    const Krabby = new Pokemon('Krabby', 'Water', 17, 340, 0.4, 850, Krabby01, Krabby02);
    const Starmie = new Pokemon('Starmie', 'Water', 18, 360, 0.5, 900, Starmie01, Starmie02);
    const Pidgeotto = new Pokemon ('Pidgeotto', 'Flying', 19, 380, 0.5, 1050, Pidgeotto01, Pidgeotto02);
    const Bellsprout = new Pokemon('Bellsprout', 'Grass', 19, 380, 0.4, 950, Bellsprout01, Bellsprout02);
    const Meowth = new Pokemon('Meowth', 'Normal', 20, 400, 0.45, 1000, Meowth01, Meowth02);
    const Shellder = new Pokemon('Shellder', 'Water', 21, 420, 0.45, 1050, Shellder01, Shellder02);
    const Raticate = new Pokemon('Raticate', 'Normal', 22, 440, 0.5, 1200, Raticate01, Raticate02);



    const VeridianForestPokemon = [ Caterpie, Metapod, Pidgey, Rattata, Weedle, Kakuna, Pikachu ];
    const MtMoonPokemon = [ Zubat, Geodude, Jigglypuff, Clefairy, Onyx ];
    const Route4Pokemon = [ NidoranM, NidoranF, Ekans, Koffing, Sandshrew ];
    const PreCeruleanGymPokemon = [ Butterfree, Beedrill, Mankey, Magikarp, Abra ];
    const CeruleanGymPokemon = [ Staryu, Starmie, Goldeen, Krabby ];
    const PreVermillionGymPokemon = [ Pidgeotto, Bellsprout, Meowth, Shellder, Raticate ]
   
    const PokemonList = [VeridianForestPokemon, MtMoonPokemon, Route4Pokemon, PreCeruleanGymPokemon, CeruleanGymPokemon,
                         PreVermillionGymPokemon ]


    export default PokemonList;