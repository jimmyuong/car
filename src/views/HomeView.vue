<template>
  <div class="home">
    <HeaderView></HeaderView>
    <main>
    <div class="mainBox">
      <div class="mainItem">
        <div class="mainType">
        <h1><div class="svg" v-html="svgs.a.svg"></div></h1>
        <router-link to="/table">TableView</router-link>
        </div>
        <div class="mainType">
        <h1><div class="svg" v-html="svgs.a.svg"></div></h1>
        <router-link to="/car">CarView</router-link>
        </div>
        <div class="mainType">
        <h1><div class="svg" v-html="svgs.a.svg"></div></h1>
        <router-link to="/hmi">HMI</router-link>
        </div>
      </div>
    </div>
    </main>
    <FooterView></FooterView>
  </div>
</template>

<script>
import HeaderView from './layouts/HeaderView.vue';
import FooterView from './layouts/FooterView.vue';
import {svgs} from '@/svgs/svg'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    HeaderView,
    FooterView,
  },
  data () {
    return {
      svgs:svgs,
    }
  }
}
</script>

<style lang="scss">
.mainBox{
  height:var(--var-main-height);
  display: flex;
  justify-content: center;
  align-items: center;
  .mainItem{
    height:var(--var-main-height);
    display:flex;
    height:30vh;
    flex-direction: row;
    .mainType{
      margin:3em;
      height:30vh;
    }
  }
}
</style>
