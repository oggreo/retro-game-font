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

/*#nav {*/
/*  padding: 30px;*/
/*}*/

/*#nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*#nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>

<script>
import NavBar from '@/components/NavBar.vue';
import MainTitle from '@/components/MainTitle.vue';
import GameSelection from '@/components/GameSelection.vue';
import TextBox from '@/components/TextBox.vue';
import GameFontCard from '@/components/GameFontCard.vue';

export default {
  inject: ['GStore'],
  components: {
    GameFontCard, TextBox, GameSelection, MainTitle, NavBar,
  },
};
</script>
