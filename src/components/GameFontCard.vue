<template>
  <div class="game-card"> {{ gameData.title }}
    <div class="game-card-text" v-bind:style="gameFont"> {{ this.GStore.inputText }} </div>
  </div>
</template>

<script>
export default {
  name: 'GameFontCard',
  inject: ['GStore'],
  props: {
    gameData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    gameFont() {
      return "@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap')";
    },
  },
};
</script>

<style scoped>
  /*font-family: 'Merienda';*/
  /*@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');*/
  .game-card {
    border: solid;
    border-width: 1px;
    border-radius: 15px;
    height: 100px;
  }
</style>
