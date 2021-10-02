<template>
  <div class="game-option-button"
       v-on:click="selected"
       v-bind:class="{ selected: isSelected, 'not-selected': !isSelected }">
    {{ gameData.title }}</div>

</template>

<script>
export default {
  name: 'GameOptionButton',
  inject: ['GStore'],
  props: {
    gameData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    selected() {
      this.isSelected = !this.isSelected;
      if (this.isSelected) {
        this.GStore.selectedGames.push(this.gameData);
      } else {
        const index = this.GStore.selectedGames.indexOf(this.gameData);
        this.GStore.selectedGames.splice(index);
      }
    },
  },
};
</script>

<style scoped>
.game-option-button {
  border-style: solid;
  border-width: 1px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 30px;
}
.game-option-button:hover {
  background-color: slategray;
  cursor: pointer;
}

.selected {
  background-color: slategray;
}

.not-selected {
  background-color: white;
}

</style>
