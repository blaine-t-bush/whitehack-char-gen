<script lang="ts">
  export let hitPoints: number,
    attackValue: number,
    armorClass: number,
    savingThrow: number,
    movementRate: number;
</script>

<div class="container">
  <div class="form">
    <div class="form-label typed-font">HP</div>
    <div class="form-entry handwritten-font">{hitPoints}</div>
  </div>

  <div class="form">
    <div class="form-label typed-font">AV</div>
    <div class="form-entry handwritten-font">{attackValue}</div>
  </div>

  <div class="form">
    <div class="form-label typed-font">AC</div>
    <div class="form-entry handwritten-font">{armorClass}</div>
  </div>

  <div class="form">
    <div class="form-label typed-font">ST</div>
    <div class="form-entry handwritten-font">{savingThrow}</div>
  </div>

  <div class="form">
    <div class="form-label typed-font">MV</div>
    <div class="form-entry handwritten-font">{movementRate}</div>
  </div>
</div>

<style lang="scss">
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
        font-size: 1rem;
        line-height: 2rem;
        height: 1.5rem;
        padding: 0 0.5rem;
      }

      &-label {
        font-size: 0.8rem;
        line-height: 1rem;
        height: 1rem;
        text-transform: uppercase;
      }
    }
  }
</style>
