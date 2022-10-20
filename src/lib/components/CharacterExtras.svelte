<script lang="ts">
  export let title: string;
  export let list: string[];
</script>

<div>
  <div class="label">{title}</div>
  <ul class="entries">
    {#each list as entry}
      <li class="entry">{entry}</li>
    {/each}
  </ul>
</div>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap");

  .label {
    font-family: "Courier New", Courier, monospace;
    font-size: 0.8rem;
    line-height: 1rem;
    height: 1rem;
    text-transform: uppercase;
  }

  .entries {
    margin: 0;
    padding: 0;
    padding-left: 0.5rem;

    .entry {
      box-sizing: border-box;
      font-family: "Homemade Apple", sans-serif;
      font-size: 1rem;
      line-height: 2rem;
      list-style-type: none;

      &::before {
        content: "- ";
      }
      // height: 1.5rem;
      // padding: 0 0.5rem;
    }
  }
</style>
