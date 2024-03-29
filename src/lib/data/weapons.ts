import type { Weapon } from "../interfaces/weapon";

const weapons: Weapon[] = [
  {
    name: "Axe",
    damage: "1d6+1",
    weight: "R",
    range: null,
    rateOfFire: null,
    special: [],
    cost: 10,
  },
  {
    name: "Sword",
    damage: "1d6+1",
    weight: "R",
    range: null,
    rateOfFire: null,
    special: [],
    cost: 10,
  },
  {
    name: "Club",
    damage: "1d6-2",
    weight: "M",
    range: null,
    rateOfFire: null,
    special: ["Knock-out", "Improvised"],
    cost: 0,
  },
  {
    name: "Crossbow",
    damage: "1d6+1",
    weight: "H",
    range: 70,
    rateOfFire: "1/2",
    special: ["Two handed"],
    cost: 30,
  },
  {
    name: "Dagger",
    damage: "1d6-2",
    weight: "M",
    range: 15,
    rateOfFire: "1",
    special: [],
    cost: 3,
  },
  {
    name: "Darts",
    damage: "1",
    weight: "N",
    range: 20,
    rateOfFire: "3",
    special: [],
    cost: 1,
  },
  {
    name: "Flail",
    damage: "1d6",
    weight: "R",
    range: null,
    rateOfFire: null,
    special: ["Ignore shield AC"],
    cost: 8,
  },
  {
    name: "Great Axe",
    damage: "1d6+2",
    weight: "H",
    range: null,
    rateOfFire: null,
    special: ["Two handed"],
    cost: 15,
  },
  {
    name: "Great Sword",
    damage: "1d6+2",
    weight: "H",
    range: null,
    rateOfFire: null,
    special: ["Two Handed"],
    cost: 15,
  },
  {
    name: "Polearm",
    damage: "1d6+1",
    weight: "H",
    range: null,
    rateOfFire: null,
    special: ["Reach"],
    cost: 10,
  },
  {
    name: "Javelin",
    damage: "1d6",
    weight: "M",
    range: 40,
    rateOfFire: "1",
    special: ["d6-2 damage in melee"],
    cost: 2,
  },
  {
    name: "Longbow",
    damage: "1d6",
    weight: "R",
    range: 70,
    rateOfFire: "1",
    special: ["Two handed"],
    cost: 40,
  },
  {
    name: "Mace",
    damage: "1d6",
    weight: "R",
    range: null,
    rateOfFire: null,
    special: ["+1 AV vs. metal armor"],
    cost: 5,
  },
  {
    name: "Warhammer",
    damage: "1d6",
    weight: "R",
    range: null,
    rateOfFire: null,
    special: ["+1 AV vs. metal armor"],
    cost: 5,
  },
  {
    name: "Morning Star",
    damage: "1d6",
    weight: "R",
    range: null,
    rateOfFire: null,
    special: ["+1 AV vs. metal armor", "x3 crit damage"],
    cost: 8,
  },
  {
    name: "Musket",
    damage: "1d6+2",
    weight: "H",
    range: 30,
    rateOfFire: "1/4",
    special: ["Two handed"],
    cost: 150,
  },
  {
    name: "Pistol",
    damage: "1d6+1",
    weight: "R",
    range: 20,
    rateOfFire: "1/3",
    special: [],
    cost: 100,
  },
  {
    name: "Quarterstaff",
    damage: "1d6-1",
    weight: "R",
    range: null,
    rateOfFire: null,
    special: ["Two handed", "Reach"],
    cost: 1,
  },
  {
    name: "Scimitar",
    damage: "1d6",
    weight: "R",
    range: null,
    rateOfFire: null,
    special: ["+1 AV while riding"],
    cost: 8,
  },
  {
    name: "Shortbow",
    damage: "1d6-1",
    weight: "R",
    range: 50,
    rateOfFire: "1",
    special: ["Two handed", "Use mounted"],
    cost: 25,
  },
  {
    name: "Shortsword",
    damage: "1d6-1",
    weight: "M",
    range: null,
    rateOfFire: null,
    special: [],
    cost: 8,
  },
  {
    name: "Sling",
    damage: "1d6-2",
    weight: "N",
    range: 30,
    rateOfFire: "1",
    special: ["Use with regular stones"],
    cost: 2,
  },
  {
    name: "Spear",
    damage: "1d6",
    weight: "R",
    range: null,
    rateOfFire: null,
    special: ["Reach"],
    cost: 2,
  },
  {
    name: "Throwing Knife",
    damage: "1d6-2",
    weight: "M",
    range: 25,
    rateOfFire: "1",
    special: ["-1 AV in melee"],
    cost: 2,
  },
  {
    name: "Throwing Axe",
    damage: "1d6-2",
    weight: "M",
    range: 25,
    rateOfFire: "1",
    special: ["-1 AV in melee"],
    cost: 2,
  },
];

export { weapons };