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
  level: number;
  class: string;
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
    let classEntry: CharacterClass = getRandomClass(this.xp);
    this.class = classEntry.name;
    this.level = classEntry.level;
    this.generateAttributeScores();
    this.generateHitPoints();
  }

  generateAttributeScores(): void {
    this.attributes.str.score = roll(6, 3);
    this.attributes.dex.score = roll(6, 3);
    this.attributes.con.score = roll(6, 3);
    this.attributes.int.score = roll(6, 3);
    this.attributes.wis.score = roll(6, 3);
    this.attributes.cha.score = roll(6, 3);
  }

  generateHitPoints(): void {
    // Hit points have history, so we must simulate rolls starting from level 1.
    let hitPoints: number, tempHitPoints: number;
    for (let level = 1; level <= this.level; level++) {
      // Optional house rule: max HP at level 1.
      if (level === 1 && config.maxHitPointsAtFirstLevel) {
        tempHitPoints = this.classEntry.hitDice * 6 + this.classEntry.bonusHitPoints
      } else {
        tempHitPoints = roll(6, this.classEntry.hitDice) + this.classEntry.bonusHitPoints
      }

      // Optional house rule: HP increases by at least 1 every level.
      if (config.increaseHitPointsEveryLevel && tempHitPoints <= hitPoints) {
        tempHitPoints = hitPoints + 1;
      } else if (tempHitPoints < hitPoints) {
        tempHitPoints = hitPoints;
      }

      hitPoints = tempHitPoints;
    }

    // Strong get bonus HP for high con score.
    if (this.class === "Strong" && this.attributes.con.score >= 16) {
      hitPoints += 2;
    } else if (this.class === "Strong" && this.attributes.con.score >= 13) {
      hitPoints += 1;
    }

    this.hitPoints = hitPoints;
  }
  
  generateGroups(): void {
    let groups: string[] = [];

    // Determine number of groups based on class/level and attribute scores.
    let bonusGroupCount: number = 0;
    if (this.attributes.str.score <= 5) bonusGroupCount++
    if (this.attributes.dex.score <= 5) bonusGroupCount++
    if (this.attributes.con.score <= 5) bonusGroupCount++
    if (this.attributes.int.score <= 5) bonusGroupCount++
    if (this.attributes.wis.score <= 5) bonusGroupCount++
    if (this.attributes.cha.score <= 5) bonusGroupCount++
    let remainingGroupCount: number = this.classEntry.groupCount + bonusGroupCount;

    // Generate species.
    if (Math.random() <= config.nonDefaultSpeciesChance) {
      this.species = getRandomElement(specieses).name;
      groups.push(this.species);
      remainingGroupCount--;
    } else {
      this.species = config.defaultSpecies;
    }

    // Generate vocation.
    this.vocation = getRandomElement(vocations);
    if (this.class !== "Deft") {
      groups.push(getRandomElement(vocations));
    }
    remainingGroupCount--;

    // Generate affiliations.
    for (let i = 0; i < remainingGroupCount; i++) {
      groups.push(getRandomUniqueElement(affiliations, groups));
    }
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