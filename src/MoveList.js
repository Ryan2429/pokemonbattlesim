function Move(name, type, damageModifier, strongAgainst, effect) {
    this.name = name;
    this.type = type;
    this.damageModifier = damageModifier;
    this.strongAgainst = strongAgainst;
    this.effect = effect;
}

/*Bulbasaur Moves */
const VineWhip = new Move('VINE WHIP', 'Grass', 0.7, ['Water', 'Rock', 'Ground']);
const LeechSeed = new Move('LEECH SEED', 'Grass', 0.5, ['Water', 'Rock', 'Ground'], 'Heal');
const RazorLeaf = new Move('RAZOR LEAF', 'Grass', 0.8, ['Water', 'Rock', 'Ground'], 'Critical');
const Absorb = new Move('ABSORB', 'Grass', 0.8, ['Water', 'Rock', 'Ground'], 'Heal')

/* Charmander Moves */
const Scratch = new Move('SCRATCH', 'Normal', 1.1, []);
const Ember = new Move('EMBER', 'Fire', 0.7, ['Bug', 'Grass', 'Ice'], 'Burn');
const Slash = new Move('SLASH', 'Normal', 1.3, [])
const Flamethrower = new Move('FLAMETHROWER', 'Fire', 1.0, ['Bug', 'Grass', 'Ice']);
const FireFang = new Move('FIRE FANG', 'Fire', 0.9, ['Bug', 'Grass', 'Ice'], 'Burn');

/* Squirtle Moves */
const Bubble = new Move('BUBBLE', 'Water', 0.8, ['Rock', 'Fire', 'Ground']);
const RapidSpin = new Move('RAPID SPIN', 'Normal', 1.1, []);
const Protect = new Move('PROTECT', 'Normal', 0.0, [], 'DefenseUp');
const WaterPulse = new Move('WATER PULSE', 'Water', 0.9, ['Rock', 'Fire', 'Ground'])

/* Shared Moves */
const None = new Move('---')
const Tackle = new Move('TACKLE', 'Normal', 1.0, []);
const TakeDown = new Move('TAKE DOWN', 'Normal', 1.2, []);
const Growl = new Move('GROWL', 'Normal', 0.0, [])


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