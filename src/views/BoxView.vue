<template>
    <div class="home">
      <HeaderView></HeaderView>
     </div>
      <main class="main">
         <Model ></Model>
       </main>
      <FooterView></FooterView>
</template>

<script>
import HeaderView from './layouts/HeaderView.vue';
import FooterView from './layouts/FooterView.vue';
import Model from '../components/ThreeModel.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    HeaderView,
    FooterView,
    Model,
  }
}
</script>

<style lang="scss">
.s{
  width:50%;
  height:50%;
}
</style>