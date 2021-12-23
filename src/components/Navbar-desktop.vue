<template>
  <div>
    <div id="logo">
      <img src="../assets/shared/logo.svg" alt="logo"
      width="55px">
    </div> 
    <div id="navbar">
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
    }
  },
  methods: {
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
  position: absolute;
  right: 0;
  top: 2.7vw;
  width: 57vw;
  height: 95px;
  padding-left: 8vw;
  padding-right: 12vw;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
}
.nav-btn{
  margin: 0 22.5px;
  padding: 22.5px 0;
  white-space: nowrap;
  overflow: visible;
}

.router-link-exact-active{
  border-bottom: 2px solid var(--text-active-color);
}

.nav-btn:hover{
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
}

.nav-btn:hover.router-link-exact-active{
  border-bottom: 2px solid var(--text-passive-color);
}

#navbar::before{
  content: '';
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 33vw;
  right: 55vw;
}

#logo{
  position:absolute;
  left: 5.5vw;
  top: 6vw;
  transform: translate(-50%,-50%);
}
</style>
