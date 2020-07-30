const Bug = 'Bug';
const Dark = 'Dark';
const Dragon = 'Dragon';
const Electric = 'Electric';
const Fairy = 'Fairy';
const Fighting = 'Fighting';
const Fire = 'Fire';
const Flying = 'Flying';
const Ghost = 'Ghost';
const Grass = 'Grass';
const Ground = 'Ground';
const Ice = 'Ice';
const Normal = 'Normal';
const Poison = 'Poison';
const Psychic = 'Psychic';
const Rock = 'Rock';
const Steel = 'Steel';
const Water = 'Water';

// The order of types found in most games
const ORDER = [Normal, Fire, Water, Electric, Grass, Ice, Fighting, Poison, Ground, Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark, Steel, Fairy];

// const sort = (a, b) => a.localeCompare(b);
const sort = (a, b) => ORDER.indexOf(a) - ORDER.indexOf(b);

export const TYPES = [
  {
    name: Bug,
    vulnerable: [Fire, Flying, Rock],
    noeffect: [],
    weak: [Fairy, Fighting, Fire, Flying, Ghost, Poison, Steel],
    strong: [Dark, Grass, Psychic],
    resist: [Fighting, Grass, Ground],
    immune: [],
  },
  {
    name: Dark,
    vulnerable: [Bug, Fairy, Fighting],
    noeffect: [],
    weak: [Dark, Fairy, Fighting],
    strong: [Ghost, Psychic],
    resist: [Dark, Ghost],
    immune: [Psychic],
  },
  {
    name: Dragon,
    vulnerable: [Dragon, Fairy, Ice],
    noeffect: [Fairy],
    weak: [Steel],
    strong: [Dragon],
    resist: [Electric, Fire, Grass, Water],
    immune: [],
  },
  {
    name: Electric,
    vulnerable: [Ground],
    noeffect: [Ground],
    weak: [Dragon, Electric, Grass],
    strong: [Flying, Water],
    resist: [Electric, Flying, Steel],
    immune: [],
  },
  {
    name: Fairy,
    vulnerable: [Poison, Steel],
    noeffect: [],
    weak: [Fire, Poison, Steel],
    strong: [Dark, Dragon, Fighting],
    resist: [Bug, Dark, Fighting],
    immune: [Dragon],
  },
  {
    name: Fighting,
    vulnerable: [Fairy, Flying, Psychic],
    noeffect: [Ghost],
    weak: [Bug, Fairy, Flying, Poison, Psychic],
    strong: [Dark, Ice, Normal, Rock, Steel],
    resist: [Bug, Dark, Rock],
    immune: [],
  },
  {
    name: Fire,
    vulnerable: [Ground, Rock, Water],
    noeffect: [],
    weak: [Dragon, Fire, Rock, Water],
    strong: [Bug, Grass, Ice, Steel],
    resist: [Bug, Fire, Grass, Ice, Steel],
    immune: [],
  },
  {
    name: Flying,
    vulnerable: [Electric, Ice, Rock],
    noeffect: [],
    weak: [Electric, Rock, Steel],
    strong: [Bug, Fighting, Grass],
    resist: [Bug, Fighting, Grass],
    immune: [Ground],
  },
  {
    name: Ghost,
    vulnerable: [Dark, Ghost],
    noeffect: [Normal],
    weak: [Dark],
    strong: [Ghost, Psychic],
    resist: [Bug, Poison],
    immune: [Fighting, Normal],
  },
  {
    name: Grass,
    vulnerable: [Bug, Fire, Flying, Ice, Poison],
    noeffect: [],
    weak: [Bug, Dragon, Fire, Flying, Grass, Poison, Steel],
    strong: [Ground, Rock, Water],
    resist: [Electric, Grass, Ground, Water],
    immune: [],
  },
  {
    name: Ground,
    vulnerable: [Grass, Ice, Water],
    noeffect: [Flying],
    weak: [Bug, Grass],
    strong: [Electric, Fire, Poison, Rock, Steel],
    resist: [Poison, Rock],
    immune: [Electric],
  },
  {
    name: Ice,
    vulnerable: [Fighting, Fire, Rock, Steel],
    noeffect: [],
    weak: [Fire, Ice, Steel, Water],
    strong: [Dragon, Flying, Grass, Ground],
    resist: [Ice],
    immune: [],
  },
  {
    name: Normal,
    vulnerable: [Fighting],
    noeffect: [Ghost],
    weak: [Rock, Steel],
    strong: [],
    resist: [],
    immune: [Ghost],
  },
  {
    name: Poison,
    vulnerable: [Ground, Psychic],
    noeffect: [Steel],
    weak: [Ghost, Ground, Poison, Rock],
    strong: [Fairy, Grass],
    resist: [Fairy, Fighting, Grass, Poison],
    immune: [],
  },
  {
    name: Psychic,
    vulnerable: [Bug, Dark, Ghost],
    noeffect: [Dark],
    weak: [Steel, Psychic],
    strong: [Fighting, Poison],
    resist: [Fighting, Psychic],
    immune: [],
  },
  {
    name: Rock,
    vulnerable: [Fighting, Grass, Ground, Steel, Water],
    noeffect: [],
    weak: [Fighting, Ground, Steel],
    strong: [Bug, Fire, Flying, Ice],
    resist: [Fire, Flying, Normal, Poison],
    immune: [],
  },
  {
    name: Steel,
    vulnerable: [Fighting, Fire, Ground],
    noeffect: [],
    weak: [Electric, Fire, Steel, Water],
    strong: [Fairy, Ice, Rock],
    resist: [Bug, Dragon, Fairy, Flying, Grass, Ice, Normal, Poison, Psychic, Rock, Steel],
    immune: [Poison],
  },
  {
    name: Water,
    vulnerable: [Electric, Grass],
    noeffect: [],
    weak: [Dragon, Grass, Water],
    strong: [Fire, Ground, Rock],
    resist: [Fire, Ice, Steel, Water],
    immune: [],
  },
];

TYPES.sort((a,b) => sort(a.name, b.name));
for (const type of TYPES) {
  type.vulnerable.sort(sort);
  type.noeffect.sort(sort);
  type.weak.sort(sort);
  type.strong.sort(sort);
  type.resist.sort(sort);
  type.immune.sort(sort);
}
