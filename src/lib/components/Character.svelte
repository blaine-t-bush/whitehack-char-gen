<script lang="ts">
  import { Character } from "../functions/character";

  let character = new Character(0);

  function generateCharacter() {
    character = new Character(0);
  }
</script>

<div class="wrapper">
  <div class="character-container">
    <div class="character">
      <div class="top-row">
        <div class="character-name handwritten">
          {character.name}
        </div>

        <div class="character-name-form typed">NAME</div>

        <button class="character-buttons-generate" on:click={generateCharacter}>
          re-roll!
        </button>
      </div>

      <div class="character-summary-container">
        <div class="character-summary-container-sub characterclass">
          <div class="character-summary handwritten">
            {character.class}
          </div>

          <div class="character-summary-form typed">CLASS</div>
        </div>

        <div class="character-summary-container-sub characterspecies">
          <div class="character-summary handwritten">
            {character.species}
          </div>

          <div class="character-summary-form typed">SPECIES</div>
        </div>

        <div class="character-summary-container-sub charactervocation">
          <div class="character-summary handwritten">
            {character.vocation}
          </div>

          <div class="character-summary-form typed">VOCATION</div>
        </div>

        <div class="character-summary-container-sub characterxp">
          <div class="character-summary handwritten">
            {character.xp}
          </div>

          <div class="character-summary-form typed">XP</div>
        </div>

        <div class="character-summary-container-sub characterlevel">
          <div class="character-summary handwritten">
            {character.level}
          </div>

          <div class="character-summary-form typed">LVL</div>
        </div>
      </div>

      <div class="character-vitals">
        <div class="character-vitals-label label-1 typed">HP</div>
        <div class="character-vitals-label label-2 typed">AV</div>
        <div class="character-vitals-label label-3 typed">ST</div>
        <div class="character-vitals-label label-4 typed">AC</div>
        <div class="character-vitals-label label-5 typed">MV</div>
        <div class="character-vitals-value value-1 handwritten">
          {character.hitPoints}
        </div>
        <div class="character-vitals-value value-2 handwritten">
          {character.attackValue}
        </div>
        <div class="character-vitals-value value-3 handwritten">
          {character.savingThrow}
        </div>
        <div class="character-vitals-value value-4 handwritten">
          {character.armorClass}
        </div>
        <div class="character-vitals-value value-5 handwritten">30</div>
      </div>

      <div class="character-attributes">
        <div class="character-attributes-label label-1 typed">STR</div>
        <div class="character-attributes-value value-1 handwritten">
          {character.attributes.str.score}
        </div>
        <div class="character-attributes-groups groups-1 handwritten">
          {#each character.attributes.str.groups as group, index}
            <span>
              {#if character.attributes.str.groups.length > 1 && index !== character.attributes.str.groups.length - 1}
                {group},
              {:else}
                {group}
              {/if}
            </span>
          {/each}
        </div>

        <div class="character-attributes-label label-2 typed">DEX</div>
        <div class="character-attributes-value value-2 handwritten">
          {character.attributes.dex.score}
        </div>
        <div class="character-attributes-groups groups-2 handwritten">
          {#each character.attributes.dex.groups as group, index}
            <span>
              {#if character.attributes.dex.groups.length > 1 && index !== character.attributes.dex.groups.length - 1}
                {group},
              {:else}
                {group}
              {/if}
            </span>
          {/each}
        </div>

        <div class="character-attributes-label label-3 typed">CON</div>
        <div class="character-attributes-value value-3 handwritten">
          {character.attributes.con.score}
        </div>
        <div class="character-attributes-groups groups-3 handwritten">
          {#each character.attributes.con.groups as group, index}
            <span>
              {#if character.attributes.con.groups.length > 1 && index !== character.attributes.con.groups.length - 1}
                {group},
              {:else}
                {group}
              {/if}
            </span>
          {/each}
        </div>

        <div class="character-attributes-label label-4 typed">INT</div>
        <div class="character-attributes-value value-4 handwritten">
          {character.attributes.int.score}
        </div>
        <div class="character-attributes-groups groups-4 handwritten">
          {#each character.attributes.int.groups as group, index}
            <span>
              {#if character.attributes.int.groups.length > 1 && index !== character.attributes.int.groups.length - 1}
                {group},
              {:else}
                {group}
              {/if}
            </span>
          {/each}
        </div>

        <div class="character-attributes-label label-5 typed">WIS</div>
        <div class="character-attributes-value value-5 handwritten">
          {character.attributes.wis.score}
        </div>
        <div class="character-attributes-groups groups-5 handwritten">
          {#each character.attributes.wis.groups as group, index}
            <span>
              {#if character.attributes.wis.groups.length > 1 && index !== character.attributes.wis.groups.length - 1}
                {group},
              {:else}
                {group}
              {/if}
            </span>
          {/each}
        </div>

        <div class="character-attributes-label label-6 typed">CHA</div>
        <div class="character-attributes-value value-6 handwritten">
          {character.attributes.cha.score}
        </div>
        <div class="character-attributes-groups groups-6 handwritten">
          {#each character.attributes.cha.groups as group, index}
            <span>
              {#if character.attributes.cha.groups.length > 1 && index !== character.attributes.cha.groups.length - 1}
                {group},
              {:else}
                {group}
              {/if}
            </span>
          {/each}
        </div>
      </div>

      <div class="subcontainer">
        <div class="character-slots">
          <div class="character-slots-header" style="display: flex;">
            <span class="typed" style="">SLOTS</span>
            <span
              class="handwritten"
              style="position: relative; bottom: 0.5rem; left: 0.7rem;"
            >
              {#if character.class === "Strong"}
                (Abilities)
              {:else if character.class === "Deft"}
                (Attunements)
              {:else if character.class === "Wise"}
                (Miracles)
              {/if}
            </span>
          </div>
          <ul class="character-slots-list handwritten">
            {#if character.class === "Strong"}
              {#each character.abilities as ability}
                <li>
                  {ability}
                </li>
              {/each}
            {:else if character.class === "Deft"}
              {#each character.attunements as attunement}
                <li>
                  {#if attunement.isActive}
                    {attunement.name}*
                  {:else}
                    {attunement.name}
                  {/if}
                </li>
              {/each}
            {:else if character.class === "Wise"}
              {#each character.miracles as miracle}
                <li>
                  {#if miracle.isActive}
                    {miracle.name}*
                  {:else}
                    {miracle.name}
                  {/if}
                </li>
              {/each}
            {/if}
          </ul>
        </div>

        <div class="character-languages">
          <div class="character-languages-header typed">LANGUAGES</div>
          <ul class="character-languages-list handwritten">
            {#each character.languages as language}
              <li>{language}</li>
            {/each}
          </ul>
        </div>

        <div class="character-quirks">
          <div class="character-quirks-header typed">
            APPEARANCE, PERSONALITY, & BACKGROUND
          </div>
          <ul class="character-quirks-list handwritten">
            <li />
          </ul>
        </div>

        <div class="character-inventory">
          <div class="character-inventory-header typed">INVENTORY</div>
          <ul class="character-inventory-list handwritten">
            <li>{character.coins} coins</li>
            {#each character.inventory as item}
              <li>{item.name}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Special+Elite&display=swap");

  .handwritten {
    font-family: "La Belle Aurore", cursive;
    font-size: 1.2rem;
    line-height: 2rem;
    height: 1.8rem;
  }

  .typed {
    font-family: "Special Elite", "Courier New", Courier, monospace;
    font-size: 0.8rem;
  }

  .wrapper {
    background-color: #f0e7dc;
    height: 100vh;
    width: 100vw;
  }

  .character-container {
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
      border: none;
      min-height: 100vh;
    }
  }

  .character {
    box-sizing: border-box;
    margin: auto;
    position: relative;
    padding: 0.5rem 1rem;
  }

  .top-row {
    display: grid;
    grid-template-columns: auto 80px;
    grid-template-rows: 1fr 1fr;
    column-gap: 20px;
  }

  button {
    background-color: #f0e7dc;
    border: 1px solid #b39f88;
    font-family: "Special Elite", "Courier New", Courier, monospace;
    font-size: 0.8rem;
    grid-column: 2;
  }

  .character-name {
    font-size: 1.2rem;
    margin-top: 1rem;
    line-height: 2rem;
    height: 1.8rem;

    &.handwritten {
      grid-column: 1;
      grid-row: 1;
    }

    &-form {
      border-top: 1px solid gray;
      padding-top: 0.1rem;
      grid-column: 1;
      grid-row: 2;
    }
  }

  .character-container .character-name {
    margin-top: 0;
  }

  .character-summary-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 15px;

    .characterclass {
      grid-column: 1 / span 2;
    }

    .characterspecies {
      grid-column: 3 / span 2;
    }

    .charactervocation {
      grid-column: 5 / span 4;
    }

    @media (max-width: 580px) {
      grid-template-rows: 1fr 1fr;

      .characterclass {
        grid-column: 1 / span 3;
        grid-row: 1 / span 1;
      }

      .characterspecies {
        grid-column: 4 / span 3;
        grid-row: 1 / span 1;
      }

      .characterxp {
        grid-column: 7 / span 2;
        grid-row: 1 / span 1;
      }

      .characterlevel {
        grid-column: 9 / span 2;
        grid-row: 1 / span 1;
      }

      .charactervocation {
        grid-column: 1 / span 10;
        grid-row: 2 / span 1;
      }
    }

    @media (max-width: 430px) {
      grid-template-rows: 1fr 1fr;

      .characterclass {
        grid-column: 1 / span 4;
        grid-row: 1 / span 1;
      }

      .characterxp {
        grid-column: 5 / span 4;
        grid-row: 1 / span 1;
      }

      .characterlevel {
        grid-column: 9 / span 2;
        grid-row: 1 / span 1;
      }

      .characterspecies {
        grid-column: 1 / span 4;
        grid-row: 2 / span 1;
      }

      .charactervocation {
        grid-column: 5 / span 6;
        grid-row: 2 / span 1;
      }
    }

    @media (max-width: 380px) {
      grid-template-rows: 1fr 1fr 1fr;

      .characterclass {
        grid-column: 1 / span 4;
        grid-row: 1 / span 1;
      }

      .characterxp {
        grid-column: 5 / span 4;
        grid-row: 1 / span 1;
      }

      .characterlevel {
        grid-column: 9 / span 2;
        grid-row: 1 / span 1;
      }

      .characterspecies {
        grid-column: 1 / span 10;
        grid-row: 2 / span 1;
      }

      .charactervocation {
        grid-column: 1 / span 10;
        grid-row: 3 / span 1;
      }
    }
  }

  .character-summary {
    font-size: 1.2rem;
    line-height: 2rem;
    height: 1.8rem;

    &.handwritten {
      padding-left: 3px;
    }

    &-form {
      border-top: 1px solid gray;
      // margin-top: 0.1rem;
      padding-top: 0.1rem;
    }
  }

  .character-vitals {
    column-gap: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-top: 1.5rem;

    &-label {
      align-self: center;
      justify-self: left;
      grid-row: 1 / span 1;

      &.label-1 {
        grid-column: 1 / span 1;
      }

      &.label-2 {
        grid-column: 2 / span 1;
      }

      &.label-3 {
        grid-column: 3 / span 1;
      }

      &.label-4 {
        grid-column: 4 / span 1;
      }

      &.label-5 {
        grid-column: 5 / span 1;
      }
    }

    &-value {
      align-self: center;
      justify-self: center;
      grid-row: 1 / span 2;
      border-right: 1px solid gray;
      height: 100%;
      padding-left: 30%;
      width: 70%;

      @media (max-width: 480px) {
        padding-left: 40%;
        width: 60%;
      }

      &.value-1 {
        grid-column: 1 / span 1;
      }

      &.value-2 {
        grid-column: 2 / span 1;
      }

      &.value-3 {
        grid-column: 3 / span 1;
      }

      &.value-4 {
        grid-column: 4 / span 1;
      }

      &.value-5 {
        grid-column: 5 / span 1;
        border-right: none;
      }
    }
  }

  .character-attributes {
    column-gap: 10px;
    display: grid;
    grid-template-columns: 2rem 2rem auto;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    margin-top: 1.5rem;
    max-width: 720px;
    row-gap: 3px;

    @media (max-width: 480px) {
      column-gap: 0px;
    }

    &-label {
      align-self: center;
      grid-column: 1 / span 1;
      justify-self: left;

      &.label-1 {
        grid-row: 1 / span 1;
      }

      &.label-2 {
        grid-row: 2 / span 1;
      }

      &.label-3 {
        grid-row: 3 / span 1;
      }

      &.label-4 {
        grid-row: 4 / span 1;
      }

      &.label-5 {
        grid-row: 5 / span 1;
      }

      &.label-6 {
        grid-row: 6 / span 1;
      }
    }

    &-value {
      align-self: center;
      grid-column: 2 / span 1;
      justify-self: center;
      line-height: 2rem;

      @media (max-width: 480px) {
        justify-self: left;
      }

      &.value-1 {
        grid-row: 1 / span 1;
      }

      &.value-2 {
        grid-row: 2 / span 1;
      }

      &.value-3 {
        grid-row: 3 / span 1;
      }

      &.value-4 {
        grid-row: 4 / span 1;
      }

      &.value-5 {
        grid-row: 5 / span 1;
      }

      &.value-6 {
        grid-row: 6 / span 1;
      }
    }

    &-groups {
      align-self: center;
      grid-column: 3 / span 1;
      height: unset;
      justify-self: left;
      line-height: 1.2rem;

      &.groups-1 {
        grid-row: 1 / span 1;
      }

      &.groups-2 {
        grid-row: 2 / span 1;
      }

      &.groups-3 {
        grid-row: 3 / span 1;
      }

      &.groups-4 {
        grid-row: 4 / span 1;
      }

      &.groups-5 {
        grid-row: 5 / span 1;
      }

      &.groups-6 {
        grid-row: 6 / span 1;
      }
    }
  }

  .subcontainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;

    @media (max-width: 760px) {
      display: block;
    }

    .character-slots {
      margin-top: 1.5rem;

      &-header {
        height: 0.8rem;
        padding-bottom: 0.5rem;
      }

      ul {
        height: unset;
        margin: 0;
        margin-left: 1rem;
        padding: 0;

        li {
          line-height: 1.2rem;
          list-style: "-";
          padding-left: 0.2rem;
        }
      }
    }

    .character-languages {
      margin-top: 1.5rem;

      &-header {
        height: 0.8rem;
        padding-bottom: 0.5rem;
      }

      ul {
        height: unset;
        margin: 0;
        margin-left: 1rem;
        padding: 0;

        li {
          line-height: 1.2rem;
          list-style: "-";
          padding-left: 0.2rem;
        }
      }
    }

    .character-quirks {
      margin-top: 1.5rem;

      &-header {
        height: 0.8rem;
        padding-bottom: 0.5rem;
      }

      ul {
        height: unset;
        margin: 0;
        padding: 0;

        li {
          line-height: 1.2rem;
          list-style: "-";
          margin-left: 1rem;
          padding-left: 1.2rem;
          text-indent: -1rem;
        }
      }
    }

    .character-inventory {
      margin-top: 1.5rem;

      &-header {
        height: 0.8rem;
        padding-bottom: 0.5rem;
      }

      ul {
        columns: 2;

        @media (max-width: 540px) {
          columns: 1;
        }

        height: unset;
        margin: 0;
        margin-left: 1rem;
        padding: 0;

        li {
          line-height: 1.2rem;
          list-style: "-";
          padding-left: 0.2rem;
        }
      }
    }
  }
</style>
