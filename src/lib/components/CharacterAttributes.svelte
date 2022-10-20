<script lang="ts">
  export let attributes: {
    str: {
      name: string;
      score: number;
      groups: string[];
    };
    dex: {
      name: string;
      score: number;
      groups: string[];
    };
    con: {
      name: string;
      score: number;
      groups: string[];
    };
    wis: {
      name: string;
      score: number;
      groups: string[];
    };
    int: {
      name: string;
      score: number;
      groups: string[];
    };
    cha: {
      name: string;
      score: number;
      groups: string[];
    };
  };
</script>

<div class="container">
  <div class="form-label">STR</div>
  <div class="form-entry">{attributes.str.score}</div>
  <div class="form-groups">
    {#each attributes.str.groups as group}
      <span>{group}</span>
    {/each}
  </div>

  <div class="form-label">DEX</div>
  <div class="form-entry">{attributes.dex.score}</div>
  <div class="form-groups">
    {#each attributes.dex.groups as group}
      <span>{group}</span>
    {/each}
  </div>

  <div class="form-label">CON</div>
  <div class="form-entry">{attributes.con.score}</div>
  <div class="form-groups">
    {#each attributes.con.groups as group}
      <span>{group}</span>
    {/each}
  </div>

  <div class="form-label">INT</div>
  <div class="form-entry">{attributes.int.score}</div>
  <div class="form-groups">
    {#each attributes.int.groups as group}
      <span>{group}</span>
    {/each}
  </div>

  <div class="form-label">WIS</div>
  <div class="form-entry">{attributes.wis.score}</div>
  <div class="form-groups">
    {#each attributes.wis.groups as group}
      <span>{group}</span>
    {/each}
  </div>

  <div class="form-label">CHA</div>
  <div class="form-entry">{attributes.cha.score}</div>
  <div class="form-groups">
    {#each attributes.cha.groups as group}
      <span>{group}</span>
    {/each}
  </div>
</div>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap");

  .container {
    column-gap: 15px;
    display: grid;
    grid-template: repeat(6, 1fr) / min-content min-content auto;
    row-gap: 15px;

    .form-entry {
      box-sizing: border-box;
      font-family: "Homemade Apple", sans-serif;
      font-size: 1rem;
      line-height: 2rem;
      height: 1.5rem;
      padding: 0 0.5rem;
    }

    .form-label {
      font-family: "Courier New", Courier, monospace;
      font-size: 0.8rem;
      line-height: 1rem;
      height: 1rem;
      text-transform: uppercase;
    }

    .form-groups {
      font-family: "Homemade Apple", sans-serif;
      font-size: 1rem;
      line-height: 2rem;
      height: 1.5rem;
      padding: 0 0.5rem;

      span:not(:last-child)::after {
        content: ", ";
      }
    }
  }
</style>
