<template>
  <nav-bar></nav-bar>
  <main-title></main-title>
  <game-selection></game-selection>
  <text-box></text-box>
  <game-font-card
    v-for="game in this.GStore.selectedGames"
    :key="game.id"
    :gameData="game">
  </game-font-card>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import NavBar from '@/components/NavBar.vue';
import MainTitle from '@/components/MainTitle.vue';
import GameSelection from '@/components/GameSelection.vue';
import TextBox from '@/components/TextBox.vue';
import GameFontCard from '@/components/GameFontCard.vue';
// import GameFontServices from './services/GameFontServices';

export default {
  inject: ['GStore'],
  components: {
    GameFontCard, TextBox, GameSelection, MainTitle, NavBar,
  },
  // created() {
  //   GameFontServices.getGames(100)
  //     .then((response) => {
  //       this.GStore.selectedGames.push(...response.data);
  //     })
  //     .catch(() => {
  //       console.log('error');
  //     });
  // },
};
</script>
