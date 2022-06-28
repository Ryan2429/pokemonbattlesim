import React, { useState } from 'react';
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

function Move(name, type, damageModifier, strongAgainst, attackSound, effect) {
    this.name = name;
    this.type = type;
    this.damageModifier = damageModifier;
    this.strongAgainst = strongAgainst;
    this.attackSound = attackSound;
    this.effect = effect;
}

/*Bulbasaur Moves */
const VineWhip = new Move('VINE WHIP', 'Grass', 0.7, ['Water', 'Rock', 'Ground'], vineWhipSound);
const LeechSeed = new Move('LEECH SEED', 'Grass', 0.5, ['Water', 'Rock', 'Ground'], leechSeedSound, 'Heal');
const RazorLeaf = new Move('RAZOR LEAF', 'Grass', 0.8, ['Water', 'Rock', 'Ground'], razorLeafSound, 'Critical');
const Absorb = new Move('ABSORB', 'Grass', 0.8, ['Water', 'Rock', 'Ground'], absorbSound, 'Heal')

/* Charmander Moves */
const Scratch = new Move('SCRATCH', 'Normal', 1.1, [], scratchSound);
const Ember = new Move('EMBER', 'Fire', 0.7, ['Bug', 'Grass', 'Ice'], emberSound, 'Burn');
const Slash = new Move('SLASH', 'Normal', 1.3, [], slashSound)
const Flamethrower = new Move('FLAMETHROWER', 'Fire', 1.0, ['Bug', 'Grass', 'Ice'], flamethrowerSound);
const FireFang = new Move('FIRE FANG', 'Fire', 0.9, ['Bug', 'Grass', 'Ice'], fireFangSound, 'Burn');

/* Squirtle Moves */
const Bubble = new Move('BUBBLE', 'Water', 0.8, ['Rock', 'Fire', 'Ground'], bubbleSound);
const RapidSpin = new Move('RAPID SPIN', 'Normal', 1.1, [], rapidSpinSound);
const Protect = new Move('PROTECT', 'Normal', 0.0, [], protectSound, 'DefenseUp');
const WaterPulse = new Move('WATER PULSE', 'Water', 0.9, ['Rock', 'Fire', 'Ground'], waterPulseSound)

/* Shared Moves */
const None = new Move('---')
const Tackle = new Move('TACKLE', 'Normal', 1.0, [], tackleSound);
const TakeDown = new Move('TAKE DOWN', 'Normal', 1.2, []);
const Growl = new Move('GROWL', 'Normal', 0.0, [], growlSound)


const BulbasaurMoveList = [/* LV5  */[Tackle, None, None, Growl],
                           /* LV8  */[Tackle, VineWhip, None, Growl],
                           /* LV12 */[Tackle, RazorLeaf, LeechSeed, Growl],
                           /* LV16 */[Tackle, RazorLeaf, Absorb, Growl],
                           /* LV20 */[TakeDown, RazorLeaf, Absorb, Growl]
                          ]

const CharmanderMoveList = [/* LV5  */[Scratch, None, None, Growl],
                            /* LV8  */[Scratch, Ember, None, Growl],
                            /* LV12 */[Slash, Ember, None, Growl],
                            /* LV16 */[Slash, Ember, Flamethrower, Growl],
                            /* LV20 */[Slash, FireFang, Flamethrower, Growl]
                          ]

const SquirtleMoveList =   [/* LV5  */[Tackle, None, None, Growl],
                            /* LV8  */[Tackle, Bubble, None, Growl],
                            /* LV12 */[Tackle, Bubble, Protect, Growl],
                            /* LV16 */[RapidSpin, Bubble, Protect, Growl],
                            /* LV20 */[RapidSpin, WaterPulse, Protect, Growl]
                          ]

const MoveList = [BulbasaurMoveList, CharmanderMoveList, SquirtleMoveList];

export default MoveList;