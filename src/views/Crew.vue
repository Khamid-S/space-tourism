<template>
  <div class="crew">

      <div class="header">
        <p class="sh3 tablet-text"><span class="dark-text">02</span> MEET YOUR CREW </p>
      </div>

      <div class="text-box">
          <div class="text">
            <p class="sh1 dark-text">
              {{currentPerson.role.toUpperCase()}}
            </p>
            <h4>
              {{currentPerson.name.toUpperCase()}}
            </h4>
            <p>
              {{currentPerson.bio}}
            </p>
          </div>
      </div>
      <div class="buttons">
          <span v-for="(person,i) in crew" :key="i"
          @click="currentPerson = person" :class="underline(person.name)">
          </span>
      </div>
      <div class="image-box">
        <img :src="require(`../assets/crew/${currentPerson.images.png}`)" 
          class="image" :alt="currentPerson.role">
        <hr>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      crew: this.infoData.crew,
      currentPerson: this.infoData.crew[0]
    }
  },
  props:{
    infoData: Object
  },
  methods: {
    underline: function(name){
      if(name==this.currentPerson.name){
        return 'underline';
      }
    },
  },
  mounted(){
    console.log(this.infoData);
  }
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

.crew{
  padding: 100px 25px 25px 25px;
  min-width: 100%;
  min-height: 100vh;
  background-image: url("../assets/crew/background-crew-desktop.jpg");
  background-size: cover;
  text-align: center;
  display: flex;
}

.image{
  width:200px;
  margin: 40px;
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
  width: 10px;
  height: 10px;
  cursor: pointer;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}

.buttons span:hover{
  background: rgba(255, 255, 255, 0.8);
}

.underline{
  background: white !important;
}

.sh2{
  padding: 4px 0;
}

h4{
  padding:10px;
}

hr{
  display: none;
}

.sh1{
  font-size: 20px;
}

@media screen and (max-width: 600px){
  .crew{
    background-image: url("../assets/crew/background-crew-mobile.jpg");
    flex-direction: column;
    align-items: center;
  }
  .image{
    margin-bottom: 0;
  }

  hr{
    display: inherit;
    margin-bottom: 40px;
  }
  .crew :nth-child(1) { order: 1; }
  .crew :nth-child(2) { order: 4; }
  .crew :nth-child(3) { order: 3; }
  .crew :nth-child(4) { order: 2; }
}
@media screen and (min-width: 600px) and (max-width: 1024px){
  .crew{
    background-image: url("../assets/crew/background-crew-tablet.jpg");
    padding: 140px 40px 0px;
    flex-direction: column;
  }
  .image{
    width: 400px;
    margin: 40px 0 0px;
  }
  .buttons{
    padding: 0 250px;
  }
  .tablet-text{
    text-align: start;
    font-size: 20px;
  }
  .text-box{
    padding: 40px 120px;
  }
  .text{
    margin: 0 0 20px;
  }
}
@media screen and (min-width: 1024px){
  .crew{
    padding: 180px 120px 20px 160px;
    height: 100vh;
    text-align: start;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 300px 150px;
    grid-template-areas: 
      "header  image"
      "textbox image"
      "buttons image";
    overflow-y: hidden;
  }
  .crew :nth-child(1) { grid-area: header; }
  .crew :nth-child(2) { grid-area: textbox; }
  .crew :nth-child(3) { grid-area: buttons; }
  .crew :nth-child(4) { grid-area: image; }
  .image-box{
    padding: 0;
    justify-content: center;
    align-items: flex-end !important;
  }
  .image{
    width: 300px;
    padding-bottom: 50px;
  }

  .crew > div{
    display: flex;
    align-items: flex-start;
  }
  .buttons{
    padding:0;
    width:100%;
    display: flex;
    justify-content: flex-start;
  }
  .buttons span{
    margin-right: 30px;
  }
  h4{
    padding: 20px 0;
  }
  .text{
    width: 80%;
  }
}
</style>