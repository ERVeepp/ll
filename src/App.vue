<template>
  <div id="app">
    <router-view name='nav'></router-view>
    <router-view name='sidebar'></router-view>
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body{
  padding: 0;
  margin: 0;
  @extend .full
}
.full{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @extend .full
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
