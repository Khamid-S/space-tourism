<template>
  <div id="app">
    <NavbarDesktopVue v-if="innerWidth > 1024"/>
    <NavbarTabletVue v-if="innerWidth > 600 && innerWidth <=  1024"/>
    <NavbarMobileVue v-if="innerWidth <= 600"/>
    <transition name="component-fade" mode="out-in">
      <router-view :infoData ="infoData"/>
    </transition>
  </div>
</template>

<script>
import NavbarDesktopVue from './components/Navbar-desktop.vue'
import NavbarTabletVue from './components/Navbar-tablet.vue'
import NavbarMobileVue from './components/Navbar-mobile.vue'
import * as Data from './data.json'
export default {
  data(){
    return{
      innerWidth: window.innerWidth,
      infoData: Data.default
    }
  },
  components: {
    NavbarDesktopVue,
    NavbarTabletVue,
    NavbarMobileVue
  },
  methods:{
    setInnerWidth: function(){
      this.innerWidth = window.innerWidth;
    }
  },
  created() {
    window.addEventListener("resize", this.setInnerWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.setInnerWidth);
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');
:root{
  --bg-color: #0b0d17;
  --text-active-color: #ffffff;
  --text-passive-color: #d0d6f9;
}

*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  outline: none;
}

a{
  color: var(--text-active-color);
}

h1{
  font-family: 'Bellefair', serif;
  font-size: 150px;
  font-weight: normal;
}

h2{
  font-family: 'Bellefair', serif;
  font-size: 100px;
  font-weight: normal;
}

h3{
  font-family: 'Bellefair', serif;
  font-size: 56px;
  font-weight: normal;
}

h4{
  font-family: 'Bellefair', serif;
  font-size: 32px;
  font-weight: normal;
}

h5{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 28px;
  font-weight: normal;
  letter-spacing: 4.75px;
}

.sh1{
  font-family: 'Bellefair', serif;
  font-size: 28px;
}

.sh2{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 14px;
  letter-spacing: 2.35px;
}

.sh3{
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
}

.dark-text{
  color: var(--text-passive-color);
}

#app {
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: var(--bg-color);
  font-family: 'Barlow Condensed', sans-serif;
  color: var(--text-active-color);
}

/* Transitions */
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s;
}
.component-fade-enter, .component-fade-leave-to
{
 opacity: 0;
}

</style>
