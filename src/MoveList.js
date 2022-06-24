function Move(name, type, damageModifier, strongAgainst, effect) {
    this.name = name;
    this.type = type;
    this.damageModifier = damageModifier;
    this.strongAgainst = strongAgainst;
    this.effect = effect;
}

/*Bulbasaur Moves */
const VineWhip = new Move('Vine Whip', 'Grass', 0.7, ['Water', 'Rock', 'Ground']);
const LeechSeed = new Move('Leech Seed', 'Grass', 0.5, ['Water', 'Rock', 'Ground'], 'Heal');
const RazorLeaf = new Move('Razor Leaf', 'Grass', 0.8, ['Water', 'Rock', 'Ground'], 'Critical');
const Absorb = new Move('Absorb', 'Grass', 0.8, ['Water', 'Rock', 'Ground'], 'Heal')

/* Charmander Moves */
const Scratch = new Move('Scratch', 'Normal', 1.1, []);
const Ember = new Move('Ember', 'Fire', 0.7, ['Bug', 'Grass', 'Ice'], 'Burn');
const Slash = new Move('Slash', 'Normal', 1.3, [])
const Flamethrower = new Move('Flamethrower', 'Fire', 1.0, ['Bug', 'Grass', 'Ice']);
const FireFang = new Move('Fire Fang', 'Fire', 0.9, ['Bug', 'Grass', 'Ice'], 'Burn');

/* Squirtle Moves */
const Bubble = new Move('Bubble', 'Water', 0.8, ['Rock', 'Fire', 'Ground']);
const RapidSpin = new Move('Rapid Spin', 'Normal', 1.1, []);
const Protect = new Move('Protect', 'Normal', 0.0, [], 'DefenseUp');
const WaterPulse = new Move('Water Pulse', 'Water', 0.9, ['Rock', 'Fire', 'Ground'])

/* Shared Moves */
const None = new Move('---')
const Tackle = new Move('Tackle', 'Normal', 1.0, []);
const TakeDown = new Move('Take Down', 'Normal', 1.2, []);
const Growl = new Move('Growl', 'Normal', 0.0, [])


const BulbasaurMoveList = [/* LV5 */[Tackle, None, None, Growl],
                           /* LV8 */[Tackle, VineWhip, None, Growl],
                           /* LV12 */[Tackle, RazorLeaf, LeechSeed, Growl],
                           /* LV16 */[Tackle, RazorLeaf, Absorb, Growl],
                           /* LV20 */[TakeDown, RazorLeaf, Absorb, Growl]
                          ]

const CharmanderMoveList = [/* LV5 */[Scratch, None, None, Growl],
                            /* LV8 */[Scratch, Ember, None, Growl],
                            /* LV12 */[Slash, Ember, None, Growl],
                            /* LV16 */[Slash, Ember, Flamethrower, Growl],
                            /* LV20 */[Slash, FireFang, Flamethrower, Growl]
                          ]

const SquirtleMoveList = [/* LV5 */[Tackle, None, None, Growl],
                          /* LV8 */[Tackle, Bubble, None, Growl],
                          /* LV12 */[Tackle, Bubble, Protect, Growl],
                          /* LV16 */[RapidSpin, Bubble, Protect, Growl],
                          /* LV20 */[RapidSpin, WaterPulse, Protect, Growl]
                        ]

const MoveList = [BulbasaurMoveList, CharmanderMoveList, SquirtleMoveList];

export default MoveList;