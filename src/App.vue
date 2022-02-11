<template>
  <base-container title="Vuex" v-if="isAuth">
  <the-counter></the-counter>
  <favorite-value></favorite-value>
  <button @click="addOne">Add 10</button>
  <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
<user-auth></user-auth>
  </base-container>
</template>

<script>
import UserAuth from './components/UserAuth.vue'
import FavoriteValue from './components/FavoriteValue.vue'
import ChangeCounter from './components/ChangeCounter.vue'
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue'
export default {
  components: {
    BaseContainer,
    FavoriteValue,
    TheCounter,
    ChangeCounter,
    UserAuth
  },
  computed: {
        isAuth() {
            return this.$store.getters.userIsAuthenticated
        }
    },
  methods: {
    addOne() {
      //this.$store.commit('increase', {value: 10})

      this.$store.dispatch({
        type: 'increase',
        value: 10
      })
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