import { generateAttributeScores, generateGroups, generateHitPoints, getRandomClass } from '../src/lib/functions/character';

const TEST_COUNT = 100;

test('getRandomClass()', () => {
  expect(getRandomClass(0).xp).toBe(0);
  expect(getRandomClass(1500).xp).toBeLessThanOrEqual(1500);
  expect(getRandomClass(1501).xp).toBeLessThanOrEqual(1500);
  expect(getRandomClass(2500).level).toBeGreaterThanOrEqual(2);
  expect(getRandomClass(2501).level).toBeGreaterThanOrEqual(2);
})

test('generateAttributeScores()', () => {
  for (let i = 0; i < TEST_COUNT; i++) {
    let attributes = generateAttributeScores();
    expect(attributes.str.name).toBe("Strength");
    expect(attributes.str.score).toBeLessThanOrEqual(18);
    expect(attributes.str.score).toBeGreaterThanOrEqual(3);
    expect(attributes.str.groups.length).toBe(0);
    expect(attributes.dex.name).toBe("Dexterity");
    expect(attributes.dex.score).toBeLessThanOrEqual(18);
    expect(attributes.dex.score).toBeGreaterThanOrEqual(3);
    expect(attributes.dex.groups.length).toBe(0);
    expect(attributes.con.name).toBe("Constitution");
    expect(attributes.con.score).toBeLessThanOrEqual(18);
    expect(attributes.con.score).toBeGreaterThanOrEqual(3);
    expect(attributes.con.groups.length).toBe(0);
    expect(attributes.int.name).toBe("Intelligence");
    expect(attributes.int.score).toBeLessThanOrEqual(18);
    expect(attributes.int.score).toBeGreaterThanOrEqual(3);
    expect(attributes.int.groups.length).toBe(0);
    expect(attributes.wis.name).toBe("Wisdom");
    expect(attributes.wis.score).toBeLessThanOrEqual(18);
    expect(attributes.wis.score).toBeGreaterThanOrEqual(3);
    expect(attributes.wis.groups.length).toBe(0);
    expect(attributes.cha.name).toBe("Charisma");
    expect(attributes.cha.score).toBeLessThanOrEqual(18);
    expect(attributes.cha.score).toBeGreaterThanOrEqual(3);
    expect(attributes.cha.groups.length).toBe(0);
  }
})

test('generateHitPoints()', () => {
  for (let i = 0; i < TEST_COUNT; i++) {
    expect(generateHitPoints("Deft", 1, 10)).toBe(6);
    expect(generateHitPoints("Wise", 1, 10)).toBe(7);
    expect(generateHitPoints("Strong", 1, 10)).toBe(8);
    expect(generateHitPoints("Strong", 1, 13)).toBe(9);
    expect(generateHitPoints("Strong", 1, 16)).toBe(10);

    expect(generateHitPoints("Deft", 2, 10)).toBeGreaterThan(6);
    expect(generateHitPoints("Deft", 2, 10)).toBeLessThanOrEqual(12);
    expect(generateHitPoints("Wise", 2, 10)).toBeGreaterThan(7);
    expect(generateHitPoints("Wise", 2, 10)).toBeLessThanOrEqual(13);
    expect(generateHitPoints("Strong", 2, 10)).toBeGreaterThan(8);
    expect(generateHitPoints("Strong", 2, 10)).toBeLessThanOrEqual(14);
    expect(generateHitPoints("Strong", 2, 13)).toBeGreaterThan(9);
    expect(generateHitPoints("Strong", 2, 13)).toBeLessThanOrEqual(15);
    expect(generateHitPoints("Strong", 2, 16)).toBeGreaterThan(10);
    expect(generateHitPoints("Strong", 2, 16)).toBeLessThanOrEqual(16);
  }
})

test('generateGroups()', () => {
  for (let i = 0; i < TEST_COUNT; i++) {
    expect(generateGroups("Deft", 1, 0).length).toBe(2);
    expect(generateGroups("Deft", 1, 1).length).toBe(3);
    expect(generateGroups("Deft", 1, 2).length).toBe(4);
    expect(generateGroups("Deft", 1, 3).length).toBe(5);
    expect(generateGroups("Deft", 1, 4).length).toBe(6);
    expect(generateGroups("Deft", 1, 5).length).toBe(7);
    expect(generateGroups("Deft", 1, 6).length).toBe(8);
    expect(generateGroups("Deft", 2, 0).length).toBe(2);
    expect(generateGroups("Deft", 3, 0).length).toBe(3);
    expect(generateGroups("Deft", 4, 0).length).toBe(3);
    expect(generateGroups("Deft", 5, 0).length).toBe(4);
    expect(generateGroups("Deft", 6, 0).length).toBe(4);
    expect(generateGroups("Deft", 7, 0).length).toBe(5);
    expect(generateGroups("Deft", 8, 0).length).toBe(5);
    expect(generateGroups("Deft", 9, 0).length).toBe(6);
    expect(generateGroups("Deft", 10, 0).length).toBe(6);
    
    expect(generateGroups("Strong", 1, 0).length).toBe(2);
    expect(generateGroups("Strong", 1, 1).length).toBe(3);
    expect(generateGroups("Strong", 1, 2).length).toBe(4);
    expect(generateGroups("Strong", 1, 3).length).toBe(5);
    expect(generateGroups("Strong", 1, 4).length).toBe(6);
    expect(generateGroups("Strong", 1, 5).length).toBe(7);
    expect(generateGroups("Strong", 1, 6).length).toBe(8);
    expect(generateGroups("Strong", 2, 0).length).toBe(2);
    expect(generateGroups("Strong", 3, 0).length).toBe(2);
    expect(generateGroups("Strong", 4, 0).length).toBe(3);
    expect(generateGroups("Strong", 5, 0).length).toBe(3);
    expect(generateGroups("Strong", 6, 0).length).toBe(3);
    expect(generateGroups("Strong", 7, 0).length).toBe(4);
    expect(generateGroups("Strong", 8, 0).length).toBe(4);
    expect(generateGroups("Strong", 9, 0).length).toBe(4);
    expect(generateGroups("Strong", 10, 0).length).toBe(5);
    
    expect(generateGroups("Wise", 1, 0).length).toBe(2);
    expect(generateGroups("Wise", 1, 1).length).toBe(3);
    expect(generateGroups("Wise", 1, 2).length).toBe(4);
    expect(generateGroups("Wise", 1, 3).length).toBe(5);
    expect(generateGroups("Wise", 1, 4).length).toBe(6);
    expect(generateGroups("Wise", 1, 5).length).toBe(7);
    expect(generateGroups("Wise", 1, 6).length).toBe(8);
    expect(generateGroups("Wise", 2, 0).length).toBe(2);
    expect(generateGroups("Wise", 3, 0).length).toBe(2);
    expect(generateGroups("Wise", 4, 0).length).toBe(3);
    expect(generateGroups("Wise", 5, 0).length).toBe(3);
    expect(generateGroups("Wise", 6, 0).length).toBe(3);
    expect(generateGroups("Wise", 7, 0).length).toBe(4);
    expect(generateGroups("Wise", 8, 0).length).toBe(4);
    expect(generateGroups("Wise", 9, 0).length).toBe(4);
    expect(generateGroups("Wise", 10, 0).length).toBe(5);
  }
})