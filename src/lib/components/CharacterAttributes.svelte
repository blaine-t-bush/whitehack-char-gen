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
  <div class="form-label typed-font">STR</div>
  <div class="form-entry handwritten-font">{attributes.str.score}</div>
  <div class="form-groups handwritten-font">
    {#each attributes.str.groups as group}
      <span>{group}</span>
    {/each}
  </div>

  <div class="form-label typed-font">DEX</div>
  <div class="form-entry handwritten-font">{attributes.dex.score}</div>
  <div class="form-groups handwritten-font">
    {#each attributes.dex.groups as group}
      <span>{group}</span>
    {/each}
  </div>

  <div class="form-label typed-font">CON</div>
  <div class="form-entry handwritten-font">{attributes.con.score}</div>
  <div class="form-groups handwritten-font">
    {#each attributes.con.groups as group}
      <span>{group}</span>
    {/each}
  </div>

  <div class="form-label typed-font">INT</div>
  <div class="form-entry handwritten-font">{attributes.int.score}</div>
  <div class="form-groups handwritten-font">
    {#each attributes.int.groups as group}
      <span>{group}</span>
    {/each}
  </div>

  <div class="form-label typed-font">WIS</div>
  <div class="form-entry handwritten-font">{attributes.wis.score}</div>
  <div class="form-groups handwritten-font">
    {#each attributes.wis.groups as group}
      <span>{group}</span>
    {/each}
  </div>

  <div class="form-label typed-font">CHA</div>
  <div class="form-entry handwritten-font">{attributes.cha.score}</div>
  <div class="form-groups handwritten-font">
    {#each attributes.cha.groups as group}
      <span>{group}</span>
    {/each}
  </div>
</div>

<style lang="scss">
  .container {
    column-gap: 15px;
    display: grid;
    grid-template: repeat(6, 1fr) / min-content min-content auto;
    row-gap: 15px;

    .form-entry {
      box-sizing: border-box;
      font-size: 1rem;
      line-height: 2rem;
      height: 1.5rem;
      padding: 0 0.5rem;
    }

    .form-label {
      font-size: 0.8rem;
      line-height: 1rem;
      height: 1rem;
      text-transform: uppercase;
    }

    .form-groups {
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
