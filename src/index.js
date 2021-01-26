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
  nonHumanSpeciesChance: 0.2,
};

const characterClassTables = [
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
];

class Character {
    constructor(level, characterClass, config = defaultConfig) {
      // Initialize basic character parameters.
      this.level = level;
      this.characterClass = characterClass;
      this.config = config;

      // Generate attributes and vital statistics from class tables.
      this.generateAttributes();
      this.generateHitDice();
      this.generateHitPoints();
      this.generateAttackValue();
      this.generateSavingThrow();
      this.generateSlotCount();
      this.generateGroupCount();

      // Generate groups.
      this.generateGroups();

      // Generate slots.

      // Generate items, equipment, and wealth.

      // Generate identity
    }

    characterClassTableEntry() {
      return characterClassTables.filter(entry => entry.level === this.level && entry.characterClass === this.characterClass)[0];
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
      let possibleAttributes = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];

      // Determine whether character should have a Species group.
      if (Math.random() <= this.config.nonHumanSpeciesChance) {
        let firstAttribute = possibleAttributes.random();

        this.groups.push({
          name: 'Not-Human', // FIXME replace with random generator.
          type: 'Species',
          attributes: [
            firstAttribute,
            possibleAttributes.filter(attribute => attribute !== firstAttribute).random(), // FIXME allow for attaching to only one attribute (to represent e.g. Half-Elf).
          ],
        });

        remainingGroupCount--;
        this.species = 'Not-Human';
      } else {
        this.species = 'Human;'
      }

      // Add a vocation group. Deft characters don't attach this to any attribute.
      if (this.characterClass === 'Deft') {  
        this.groups.push({
          name: 'Adventurer', // FIXME replace with random generator.
          type: 'Vocation',
          attributes: null,
          isBonus: false,
        });
      } else {
        this.groups.push({
          name: 'Adventurer', // FIXME replace with random generator.
          type: 'Vocation',
          attributes: [
            possibleAttributes.random()
          ],
          isBonus: false,
        });
      }

      remainingGroupCount--;

      // Now for each remaining group, populate it with an affiliation.
      while (remainingGroupCount > 0) {
        // Determine which attributes do not already have two groups attached.
        let availableAttributes = possibleAttributes;
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

        if (strengthCount >= 2) {
          availableAttributes = availableAttributes.filter(attribute => attribute !== 'Strength');
        }
        if (dexterityCount >= 2) {
          availableAttributes = availableAttributes.filter(attribute => attribute !== 'Dexterity');
        }
        if (constitutionCount >= 2) {
          availableAttributes = availableAttributes.filter(attribute => attribute !== 'Constitution');
        }
        if (intelligenceCount >= 2) {
          availableAttributes = availableAttributes.filter(attribute => attribute !== 'Intelligence');
        }
        if (wisdomCount >= 2) {
          availableAttributes = availableAttributes.filter(attribute => attribute !== 'Wisdom');
        }
        if (charismaCount >= 2) {
          availableAttributes = availableAttributes.filter(attribute => attribute !== 'Charisma');
        }

        // Add it to an attribute that doesn't already have two groups.
        this.groups.push({
          name: 'Group', // FIXME replace with random generator. Ensure no duplicates.
          type: 'Affiliation',
          attributes: [
            availableAttributes.random()
          ],
          isBonus: false, // FIXME correctly mark affiliation as bonus group if necessary.
        });

        remainingGroupCount--;
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
