<template>
    <div class="home">
      <HeaderView></HeaderView>
     </div>
     <div class="CarShow">
      <CarModel ></CarModel>
      </div>
      <FooterView></FooterView>
</template>

<script>
import HeaderView from './layouts/HeaderView.vue';
import FooterView from './layouts/FooterView.vue';
 import CarModel from '../components/CarModel.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    HeaderView,
    FooterView,
    CarModel,
  }
}
</script>

<style lang="scss">
.CarShow{
  z-index: 10;
  width: 100vw;
  height:100vh;
  top:0;
  left:0;
  position: absolute;
}
</style>