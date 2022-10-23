<script lang="ts">
  export let title: string;
  export let list: string[];
</script>

<div>
  <div class="label typed-font">{title}</div>
  <ul class="entries">
    {#each list as entry}
      <li class="entry handwritten-font">{entry}</li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .label {
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
      font-size: 1rem;
      line-height: 2rem;
      list-style-type: none;

      &::before {
        content: "- ";
      }
    }
  }
</style>
