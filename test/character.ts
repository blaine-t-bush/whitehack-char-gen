import { armors } from '../src/lib/data/armors';
import { weapons } from '../src/lib/data/weapons';
import { Character } from '../src/lib/functions/character';

const TEST_COUNT = 1000;

test('Character.xp', () => {
  expect((new Character(0)).xp).toBe(0);
  expect((new Character(10)).xp).toBe(10);
  expect((new Character(150)).xp).toBe(150);
  expect((new Character(15000)).xp).toBe(15000);
})

test('Character.attributes[attr].name', () => {
  for (let i = 0; i < TEST_COUNT; i++) {
    let character: Character = new Character(0);
    expect(character.attributes.str.name).toBe("Strength");
    expect(character.attributes.dex.name).toBe("Dexterity");
    expect(character.attributes.con.name).toBe("Constitution");
    expect(character.attributes.int.name).toBe("Intelligence");
    expect(character.attributes.wis.name).toBe("Wisdom");
    expect(character.attributes.cha.name).toBe("Charisma");
  }
})

test('Character.attributes[attr].score', () => {
  for (let i = 0; i < TEST_COUNT; i++) {
    let character: Character = new Character(0);
    expect(character.attributes.str.score).toBeLessThanOrEqual(18);
    expect(character.attributes.str.score).toBeGreaterThanOrEqual(3);
    expect(character.attributes.dex.score).toBeLessThanOrEqual(18);
    expect(character.attributes.dex.score).toBeGreaterThanOrEqual(3);
    expect(character.attributes.con.score).toBeLessThanOrEqual(18);
    expect(character.attributes.con.score).toBeGreaterThanOrEqual(3);
    expect(character.attributes.int.score).toBeLessThanOrEqual(18);
    expect(character.attributes.int.score).toBeGreaterThanOrEqual(3);
    expect(character.attributes.wis.score).toBeLessThanOrEqual(18);
    expect(character.attributes.wis.score).toBeGreaterThanOrEqual(3);
    expect(character.attributes.cha.score).toBeLessThanOrEqual(18);
    expect(character.attributes.cha.score).toBeGreaterThanOrEqual(3);
  }
})

test('Character.attributes[attr].groups', () => {
  for (let i = 0; i < TEST_COUNT; i++) {
    let character: Character = new Character(0);
    expect(character.attributes.str.groups.length).toBeGreaterThanOrEqual(0);
    expect(character.attributes.str.groups.length).toBeLessThanOrEqual(2);
    expect(character.attributes.dex.groups.length).toBeGreaterThanOrEqual(0);
    expect(character.attributes.dex.groups.length).toBeLessThanOrEqual(2);
    expect(character.attributes.con.groups.length).toBeGreaterThanOrEqual(0);
    expect(character.attributes.con.groups.length).toBeLessThanOrEqual(2);
    expect(character.attributes.int.groups.length).toBeGreaterThanOrEqual(0);
    expect(character.attributes.int.groups.length).toBeLessThanOrEqual(2);
    expect(character.attributes.wis.groups.length).toBeGreaterThanOrEqual(0);
    expect(character.attributes.wis.groups.length).toBeLessThanOrEqual(2);
    expect(character.attributes.cha.groups.length).toBeGreaterThanOrEqual(0);
    expect(character.attributes.cha.groups.length).toBeLessThanOrEqual(2);
  }
})

test('Character.vocation', () => {
  for (let i = 0; i < TEST_COUNT; i++) {
    let character: Character = new Character(0);
    expect(character.vocation.length).toBeGreaterThan(0);
  }
})

test('Character.species', () => {
  for (let i = 0; i < TEST_COUNT; i++) {
    let character: Character = new Character(0);
    expect(character.species.length).toBeGreaterThan(0);
  }
})

test('Character.name', () => {
  for (let i = 0; i < TEST_COUNT; i++) {
    let character: Character = new Character(0);
    expect(character.name.length).toBeGreaterThan(0);
  }
})

test('Character.languages', () => {
  for (let i = 0; i < TEST_COUNT; i++) {
    let character: Character = new Character(0);
    expect(character.languages.length).toBeGreaterThanOrEqual(1);
    expect(character.languages.length).toBeLessThanOrEqual(4);
    expect(character.languages).toContain("Low Imperial");
  }
})

test('Character[abilities|attunements|miracles]', () => {
  for (let i = 0; i < TEST_COUNT; i++) {
    let character: Character = new Character(0);
    if (character.class === "Strong") {
      expect(character.abilities.length).toBe(1);
    } else if (character.class === "Deft") {
      expect(character.attunements.length).toBe(2);
    } else if (character.class === "Wise") {
      if (character.attributes.wis.score >= 16) expect(character.miracles.length).toBe(4);
      else if (character.attributes.wis.score >= 13) expect(character.miracles.length).toBe(3);
      else expect(character.miracles.length).toBe(2);
    }
  }
})

test('Character.coins', () => {
  for (let i = 0; i < TEST_COUNT; i++) {
    let character: Character = new Character(0);
    expect(character.coins).toBeGreaterThanOrEqual(0);
    expect(character.coins).toBeLessThanOrEqual(180);
  }
})

test('Character.weapons', () => {
  const weaponNames = weapons.map(weapon => weapon.name);
  for (let i = 0; i < TEST_COUNT; i++) {
    let character: Character = new Character(0);
    expect(character.weapons.length).toBe(2);
    for (const weapon of character.weapons) {
      expect(weaponNames).toContain(weapon.name);
      expect(character.class === "Strong" || !weapon.special.includes("Two handed")).toBeTruthy();
    }
  }
})

test('Character.armor', () => {
  const armorNames = armors.map(armor => armor.name);
  for (let i = 0; i < TEST_COUNT; i++) {
    let character: Character = new Character(0);
    if (character.armor !== null) {
      expect(armorNames).toContain(character.armor.name);
      expect(character.armor.allowedClasses).toContain(character.class);
      expect(character.armor.armorClass).toBeLessThanOrEqual(6);
      expect(character.armor.armorClass).toBeGreaterThanOrEqual(1);
      expect(character.armorClass).toBe(character.armor.armorClass);
    } else {
      expect(character.armorClass).toBe(0);
    }
  }
})

test('Character.shield', () => {
  for (let i = 0; i < TEST_COUNT; i++) {
    let character: Character = new Character(0);
    if (character.shield !== null) {
      expect(character.class).toBe("Strong");
    }
  }
})

test('Character.inventory', () => {
  for (let i = 0; i < TEST_COUNT; i++) {
    let character: Character = new Character(0);
    expect(character.inventory.length).toBeGreaterThan(0);
    expect(character.inventory.length).toBeLessThanOrEqual(15);
  }
})