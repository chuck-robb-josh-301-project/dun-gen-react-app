let possiblePronouns = [['she', 'her', 'her'], ['he', 'him', 'his'], ['they', 'them', 'their']];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let pronounIndex = getRandomInt(possiblePronouns.length - 1);
let heroPronouns = possiblePronouns[pronounIndex];

let hero = {
  name: 'Testy',
  race: 'gnome',
  villageName: 'Sample Town',
  pronoun: heroPronouns,
}

let villageName = hero.villageName;


// ensures villager race is different from hero race
// SAMPLE DATA - NOT FIT FOR LIVE CODE
let villagerRaceArr = ['human', 'elf', 'orc', 'dwarf', 'gnome'];
let prologueRaceIndex = villagerRaceArr.indexOf('playerRace');
villagerRaceArr.splice(prologueRaceIndex, 1);
let otherRaceidx = getRandomInt(villagerRaceArr.length);
let otherRace = villagerRaceArr[otherRaceidx];
let finalMonster = '';


let prologueOutsider = `${hero.name} ends another day on the outskirts of the village of ${villageName}. Born in this simple cottage, as much a local as ${hero.pronoun[2]} ${otherRace} neighbors, ${hero.pronoun[0]} keeps to ${hero.pronoun[1]}self. Decades earlier, ${hero.pronoun[2]} parents had been travellers and chose ${villageName} to settle down in--though for reasons lost on ${hero.name}. Raised with the skills ${hero.pronoun[2]} parents learned elsewhere, finding work in the village was easy and aimless, but interactions were terse and just shy of hostile.\n
${hero.name} awakes with a start to the smell of char. Smoke and shouting cloud ${hero.pronoun[2]} mind for a few moments, then ${hero.pronoun[0]} rushes to get clothed and investigate.\n
Following the noise, ${hero.name}  ${}
Upon return, ${hero.name} sees only the buckling frame of ${hero.pronoun[2]} childhood home. A fit of grief sweeps through rage at the attackers, then suspicion at the neighbors, but settles into a dank quiet -- it was unlikely that the torch-wielding villagers would have lit the cottage other than in hapless desperation, though certainty found no purchase.\n
"${hero.race}!" a voice calls as it crests the hill behind you. It is the village elder, weary and determined, lurching at an angle against some sharp farming implement and a back satchel. The elder eyes ${hero.name}'s smoldering abode: "It seem we have both lost our ties to ${villageName} this day." Taking stock of the chaos of the morning, ${hero.name} recalls the modest coloring on the clothing of several of the fallen among the drab of their fellows. "My remaining time was for my children, my remaining wealth for their children-to-be. If you can secure their justice, their inheritance will pay your way to a new home that is... more suitable for you. The elder reveals a solid case just large enough to still fit under an arm, weathered but with faint filigree still showing. "Do you assent, ${hero.race}?"\n
${hero.name} nods ${hero.pronoun[2]} head silently, bereft of reasons not to.\n
The elder scrapes an aged finger aganst the flat end of the bladed tool, pulling up a caked brown gunk-- perhaps blood, or something more sinister still-- and rubs it around the edge of the box's lid. Inaudible whispers and a series of arching hand gestures follow, until the seam of the case disappears from view, leaving uninterrupted patterns. The elder then hands over the case.
"Our contract is signed into the bounty. You need not return if your task is done."\n
With only the clothes on ${hero.pronoun[2]} back, some provisions from the elder, and the hardiest heirlooms that were salvaged from the fire, ${hero.name} leaves home for the first and final time.\n\n`;

// REMOVE RE-DECLARE WHEN MERGING w/ 
let fullText = '';
fullText += prologueOutsider;

console.log(prologueOutsider);
console.log (fullText);

let crossroads = `the text for this encounter`;
let freeLunch = `the text for this encounter`;
let bayouBoogie = `the text for this encounter`;

let encounterTier1arr =[crossroads, freeLunch, bayouBoogie];

let rollEncounterTier1 = () => {
let currentPage = encounterTier1arr[getRandomInt(encounterTier1arr.length - 1)];
console.log(currentPage);
fullText += currentPage;
}

rollEncounterTier1();

let combatStrCheck = () => {
  

  // CODE TERNARY STAT CHECKS
(heroStr + getRandomInt(5)) > currentMonster.strength ? success : failure;
  
  currentPage = ``;

  fulltext += currentPage;
}

let combatDexCheck = () => {
  
}

let finaleEncounterOutcast = `\n${hero.name} ${}${}${}${}${}${}${}${}${}${}`;



let finaleOutcastChoice = `As ${hero.pronoun[2]} foe falls, ${hero.name} `;

let finaleOutcastA = `${hero.name} ends the young ${finalMonster} swiftly and mercifully. If the world cannot be truly just, it can at least be a bit safer.\n
A loud snap sounds from ${hero.name}'s pack--the ${villageName} elder's payment for the deed done.`;

let finaleOutcastB = `${hero.name} extends the ${finalMonster}`;

let epilogueOutcast = `${hero.name}'s past is now far enough behind ${hero.pronoun[1]} that ${hero.pronoun[0]} can look straight ahead at today. The future will wait its turn.`;

let finaleOutcastChoiceA = () => {
  currentPage += finaleOutcastA + epilogueOutcast;

}

let finaleOutcastChoiceB = () => {
  currentPage += finaleOutcastB + epilogueOutcast;

}


fullText += currentPage;
