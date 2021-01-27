// Helper functions.
Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.shuffle = function() {
  let newArray = this;
  for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}

function d(size, count = 1, double = null) {
  let sum = 0;
  for (let i = 0; i < count; i++) {
      sum += Math.floor(Math.random() * size + 1);
  }

  if (double === null) {
    return sum;
  } else {
    let alternateSum = 0;
    for (let i = 0; i < count; i++) {
      alternateSum += Math.floor(Math.random() * size + 1);
    }

    if (double === 'high') {
      return Math.max.apply(null, [sum, alternateSum]);
    } else if (double === 'low') {
      return Math.min.apply(null, [sum, alternateSum]);
    }
  }
}

const defaultConfig = {
  nonHumanSpeciesChance: 0.2, // Percent chance to get any non-default species.
  hybridSpeciesChance: 0.4, // If a non-default species is selected, the percent chance to be a hybrid with the default species. In that case, the species group is attached only to one attribute.
  defaultSpecies: { name: 'Human', language: 'Common' },
  otherSpecies: [
    { name: "Elf", language: "Low Elvish" },
    { name: "Dwarf", language: "Dwarven" },
    { name: "Hobbit", language: "Hobbit" },
  ],
  languages: [
    "High Elvish",
    "Low Elvish",
    "Dwarven",
    "Deep Dwarven",
    "Hobbit",
    "Hill Giant",
    "Orcish",
    "Goblin",
    "Wizards' runes",
    "Necromancers' runes",
    "Dragon tongue",
    "Beast speech",
  ],
  affiliations: [
    "Coalition of the Formerly Living",
    "Wicker Men",
    "Circle of Cernunnos",
    "Church of Crom",
    "Church of Mitra",
    "Temple of Brighid",
    "Cult of Set",
    "Cult of Nergal",
    "Merry Men",
    "Cult of the Black Amphora",
    "Order of the Sphinx",
    "Order of the Rose",
    "Order of the Basilisk",
    "Order of the Candle",
    "Order of the Lantern",
    "Order of the Hearth",
    "Skylords",
    "Blackhands",
    "Thieves' Guild",
    "Bloody Cabal",
    "Shadow Cult",
    "Guild of Sorcerers",
    "Society of Scrutinous Scholars",
    "Royal Gardeners' Society",
    "Sulfur Company",
    "Merchants' Guild",
    "Royal Arcane Institute",
    "Institute of the Arcane",
    "Aldred's Two Hundred",
    "Highpeak Clan",
    "Barrett's Privateers",
    "Northwest Passage Explorers",
    "Finch's Giants",
    "Bramble Bastards",
    "Westmoor Witches",
    "Scarborough Sorcerers",
    "Herbal Guild",
    "Barrow Delvers' Society",
    "Lock Keepers",
    "Marduk's Last Watch",
    "Woodbridge Dogs",
    "House of the Holy",
    "Blackdogs",
    "Sword of St. Tristan",
    "House of Red",
    "Harbingers of the Dark Star",
    "Children of the Moon",
    "Dire Wolves",
    "Shield-Maidens of Veborg",
    "Canso Witch-Hunters",
    "Sun Warriors",
    "Valkyries of Sigyn",
    "Wild Boars",
    "Nightblades",
    "Wheel of Fire",
    "Royal Metallurgists",
    "Alloy Supreme",
    "Zenith's Hammer",
    "Transcendants",
    "Aethernauts",
    "Merchants' Alliance",
    "The Path",
    "The Way",
    "Green Ones",
    "Fog Walkers",
    "Church of St. Lune",
  ],
  attunements: [
    // Magical items
    { category: "magic", name: "Crystal ball", isItem: true },
    { category: "magic", name: "Magic wand", isItem: true },
    { category: "magic", name: "Magic rod", isItem: true },
    { category: "magic", name: "Wizard's staff", isItem: true },
    { category: "magic", name: "Magic scroll", isItem: true },
    { category: "magic", name: "Book of spells", isItem: true },
    { category: "magic", name: "Unholy spellbook", isItem: true },

    // Religious items
    { category: "religious", name: "Holy symbol", isItem: true },
    { category: "religious", name: "Reliquary", isItem: true },
    { category: "religious", name: "Saint's bone", isItem: true },
    { category: "religious", name: "Blessed shroud", isItem: true },

    // Texts
    { category: "book", name: "Bestiary", isItem: true },
    { category: "book", name: "Botanical reference", isItem: true },
    { category: "book", name: "Treatise on local fauna", isItem: true },

    // Weapons
    { category: "weapon", name: "Axe", isItem: true },
    { category: "weapon", name: "Sword", isItem: true },
    { category: "weapon", name: "Club", isItem: true },
    { category: "weapon", name: "Crossbow", isItem: true },
    { category: "weapon", name: "Dagger", isItem: true },
    { category: "weapon", name: "Dart", isItem: true },
    { category: "weapon", name: "Flail", isItem: true },
    { category: "weapon", name: "Greatsword", isItem: true },
    { category: "weapon", name: "Battle axe", isItem: true },
    { category: "weapon", name: "Halberd", isItem: true },
    { category: "weapon", name: "Pole arm", isItem: true },
    { category: "weapon", name: "Javelin", isItem: true },
    { category: "weapon", name: "Longbow", isItem: true },
    { category: "weapon", name: "Mace", isItem: true },
    { category: "weapon", name: "Warhammer", isItem: true },
    { category: "weapon", name: "Morning star", isItem: true },
    { category: "weapon", name: "Musket", isItem: true },
    { category: "weapon", name: "Pistol", isItem: true },
    { category: "weapon", name: "Quarterstaff", isItem: true },
    { category: "weapon", name: "Scimitar", isItem: true },
    { category: "weapon", name: "Shortbow", isItem: true },
    { category: "weapon", name: "Shortsword", isItem: true },
    { category: "weapon", name: "Sling", isItem: true },
    { category: "weapon", name: "Spear", isItem: true },
    { category: "weapon", name: "Throwing knife", isItem: true },
    { category: "weapon", name: "Throwing axe", isItem: true },

    // "Exotic" weapons (i.e. not on the normal Whitehack inventory list)
    { category: "exoticWeapon", name: "Throwing star", isItem: true },
    { category: "exoticWeapon", name: "Spiked chain", isItem: true },
    { category: "exoticWeapon", name: "Kukri", isItem: true },
    { category: "exoticWeapon", name: "Nunchaku", isItem: true },
    { category: "exoticWeapon", name: "Two-bladed sword", isItem: true },
    { category: "exoticWeapon", name: "Bolas", isItem: true },
    { category: "exoticWeapon", name: "Net", isItem: true },
    { category: "exoticWeapon", name: "Parrying dagger", isItem: true },
    { category: "exoticWeapon", name: "Rapier", isItem: true },
    { category: "exoticWeapon", name: "Blowpipe", isItem: true },
    { category: "exoticWeapon", name: "Shield", isItem: true },

    // Mundane and adventuring items
    { category: "mundane", name: "Walking stick", isItem: true },
    { category: "mundane", name: "Sledgehammer", isItem: true },
    { category: "mundane", name: "Ten-foot pole", isItem: true },
    { category: "mundane", name: "Rope", isItem: true },
    { category: "mundane", name: "Elven cloak", isItem: true },
    { category: "mundane", name: "Dueling cloak", isItem: true },
    { category: "mundane", name: "Alchemy kit", isItem: true },
    { category: "mundane", name: "Grappling hook", isItem: true },
    { category: "mundane", name: "Playing cards", isItem: true },
    { category: "mundane", name: "Dice set", isItem: true },

    // Animals
    { category: "animal", name: "Dog", isItem: false },
    { category: "animal", name: "Hound", isItem: false },
    { category: "animal", name: "Jackal", isItem: false },
    { category: "animal", name: "Wolf", isItem: false },
    { category: "animal", name: "Fox", isItem: false },
    { category: "animal", name: "Horse", isItem: false },
    { category: "animal", name: "Mule", isItem: false },
    { category: "animal", name: "Donkey", isItem: false },
    { category: "animal", name: "Monkey", isItem: false },
    { category: "animal", name: "Cat", isItem: false },
    { category: "animal", name: "Bobcat", isItem: false },
    { category: "animal", name: "Lynx", isItem: false },
    { category: "animal", name: "Raccoon", isItem: false },
    { category: "animal", name: "Cougar", isItem: false },
    { category: "animal", name: "Elk", isItem: false },
    { category: "animal", name: "Bear", isItem: false },
    { category: "animal", name: "Badger", isItem: false },
    { category: "animal", name: "Mole", isItem: false },
    { category: "animal", name: "Weasel", isItem: false },
    { category: "animal", name: "Ferret", isItem: false },
    { category: "animal", name: "Mongoose", isItem: false },
    { category: "animal", name: "Rat", isItem: false },
    { category: "animal", name: "Mouse", isItem: false },
    { category: "animal", name: "Bat", isItem: false },
    { category: "animal", name: "Raven", isItem: false },
    { category: "animal", name: "Parrot", isItem: false },
    { category: "animal", name: "Hawk", isItem: false },
    { category: "animal", name: "Falcon", isItem: false },
    { category: "animal", name: "Eagle", isItem: false },
    { category: "animal", name: "Owl", isItem: false },
    { category: "animal", name: "Magpie", isItem: false },

    // People
    { category: "person", name: "Archery master", isItem: false },
    { category: "person", name: "Sword master", isItem: false },
    { category: "person", name: "Master monk", isItem: false },
    { category: "person", name: "Ringleader", isItem: false },
    { category: "person", name: "Bandit king", isItem: false },
    { category: "person", name: "Master ninja", isItem: false },
    { category: "person", name: "Scholar of history", isItem: false },
    { category: "person", name: "Scholar of botany", isItem: false },
    { category: "person", name: "Scholar of naturalism", isItem: false },
    { category: "person", name: "Scholar of magic", isItem: false },
    { category: "person", name: "Liege of leaves", isItem: false },
    { category: "person", name: "Beggar prince", isItem: false },
    { category: "person", name: "Elf king", isItem: false },
    { category: "person", name: "Archmage", isItem: false },
    { category: "person", name: "Hedgemage", isItem: false },
    { category: "person", name: "Queen of flowers", isItem: false },
    { category: "person", name: "Tattooed monk", isItem: false },
    { category: "person", name: "Strongman", isItem: false },
    { category: "person", name: "Spymaster", isItem: false },
    { category: "person", name: "Executioner", isItem: false },
    { category: "person", name: "Torturer", isItem: false },
  ],
  abilities: [
    "1. Protect ally from harm",
    "2. Push enemy after successful attack",
    "3. Cling to large foe",
    "4. Work up battle frenzy",
    "5. Give tactical instruction to ally",
    "6. Encourage allies or strike fear in enemies",
    "7. Double attack with melee and ranged weapons",
    "8. Parry",
  ],
  miracles: [
    "Pyroclastic Flow",
    "Animate Dead",
    "Open Mind",
    "Bend Mind",
    "Crumble",
    "Magnetism",
    "Magnetic Resonance",
    "Bless",
    "Curse",
    "Hex",
    "Lightning Conduit",
    "Thunderstep",
    "Hellfrost",
    "Demonfire",
    "Light",
    "Darkness",
    "Healing Water",
    "Cleansing Fire",
    "Haste",
    "Sophronia's East Wind",
    "Berenger's Blessing",
    "Mirror Walking",
    "Shadowstep",
    "Psychosomatism",
    "Illusory Demons",
    "Hallow",
    "Corrupt",
    "Sanctify",
    "Envenom",
    "Speak with Animals",
    "Sacred Geometry",
    "Magic Number",
    "Air Bubble",
    "Acid Arrow",
    "Sanguinomancy",
    "Charm",
    "Detect Water",
    "Spider Shape",
    "Speak with Ants",
    "Speak with Plants",
    "Animate Plants",
    "Animate Rope",
    "Apathy",
    "Clarion Call",
    "Defenestrate",
    "Animate Construct",
    "Truesight",
    "Nightvision",
    "Visions of Night",
    "Battle Trance",
    "Bilocation",
    "Mirror Image",
    "Time Warp",
    "Gust",
    "Control Wind",
    "Blink",
    "Blur",
    "Bookwalking",
    "Libromancy",
    "Burning Hands",
    "Conflagrate",
    "Calm Emotions",
    "Cause Fear",
    "Summon Chains",
    "Static Charge",
    "Imbue Charge",
    "Electrify",
    "Halcyon Days",
    "Cleanse",
    "Identify",
    "Chill Metal",
    "Heat Metal",
    "Warp Metal",
    "Entropy",
    "Reverse Thermodynamics",
    "Bend Time",
    "Commune with Nature",
    "Summon Bird",
    "False Life",
    "Cone of Cold",
    "Conjure Food",
    "Pestilence",
    "Contagion",
    "Speak with Wind",
    "Cosmic Ray",
    "Neutrino Burst",
    "Conjure Weapon",
    "Conjure Armor",
    "Golden Glory",
    "Despair",
    "Reincarnate",
    "Daze",
    "Ward Death",
    "Ward Magic",
    "Suppress Pain",
    "Decapitate",
    "Detect",
    "Detect Secrets",
    "Read Thoughts",
    "Clairvoyance",
    "Devolve",
    "Invoke Divinity",
    "Dream",
    "Dreamwalk",
    "Alter Lore",
    "Echo",
    "Earthquake",
    "Ectoplasm",
    "Enervate",
    "Entangle",
    "Enthrall",
    "Mind Slave",
    "Explosive Runes",
    "Faerie Fire",
    "Faerie Flight",
    "Acorn of Far Travel",
    "Feather Fall",
    "Finger of Death",
    "Fireball",
    "Petrify",
    "Warp Flesh",
    "Winged Feet",
    "Forbiddance",
    "Divination",
    "Foresight",
    "Slumber",
    "Feeblemind",
    "Ghost Form",
    "Lycanthropy",
    "Word of Power",
    "Wind Walk",
    "Web",
    "Banshee Wail",
    "Control Vermin",
    "Part the Veil",
    "Vampirism",
    "Create Revenant",
    "Divine Prophecy",
    "Undeath",
    "Unholy Grasp",
    "Hand of Mercy",
    "Magical Tattoo",
    "Telepathy",
    "Mindwipe",
    "Stop Time",
    "Toxic Blood",
    "Truespeak",
    "Sympathy",
    "Synesthesia",
    "Anesthetize",
    "Summon Demon",
    "Summon Angel",
    "Suppress Magic",
    "Sunburst",
    "Crown of God",
    "Control Weather",
    "Summon Storm",
    "Silence",
    "Amplify Noise",
    "Engender Hatred",
    "Sever Soul",
    "Astral Projection",
    "Slow",
    "Protection from Evil",
    "Shield of Faith",
    "Mind's Eye",
    "Share Senses",
    "Possess",
    "Fury of the Sea",
    "Deep One's Blessing",
    "Sacred Seal",
    "Rage",
    "Ray of Frost",
    "Shrink",
    "Regenerate",
    "Cure Disease",
    "Pyrotechnics",
    "Protection from Spells",
    "Panacea",
    "Polymorph",
    "Plane Shift",
    "Phantom Foe",
    "Binding Oath",
    "Aura of Wisdom",
    "Aura of Courage",
    "Aura of Protection",
    "Aura of Fear",
    "Mirage",
    "Illusion",
    "Lunar Blessing",
    "Solar Blessing",
    "Mutagenic Blood",
    "Magic Jar",
    "Locate Person",
    "Locate Object",
    "Litany against Fear",
    "Lock",
    "Invisibility",
    "Shape Stone",
    "X-Ray Vision",
    "Infravision",
    "Judgement of Light",
    "Judgement of Darkness",
    "Holy Judgement",
    "Unholy Judgement",
    "Irresistible Dance",
    "Hideous Laughter",
    "Zone of Truth",
    "Icy Veins",
    "Coldsnap",
    "Illusory Wall",
    "Hide Between Worlds",
    "Terrible Visage",
    "Grease",
    "Commune with Stars",
    "Tentacle Arm",
    "Gills",
    "Retractable Claws",
    "Grow Organ",
    "Bifurcate",
    "Teleport",
  ],
  vocations: [
    // Warriors
    "Barbarian",
    "Bounty Hunter",
    "Crusader",
    "Gladiator",
    "Knight",
    "Outrider",
    "Pit Fighter",
    "Pugilist",
    "Templar",
    "Vigilante",
    "Warrior",

    // Warrior-Mages
    "Battlemage",
    "Paladin",
    "Spellsword",
    "Warpriest",

    // Mages
    "Cleric",
    "Conjurer",
    "Demonologist",
    "Diviner",
    "Druid",
    "Elementalist",
    "Exorcist",
    "Healer",
    "Illusionist",
    "Mage",
    "Medium",
    "Mystic",
    "Necromancer",
    "Oracle",
    "Priest",
    "Psion",
    "Psychic",
    "Shaman",
    "Soothsayer",
    "Sorcerer",
    "Summoner",
    "Thaumaturgist",
    "Warlock",
    "Warmage",
    "Wizard",

    // Mage-Rogues

    // Rogues
    "Acrobat",
    "Agent",
    "Archer",
    "Assassin",
    "Bard",
    "Duelist",
    "Fencer",
    "Hunter",
    "Marksman",
    "Monk",
    "Ninja",
    "Ranger",
    "Rogue",
    "Scout",
    "Spy",
    "Thief",

    // Scholars
    "Alchemist",
    "Apothecary",
    "Astronomer",
    "Astrologist",
    "Doctor",
    "Engineer",
    "Medic",
    "Numerologist",
    "Philosopher",
    "Surgeon",
    "Physicker",
    "Mathematician",
    "Naturalist",
    "Botanist",

    // Mundane
    "Aristocrat",
    "Merchant",
    "Orator",
    "Pilgrim",
    "Pirate",
    "Sailor",
    "Woodsman",

    // Other
    "Inquisitor",
  ],
  classTables: [
    { characterClass: 'Deft', level: 1, xp: 0, hitDice: 1, bonusHitPoints: 0, attackValue: 10, savingThrow: 7, slots: 1, groups: 2, raises: 0 },
    { characterClass: 'Deft', level: 2, xp: 1500, hitDice: 2, bonusHitPoints: 0, attackValue: 11, savingThrow: 8, slots: 1, groups: 2, raises: 1 },
    { characterClass: 'Deft', level: 3, xp: 3000, hitDice: 2, bonusHitPoints: 1, attackValue: 11, savingThrow: 9, slots: 1, groups: 3, raises: 1 },
    { characterClass: 'Deft', level: 4, xp: 6000, hitDice: 3, bonusHitPoints: 0, attackValue: 12, savingThrow: 10, slots: 2, groups: 3, raises: 2 },
    { characterClass: 'Deft', level: 5, xp: 12000, hitDice: 3, bonusHitPoints: 1, attackValue: 12, savingThrow: 11, slots: 2, groups: 4, raises: 2 },
    { characterClass: 'Deft', level: 6, xp: 24000, hitDice: 4, bonusHitPoints: 0, attackValue: 13, savingThrow: 12, slots: 2, groups: 4, raises: 3 },
    { characterClass: 'Deft', level: 7, xp: 48000, hitDice: 4, bonusHitPoints: 1, attackValue: 13, savingThrow: 13, slots: 3, groups: 5, raises: 3 },
    { characterClass: 'Deft', level: 8, xp: 96000, hitDice: 5, bonusHitPoints: 0, attackValue: 14, savingThrow: 14, slots: 3, groups: 5, raises: 4 },
    { characterClass: 'Deft', level: 9, xp: 192000, hitDice: 5, bonusHitPoints: 1, attackValue: 14, savingThrow: 15, slots: 3, groups: 6, raises: 4 },
    { characterClass: 'Deft', level: 10, xp: 384000, hitDice: 6, bonusHitPoints: 0, attackValue: 15, savingThrow: 16, slots: 4, groups: 6, raises: 5 },
    { characterClass: 'Strong', level: 1, xp: 0, hitDice: 1, bonusHitPoints: 2, attackValue: 11, savingThrow: 5, slots: 1, groups: 2, raises: 0 },
    { characterClass: 'Strong', level: 2, xp: 2000, hitDice: 2, bonusHitPoints: 0, attackValue: 11, savingThrow: 6, slots: 1, groups: 2, raises: 1 },
    { characterClass: 'Strong', level: 3, xp: 4000, hitDice: 3, bonusHitPoints: 0, attackValue: 12, savingThrow: 7, slots: 1, groups: 2, raises: 1 },
    { characterClass: 'Strong', level: 4, xp: 8000, hitDice: 4, bonusHitPoints: 0, attackValue: 13, savingThrow: 8, slots: 2, groups: 3, raises: 2 },
    { characterClass: 'Strong', level: 5, xp: 16000, hitDice: 5, bonusHitPoints: 0, attackValue: 13, savingThrow: 9, slots: 2, groups: 3, raises: 2 },
    { characterClass: 'Strong', level: 6, xp: 32000, hitDice: 6, bonusHitPoints: 0, attackValue: 14, savingThrow: 10, slots: 2, groups: 3, raises: 3 },
    { characterClass: 'Strong', level: 7, xp: 64000, hitDice: 7, bonusHitPoints: 0, attackValue: 15, savingThrow: 11, slots: 3, groups: 4, raises: 3 },
    { characterClass: 'Strong', level: 8, xp: 128000, hitDice: 8, bonusHitPoints: 0, attackValue: 15, savingThrow: 12, slots: 3, groups: 4, raises: 4 },
    { characterClass: 'Strong', level: 9, xp: 256000, hitDice: 9, bonusHitPoints: 0, attackValue: 16, savingThrow: 13, slots: 3, groups: 4, raises: 4 },
    { characterClass: 'Strong', level: 10, xp: 512000, hitDice: 10, bonusHitPoints: 0, attackValue: 17, savingThrow: 14, slots: 4, groups: 5, raises: 5 },
    { characterClass: 'Wise', level: 1, xp: 0, hitDice: 1, bonusHitPoints: 1, attackValue: 10, savingThrow: 6, slots: 1, groups: 2, raises: 0 },
    { characterClass: 'Wise', level: 2, xp: 2500, hitDice: 2, bonusHitPoints: 0, attackValue: 11, savingThrow: 7, slots: 1, groups: 2, raises: 1 },
    { characterClass: 'Wise', level: 3, xp: 5000, hitDice: 2, bonusHitPoints: 1, attackValue: 11, savingThrow: 8, slots: 2, groups: 2, raises: 1 },
    { characterClass: 'Wise', level: 4, xp: 10000, hitDice: 3, bonusHitPoints: 0, attackValue: 11, savingThrow: 9, slots: 2, groups: 3, raises: 2 },
    { characterClass: 'Wise', level: 5, xp: 20000, hitDice: 4, bonusHitPoints: 0, attackValue: 12, savingThrow: 10, slots: 3, groups: 3, raises: 2 },
    { characterClass: 'Wise', level: 6, xp: 40000, hitDice: 4, bonusHitPoints: 1, attackValue: 12, savingThrow: 11, slots: 3, groups: 3, raises: 3 },
    { characterClass: 'Wise', level: 7, xp: 80000, hitDice: 5, bonusHitPoints: 0, attackValue: 12, savingThrow: 12, slots: 4, groups: 4, raises: 3 },
    { characterClass: 'Wise', level: 8, xp: 160000, hitDice: 6, bonusHitPoints: 0, attackValue: 13, savingThrow: 13, slots: 4, groups: 4, raises: 4 },
    { characterClass: 'Wise', level: 9, xp: 320000, hitDice: 6, bonusHitPoints: 1, attackValue: 13, savingThrow: 14, slots: 5, groups: 4, raises: 4 },
    { characterClass: 'Wise', level: 10, xp: 640000, hitDice: 7, bonusHitPoints: 0, attackValue: 13, savingThrow: 15, slots: 5, groups: 5, raises: 5 },
    { characterClass: 'Brave', level: 1, xp: 0, hitDice: 1, bonusHitPoints: 0, attackValue: 10, savingThrow: 9, slots: 1, groups: 2, raises: 0 },
    { characterClass: 'Brave', level: 2, xp: 1200, hitDice: 2, bonusHitPoints: 0, attackValue: 10, savingThrow: 10, slots: 1, groups: 2, raises: 1 },
    { characterClass: 'Brave', level: 3, xp: 2400, hitDice: 3, bonusHitPoints: 0, attackValue: 10, savingThrow: 11, slots: 1, groups: 2, raises: 1 },
    { characterClass: 'Brave', level: 4, xp: 4800, hitDice: 4, bonusHitPoints: 0, attackValue: 11, savingThrow: 12, slots: 2, groups: 2, raises: 2 },
    { characterClass: 'Brave', level: 5, xp: 9600, hitDice: 5, bonusHitPoints: 0, attackValue: 11, savingThrow: 13, slots: 2, groups: 3, raises: 2 },
    { characterClass: 'Brave', level: 6, xp: 19200, hitDice: 6, bonusHitPoints: 0, attackValue: 11, savingThrow: 14, slots: 2, groups: 3, raises: 3 },
    { characterClass: 'Brave', level: 7, xp: 38400, hitDice: 7, bonusHitPoints: 0, attackValue: 12, savingThrow: 15, slots: 3, groups: 3, raises: 3 },
    { characterClass: 'Brave', level: 8, xp: 76800, hitDice: 8, bonusHitPoints: 0, attackValue: 12, savingThrow: 16, slots: 3, groups: 3, raises: 4 },
    { characterClass: 'Brave', level: 9, xp: 153600, hitDice: 9, bonusHitPoints: 0, attackValue: 12, savingThrow: 17, slots: 3, groups: 4, raises: 4 },
    { characterClass: 'Brave', level: 10, xp: 307200, hitDice: 10, bonusHitPoints: 0, attackValue: 13, savingThrow: 18, slots: 4, groups: 4, raises: 5 },
    { characterClass: 'Fortunate', level: 1, xp: 0, hitDice: 1, bonusHitPoints: 0, attackValue: 10, savingThrow: 6, slots: 1, groups: 2, raises: 0 },
    { characterClass: 'Fortunate', level: 2, xp: 1500, hitDice: 2, bonusHitPoints: 0, attackValue: 10, savingThrow: 7, slots: 1, groups: 2, raises: 1 },
    { characterClass: 'Fortunate', level: 3, xp: 3000, hitDice: 2, bonusHitPoints: 1, attackValue: 11, savingThrow: 8, slots: 1, groups: 3, raises: 1 },
    { characterClass: 'Fortunate', level: 4, xp: 6000, hitDice: 3, bonusHitPoints: 0, attackValue: 11, savingThrow: 9, slots: 2, groups: 3, raises: 2 },
    { characterClass: 'Fortunate', level: 5, xp: 12000, hitDice: 3, bonusHitPoints: 1, attackValue: 12, savingThrow: 10, slots: 2, groups: 4, raises: 2 },
    { characterClass: 'Fortunate', level: 6, xp: 24000, hitDice: 4, bonusHitPoints: 0, attackValue: 12, savingThrow: 11, slots: 2, groups: 4, raises: 3 },
    { characterClass: 'Fortunate', level: 7, xp: 48000, hitDice: 4, bonusHitPoints: 1, attackValue: 13, savingThrow: 12, slots: 3, groups: 5, raises: 3 },
    { characterClass: 'Fortunate', level: 8, xp: 96000, hitDice: 5, bonusHitPoints: 0, attackValue: 13, savingThrow: 13, slots: 3, groups: 5, raises: 4 },
    { characterClass: 'Fortunate', level: 9, xp: 192000, hitDice: 5, bonusHitPoints: 1, attackValue: 14, savingThrow: 14, slots: 3, groups: 6, raises: 4 },
    { characterClass: 'Fortunate', level: 10, xp: 384000, hitDice: 6, bonusHitPoints: 0, attackValue: 14, savingThrow: 15, slots: 4, groups: 6, raises: 5 },
  ],
  defaultInventory: [
    "Backpack",
    "Rations (3)",
    "Torch",
    "Rope",
    "Waterskin",
  ],
  items: [
    { name: "Backpack", namePlural: "Backpacks", costUnit: 5, defaultQuantity: 1, },
    { name: "Bandage", namePlural: "Bandages", costUnit: 0.4, defaultQuantity: 5, },
    { name: "Compass", namePlural: "Compasses", costUnit: 50, defaultQuantity: 1, },
    { name: "Crowbar", namePlural: "Crowbars", costUnit: 5, defaultQuantity: 1, },
    { name: "Flint & steel", namePlural: "Flints & steels", costUnit: 5, defaultQuantity: 1, },
    { name: "Grappling hook", namePlural: "Grappling hooks", costUnit: 5, defaultQuantity: 1, },
    { name: "Hammer", namePlural: "Hammers", costUnit: 3, defaultQuantity: 1, },
    { name: "Holy symbol", namePlural: "Holy symbols", costUnit: 2, defaultQuantity: 1, },
    { name: "Lantern", namePlural: "Lanterns", costUnit: 10, defaultQuantity: 1, },
    { name: "Lockpick", namePlural: "Lockpicks", costUnit: 20, defaultQuantity: 1, },
    { name: "Map", namePlural: "Maps", costUnit: 20, defaultQuantity: 1, },
    { name: "Mirror", namePlural: "Mirrors", costUnit: 5, defaultQuantity: 1, },
    { name: "Oil flask", namePlural: "Oil flasks", costUnit: 2, defaultQuantity: 1, },
    { name: "Pole", namePlural: "Poles", costUnit: 1, defaultQuantity: 1, },
    { name: "Ration", namePlural: "Rations", costUnit: 3, defaultQuantity: 1, },
    { name: "Rope", namePlural: "Ropes", costUnit: 1, defaultQuantity: 1, },
    { name: "Sack", namePlural: "Sacks", costUnit: 1, defaultQuantity: 1, },
    { name: "Shovel", namePlural: "Shovels", costUnit: 5, defaultQuantity: 1, },
    { name: "Stake", namePlural: "Stakes", costUnit: 0.2, defaultQuantity: 6, },
    { name: "Spike", namePlural: "Spikes", costUnit: 1, defaultQuantity: 6, },
    { name: "Tinderbox", namePlural: "Tinderboxes", costUnit: 10, defaultQuantity: 1, },
    { name: "Torch", namePlural: "Torches", costUnit: 0.2, defaultQuantity: 6, },
    { name: "Waterskin", namePlural: "Waterskins", costUnit: 3, defaultQuantity: 1, },
  ],
  armors: [
    {
        name: "Cloth armor",
        armorClass: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Leather armor",
        armorClass: 2,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Studded leather armor",
        armorClass: 3,
        allowedClasses: ["Deft", "Strong"],
    },
    {
        name: "Chainmail",
        armorClass: 4,
        allowedClasses: ["Strong"],
    },
    {
        name: "Splint mail",
        armorClass: 5,
        allowedClasses: ["Strong"],
    },
    {
        name: "Full plate",
        armorClass: 6,
        allowedClasses: ["Strong"],
    },
  ],
  weapons: [
    {
        name: "Axe",
        namePlural: "Axes",
        damage: "1d6+1",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Sword",
        namePlural: "Swords",
        damage: "1d6+1",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Club",
        namePlural: "Clubs",
        damage: "1d6-2",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Dagger",
        namePlural: "Daggers",
        damage: "1d6-2",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Flail",
        namePlural: "Flails",
        damage: "1d6",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Greatsword",
        namePlural: "Greatswords",
        damage: "1d6+2",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong"],
    },
    {
        name: "Battle axe",
        namePlural: "Battle axes",
        damage: "1d6+2",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong"],
    },
    {
        name: "Halberd",
        namePlural: "Halberds",
        damage: "1d6+1",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong"],
    },
    {
        name: "Polearm",
        namePlural: "Polearms",
        damage: "1d6+1",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong"],
    },
    {
        name: "Mace",
        namePlural: "Maces",
        damage: "1d6",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Warhammer",
        namePlural: "Warhammers",
        damage: "1d6",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Morningstar",
        namePlural: "Morningstars",
        damage: "1d6",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Quarterstaff",
        namePlural: "Quarterstaves",
        damage: "1d6-1",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Scimitar",
        namePlural: "Scimitars",
        damage: "1d6",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Shortsword",
        namePlural: "Shortswords",
        damage: "1d6",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Spear",
        namePlural: "Spears",
        damage: "1d6",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    }, {
        name: "Crossbow",
        namePlural: "Crossbows",
        damage: "1d6+1",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Dart",
        namePlural: "Darts",
        damage: "1",
        quantityDefault: 12,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Javelin",
        namePlural: "Javelins",
        damage: "1d6",
        quantityDefault: 3,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Longbow",
        namePlural: "Longbows",
        damage: "1d6",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong"],
    },
    {
        name: "Musket",
        namePlural: "Muskets",
        damage: "1d6+2",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Pistol",
        namePlural: "Pistols",
        damage: "1d6+1",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Shortbow",
        namePlural: "Shortbows",
        damage: "1d6-1",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong"],
    },
    {
        name: "Sling",
        namePlural: "Slings",
        damage: "1d6-2",
        quantityDefault: 1,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Throwing knife",
        namePlural: "Throwing knives",
        damage: "1d6-2",
        quantityDefault: 6,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
    {
        name: "Throwing axe",
        namePlural: "Throwing axes",
        damage: "1d6-2",
        quantityDefault: 3,
        allowedClasses: ["Deft", "Strong", "Wise"],
    },
  ],
  names: {
    prefixes: [
      "Clubfoot",
      "Crazy",
      "Do-Nothing",
      "One-Eyed",
      "Blind",
      "Brave",
      "Accursed",
      "Bald",
      "Cruel",
      "Gentle",
      "Good",
      "Grim",
      "Holy",
      "Hairy",
      "Lame",
      "Mad",
      "Old",
      "Pale",
      "Quiet",
      "Small",
      "Strong",
      "Swift",
      "Tall",
      "Terrible",
      "Wicked",
      "Wise",
    ], primaries: [
      "Blaine",
      "Matthew",
      "Morgan",
      "Francisco",
      "James",
      "Richard",
      "Dinadan",
      "Alan",
      "Aldred",
      "Eluard",
      "Arnold",
      "Henry",
      "Basil",
      "Jocelyn",
      "Cyr",
      "Balin",
      "George",
      "Eliot",
      "Frederick",
      "Alexander",
      "Percival",
      "Anselm",
      "Albert",
      "Urian",
      "Tristram",
      "Berenger",
      "Martin",
      "Merek",
      "Herman",
      "Hildebrand",
      "Edwin",
      "Gilbert",
      "Bliant",
      "Bennet",
      "Bryce",
      "Castor",
      "Giles",
      "Gunter",
      "Bernard",
      "Arthur",
      "Nigel",
      "Lucan",
      "Lionel",
      "Bartholomew",
      "Bardolph",
      "Barnabas",
      "Bertram",
      "Wolfstan",
      "Hardwin",
      "Hamond",
      "Faramond",
      "Herbert",
      "Alisander",
      "Ulric",
      "Galleron",
      "Solomon",
      "Sampson",
      "Tobias",
      "Charles",
      "Diggory",
      "Drogo",
      "Hugh",
      "Baudwin",
      "Everard",
      "Nicholas",
      "Leofwin",
      "Amis",
      "Ranulf",
      "Fulke",
      "Theobald",
      "Rowan",
      "Geoffrey",
      "Gervase",
      "Gerard",
      "Godwyn",
      "Philip",
      "Warin",
      "Warner",
      "Thomas",
      "Brom",
      "Hamon",
      "Thurstan",
      "Robert",
      "Roland",
      "Rolf",
      "Walter",
      "Laurence",
      "Reginald",
      "Aglovale",
      "Sayer",
      "Timm",
      "Piers",
      "Cedric",
      "Randel",
      "Denis",
      "Elias",
      "Gabriel",
      "Hector",
      "Humphrey",
      "Gamel",
      "Gregory",
      "Jasper",
      "Jeremy",
      "Isaac",
      "Ingram",
      "Isembard",
      "Manfred",
      "Ives",
      "William",
      "Lucius",
      "Wymond",
      "Lambert",
      "Blaise",
      "Griffith",
      "Mabon",
      "Hubert",
      "Gerald",
      "Eustace",
      "Emory",
      "Adam",
      "Adelard",
      "Alphonse",
      "Turstin",
      "Guy",
      "Peter",
      "Osric",
      "Ogier",
      "Gareth",
      "Maynard",
      "Miles",
      "Elaine",
      "Sarah",
      "Sela",
      "Sigga",
      "Susanna",
      "Althea",
      "Alma",
      "Artemisia",
      "Anne",
      "Anais",
      "Acelina",
      "Aelina",
      "Aldith",
      "Audry",
      "Augusta",
      "Brangwine",
      "Bridget",
      "Genevieve",
      "Guinevere",
      "Catelin",
      "Caterina",
      "Dionisia",
      "Mary",
      "Molly",
      "Margaret",
      "Margery",
      "Martha",
      "Elizabeth",
      "Elysande",
      "Cristina",
      "Giselle",
      "Regina",
      "Ricolda",
      "Roana",
      "Barbetta",
      "Bertha",
      "Clarice",
      "Amelina",
      "Cecily",
      "Edith",
      "Elle",
      "Juliana",
      "Ivette",
      "Adelina",
      "Agnes",
      "Alis",
      "Alyson",
      "Dameta",
      "Paulina",
      "Petronilla",
      "Edeva",
      "Eglenti",
      "Evelune",
      "Emeline",
      "Emma",
      "Joan",
      "Johanna",
      "Lavina",
      "Lena",
      "Lovota",
      "Lillian",
      "Maud",
      "Milicent",
      "Magdalen",
      "Isabella",
      "Caesaria",
      "Douglas",
      "Delia",
      "Sapphira",
      "Sophronia",
      "Tephania",
      "Theda",
      "Thora",
      "Odelina",
      "Oliva",
      "Orella",
      "Venetia",
      "Ysmeine",
      "Gracia",
      "Gratia",
      "Swanhild",
      "Sybil",
      "Mathilde",
      "Ida",
      "Ingerith",
      "Isemay",
      "Celestria",
      "Constance",
      "Eleanor",
      "Amicia",
      "Avina",
      "Athelina",
      "Eva",
      "Gundred",
      "Felicia",
      "Floria",
      "Isolda",
      "Linota",
      "Cassandra",
      "Lucia",
      "Helewisa",
      "Justina",
      "Joyce",
      "Joya",
      "Nesta",
      "Sabina",
      "Gisela",
      "Rosa",
      "Rosamund",
      "Evaine",
      "Viviane",
      "Laudine",
      "Letia",
      "Leticia",
      "Legarda",
      "Lia",
      "Lunete",
      "Florence",
      "Gwendolen",
      "Nicola",
      "Blanche",
      "Beatrice",
      "Marie",
      "Marion",
      "Mirielda",
    ], suffixes: [
      "the Hard",
      "the Soft",
      "of the North",
      "of the East",
      "of the South",
      "of the West",
      "the Black",
      "the White",
      "the Red",
      "the Yellow",
      "of the Wood",
      "of the Mountain",
      "of the Valley",
      "of the River",
      "of the Lake",
      "the Elder",
      "the Younger",
      "the Brave",
      "the Great",
      "the Magnificent",
      "the Able",
      "the Accursed",
      "the Bald",
      "the Bear",
      "the Cruel",
      "the Damned",
      "the Exile",
      "the Gentle",
      "the Good",
      "the Grim",
      "the Hammer",
      "the Holy",
      "the Hairy",
      "the Impaler",
      "the Kind",
      "the Lame",
      "the Lion",
      "the Wolf",
      "the Mad",
      "the Old",
      "the Pale",
      "the Quiet",
      "the Rose",
      "the Seer",
      "the Small",
      "the Spider",
      "the Strong",
      "the Swift",
      "the Tall",
      "the Terrible",
      "the Wicked",
      "the Wise",
      "of the Sun",
      "of the Moon",
      "Fairhair",
      "Bloodaxe",
      "Crookback",
      "Flatnose",
      "Forkbeard",
      "Greyfell",
      "Greymantle",
      "Longshanks",
      "Ironside",
      "Moneybags",
      "Oathbreaker",
      "One-Eye",
      "Ploughpenny",
      "Roundhead",
      "Thunderbolt",
      "Oakeshott",
    ]
  },
  descriptors: [
    // Complexion
    { category: "complexion", value: "Pale as a ghost" },
    { category: "complexion", value: "Covered in freckles" },
    { category: "complexion", value: "Skin has a blue tint" },
    { category: "complexion", value: "Jet-black skin" },

    // Scars
    { category: "scar", value: "Single long scar across one eye" },
    { category: "scar", value: "Web of scars from lightning strike" },
    { category: "scar", value: "Three long scars, from the claws of a beast" },
    { category: "scar", value: "Numerous battle scars" },
    { category: "scar", value: "Burn marks on hands" },
    { category: "scar", value: "Burn marks on half of face" },
    { category: "scar", value: "Covered in pox marks" },

    // Congenital
    { category: "congenital", value: "Hunchback" },
    { category: "congenital", value: "Clubfoot" },
    { category: "congenital", value: "Has six fingers on each hand" },
    { category: "congenital", value: "Cleft lip" },

    // Hair
    { category: "hair", value: "Shock of white hair" },
    { category: "hair", value: "Flame-red hair" },
    { category: "hair", value: "White-blonde hair" },
    { category: "hair", value: "Night-black hair" },
    { category: "hair", value: "Tonsured hair, like a friar" },
    { category: "hair", value: "Shaved head" },
    { category: "hair", value: "Long, braided hair" },
    { category: "hair", value: "Close-cropped hair" },
    { category: "hair", value: "Long, curly hair" },

    // Body type
    { category: "build", value: "Tall and muscular" },
    { category: "build", value: "Tall and lanky" },
    { category: "build", value: "Short but slim" },
    { category: "build", value: "Short and stout" },
    { category: "build", value: "Broad-shouldered and barrel-chested" },
    { category: "build", value: "Skeletally thin" },
    { category: "build", value: "Tall and fat" },

    // Background
    { category: "background", value: "Used to be a farmer" },
    { category: "background", value: "Used to be a cobbler" },
    { category: "background", value: "Used to be a blacksmith" },
    { category: "background", value: "Used to be a brewer" },
    
    // Studies
    { category: "studies", value: "Studied magic in their youth" },
    { category: "studies", value: "Very curious about magic" },
    { category: "studies", value: "Not a big fan of magic" },
    
    // Family
    { category: "family", value: "Family eaten by trolls" },
    { category: "family", value: "Family eaten by ghouls" },
    { category: "family", value: "Family killed by inquisitors" },
    { category: "family", value: "Family killed by crusaders" },
    { category: "family", value: "Family killed by orcs" },
    
    // Phobias
    { category: "phobias", value: "Deathly afraid of spiders" },
    { category: "phobias", value: "Deathly afraid of undead" },
    { category: "phobias", value: "Hates the dark" },
    
    // Personality
    { category: "personality", value: "Extremely forgetful" },
    { category: "personality", value: "Quick to anger" },
    { category: "personality", value: "Never forgets a slight" },
    { category: "personality", value: "Quick to forgive" },
    { category: "personality", value: "Very easygoing" },
    { category: "personality", value: "Makes friends with everyone" },
    { category: "personality", value: "Absent-minded--always thinking about something else" },
    
    // Arts
    { category: "arts", value: "Always singing sea shanties" },
    { category: "arts", value: "Composes poems" },
    { category: "arts", value: "Composes ballads" },
    { category: "arts", value: "Writes love stories" },
    { category: "arts", value: "Whistles incessantly" },
    { category: "arts", value: "Illiterate and self-conscious about it" },
    
    // Drugs
    { category: "drugs", value: "Teeth stained from chewing tobacco" },
    { category: "drugs", value: "Smokes pipe at every chance" },
    { category: "drugs", value: "Too fond of drink" },
    { category: "drugs", value: "Loves wine more than anything" },
    { category: "drugs", value: "Despises drinking" },
    
    // Food
    { category: "food", value: "Always stopping to forage for food" },
    { category: "food", value: "Eats whenever they have the opportunity" },
    { category: "food", value: "Passionate about mushrooms" },
    { category: "food", value: "Doesn't eat meat" },
    
    // Outdoorsmanship
    { category: "outdoorsmanship", value: "Loves to hunt" },
    { category: "outdoorsmanship", value: "Excellent at lighting fires" },
    { category: "outdoorsmanship", value: "Likes fire a little too much" },
    { category: "outdoorsmanship", value: "Knows how to set a snare" },
    
    // Habits
    { category: "habits", value: "Always sharpening or polishing weapons" },
    { category: "habits", value: "Constantly looks over their shoulder" },
    { category: "habits", value: "Mutters under their breath" },
    { category: "habits", value: "Collects small shiny objects" },
    { category: "habits", value: "Knows a lot about coins" },
  ]
};

class Character {
  constructor(level, characterClass, config = defaultConfig) {
    // Initialize basic character parameters.
    this.level = 1;
    this.characterClass = characterClass;
    this.config = config;
    this.config.attributes = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];

    // FIXME add checks on config.
    //  - need at least 8 categories of attunements
    //  - need at least 1 vocation
    //  - need at least 1 other species
    //  - need at least 2 additional (non-racial, non-common) languages
    //  - need at least 12 miracles

    // Generate attributes and vital statistics from class tables.
    this.generateAttributes();
    this.generateHitDice();
    this.generateHitPoints();
    this.generateAttackValue();
    this.generateSavingThrow();
    this.generateSlotCount();
    this.generateGroupCount();

    // Generate groups and slots.
    this.generateGroups();
    this.generateSlots();

    // Generate items, equipment, and wealth.
    this.generateInventory();
    this.generateWealth();

    // Generate identity.
    this.generateName();
    this.generateDescriptors();
    this.generateLanguages();

    // Now, we increase the character's level until it matches the desired target.
    while (this.level < level) {
      this.increaseLevel()
    }
  }

  characterClassTableEntry(level = null) {
    if (!level) {
      var level = this.level;
    }

    return this.config.classTables.filter(entry => entry.level === level && entry.characterClass === this.characterClass)[0];
  }

  generateAttributes() {
    this.attributes = {
      strength: {
        name: "Strength",
        abbreviation: "STR",
        score: null,
      },
      dexterity: {
        name: "Dexterity",
        abbreviation: "DEX",
        score: null,
      },
      constitution: {
        name: "Constitution",
        abbreviation: "CON",
        score: null,
      },
      intelligence: {
        name: "Intelligence",
        abbreviation: "INT",
        score: null,
      },
      wisdom: {
        name: "Wisdom",
        abbreviation: "WIS",
        score: null,
      },
      charisma: {
        name: "Charisma",
        abbreviation: "CHA",
        score: null,
      },
    };

    this.attributes.strength.score     = d(6, 3);
    this.attributes.dexterity.score    = d(6, 3);
    this.attributes.constitution.score = d(6, 3);
    this.attributes.intelligence.score = d(6, 3);
    this.attributes.wisdom.score       = d(6, 3);
    this.attributes.charisma.score     = d(6, 3);
  }

  generateHitDice() {
    // Look up hit dice and bonus hit points in class tables.
    let characterClassTableEntry = this.characterClassTableEntry();

    this.hitDice = {
      base: characterClassTableEntry.hitDice,  // Base hit dice from class, e.g. 1 for a level 1 Strong's HD 1+2.
      bonusHitPoints: characterClassTableEntry.bonusHitPoints, // Bonus hit points from class hit dice, e.g. 2 for a level 1 Strong's HD 1+2.
    };

  }

  generateHitPoints() {
    // Roll hit dice and add bonus hit points from class table.
    if (this.characterClass === 'Brave' && this.level <= 3) {
      // Brave characters of level 3 or lower get to roll their HD twice and take the greater result.
      this.hitPoints = d(6, this.hitDice.base, 'high') + this.hitDice.bonusHitPoints;
    } else {
      // Other characters, or Brave of higher level, only roll once.
      this.hitPoints = d(6, this.hitDice.base) + this.hitDice.bonusHitPoints;
    }

    // Add bonus HP for high-constitution Strong.
    if (this.characterClass === 'Strong' && this.attributes.constitution.score >= 16) {
      this.hitPoints += 2;
    } else if (this.characterClass === 'Strong' && this.attributes.constitution.score >= 13) {
      this.hitPoints += 1;
    }
  }

  generateAttackValue() {
    // Look up attack value in class tables.
    let characterClassTableEntry = this.characterClassTableEntry();
    this.attackValue = characterClassTableEntry.attackValue;

    // Add bonus AV for high-strength Strong.
    if (this.characterClass === 'Strong' && this.attributes.strength.score >= 13) {
      this.attackValue += 1;
    }
  }

  generateSavingThrow() {
    // Look up saving throw in class tables.
    let characterClassTableEntry = this.characterClassTableEntry();
    this.savingThrow = characterClassTableEntry.savingThrow;
  }

  generateGroupCount() {
    // Look up group count in class tables.
    let characterClassTableEntry = this.characterClassTableEntry();
    this.groupCount = {
      base: characterClassTableEntry.groups,
      bonus: 0,
    };

    // Add a bonus group for each attribute of score 5 or lower.
    if (this.attributes.strength.score <= 5) {
      this.groupCount.bonus += 1;
    }

    if (this.attributes.dexterity.score <= 5) {
      this.groupCount.bonus += 1;
    }
    
    if (this.attributes.constitution.score <= 5) {
      this.groupCount.bonus += 1;
    }
    
    if (this.attributes.intelligence.score <= 5) {
      this.groupCount.bonus += 1;
    }
    
    if (this.attributes.wisdom.score <= 5) {
      this.groupCount.bonus += 1;
    }
    
    if (this.attributes.charisma.score <= 5) {
      this.groupCount.bonus += 1;
    }
  }

  generateSlotCount() {
    // Look up slot count in class tables.
    let characterClassTableEntry = this.characterClassTableEntry();
    this.slotCount = {
      base: characterClassTableEntry.slots,
      inactive: null,
      bonusInactive: null,
    }

    // Add a number of inactive slots for Deft and Wise equal to the number of active slots.
    if (this.characterClass === 'Deft' || this.characterClass === 'Wise') {
      this.slotCount.inactive = this.slotCount.base;
    }

    // Add bonus inactive slots for high-wisdom Wise.
    if (this.characterClass === 'Wise' && this.attributes.wisdom.score >= 16) {
      this.slotCount.bonusInactive = 2;
    } else if (this.characterClass === 'Wise' && this.attributes.wisdom.score >= 13) {
      this.slotCount.bonusInactive = 1;
    } else if (this.characterClass === 'Wise') {
      this.slotCount.bonusInactive = 0;
    }
  }

  generateGroups() {
    this.groups = [];
    
    // Determine total number of groups we're working with.
    let remainingGroupCount = this.groupCount.base + this.groupCount.bonus;

    // Determine whether character should have a Species group.
    // If so, add it.
    if (Math.random() <= this.config.nonDefaultSpeciesChance) {
      this.generateSpecies(false);
      remainingGroupCount--;
    } else {
      this.generateSpecies();
    }

    // Add a vocation group. Deft characters don't attach this to any attribute.
    if (this.characterClass === 'Deft') {
      this.generateVocation(false);
      remainingGroupCount--;
    } else {
      this.generateVocation();
      remainingGroupCount--;
    }

    // Now populate remaining groups with affiliations.
    // Some of these may be bonus groups.
    this.generateAffiliations(remainingGroupCount - this.groupCount.bonus, this.groupCount.bonus);
  }

  getAvailableAttributes(maxGroups = 2) {
    // Randomly select an attribute which still has room for groups.
    // FIXME there must be a cleaner way to do this.
    // FIXME change this to a getter?
    let strengthCount = 0;
    let dexterityCount = 0;
    let constitutionCount = 0;
    let intelligenceCount = 0;
    let wisdomCount = 0;
    let charismaCount = 0;

    for (let i = 0; i < this.groups; i++) {
      let group = this.groups[i];
      if (group.attributes.includes('Strength')) {
        strengthCount++;
      }
      if (group.attributes.includes('Dexterity')) {
        dexterityCount++;
      }
      if (group.attributes.includes('Constitution')) {
        constitutionCount++;
      }
      if (group.attributes.includes('Intelligence')) {
        intelligenceCount++;
      }
      if (group.attributes.includes('Wisdom')) {
        wisdomCount++;
      }
      if (group.attributes.includes('Charisma')) {
        charismaCount++;
      }
    }

    let availableAttributes = this.config.attributes;
    if (strengthCount >= maxGroups) {
      availableAttributes = availableAttributes.filter(attribute => attribute !== 'Strength');
    }
    if (dexterityCount >= maxGroups) {
      availableAttributes = availableAttributes.filter(attribute => attribute !== 'Dexterity');
    }
    if (constitutionCount >= maxGroups) {
      availableAttributes = availableAttributes.filter(attribute => attribute !== 'Constitution');
    }
    if (intelligenceCount >= maxGroups) {
      availableAttributes = availableAttributes.filter(attribute => attribute !== 'Intelligence');
    }
    if (wisdomCount >= maxGroups) {
      availableAttributes = availableAttributes.filter(attribute => attribute !== 'Wisdom');
    }
    if (charismaCount >= maxGroups) {
      availableAttributes = availableAttributes.filter(attribute => attribute !== 'Charisma');
    }

    return availableAttributes;
  }

  getAvailableAttribute(maxGroups = 2) {
    // FIXME change this to a getter?
    return this.getAvailableAttributes().random(maxGroups);
  }

  generateSpecies(isDefault = true) {
    // Remove any existing species.
    this.groups = this.groups.filter(group => group.type !== 'Species');

    if (isDefault) {
      // Simply choose the default species option. It does not count as a group.
      var species = this.config.defaultSpecies;
    } else {
      // Randomly select a non-default species.
      var species = this.config.otherSpecies.random();

      // Randomly select two attributes (or only one if a hybrid, e.g. half-elf) to attach species group to.
      let firstAttribute = this.getAvailableAttribute();
      let secondAttribute = this.getAvailableAttributes().filter(attribute => attribute !== firstAttribute).random();
      let attributes = [firstAttribute];
      if (Math.random() < this.config.hybridSpeciesChance) {
        attributes.push(secondAttribute);
      }

      this.groups.push({
        name: species.name,
        type: 'Species',
        attributes: attributes,
      });
    }

    this.species = species.name;
    this.languages = [species.language];
  }

  generateLanguages() {
    // Default and species languages are granted in generateSpecies().
    // These languages are just for high intelligence: 1 for 13+, or 2 for 16+.
    if (this.attributes.intelligence.score >= 16) {
      var count = 2;
    } else if (this.attributes.intelligence.score >= 13) {
      var count = 1;
    } else {
      var count = 0;
    }

    for (let i = 0; i < count; i++) {
      this.addLanguage();
    }
  }

  addLanguage() {
    // Randomly choose a language.
    let language = this.config.languages.random();

    while (this.languages.includes(language)) {
      // This language is already in the character's lexicon. Choose a new one.
      language = this.config.languages.random();
    }

    this.languages.push(language);
  }

  generateVocation(hasAttribute = true) {
    // Remove any existing vocation.
    this.groups = this.groups.filter(group => group.type !== 'Vocation');

    // Randomly select an attribute to attach to, unless that
    // argument has been overridden (e.g. in the case of Deft characters).
    if (hasAttribute) {
      var attributes = [this.getAvailableAttribute()];
    } else {
      var attributes = null;
    }

    this.groups.push({
      name: this.config.vocations.random(),
      type: 'Vocation',
      attributes: attributes,
      isBonus: false,
    });
  }

  getAffiliations() {
    let affiliations = [];

    this.groups.forEach(group => {
      if (group.type === 'Affiliation') {
        affiliations.push(group.name);
      }
    });

    return affiliations;
  }

  generateAffiliations(count, bonusCount = 0) {
    // Remove any existing affiliations.
    this.groups = this.groups.filter(group => group.type !== 'Affiliation');

    // Add regular affiliation groups.
    while (count > 0) {
      this.addAffiliation();
      count--;
    }

    // Add bonus affiliation groups.
    while (bonusCount > 0) {
      this.addAffiliation(true);
      bonusCount--;
    }
  }

  addAffiliation(isBonus = false) {
    // Randomly select an affiliation that hasn't already been selected.
    let availableAffiliations = this.config.affiliations.filter(affiliation => !this.getAffiliations().includes(affiliation));

    // Add it to an attribute that doesn't already have two groups.
    this.groups.push({
      name: availableAffiliations.random(),
      type: 'Affiliation',
      attributes: [this.getAvailableAttribute()],
      isBonus: isBonus,
    });
  }

  generateSlots() {
    this.slots = [];

    // If Deft, get attunements and inactive attunements.
    if (this.characterClass === 'Deft') {
      this.generateAttunements(this.slotCount.base, this.slotCount.inactive);
    }

    // If Strong, get abilities.
    if (this.characterClass === 'Strong') {
      this.generateAbilities(this.slotCount.base);
    }

    // If Wise, get miracles and inactive miracles and bonus inactive miracles.
    if (this.characterClass === 'Wise') {
      this.generateMiracles(this.slotCount.base, this.slotCount.inactive + this.slotCount.bonusInactive);
    }

    // FIXME add Brave slots.
    // FIXME add Fortunate slots.
  }

  generateAttunements(activeCount, inactiveCount) {
    // Add active attunements.
    for (let i = 0; i < activeCount; i++) {
      this.addAttunement(true);
    }

    // Add inactive attunements.
    for (let i = 0; i < inactiveCount; i++) {
      this.addAttunement(false);
    }
  }

  addAttunement(isActive, preventDuplicateCategories = true) {
    // Determine current attunements, so we know which ones not to add.
    let currentCategories = [];
    let currentAttunements = [];
    this.slots.forEach(slot => {
      if (slot.type === 'Attunement') {
        currentAttunements.push(slot.name);
        currentCategories.push(slot.category);
      }
    });

    // Add a random attunement that hasn't been previously selected.
    let attunement = this.config.attunements.random();
    while (currentAttunements.includes(attunement.name) || (preventDuplicateCategories && currentCategories.includes(attunement.category))) {
      attunement = this.config.attunements.random();
    }

    this.slots.push({
      name: attunement.name,
      type: 'Attunement',
      category: attunement.category,
      isActive: isActive,
    })

    // If an item was added, make a note of it so we can include it in the inventory.
    if (attunement.isItem && !this.inventory) {
      // If the inventory hasn't been instantiated yet, create it and insert the item.
      this.inventory = [attunement.name];
    } else if (attunement.isItem) {
      // If the inventory has been instantiated, just append the item.
      this.inventory.push(attunement.name);
    }
  }

  generateAbilities(activeCount, inactiveCount = 0) {
    // Add active abilities.
    for (let i = 0; i < activeCount; i++) {
      this.addAbility(true);
    }

    // Add active abilities.
    // NB: Strong characters only have active abilities.
    // However, may as well make this functionality extensible
    // and leave open the opportunity for hybrid or custom classes.
    for (let i = 0; i < inactiveCount; i++) {
      this.addAbility(false);
    }
  }

  addAbility(isActive) {
    let currentAbilities = [];
    this.slots.forEach(slot => {
      if (slot.type === 'Ability') {
        currentAbilities.push(slot.name);
      }
    });

    let availableAbilities = this.config.abilities.filter(ability => !currentAbilities.includes(ability));

    this.slots.push({
      name: availableAbilities.random(),
      type: 'Ability',
      category: null,
      isActive: isActive,
    })
  }

  generateMiracles(activeCount, inactiveCount) {
    // Add active miracles.
    for (let i = 0; i < activeCount; i++) {
      this.addMiracle(true);
    }

    // Add inactive and bonus inactive miracles.
    for (let i = 0; i < inactiveCount; i++) {
      this.addMiracle(false);
    }
  }

  addMiracle(isActive) {
    // Determine current miracles, so we know which ones not to add.
    let currentMiracles = [];
    this.slots.forEach(slot => {
      if (slot.type === 'Miracle') {
        currentMiracles.push(slot.name);
      }
    });

    // Add a random miracle that hasn't been previously selected.
    let miracle = this.config.miracles.random();
    while (currentMiracles.includes(miracle)) {
      miracle = this.config.miracles.random();
    }

    this.slots.push({
      name: miracle,
      type: 'Miracle',
      category: null,
      isActive: isActive,
    })
  }

  generateInventory() {
    // Inventory may have already been created, if a Deft character was given an item.
    // If it hasn't been created, then do so now.
    if (!this.inventory) {
        this.inventory = [];
    }

    // Everyone gets some basic adventuring gear.
    this.inventory = this.inventory.concat(this.config.defaultInventory);

    // Add 1 to 3 other items.
    let itemCount = Math.floor(Math.random()*2 + 1);
    for (let i = 0; i < itemCount; i++) {
        this.inventory.push(this.config.items.random().name);
    }

    // Add some armor that they're capable of wearing.
    let validArmors = this.config.armors.filter(armor => armor.allowedClasses.includes(this.characterClass));

    let armor = validArmors.random();
    this.inventory.push(armor.name);
    this.armorClass = armor.armorClass;

    // If Strong, potentially add a shield.
    if (this.characterClass === "Strong" && Math.random() <= this.shieldChance) {
        this.inventory.push("Shield");
        this.armorClass += 1;
    }

    // Add a weapon they can use.
    let validWeapons = this.config.weapons.filter(weapon => weapon.allowedClasses.includes(this.characterClass));

    let weapon = validWeapons.random();
    this.inventory.push(weapon.name);

    this.inventory = [...new Set(this.inventory)].shuffle(); // Convert to a set (to filter out duplicate values) then back to an array, and randomize the order for display.
  }

  generateWealth() {
    this.currency = {
      gp: Math.floor(Math.random()*5),
      sp: Math.floor(Math.random()*10),
      cp: Math.floor(Math.random()*100),
    }
  }

  generateName(allowPrefix = true, allowSuffix = true) {
      let name = "";

      // A name can have a prefix or a suffix, but not both.
      let randomNum = Math.random();
      if (allowPrefix && randomNum < 0.3) {
          var usePrefix = true;
      } else if (allowSuffix && randomNum > 0.7) {
          var useSuffix = true;
      }

      // Random chance for a prefix.
      if (usePrefix) {
          name += this.config.names.prefixes.random() + ' ';
      }

      // Everyone has at least a regular old first name.
      name += this.config.names.primaries.random();

      // Random chance for a suffix.
      if (useSuffix) {
          name += ' ' + this.config.names.suffixes.random();
      }

      this.name = name;
  }

  generateDescriptors(count = 3) {
    let traits = [];
    let excludedCategories = [];

    for (let i = 0; i < count; i++) {
        // Get a random descriptor trait.
        let descriptor = this.config.descriptors.random();

        // If a trait of that type (e.g. complexion or family) has already been selected, select a new one.
        while (excludedCategories.includes(descriptor.category)) {
            descriptor = this.config.descriptors.random()
        }

        // Add the trait and its associated category to our respective arrays.
        traits.push(descriptor.value);
        excludedCategories.push(descriptor.category);
    }

    this.descriptors = [...new Set(traits)].shuffle(); // Convert to a set (to filter out any duplicate values) then back to an array.
  }

  increaseLevel() {
    if (this.level == 10) {
      return;
    }

    let oldCharacterClassTableEntry = this.characterClassTableEntry(); // FIXME create a complete history by level.
    let oldHitPoints = this.hitPoints;
    let oldAttributes = this.attributes;
    let oldGroupCount = this.groupCount;
    let oldSlotCount = this.slotCount;
    let oldLevel = this.level;
    this.level += 1;

    // Before anything else, if a raise is available, use it to increase a random attribute.
    // Need to do this before anything else because it can affect everything from hit points
    // to bonus groups.
    let characterClassTableEntry = this.characterClassTableEntry();
    let raises = characterClassTableEntry.raises - oldCharacterClassTableEntry.raises;
    if (raises > 0) {
      for (let i = 0; i < raises; i++) {
        // Randomly select an attribute and increase it.
        let randomAttributeNum = Math.floor(Math.random()*6 + 1);
        if (randomAttributeNum === 1) {
          this.attributes.strength.score += 1;
        } else if (randomAttributeNum === 2) {
          this.attributes.dexterity.score += 1;
        } else if (randomAttributeNum === 3) {
          this.attributes.constitution.score += 1;
        } else if (randomAttributeNum === 4) {
          this.attributes.intelligence.score += 1;
        } else if (randomAttributeNum === 5) {
          this.attributes.wisdom.score += 1;
        } else if (randomAttributeNum === 6) {
          this.attributes.charisma.score += 1;
        }
      }
    }

    // Re-roll hit dice. If the new value is less than the old value,
    // then just keep the old value.
    this.generateHitDice();
    this.generateHitPoints();

    if (this.hitPoints < oldHitPoints) {
      this.hitPoints = oldHitPoints;
    }

    // Update other vital statistics.
    this.generateAttackValue();
    this.generateSavingThrow();
    this.generateGroupCount();
    this.generateSlotCount();

    // Check a few things regarding new group count.
    // - The bonus group count may be lower due to raises, in which case we need to remove a bonus group.
    // - The base group count may be higher, in which case we need to add a group.
    if (this.groupCount.bonus < oldGroupCount.bonus) {
      // Remove a bonus group.
      // Randomly select one group that's a bonus group.
      this.groups.pop(); // FIXME change to remove a bonus group at random, not just the last group.
    }

    if (this.groupCount.base > oldGroupCount.base) {
      // Add a new group. Cannot add a species later on, and vocation is typically
      // added at character creation, so we add an affiliation.
      this.addAffiliation();
    }

    // Check new slot count. If it's higher than the old slot count, then we
    // need to add new slots to compensate.
    if (this.characterClass === 'Deft') {
      let newActiveCount = Math.max(this.slotCount.base - oldSlotCount.base, 0);
      let newInactiveCount = Math.max(this.slotCount.inactive - oldSlotCount.inactive, 0);
      this.generateAttunements(newActiveCount, newInactiveCount);
    } else if (this.characterClass === 'Strong') {
      let newActiveCount = Math.max(this.slotCount.base - oldSlotCount.base, 0);
      this.generateAbilities(newActiveCount);
    } else if (this.characterClass === 'Wise') {
      let newActiveCount = Math.max(this.slotCount.base - oldSlotCount.base, 0);
      let newInactiveCount = Math.max(this.slotCount.inactive + this.slotCount.bonusInactive - oldSlotCount.inactve - oldSlotCount.bonusInactive, 0);
      this.generateMiracles(newActiveCount, newInactiveCount);
    }

    // Check intelligence score.
    // If character has reached a new cutoff (13 or 16) then we need to add a new language.
    if (this.attributes.intelligence.score >= 16 && oldAttributes.intelligence.score < 16) {
      this.addLanguage();
    } else if (this.attributes.intelligence.score >= 13 && oldAttributes.intelligence.score < 13) {
      this.addLanguage();
    }
  }
}

class Deft extends Character {
    constructor(level) {
        super(level, 'Deft');
    }
}

class Strong extends Character {
    constructor(level) {
        super(level, 'Strong');
    }
}

class Wise extends Character {
    constructor(level) {
        super(level, 'Wise');
    }
}

class Brave extends Character {
    constructor(level) {
        super(level, 'Brave');
    }
}

class Fortunate extends Character {
    constructor(level) {
        super(level, 'Fortunate');
    }
}

module.exports = {
  d,
  Character
}
