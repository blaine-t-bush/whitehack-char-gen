<script lang="ts">
  import { Character } from "../functions/character";
  import CharacterVitals from "./CharacterVitals.svelte";
  import CharacterAttributes from "./CharacterAttributes.svelte";
  import CharacterExtras from "./CharacterExtras.svelte";

  let character = new Character(0);

  function generateCharacter() {
    character = new Character(0);
  }

  function formatInventory(coins, inventory): string[] {
    let formattedInventory: string[] = [];
    for (const item of inventory) {
      let slots: number;
      if (item.slots < 1) {
        slots = 1;
      } else {
        slots = item.slots;
      }

      for (let i = 0; i < slots; i++) {
        if (i === 0) {
          formattedInventory.push(item.name);
        } else {
          formattedInventory.push('"');
        }
      }
    }

    return [`${coins} coins`, ...formattedInventory];
  }

  function formatAbilities(character): string[] {
    let formattedAbilities: string[] = [];
    if (character.class === "Strong") {
      formattedAbilities = character.abilities;
    } else if (character.class === "Deft") {
      for (const attunement of character.attunements) {
        if (attunement.isActive) {
          formattedAbilities.push(`${attunement.name}*`);
        } else {
          formattedAbilities.push(attunement.name);
        }
      }
    } else if (character.class === "Wise") {
      for (const miracle of character.miracles) {
        if (miracle.isActive) {
          formattedAbilities.push(`${miracle.name}*`);
        } else {
          formattedAbilities.push(miracle.name);
        }
      }
    }

    return formattedAbilities;
  }
</script>

<div class="wrapper">
  <div class="subwrapper">
    <div class="container">
      <div class="form form-name">
        <div class="form-entry">{character.name}</div>
        <div class="form-label">Name</div>
      </div>

      <div class="form form-reroll">
        <button on:click={generateCharacter}>re-roll</button>
      </div>

      <div class="form form-class">
        <div class="form-entry">{character.class}</div>
        <div class="form-label">Class</div>
      </div>

      <div class="form form-species">
        <div class="form-entry">{character.species}</div>
        <div class="form-label">Species</div>
      </div>

      <div class="form form-vocation">
        <div class="form-entry">{character.vocation}</div>
        <div class="form-label">Vocation</div>
      </div>

      <div class="form form-xp">
        <div class="form-entry">{character.xp}</div>
        <div class="form-label">XP</div>
      </div>

      <div class="form form-level">
        <div class="form-entry">{character.level}</div>
        <div class="form-label">LVL</div>
      </div>
    </div>

    <div class="subsubwrapper">
      <div class="vitals">
        <CharacterVitals
          hitPoints={character.hitPoints}
          attackValue={character.attackValue}
          armorClass={character.armorClass}
          savingThrow={character.savingThrow}
          movementRate={character.movementRate}
        />
      </div>

      <div class="attributes">
        <CharacterAttributes attributes={character.attributes} />
      </div>
    </div>

    <div class="extras">
      <CharacterExtras title={"Slots"} list={formatAbilities(character)} />
    </div>

    <div class="extras">
      <CharacterExtras
        title={"Appearance, Personality, & Background"}
        list={character.descriptors}
      />
    </div>

    <div class="extras">
      <CharacterExtras title={"Languages"} list={character.languages} />
    </div>

    <div class="extras">
      <CharacterExtras
        title={"Inventory"}
        list={formatInventory(character.coins, character.inventory)}
      />
    </div>
  </div>
</div>

<style lang="scss">
  .wrapper {
    background-color: #f0e7dc;
    min-height: 100vh;
    width: 100vw;

    @media (max-width: 760px) {
      background-clip: content-box;
      background-image: url("/img/sheet_background.jpg");
      background-size: cover;
    }

    .subwrapper {
      box-sizing: border-box;
      margin: auto;
      max-width: 760px;
      position: relative;
      width: 100%;

      background-clip: content-box;
      background-image: url("/img/sheet_background.jpg");
      background-size: cover;
      border: 30px solid;
      border-image-source: url("/img/sheet_border.png");
      border-image-slice: 60;
      border-image-width: 4;
      border-image-repeat: round;

      @media (max-width: 760px) {
        background-image: none;
        border: none;
        min-height: 100vh;
        padding: 0.5rem;
      }

      .subsubwrapper {
        display: flex;
        flex-direction: row;
        margin-top: 25px;

        .vitals {
          margin-right: 25px;
        }

        @media (max-width: 580px) {
          flex-direction: column;

          .vitals {
            margin-right: 0;
            margin-top: 0;
          }

          .attributes {
            margin-top: 25px;
          }
        }
      }

      .extras {
        margin-top: 25px;
      }
    }
  }

  .container {
    column-gap: 15px;
    display: grid;
    row-gap: 15px;

    grid-template: repeat(2, 1fr) / repeat(10, 1fr);
    @media (max-width: 580px) {
      grid-template: repeat(3, 1fr) / repeat(10, 1fr);
    }

    .form {
      display: grid;
      grid-template: repeat(2, 1fr) / 1fr;
      overflow: hidden;

      &-name {
        grid-column: 1 / span 8;
        grid-row: 1;
      }

      &-reroll {
        grid-column: 9 / span 2;
        grid-row: 1;
      }

      &-class {
        grid-column: 1 / span 2;
        grid-row: 2;
        @media (max-width: 580px) {
          grid-column: 1 / span 3;
        }
      }

      &-species {
        grid-column: 3 / span 2;
        grid-row: 2;
        @media (max-width: 580px) {
          grid-column: 4 / span 3;
        }
      }

      &-vocation {
        grid-column: 5 / span 4;
        grid-row: 2;
        @media (max-width: 580px) {
          grid-column: 1 / span 10;
          grid-row: 3;
        }
      }

      &-xp {
        grid-column: 9 / span 1;
        grid-row: 2;
        @media (max-width: 580px) {
          grid-column: 7 / span 2;
        }
      }

      &-level {
        grid-column: 10 / span 1;
        grid-row: 2;
        @media (max-width: 580px) {
          grid-column: 9 / span 2;
        }
      }

      &-entry {
        box-sizing: border-box;
        font-family: "Homemade Apple", sans-serif;
        font-size: 1rem;
        line-height: 2rem;
        height: 1.5rem;
        padding: 0 0.5rem;
      }

      &-label {
        border-top: 1px solid black;
        font-family: "Courier New", Courier, monospace;
        font-size: 0.8rem;
        line-height: 1rem;
        height: 1rem;
        text-transform: uppercase;
      }

      button {
        border: 1px solid black;
        font-family: "Courier New", Courier, monospace;
        grid-row: 1 / span 2;
      }
    }
  }
</style>
