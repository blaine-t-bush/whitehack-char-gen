import type { Armor } from "../interfaces/armor";

const noneArmor: Armor = {
  name: null,
  armorClass: 0,
  cost: 0,
  allowedClasses: ["Strong", "Deft", "wise"]
};

const armors: Armor[] = [
  {
    name: "Cloth",
    armorClass: 1,
    cost: 10,
    allowedClasses: ["Strong", "Deft", "Wise"],
  },
  {
    name: "Leather",
    armorClass: 2,
    cost: 15,
    allowedClasses: ["Strong", "Deft", "Wise"],
  },
  {
    name: "Studded Leather",
    armorClass: 3,
    cost: 20,
    allowedClasses: ["Strong", "Deft"],
  },
  {
    name: "Chainmail",
    armorClass: 4,
    cost: 30,
    allowedClasses: ["Strong"],
  },
  {
    name: "Scalemail",
    armorClass: 5,
    cost: 40,
    allowedClasses: ["Strong"],
  },
  {
    name: "Full Plate",
    armorClass: 6,
    cost: 50,
    allowedClasses: ["Strong"],
  },
];

const shield: Armor = {
  name: "Shield",
  armorClass: 1,
  cost: 5,
  allowedClasses: ["Strong"]
};

const helmet: Armor = {
  name: "Helmet",
  armorClass: 0,
  cost: 10,
  allowedClasses: ["Strong", "Deft", "Wise"],
}

export { noneArmor, armors, shield, helmet };