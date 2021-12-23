<template>
  <div class="destination">
    <div>
      <p class="sh3 tablet-text"><span class="dark-text">01</span> PICK YOUR DESTINATION</p>
      <img :src="require(`../assets/destination/${currentDestination.images.png}`)" 
        class="image" :alt="currentDestination.name">
    </div>
    <div>
    <div id="buttons">
      <div v-for="(destination,i) in destinations" :key="i"
      @click="currentDestination = destination">
        <p class="sh2 tablet-text" :class="underline(destination.name)">
          {{destination.name.toUpperCase()}}
        </p>
      </div>
    </div>

    <div class="text">
      <h3>
        {{currentDestination.name.toUpperCase()}}
      </h3>
      <p>
        {{currentDestination.description}}
      </p>
    </div>

  <hr>

    <div class="text tablet-divide">
      <div>
        <p class="sh3">
          AVG. DISTANCE
        </p>
        <h4>
          {{currentDestination.distance.toUpperCase()}}
        </h4>
        </div>
      <br>
      <div>
        <p class="sh3">
          EST. TRAVEL TIME  
        </p>
        <h4>
          {{currentDestination.travel.toUpperCase()}}
        </h4>
      </div>
  </div>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      destinations: this.infoData.destinations,
      currentDestination: this.infoData.destinations[0]
    }
  },
  props:{
    infoData: Object
  },
  methods: {
    underline: function(name){
      if(name==this.currentDestination.name){
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

.destination{
  padding: 100px 25px 25px 25px;
  min-width: 100%;
  min-height: 100vh;
  background-image: url("../assets/destination/background-destination-desktop.jpg");
  background-size: cover;
  text-align: center;
}

.image{
  width:200px;
  margin: 40px;
}

.text{
  margin: 40px 0;
}

.text p{
  line-height: 24px;
}

#buttons{
  padding: 0 20px;
  width:100%;
  display: flex;
  justify-content: space-evenly;
}

#buttons p{
  cursor: pointer;
}

#buttons p:hover{
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
}

.underline{
  border-bottom: 2px solid white !important;
}

.sh2{
  padding: 4px 0;
}

h4{
  padding:10px;
}


@media screen and (max-width: 600px){
  .destination{
    background-image: url("../assets/destination/background-destination-mobile.jpg");
  }

}
@media screen and (min-width: 600px) and (max-width: 1024px){
  .destination{
    background-image: url("../assets/destination/background-destination-tablet.jpg");
    padding: 140px;
  }
  .image{
    width: 250px;
    margin: 40px 0 10px;
  }
  #buttons{
    padding: 40px;
  }
  .tablet-text{
    text-align: start;
    font-size: 20px;
  }
  .text{
    margin: 0 0 20px;
  }
  .tablet-divide{
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}
@media screen and (min-width: 1024px){
  .destination{
    padding-top: 200px;
    padding-bottom: 0;
    text-align: start;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
  }
  .image{
    width: 300px;
  }
  .destination>div{
    display: flex;
    flex-direction: column;
    width: 500px;
  }
  #buttons{
    padding:0;
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  #buttons p{
    margin-right: 30px;
  }
  .text{
    width: 100%;
    padding-right: 100px;
  }
  .tablet-divide{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .tablet-divide h4{
    padding:0;
  }

  .tablet-divide>div{
    width: 50%;
  }

  .tablet-text{
    text-align: start;
    font-size: 20px;
  }

}
</style>
