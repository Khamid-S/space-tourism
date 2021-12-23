<template>
  <div class="technology">

      <div class="header">
        <p class="sh3 tablet-text"><span class="dark-text">03</span> SPACE LAUNCH 101 </p>
      </div>

    <div>
      <div class="buttons">
          <span v-for="(technology,i) in technology" :key="i"
          @click="currentTechnology = technology" :class="underline(technology.name)">
          {{i+1}}
          </span>
      </div>
      <div class="text-box">
          <div class="text">
            <p class="sh1 dark-text">
                THE TERMINOLOGY...
            </p>
            <h4>
              {{currentTechnology.name.toUpperCase()}}
            </h4>
            <p>
              {{currentTechnology.description}}
            </p>
          </div>
      </div>
    </div>
      <div class="image-box">
        <img :src="require(`../assets/technology/${image}`)" 
          class="image" :alt="currentTechnology.name">
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerWidth: window.innerWidth,
      technology: this.infoData.technology,
      currentTechnology: this.infoData.technology[0],
      image: this.infoData.technology[0].images.landscape
    }
  },
  props:{
    infoData: Object
  },
  methods: {
    underline: function(name){
      if(name==this.currentTechnology.name){
        if(this.innerWidth>1024){
            this.image = this.currentTechnology.images.portrait;
        }
        else{
            this.image = this.currentTechnology.images.landscape;
        }
            return 'underline';
        }
    },
    setInnerWidth: function(){
      this.innerWidth = window.innerWidth;
      if(this.innerWidth>1024){
        this.image = this.currentTechnology.images.portrait;
      }
      else{
        this.image = this.currentTechnology.images.landscape;
      }
  },
  },
  created() {
    window.addEventListener("resize", this.setInnerWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.setInnerWidth);
  },
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

.technology{
  padding: 100px 25px 25px 25px;
  min-width: 100%;
  min-height: 100vh;
  background-image: url("../assets/technology/background-technology-desktop.jpg");
  background-size: cover;
  text-align: center;
  display: flex;
}

.image{
  width:100%;
  object-fit: cover;
}

.text{
  margin: 40px 0;
}

.text p{
  line-height: 24px;
}

.buttons{
  padding: 0 20px;
  width:100%;
  display: flex;
  justify-content: space-evenly;
}

.buttons span{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.5);
}

.buttons span:hover{
  border: 1px solid white;
}

.underline{
  background: white !important;
  color: black;
}

.sh2{
  padding: 4px 0;
}

.sh1{
  font-size: 20px;
}

@media screen and (max-width: 600px){
  .technology{
    padding: 100px 0 0;
    background-image: url("../assets/technology/background-technology-mobile.jpg");
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .image{
    margin: 20px 0;
    height: 170px;
    margin-bottom: 0;
    object-position: center;
  }
  .buttons{
      padding: 20px 100px 0;
  }
  .text-box{
      padding: 0 30px 0;
  }
  
  .technology> :nth-child(1) { order: 1; }
  .technology> :nth-child(2) { order: 3; }
  .technology> :nth-child(3) { order: 2; }
}

@media screen and (min-width: 600px) and (max-width: 1024px){
  .technology{
    background-image: url("../assets/technology/background-technology-tablet.jpg");
    padding: 140px 0px 0px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .header{
      padding: 0 40px;
  }
  .image{
    margin: 20px 0;
    margin-bottom: 0;
    object-position: center;
  }
  .buttons{
    padding: 30px 250px;
  }
  .buttons span{
    width: 60px;
    height: 60px;
  }
  .tablet-text{
    text-align: start;
    font-size: 20px;
  }
  .text-box{
    padding: 30px 160px;
  }
  .text{
    margin: 0 0 20px;
  }   
  .technology> :nth-child(1) { order: 1; }
  .technology> :nth-child(2) { order: 3; }
  .technology> :nth-child(3) { order: 2; }
}

@media screen and (min-width: 1024px){
  .technology{
    padding: 180px 0px 20px 160px;
    height: 100vh;
    text-align: start;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 150px 500px;
    grid-template-areas: 
      "header  image"
      "textbox image";
    overflow-y: hidden;
  }
  .technology :nth-child(1) { grid-area: header; }
  .technology :nth-child(2) { grid-area: textbox; }
  .technology :nth-child(4) { grid-area: image; }
  .image-box{
    padding: 0;
    justify-content: center;
    align-items: flex-start !important;
  }
  .image-box{
    width:100%;
    min-height: 600px;
    text-align: right;
    display: flex;
    justify-content: flex-end;
  }
  .image{
    width: 400px;
  }
  .technology > div{
    display: flex;
  }
  .buttons{
    padding:0;
    height : 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .buttons span{
    margin-bottom: 30px;
  }
  h4{
    padding: 20px 0;
  }
  .text{
    margin:0;   
  }
  .tablet-text{
    text-align: start;
    font-size: 20px;
  }
}
</style>