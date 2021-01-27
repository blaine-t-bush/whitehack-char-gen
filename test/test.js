var expect = require('chai').expect;

const character = require('../dist/');
const diceTrialCount = 100;
const characterClasses = ['Deft']; //['Deft', 'Strong', 'Wise'];
const characterLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('Helper Functions', () => {
  describe('#d(6)', () => {
    it('should return number between 1 and 6 inclusive', () => {
      for (let trial = 0; trial < diceTrialCount; trial++) {
        const result = character.d(6);
        expect(result).to.be.a('number');
        expect(result).to.be.at.least(1);
        expect(result).to.be.at.most(6);
      }
    });
  });

  describe('#d(6, 3)', () => {
    it('should return number between 3 and 18 inclusive', () => {
      for (let trial = 0; trial < diceTrialCount; trial++) {
        const result = character.d(6, 3);
        expect(result).to.be.a('number');
        expect(result).to.be.at.least(3);
        expect(result).to.be.at.most(18);
      }
    });
  });

  describe('#d(20)', () => {
    it('should return number between 1 and 20 inclusive', () => {
      for (let trial = 0; trial < diceTrialCount; trial++) {
        const result = character.d(20);
        expect(result).to.be.a('number');
        expect(result).to.be.at.least(1);
        expect(result).to.be.at.most(20);
      }
    });
  });
});

describe('Base Character Class', () => {
  describe('#characterClassTableEntry()', () => {
    it('should return an object with class feature properties', () => {
      characterClasses.forEach(characterClass => {
        characterLevels.forEach(characterLevel => {
          let char = new character.Character(characterLevel, characterClass);
          let entry = char.characterClassTableEntry();
  
          expect(entry).to.be.a('object');

          expect(entry).to.have.property('characterClass');
          expect(entry.characterClass).to.be.a('string');
          expect(entry.characterClass).to.equal(characterClass);

          expect(entry).to.have.property('level');
          expect(entry.level).to.be.a('number');
          expect(entry.level).to.equal(characterLevel);

          expect(entry).to.have.property('xp');
          expect(entry.xp).to.be.a('number');
          expect(entry.xp).to.be.at.least(0);
          expect(entry.xp).to.be.at.most(640000);

          expect(entry).to.have.property('hitDice');
          expect(entry.hitDice).to.be.a('number');
          expect(entry.hitDice).to.be.at.least(1);
          expect(entry.hitDice).to.be.at.most(10);

          expect(entry).to.have.property('bonusHitPoints');
          expect(entry.bonusHitPoints).to.be.a('number');
          expect(entry.bonusHitPoints).to.be.at.least(0);
          expect(entry.bonusHitPoints).to.be.at.most(2);

          expect(entry).to.have.property('attackValue');
          expect(entry.attackValue).to.be.a('number');
          expect(entry.attackValue).to.be.at.least(10);
          expect(entry.attackValue).to.be.at.most(17);

          expect(entry).to.have.property('savingThrow');
          expect(entry.savingThrow).to.be.a('number');
          expect(entry.savingThrow).to.be.at.least(5);
          expect(entry.savingThrow).to.be.at.most(18);

          expect(entry).to.have.property('slots');
          expect(entry.slots).to.be.a('number');
          expect(entry.slots).to.be.at.least(1);
          expect(entry.slots).to.be.at.most(5);

          expect(entry).to.have.property('groups');
          expect(entry.groups).to.be.a('number');
          expect(entry.groups).to.be.at.least(2);
          expect(entry.groups).to.be.at.most(6);

          expect(entry).to.have.property('raises');
          expect(entry.raises).to.be.a('number');
          expect(entry.raises).to.be.at.least(0);
          expect(entry.raises).to.be.at.most(5);
        })
      })
    });
  });

  describe('#generateAttributes()', () => {
    it('should create a Character object with attributes between 3 and 18 inclusive', () => {
      characterClasses.forEach(characterClass => {
        characterLevels.forEach(characterLevel => {
          for (let trial = 0; trial < diceTrialCount; trial++) {
            let char = new character.Character(characterLevel, characterClass); // generateAttributes() is called in the constructor.
    
            expect(char.attributes.strength.score).to.be.a('number');
            expect(char.attributes.strength.score).to.be.at.least(3);
            
            expect(char.attributes.dexterity.score).to.be.a('number');
            expect(char.attributes.dexterity.score).to.be.at.least(3);
            
            expect(char.attributes.constitution.score).to.be.a('number');
            expect(char.attributes.constitution.score).to.be.at.least(3);
            
            expect(char.attributes.intelligence.score).to.be.a('number');
            expect(char.attributes.intelligence.score).to.be.at.least(3);
            
            expect(char.attributes.wisdom.score).to.be.a('number');
            expect(char.attributes.wisdom.score).to.be.at.least(3);
            
            expect(char.attributes.charisma.score).to.be.a('number');
            expect(char.attributes.charisma.score).to.be.at.least(3);

            if (char.level === 1) {
              expect(char.attributes.strength.score).to.be.at.most(18);
              expect(char.attributes.dexterity.score).to.be.at.most(18);
              expect(char.attributes.constitution.score).to.be.at.most(18);
              expect(char.attributes.intelligence.score).to.be.at.most(18);
              expect(char.attributes.wisdom.score).to.be.at.most(18);
              expect(char.attributes.charisma.score).to.be.at.most(18);
            } else {
              expect(char.attributes.strength.score).to.be.at.most(24);
              expect(char.attributes.dexterity.score).to.be.at.most(24);
              expect(char.attributes.constitution.score).to.be.at.most(24);
              expect(char.attributes.intelligence.score).to.be.at.most(24);
              expect(char.attributes.wisdom.score).to.be.at.most(24);
              expect(char.attributes.charisma.score).to.be.at.most(24);
            }
          }
        })
      })
    });
  });

  describe('#generateHitDice()', () => {
    it('should create a Character object with appropriate HD and bonus HP for class and level', () => {
      characterClasses.forEach(characterClass => {
        characterLevels.forEach(characterLevel => {
          let char = new character.Character(characterLevel, characterClass); // generateHitDice() is called in the constructor.
  
          expect(char.hitDice.base).to.be.a('number');
          expect(char.hitDice.base).to.be.at.least(1);
          expect(char.hitDice.base).to.be.at.most(10);
  
          expect(char.hitDice.bonusHitPoints).to.be.a('number');
          expect(char.hitDice.bonusHitPoints).to.be.at.least(0);
          expect(char.hitDice.bonusHitPoints).to.be.at.most(2);
        })
      })
    });
  });

  describe('#generateHitPoints()', () => {
    it('should create a Character object with appropriate HP for class and level', () => {
      characterClasses.forEach(characterClass => {
        characterLevels.forEach(characterLevel => {
          let char = new character.Character(characterLevel, characterClass); // generateHitPoints() is called in the constructor.
  
          expect(char.hitPoints).to.be.a('number');
          expect(char.hitPoints).to.be.at.least(1);
          expect(char.hitPoints).to.be.at.most(62);
        })
      })
    });
  });

  describe('#generateAttackValue()', () => {
    it('should create a Character object with appropriate attack value for class and level', () => {
      characterClasses.forEach(characterClass => {
        characterLevels.forEach(characterLevel => {
          let char = new character.Character(characterLevel, characterClass); // generateAttackValue() is called in the constructor.
  
          expect(char.attackValue).to.be.a('number');
          expect(char.attackValue).to.be.at.least(10);
          expect(char.attackValue).to.be.at.most(18); // Max AV in class table entries is 17, but Strong can get a +1 bonus for having strength of 13 or greater.
        })
      })
    });
  });

  describe('#generateSavingThrow()', () => {
    it('should create a Character object with appropriate saving throw for class and level', () => {
      characterClasses.forEach(characterClass => {
        characterLevels.forEach(characterLevel => {
          let char = new character.Character(characterLevel, characterClass); // generateSavingThrow() is called in the constructor.
  
          expect(char.savingThrow).to.be.a('number');
          expect(char.savingThrow).to.be.at.least(5);
          expect(char.savingThrow).to.be.at.most(18);
        })
      })
    });
  });

  describe('#generateGroupCount()', () => {
    it('should create a Character object with appropriate number of groups for class, level, and attribute scores', () => {
      characterClasses.forEach(characterClass => {
        characterLevels.forEach(characterLevel => {
          let char = new character.Character(characterLevel, characterClass); // generateGroupCount() is called in the constructor.
  
          expect(char.groupCount).to.be.a('object');

          expect(char.groupCount).to.have.property('base');
          expect(char.groupCount.base).to.be.a('number');
          expect(char.groupCount.base).to.be.at.least(2);
          expect(char.groupCount.base).to.be.at.most(6);

          expect(char.groupCount).to.have.property('bonus');
          expect(char.groupCount.bonus).to.be.a('number');
          expect(char.groupCount.bonus).to.be.at.least(0);
          expect(char.groupCount.bonus).to.be.at.most(6);
        })
      })
    });
  });

  describe('#generateSlotCount()', () => {
    it('should create a Character object with appropriate number of slots for class, level, and attribute scores', () => {
      characterClasses.forEach(characterClass => {
        characterLevels.forEach(characterLevel => {
          let char = new character.Character(characterLevel, characterClass); // generateSlotCount() is called in the constructor.
  
          expect(char.slotCount).to.be.a('object');

          expect(char.slotCount).to.have.property('base');
          expect(char.slotCount.base).to.be.a('number');
          expect(char.slotCount.base).to.be.at.least(1);
          expect(char.slotCount.base).to.be.at.most(5);

          expect(char.slotCount).to.have.property('inactive');
          if (characterClass == 'Deft' || characterClass === 'Wise') {
            expect(char.slotCount.inactive).to.be.a('number');
            expect(char.slotCount.inactive).to.be.at.least(1);
            expect(char.slotCount.inactive).to.be.at.most(5);
            expect(char.slotCount.inactive).to.equal(char.slotCount.base);
          } else {
            expect(char.slotCount.inactive).to.equal(null);
          }

          expect(char.slotCount).to.have.property('bonusInactive');
          if (characterClass === 'Wise') {
            expect(char.slotCount.bonusInactive).to.be.a('number');
            expect(char.slotCount.bonusInactive).to.be.at.least(0);
            expect(char.slotCount.bonusInactive).to.be.at.most(2);
          } else {
            expect(char.slotCount.bonusInactive).to.equal(null);
          }
        })
      })
    });
  });

  describe('#generateGroups()', () => {
    it('should create a Character object with appropriate groups for class, level, and attribute scores', () => {
      characterClasses.forEach(characterClass => {
        characterLevels.forEach(characterLevel => {
          let char = new character.Character(characterLevel, characterClass); // generateGroups() is called in the constructor.
  
          expect(char.groups).to.be.a('array');
          expect(char.groups).to.have.lengthOf(char.groupCount.base + char.groupCount.bonus);
          char.groups.forEach(group => {
            expect(group.name).to.be.a('string');
            expect(group.type).to.be.a('string');
            expect(group.type).to.be.oneOf(['Species', 'Vocation', 'Affiliation']);
            if (characterClass === 'Deft' && group.type === 'Vocation') {
              expect(group.attributes).to.equal(null);
            } else {
              expect(group.attributes).to.be.a('array');
              group.attributes.forEach(attribute => {
                expect(attribute).to.be.a('string');
                expect(attribute).to.be.oneOf(['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma']);
              })
            }
          })

          // Should have correct number of bonus groups.
          let bonusCount = 0;
          char.groups.forEach(group => {
            if (group.isBonus) {
              bonusCount++;
            }
          });
          expect(char.groupCount.bonus).to.equal(bonusCount);
        })
      })
    });
  });

  describe('#generateSlots()', () => {
    it('should create a Character object with appropriate slots for class, level, and attribute scores', () => {
      characterClasses.forEach(characterClass => {
        characterLevels.forEach(characterLevel => {
          let char = new character.Character(characterLevel, characterClass); // generateSlots() is called in the constructor.

          expect(char.slots).to.be.a('array');
          expect(char.slots).to.have.lengthOf(char.slotCount.base + char.slotCount.inactive + char.slotCount.bonusInactive);
          char.slots.forEach(slot => {
            expect(slot.name).to.be.a('string');
            expect(slot.type).to.be.a('string');
            expect(slot.type).to.be.oneOf(['Attunement', 'Ability', 'Miracle']);
            expect(slot.isActive).to.be.a('boolean');

            // Slot should be of type appropriate to class.
            if (characterClass === 'Deft') {
              expect(slot.type).to.equal('Attunement');
            } else if (characterClass === 'Strong') {
              expect(slot.type).to.equal('Ability');
            } else if (characterClass === 'Wise') {
              expect(slot.type).to.equal('Miracle');
            }
          })

          // No two slots hsould have the same name.
          // FIXME re-enable this after updating generateSlots().
          // let slotNames = [];
          // char.slots.forEach(slot => {
          //   slotNames.push(slot.name);
          // })
          // let slotNamesDistinct = [...new Set(slotNames)];
          // expect(slotNames).to.equal(slotNamesDistinct);

          // Number of active slots should be equal to slotCount.base
          // Number of inactive slots should be equal to slotCount.inactive + slotCount.bonusInactive.
          let activeCount = 0;
          let inactiveCount = 0;
          char.slots.forEach(slot => {
            if (slot.isActive) {
              activeCount++;
            } else {
              inactiveCount++;
            }
          })

          expect(activeCount).to.equal(char.slotCount.base);
          expect(inactiveCount).to.equal(char.slotCount.inactive + char.slotCount.bonusInactive);
        })
      })
    });
  });

  describe('#generateInventory()', () => {
    it('should create a Character object with an inventory array', () => {
      characterClasses.forEach(characterClass => {
        characterLevels.forEach(characterLevel => {
          let char = new character.Character(characterLevel, characterClass);

          // FIXME populate this test.
        });
      });
    });
  });

  describe('#generateWealth()', () => {
    it('should create a Character object with a currency object', () => {
      characterClasses.forEach(characterClass => {
        characterLevels.forEach(characterLevel => {
          let char = new character.Character(characterLevel, characterClass);

          // FIXME populate this test.
        });
      });
    });
  });

  describe('#generateName()', () => {
    it('should create a Character object with a name string', () => {
      characterClasses.forEach(characterClass => {
        characterLevels.forEach(characterLevel => {
          let char = new character.Character(characterLevel, characterClass);

          // FIXME populate this test.
        });
      });
    });
  });

  describe('#generateDescriptors()', () => {
    it('should create a Character object with a descriptor array', () => {
      characterClasses.forEach(characterClass => {
        characterLevels.forEach(characterLevel => {
          let char = new character.Character(characterLevel, characterClass);

          // FIXME populate this test.
        });
      });
    });
  });

  describe('#generateLanguages()', () => {
    it('should create a Character object with a language array', () => {
      characterClasses.forEach(characterClass => {
        characterLevels.forEach(characterLevel => {
          let char = new character.Character(characterLevel, characterClass);

          // FIXME populate this test.
        });
      });
    });
  });
});

// FIXME add tests for leveling