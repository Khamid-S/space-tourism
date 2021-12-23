<template>
    <div>
        <div id="logo">
        <img src="../assets/shared/logo.svg" alt="logo"
        width="42px">
        </div>
        <img src="../assets/shared/icon-hamburger.svg"
        alt="menu" id="navbar-btn" v-show="!visibleBar" @click="visibleBar=!visibleBar">
        <div id="navbar" v-if="visibleBar">
            <img src="../assets/shared/icon-close.svg" alt="close"
            @click="visibleBar = !visibleBar" id="navbar-close">
          <router-link to="/" class="sh3 nav-btn">
          <b>00</b> HOME
          </router-link> 
          <router-link to="/destination" class="sh3 nav-btn">
          <b>01</b> DESTINATION
          </router-link>
          <router-link to="/crew" class="sh3 nav-btn">
          <b>02</b> CREW
          </router-link>
          <router-link to="/technology" class="sh3 nav-btn">
          <b>03</b> TECHNOLOGY
          </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar-desktop',
  data() {
    return {
        visibleBar: false,
    }
  },
  methods: {

  },
  watch:{
    $route (){
        this.visibleBar = false;
    }
} 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root{
  --bg-color: #0b0d17;
  --text-active-color: #ffffff;
  --text-passive-color: #d0d6f9;
}

#navbar{
  position: fixed;
  right: 0;
  top: 0;
  width: 57vw;
  height: 100vh;
  padding-top: 25vw;
  padding-left: 2vw;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: 1s;
}

#navbar-btn{
    position: absolute;
    right: 12vw;
    top: 47.5px;
    transform: translate(50%,-50%);
}

#navbar-close{
    position: fixed;
    right: 12vw;
    top: 47.5px;
    transform: translate(50%,-50%);
}

.nav-btn{
    width: 80%;
    margin: 20px 0;
    padding: 0 22.5px;
    white-space: nowrap;
    overflow: visible;
}

.router-link-exact-active{
  border-right: 2px solid var(--text-active-color);
}

#logo{
  position: absolute;
  left: 12vw;
  top: 47.5px;
  transform: translate(-50%,-50%);
}
</style>
