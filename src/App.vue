<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Segoe UI', 'Ubuntu', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.display-20 {
  font-size: 33px;
  font-weight: 200 !important;
}
.display-text-center {
  text-align: center; 
}
</style>
