<template>
  <div class="home">
    <div>
    <p class="sh3">SO, YOU WANT TO TRAVEL TO</p>
    <h2>SPACE</h2>
    <p class="text">Let's face it; if you want to go to space you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>
    <router-link to="/destination">
    <button id="explore"><span class="sh1">EXPLORE</span></button>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',

}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
:root{
  --bg-color: #0b0d17;
  --text-active-color: #ffffff;
  --text-passive-color: #d0d6f9;
}
.home{
  padding: 100px 25px 0 25px;
  min-width: 100%;
  min-height: 100vh;
  background-image: url("../assets/home/background-home-desktop.jpg");
  background-size: cover;
  text-align: center;
}
.sh3{
  margin: 40px 0;
  color: var(--text-passive-color);
}
.text{
  line-height: 25px;
  margin-top: 40px;
  color: var(--text-passive-color);
}

#explore{
  border: none;
  margin-top: 100px;
  margin-bottom: 30px;
  width: 150px;
  height: 150px;
  background: white;
  border-radius: 50%;
  color:black;
}

#explore:hover{
box-shadow: 0px 0px 0px 90px rgba(255, 255, 255, 0.1);
transition: 0.5s;
}

@media screen and (max-width: 600px){
  .home{
    background-image: url("../assets/home/background-home-mobile.jpg");
  }

}
@media screen and (min-width: 600px) and (max-width: 1024px){
  .home{
    background-image: url("../assets/home/background-home-tablet.jpg");
    padding: 160px;
  }
}
@media screen and (min-width: 1024px){
  .home{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .home > div{
    text-align: start;
    width: 400px;
  }
  .text{
    margin: 0;
  }
}
</style>
