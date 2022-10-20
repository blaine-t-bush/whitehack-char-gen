<script lang="ts">
  export let hitPoints: number,
    attackValue: number,
    armorClass: number,
    savingThrow: number,
    movementRate: number;
</script>

<div class="container">
  <div class="form">
    <div class="form-label">HP</div>
    <div class="form-entry">{hitPoints}</div>
  </div>

  <div class="form">
    <div class="form-label">AV</div>
    <div class="form-entry">{attackValue}</div>
  </div>

  <div class="form">
    <div class="form-label">AC</div>
    <div class="form-entry">{armorClass}</div>
  </div>

  <div class="form">
    <div class="form-label">ST</div>
    <div class="form-entry">{savingThrow}</div>
  </div>

  <div class="form">
    <div class="form-label">MV</div>
    <div class="form-entry">{movementRate}</div>
  </div>
</div>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap");

  .container {
    column-gap: 15px;
    display: grid;
    row-gap: 15px;

    grid-template: repeat(5, 1fr) / 1fr;
    max-width: 100px;
    @media (max-width: 580px) {
      grid-template: 1fr / repeat(5, 1fr);
      max-width: unset;
    }

    .form {
      &:not(:last-child) {
        border-right: none;
      }

      @media (max-width: 580px) {
        &:not(:last-child) {
          border-right: 1px solid black;
        }
      }

      box-sizing: border-box;
      display: grid;
      grid-template: 1fr / 1fr 2fr;

      &-entry {
        box-sizing: border-box;
        font-family: "Homemade Apple", sans-serif;
        font-size: 1rem;
        line-height: 2rem;
        height: 1.5rem;
        padding: 0 0.5rem;
      }

      &-label {
        font-family: "Courier New", Courier, monospace;
        font-size: 0.8rem;
        line-height: 1rem;
        height: 1rem;
        text-transform: uppercase;
      }
    }
  }
</style>
