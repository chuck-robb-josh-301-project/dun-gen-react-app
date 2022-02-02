


// let hero = this.state.currentHero;
// let hero = this.props.currentHero;

const testHero = {
  name: 'Testy',
  progress: '',
  race: 'troll',
  class: 'coder',
};



let prologueOneA = `This is sample text about where ${testHero.name} came from, their(SG-pronouns?) motivations, or some such. ${testHero.name} is a ${testHero.race} working as a ${testHero.class} to get by in between adventures-- living treasure-chest-to-treasure-chest`;

let fullText = '';

let dragon = { name: "Dragon" };

let orc = { name: "Orc" };
let goblin = { name: "goblin" };

let monsterArr = [dragon, goblin, orc];

let currentMonster;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let rollMonster = () => {
  let monsterIndex = getRandomInt(monsterArr.length);
  currentMonster = monsterArr[monsterIndex];
};

rollMonster();

let adjArr = ['cool', 'hip', 'sick', 'feisty'];

let currentAdj;

let rollAdjective = () => {
  let adjIdx = getRandomInt(adjArr.length);
  currentAdj = adjArr[adjIdx];
};

let pageOne = `${prologueOneA}\n\nThis is sample text for ${testHero.name}. ${testHero.name} has encountered a big ol' ${currentMonster.name}!\n\n`;

fullText += pageOne;

console.log(pageOne)

rollAdjective();

rollMonster();

let pageTwo = `This is MORE ${currentAdj} sample text for ${testHero.name}. Here comes a ${currentMonster.name}!\n\n`;

let writePageOne = () => {
  return `<p>${pageOne}</p>`;
}

let writePageTwo = () => {
  return `<p>${pageTwo}</p>`;
}

writePageOne();
writePageTwo();

fullText += pageTwo;

console.log(fullText);


// let chunkyDataArrSample = [{
//   "index": "androsphinx",
//   "name": "Androsphinx",
//   "url": "/api/monsters/androsphinx"
// },
// {
//   "index": "animated-armor",
//   "name": "Animated Armor",
//   "url": "/api/monsters/animated-armor"
// },
// {
//   "index": "ankheg",
//   "name": "Ankheg",
//   "url": "/api/monsters/ankheg"
// },
// {
//   "index": "ape",
//   "name": "Ape",
//   "url": "/api/monsters/ape"
// },
// {
//   "index": "archmage",
//   "name": "Archmage",
//   "url": "/api/monsters/archmage"
// },
// {
//   "index": "assassin",
//   "name": "Assassin",
//   "url": "/api/monsters/assassin"
// },
// {
//   "index": "awakened-shrub",
//   "name": "Awakened Shrub",
//   "url": "/api/monsters/awakened-shrub"
// },
// {
//   "index": "awakened-tree",
//   "name": "Awakened Tree",
//   "url": "/api/monsters/awakened-tree"
// }];

// sample api data
let sampleApiData =
  [
    {
      "index": "bandit",
      "name": "Bandit",
      "size": "Medium",
      "type": "humanoid",
      "subtype": "any race",
      "alignment": "any non-lawful alignment",
      "armor_class": 12,
      "hit_points": 11,
      "hit_dice": "2d8",
      "speed": {
        "walk": "30 ft."
      },
      "strength": 11,
      "dexterity": 12,
      "constitution": 12,
      "intelligence": 10,
      "wisdom": 10,
      "charisma": 10,
      "proficiencies": [],
      "damage_vulnerabilities": [],
      "damage_resistances": [],
      "damage_immunities": [],
      "condition_immunities": [],
      "senses": {
        "passive_perception": 10
      },
      "languages": "any one language (usually Common)",
      "challenge_rating": 0.125,
      "xp": 25,
      "actions": [
        {
          "name": "Scimitar",
          "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.",
          "attack_bonus": 3,
          "damage": [
            {
              "damage_type": {
                "index": "slashing",
                "name": "Slashing",
                "url": "/api/damage-types/slashing"
              },
              "damage_dice": "1d6+1"
            }
          ]
        },
        {
          "name": "Light Crossbow",
          "desc": "Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
          "attack_bonus": 3,
          "damage": [
            {
              "damage_type": {
                "index": "piercing",
                "name": "Piercing",
                "url": "/api/damage-types/piercing"
              },
              "damage_dice": "1d8+1"
            }
          ]
        }
      ],
      "url": "/api/monsters/bandit"
    },
    {
      "index": "killer-whale",
      "name": "Killer Whale",
      "size": "Huge",
      "type": "beast",
      "subtype": null,
      "alignment": "unaligned",
      "armor_class": 12,
      "hit_points": 90,
      "hit_dice": "12d12",
      "speed": {
        "swim": "60 ft."
      },
      "strength": 19,
      "dexterity": 10,
      "constitution": 13,
      "intelligence": 3,
      "wisdom": 12,
      "charisma": 7,
      "proficiencies": [
        {
          "proficiency": {
            "index": "skill-perception",
            "name": "Skill: Perception",
            "url": "/api/proficiencies/skill-perception"
          },
          "value": 3
        }
      ],
      "damage_vulnerabilities": [],
      "damage_resistances": [],
      "damage_immunities": [],
      "condition_immunities": [],
      "senses": {
        "blindsight": "120 ft.",
        "passive_perception": 13
      },
      "languages": "",
      "challenge_rating": 3,
      "xp": 700,
      "special_abilities": [
        {
          "name": "Echolocation",
          "desc": "The whale can't use its blindsight while deafened."
        },
        {
          "name": "Hold Breath",
          "desc": "The whale can hold its breath for 30 minutes"
        },
        {
          "name": "Keen Hearing",
          "desc": "The whale has advantage on Wisdom (Perception) checks that rely on hearing."
        }
      ],
      "actions": [
        {
          "name": "Bite",
          "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 21 (5d6 + 4) piercing damage.",
          "attack_bonus": 6,
          "damage": [
            {
              "damage_type": {
                "index": "piercing",
                "name": "Piercing",
                "url": "/api/damage-types/piercing"
              },
              "damage_dice": "5d6+4"
            }
          ]
        }
      ],
      "url": "/api/monsters/killer-whale"
    }
  ];

monsterArr = sampleApiData;

rollMonster();

let intDesc;

let intCheck = () => {
  if (currentMonster.intelligence < 9) {
    intDesc = ' They are known for their dim-wittedness ';
  } else {
    intDesc = ' ';
  }
}

intCheck();

let demoPage = `Hark: a ${currentMonster.size} ${currentMonster.name} threatens!${intDesc}Look out for its fearsome ${currentMonster.actions[0].name}! `

console.log('Demo text:');
console.log(demoPage);

let samplePopover = `${currentMonster.name}: ${currentMonster.size} ${currentMonster.type}.`
console.log(samplePopover);

let weaponDataArr = [
  {
    "index": "club",
    "name": "Club",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/equipment-categories/weapon"
    },
    "weapon_category": "Simple",
    "weapon_range": "Melee",
    "category_range": "Simple Melee",
    "cost": {
      "quantity": 1,
      "unit": "sp"
    },
    "damage": {
      "damage_dice": "1d4",
      "damage_type": {
        "index": "bludgeoning",
        "name": "Bludgeoning",
        "url": "/api/damage-types/bludgeoning"
      }
    },
    "range": {
      "normal": 5,
      "long": null
    },
    "weight": 2,
    "properties": [
      {
        "index": "light",
        "name": "Light",
        "url": "/api/weapon-properties/light"
      },
      {
        "index": "monk",
        "name": "Monk",
        "url": "/api/weapon-properties/monk"
      }
    ],
    "url": "/api/equipment/club"
  },
  {
    "index": "trident-of-fish-command",
    "name": "Trident of Fish Command",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/equipment-categories/weapon"
    },
    "desc": [
      "Weapon (trident), uncommon (requires attunement)",
      "This trident is a magic weapon. It has 3 charges. While you carry it, you can use an action and expend 1 charge to cast dominate beast (save DC 15) from it on a beast that has an innate swimming speed. The trident regains 1d3 expended charges daily at dawn."
    ],
    "url": "/api/magic-items/trident-of-fish-command"
  },
  {
    "index": "sun-blade",
    "name": "Sun Blade",
    "equipment_category": {
      "index": "weapon",
      "name": "Weapon",
      "url": "/api/equipment-categories/weapon"
    },
    "desc": [
      "Weapon (longsword), rare (requires attunement)",
      "This item appears to be a longsword hilt. While grasping the hilt, you can use a bonus action to cause a blade of pure radiance to spring into existence, or make the blade disappear. While the blade exists, this magic longsword has the finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade.",
      "You gain a +2 bonus to attack and damage rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an undead with it, that target takes an extra 1d8 radiant damage.",
      "The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each."
    ],
    "url": "/api/magic-items/sun-blade"
  }
];

let currentWeapon;

let rollWeapon = () => {

  let weapIdx = getRandomInt(weaponDataArr.length);
  currentWeapon = weaponDataArr[weapIdx];
};


let itemDesc = '';

let rollWeaponFindEvent = () => {
  rollWeapon();
  if (currentWeapon.desc) {
    itemDesc = (currentWeapon.desc[currentWeapon.desc.length]).split('.');
  } else {
    itemDesc = `A${currentWeapon.weapon_category} weapon used for ${currentWeapon.damage.damage_type.index}.`;
  }

  let gearFindEvent = `${itemDesc}`;
  fullText += gearFindEvent;
  return gearFindEvent;
}

rollWeaponFindEvent();
