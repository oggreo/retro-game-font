<template>
  <div id="game-selection">
    <game-option-button v-for="game in games" :key="game.id" :gameData="game"></game-option-button>
  </div>
</template>

<script>

import { watchEffect } from 'vue';
import GameFontServices from '../services/GameFontServices';
import GameOptionButton from './GameOptionButton.vue';

export default {
  name: 'GameSelection',
  components: { GameOptionButton },
  data() {
    return {
      // array
      games: null,
    };
  },
  created() {
    watchEffect(() => {
      GameFontServices.getGames(3)
        .then((response) => {
          this.games = response.data;
        })
        .catch(() => {
          console.log('error');
        });
    });
  },
};
</script>

<style scoped>
#game-selection {
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;
}
</style>
