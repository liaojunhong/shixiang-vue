<template>
  <div id="app">
    <mu-container>
      <mu-button class="demo-button" color="primary" @click="alert()">Alert</mu-button>
      <mu-button class="demo-button" color="secondary" @click="confirm()">Confirm</mu-button>
    </mu-container>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="bottom_nav_box">
      <mu-bottom-nav>
        <mu-bottom-nav-item title="首页" icon="home"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="分类" icon=""></mu-bottom-nav-item>
        <mu-bottom-nav-item title="常购清单" icon=""></mu-bottom-nav-item>
        <mu-bottom-nav-item title="购物车" icon=""></mu-bottom-nav-item>
        <mu-bottom-nav-item title="我的" icon=""></mu-bottom-nav-item>
      </mu-bottom-nav>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  methods: {
    alert() {
     
    },
    confirm() {
     
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bottom_nav_box{
  position:fixed;
  bottom:0;
  width:100%;
  height: 90px;
}
</style>
