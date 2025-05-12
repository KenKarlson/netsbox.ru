<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/html">HTML</router-link> |
      <router-link to="/css">CSS</router-link> |
      <router-link to="/js">JavaScript</router-link> |
      <router-link to="/vue2">Vue 2</router-link> |
      <router-link to="/vue3">Vue 3</router-link> |
      <router-link to="/about">О курсе</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #333;
  margin: 20px;
}
</style>
