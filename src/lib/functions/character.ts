import type { CharacterClass } from "../interfaces/characterClass";
import type { Attributes } from "../interfaces/attribute";

import { config } from "../config/config";
import { classes } from "../data/classes";
import { affiliations } from "../data/affiliations";
import { vocations } from "../data/vocations";
import { specieses } from "../data/specieses";
import { languages } from "../data/languages";
import { abilities } from "../data/abilities";
import { attunements } from "../data/attunements";
import { miracles } from "../data/miracles";
import { namesHumanPrefix, namesHumanPrimary, namesHumanSuffix, namesDwarfAdjective, namesDwarfNoun, namesElf } from "../data/names";

import { getRandomElement, getRandomUniqueElement, roll } from "./utils";

export class Character {
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
  languages: string[];
  abilities: string[];
  attunements: { index: number, name: string, isActive: boolean }[];
  miracles: { index: number, name: string, isActive: boolean }[];

  constructor(xp: number = 0) {
    this.xp = xp;
    this.classEntry = getRandomClass(this.xp);
    this.class = this.classEntry.name;
    this.level = this.classEntry.level;
    this.generateAttributeScores();
    this.generateHitPoints();
    this.generateGroups();
    this.generateClassAbilities();
    this.generateName();
    this.generateLanguages();
  }

  generateAttributeScores(): void {
    this.attributes = {
      str: {
        name: "Strength",
        score: null,
        groups: [],
      },
      dex: {
        name: "Dexterity",
        score: null,
        groups: [],
      },
      con: {
        name: "Constitution",
        score: null,
        groups: [],
      },
      int: {
        name: "Intelligence",
        score: null,
        groups: [],
      },
      wis: {
        name: "Wisdom",
        score: null,
        groups: [],
      },
      cha: {
        name: "Charisma",
        score: null,
        groups: [],
      },
    };
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
      // Select two random attributes. Species is the first group so we don't have
      // to worry about groups on other attributes, just selecting two different
      // attributes.
      let attribute1: string = getRandomAttribute();
      let attribute2: string = getRandomAttribute([attribute1]);
      this.attributes[attribute1].groups.push(this.species);
      this.attributes[attribute2].groups.push(this.species);
    } else {
      this.species = config.defaultSpecies;
    }

    // Generate vocation.
    this.vocation = getRandomElement(vocations);
    groups.push(this.vocation);
    if (this.class !== "Deft") {
      this.attributes[getRandomElement(this.getAvailableAttributes())].groups.push(this.vocation);
    }
    remainingGroupCount--;

    // Generate affiliations.
    for (let i = 0; i < remainingGroupCount; i++) {
      this.attributes[getRandomElement(this.getAvailableAttributes())].groups.push(getRandomUniqueElement(affiliations, groups))
      groups.push(getRandomUniqueElement(affiliations, groups));
    }
  }

  getAvailableAttributes(): string[] {
    let availableAttributes: string[] = [];
    if (this.attributes.str.groups.length < 2) availableAttributes.push("str");
    if (this.attributes.dex.groups.length < 2) availableAttributes.push("dex");
    if (this.attributes.con.groups.length < 2) availableAttributes.push("con");
    if (this.attributes.int.groups.length < 2) availableAttributes.push("int");
    if (this.attributes.wis.groups.length < 2) availableAttributes.push("wis");
    if (this.attributes.cha.groups.length < 2) availableAttributes.push("cha");

    return availableAttributes;
  }

  generateName(): void {
    let name: string = "";
    if (this.species === "Elf") {
      name = getRandomElement(namesElf);
    } else if (this.species === "Dwarf") {
      name = `${getRandomElement(namesDwarfAdjective)} ${getRandomElement(namesDwarfNoun)}`;
    } else {
      let prefix: string = "", suffix: string = "";
      if (Math.random() <= config.namePrefixChance) {
        prefix = `${getRandomElement(namesHumanPrefix)} `;
      }
      if (Math.random() <= config.nameSuffixChance) {
        suffix = ` ${getRandomElement(namesHumanSuffix)}`;
      }
      name = `${prefix}${getRandomElement(namesHumanPrimary)}${suffix}`;
    }

    this.name = name;
  }

  generateLanguages(): void {
    let selectedLanguages: string[] = specieses.filter((species) => species.name === this.species)[0].languages;
    
    if (this.attributes.int.score >= 13) {
      let bonusLanguage1: string = getRandomUniqueElement(languages, selectedLanguages);
      selectedLanguages = [...selectedLanguages, bonusLanguage1];
    }
    
    if (this.attributes.int.score >= 16) {
      let bonusLanguage2: string = getRandomUniqueElement(languages, selectedLanguages);
      selectedLanguages = [...selectedLanguages, bonusLanguage2];
    }

    this.languages = selectedLanguages;
  }

  generateClassAbilities(): void {
    if (this.class === "Strong") {
      let selectedAbilities: string[] = [];
      for (let i = 0; i < this.classEntry.slotCount; i++) {
        selectedAbilities = [...selectedAbilities, getRandomUniqueElement(abilities, selectedAbilities)]
      }
      this.abilities = selectedAbilities;
    } else if (this.class === "Deft") {
      let selectedAttunements: {index: number, name: string, isActive: boolean}[] = [];
      for (let i = 0; i < this.classEntry.slotCount; i++) {
        // Have 1 active and 1 inactive attunement per slot.
        selectedAttunements = [...selectedAttunements, {index: i, name: getRandomUniqueElement(attunements, selectedAttunements.map(attunement => attunement.name)), isActive: true}];
        selectedAttunements = [...selectedAttunements, {index: i, name: getRandomUniqueElement(attunements, selectedAttunements.map(attunement => attunement.name)), isActive: false}];
      }
      this.attunements = selectedAttunements;
    } else if (this.class === "Wise") {
      let selectedMiracles: {index: number, name: string, isActive: boolean}[] = [];
      for (let i = 0; i < this.classEntry.slotCount; i++) {
        if (i === 0) {
          // Level 1 slot has 1 active and 1 to 3 inactive miracles depending on wisdom score.
          selectedMiracles = [...selectedMiracles, {index: i, name: getRandomUniqueElement(miracles, selectedMiracles.map(miracle => miracle.name)), isActive: true}]
          selectedMiracles = [...selectedMiracles, {index: i, name: getRandomUniqueElement(miracles, selectedMiracles.map(miracle => miracle.name)), isActive: false}]
          if (this.attributes.wis.score >= 16) selectedMiracles = [...selectedMiracles, {index: i, name: getRandomUniqueElement(miracles, selectedMiracles.map(miracle => miracle.name)), isActive: false}]
          if (this.attributes.wis.score >= 13) selectedMiracles = [...selectedMiracles, {index: i, name: getRandomUniqueElement(miracles, selectedMiracles.map(miracle => miracle.name)), isActive: false}]
        } else {
          // Other slots have 1 active miracle and 1 inactive miracle.
          selectedMiracles = [...selectedMiracles, {index: i, name: getRandomUniqueElement(miracles, selectedMiracles.map(miracle => miracle.name)), isActive: true}]
          selectedMiracles = [...selectedMiracles, {index: i, name: getRandomUniqueElement(miracles, selectedMiracles.map(miracle => miracle.name)), isActive: false}]
        }
      }
      this.miracles = selectedMiracles;
    }
  }
}

function getRandomClass(xp: number = 0): CharacterClass {
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

function getRandomAttribute(exclude: string[] = null): string {
  let availableAttributes: string[] = ["str", "dex", "con", "int", "wis", "cha"];

  if (exclude !== null) {
    for (const toExclude of exclude) {
      let index: number = availableAttributes.indexOf(toExclude);
      if (index > -1) availableAttributes.splice(index, 1);
    }
  }

  return getRandomElement(availableAttributes);
}