<template>
  <div id="nav">

    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Example</router-link> | -->
<!-- <ul>
  <li v-for="(index) in users " :key="index">{{index.username}}</li>
</ul> -->
  </div>
  <router-view/>
</template>
<script>
import userData from './data/data.json'
export default {
  data(){
    return{
      users: userData
    }
  
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;

}

#nav {
  /* padding: 30px; */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
