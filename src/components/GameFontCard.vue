<template>
  <div class="game-card"> {{ gameData.title }}
    <div class="game-card-text" v-bind:style="gameFont"> {{ this.GStore.inputText }} </div>
  </div>
</template>

<script>
import WebFont from 'webfontloader';

export default {
  name: 'GameFontCard',
  inject: ['GStore'],
  props: {
    gameData: {
      type: Object,
      required: true,
    },
  },
  created() {
    WebFont.load({
      google: {
        families: [this.gameData.fontFamily],
      },
      // active: this.setFontLoaded,
    });
  },
  computed: {
    gameFont() {
      return `font-family: ${this.gameData.fontFamily}`;
    },
  },
};
</script>

<style scoped>
  .game-card {
    border: solid;
    border-width: 1px;
    border-radius: 15px;
    height: 100px;
  }
</style>
