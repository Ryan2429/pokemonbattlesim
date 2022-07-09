import tackleSound from './Assets/tackle.mp3';
import growlSound from './Assets/growl.mp3';
import vineWhipSound from './Assets/vine-whip.mp3';
import leechSeedSound from './Assets/leech-seed.mp3';
import razorLeafSound from './Assets/razor-leaf.mp3';
import absorbSound from './Assets/absorb.mp3';
import scratchSound from './Assets/scratch.mp3';
import emberSound from './Assets/ember.mp3';
import slashSound from './Assets/slash.mp3';
import flamethrowerSound from './Assets/flamethrower.mp3';
import fireFangSound from './Assets/fire-fang.mp3';
import bubbleSound from './Assets/bubble.mp3';
import rapidSpinSound from './Assets/rapid-spin.mp3';
import protectSound from './Assets/protect.mp3';
import waterPulseSound from './Assets/water-pulse.mp3';

function Move(name, type, damageModifier, strongAgainst, attackSound, effect, effectText) {
    this.name = name;
    this.type = type;
    this.damageModifier = damageModifier;
    this.strongAgainst = strongAgainst;
    this.attackSound = attackSound;
    this.effect = effect;
    this.effectText = effectText;
}

/*Bulbasaur Moves */
const VineWhip = new Move('VINE WHIP', 'Grass', 0.7, ['Water', 'Rock', 'Ground'], vineWhipSound);
const LeechSeed = new Move('LEECH SEED', 'Grass', 0.4, ['Water', 'Rock', 'Ground'], leechSeedSound, 'HEAL');
const RazorLeaf = new Move('RAZOR LEAF', 'Grass', 0.8, ['Water', 'Rock', 'Ground'], razorLeafSound, 'CRITICAL');
const Absorb = new Move('ABSORB', 'Grass', 0.6, ['Water', 'Rock', 'Ground'], absorbSound, 'HEAL')

/* Charmander Moves */
const Scratch = new Move('SCRATCH', 'Normal', 1.1, [], scratchSound);
const Ember = new Move('EMBER', 'Fire', 0.3, ['Bug', 'Grass', 'Ice'], emberSound, 'BURN', 'BURN - BURNING FOR');
const Slash = new Move('SLASH', 'Normal', 1.2, [], slashSound)
const Flamethrower = new Move('FLAMETHROWER', 'Fire', 1.0, ['Bug', 'Grass', 'Ice'], flamethrowerSound);
const FireFang = new Move('FIRE FANG', 'Fire', 0.4, ['Bug', 'Grass', 'Ice'], fireFangSound, 'BURN', 'BURN - BURNING FOR');

/* Squirtle Moves */
const Bubble = new Move('BUBBLE', 'Water', 0.8, ['Rock', 'Fire', 'Ground'], bubbleSound);
const RapidSpin = new Move('RAPID SPIN', 'Normal', 1.1, [], rapidSpinSound);
const Protect = new Move('PROTECT', 'Normal', 0.0, [], protectSound, 'DEFENSE-UP');
const WaterPulse = new Move('WATER PULSE', 'Water', 0.9, ['Rock', 'Fire', 'Ground'], waterPulseSound)

/* Shared Moves */
const None = new Move('---', null, null, []);
const Tackle = new Move('TACKLE', 'Normal', 1.0, [], tackleSound);
const TakeDown = new Move('TAKE DOWN', 'Normal', 1.2, []);
const Growl = new Move('GROWL', 'Normal', 0.0, [], growlSound, 'GROWL', 'GROWL - DMG DOWN')


const BulbasaurMoveList = [/* LV5  */[Tackle, None, None, Growl],
                           /* LV8  */[Tackle, VineWhip, None, Growl],
                           /* LV12 */[Tackle, RazorLeaf, LeechSeed, Growl],
                           /* LV16 */[Tackle, RazorLeaf, Absorb, Growl],
                           /* LV20 */[TakeDown, RazorLeaf, Absorb, Growl]
                          ]

const CharmanderMoveList = [/* LV5  */[Scratch, None, None, Growl],
                            /* LV8  */[Scratch, None, Ember, Growl],
                            /* LV12 */[Slash, None, Ember, Growl],
                            /* LV16 */[Slash, Flamethrower, Ember, Growl],
                            /* LV20 */[Slash, Flamethrower, FireFang, Growl]
                          ]

const SquirtleMoveList =   [/* LV5  */[Tackle, None, None, Growl],
                            /* LV8  */[Tackle, Bubble, None, Growl],
                            /* LV12 */[Tackle, Bubble, Protect, Growl],
                            /* LV16 */[RapidSpin, Bubble, Protect, Growl],
                            /* LV20 */[RapidSpin, WaterPulse, Protect, Growl]
                          ]

const MoveList = [BulbasaurMoveList, CharmanderMoveList, SquirtleMoveList];

export default MoveList;