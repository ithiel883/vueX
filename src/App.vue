<template>
  <base-container title="Vuex">
  <the-counter></the-counter>
  <favorite-value></favorite-value>
  <button @click="addOne">Add 10</button>
  <change-counter></change-counter>
  </base-container>
</template>

<script>
import FavoriteValue from './components/FavoriteValue.vue'
import ChangeCounter from './components/ChangeCounter.vue'
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue'
export default {
  components: {
    BaseContainer,
    FavoriteValue,
    TheCounter,
    ChangeCounter
  },
 
  methods: {
    addOne() {
      this.$store.commit('increase', {value: 10})
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>