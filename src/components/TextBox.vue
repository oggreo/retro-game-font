<template>
  <div id="text-box-area">
    <input v-model="inputText" placeholder="edit me" v-on:input="updateText">
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  inject: ['GStore'],
  data() {
    return {
      inputText: null,
    };
  },
  methods: {
    updateText() {
      this.GStore.inputText = this.inputText;
    },
  },
};
</script>

<style scoped>
#text-box-area {
  border: solid;
  border-width: 1px;
  border-radius: 15px;
  height: 50px;
}

</style>
