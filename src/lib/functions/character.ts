import type { CharacterClass } from "../interfaces/characterClass";
import type { Attributes } from "../interfaces/attribute";

import { config } from "../config/config";
import { classes } from "../data/classes";
import { affiliations } from "../data/affiliations";
import { vocations } from "../data/vocations";
import { specieses } from "../data/specieses";

import { getRandomElement, getRandomUniqueElement, roll } from "./utils";

class Character {
  name: string;
  xp: number;
  classEntry: CharacterClass;
  species: string;
  vocation: string;
  hitPoints: number;
  attackValue: number;
  armorClass: number;
  savingThrow: number;
  attributes: Attributes;

  constructor(xp: number = 0) {
    this.xp = xp;
    this.classEntry = getRandomClass(this.xp);
    this.attributes = generateAttributeScores();
    this.hitPoints = generateHitPoints(this.classEntry.name, this.classEntry.level, this.attributes.con.score);

  }
}

export function getRandomClass(xp: number = 0): CharacterClass {
  // Select a random class name.
  const classNames = classes.map((val) => val.name);
  const selectedClass = getRandomElement(classNames);

  // Get the class entry with the highest XP equal to or lower than the given value.
  return classes
    .filter((val) => {
      return val.name === selectedClass && val.xp <= xp
    })
    .sort((a, b) => {
      if (a.xp < b.xp) {
        return 1;
      }
      if (a.xp > b.xp) {
        return -1;
      }
      return 0;
    })[0];
}

export function generateAttributeScores(): Attributes {
  return {
    str: {
      name: "Strength",
      score: roll(6, 3),
      groups: [],
    },
    dex: {
      name: "Dexterity",
      score: roll(6, 3),
      groups: [],
    },
    con: {
      name: "Constitution",
      score: roll(6, 3),
      groups: [],
    },
    int: {
      name: "Intelligence",
      score: roll(6, 3),
      groups: [],
    },
    wis: {
      name: "Wisdom",
      score: roll(6, 3),
      groups: [],
    },
    cha: {
      name: "Charisma",
      score: roll(6, 3),
      groups: [],
    },
  }
}

export function generateHitPoints(className: string, level: number, conScore: number): number {
  let classEntry: CharacterClass = classes.filter((val) => val.name === className && val.level === level)[0];
  let hitPoints: number;

  if (level === 1) {
    hitPoints = classEntry.hitDice * 6 + classEntry.bonusHitPoints;
  } else {
    // If above level 1, new hit points are the greater of either the new roll, or the old roll plus 1.
    hitPoints = Math.max.apply(null, [generateHitPoints(className, level-1, conScore) + 1, roll(6, classEntry.hitDice) + classEntry.bonusHitPoints]);
  }
  
  if (classEntry.name === "Strong" && conScore >= 16) {
    hitPoints += 2;
  } else if (classEntry.name === "Strong" && conScore >= 13) {
    hitPoints += 1;
  }

  return hitPoints;
}

export function generateGroups(className: string, level: number, bonusGroups: number): string[] {
  let classEntry: CharacterClass = classes.filter((val) => val.name === className && val.level === level)[0];
  let groups: string[] = [];
  let remainingGroupCount: number = classEntry.groupCount + bonusGroups;

  // Generate species.
  if (Math.random() <= config.nonDefaultSpeciesChance) {
    groups.push(getRandomElement(specieses).name);
    remainingGroupCount--;
  }

  // Generate vocation.
  groups.push(getRandomElement(vocations));
  remainingGroupCount--;

  // Generate affiliations.
  for (let i = 0; i < remainingGroupCount; i++) {
    groups.push(getRandomUniqueElement(affiliations, groups));
  }

  return groups;
}

export function assignGroupsToAttributes(groups: string[], attributes: Attributes): Attributes {
  // Loop through groups.
  // Randomly select an attribute with fewer than 2 groups.
  // Assign it.
  for (const group in groups) {
    let randomAttribute = getRandomElement(["str", "dex", "con", "int", "wis", "cha"]);
    attributes[randomAttribute] = group;
  }

  return attributes;
}