interface CharacterClass {
  name: string;
  level: number;
  xp: number;
  hitDice: number;
  bonusHitPoints: number;
  attackValue: number;
  savingThrow: number;
  slotCount: number;
  groupCount: number;
  raiseCount: number;
}

export type { CharacterClass };