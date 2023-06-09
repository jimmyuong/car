<template>
  <div class="layouthmi">
    <div class="hmiheader">
      <li>
        <router-link to="/"><i class="i-x" v-html="svgs.home.svg"></i></router-link>
      </li>
      <li>
        <router-link to="/"><i class="i-x" v-html="svgs.bluetooth.svg"></i></router-link>
      </li>
      <li>
        <router-link to="/"><i class="i-x" v-html="svgs.setting.svg"></i></router-link>
      </li>
    </div>
      <div class="lrsc">
        <div class="lrscItem">DAta</div>
        <div class="lrscItem"><CarModel style="width: 100%"></CarModel></div>
      </div>
  </div>
</template>

<script>
import HeaderView from "./layouts/HeaderView.vue";
import CarModel from "../components/CarModeladapt.vue";
import { svgs } from '@/svgs/svg';
// @ is an alias to /src

export default {
  //name: 'HomeView',
  components: {
    HeaderView,
    CarModel,
  },
  data() {
    return {
      times: "", //格式化之后的当前时间
      svgs:svgs,
      drivingdata: {
        speed: "80 km/h",
        mileage: "25,000 miles",
        fuelconsumption: "	8.5 liters/100 km",
        engineRPM: "2,500 RPM",
        temperature: "95°C",
        pressure: "32 psi",
        vehiclealerts: "Check Engine Light",
        navigationinformation: "Los Angeles, ETA: 30 minutes, Light traffic ",
      },
    };
  },
};
</script>

<style lang="scss">
.layouthmi{
  display:flex;
  flex-direction: row;
}
.lrsc {
  display: flex;
  //height: var(--var-main-height);
  height: 80vh;
  .lrscItem {
    flex: 1;
    height: 84vh;
  }
}
.hmiheader{
  display:flex;
  flex-direction: column;
  height:90vh;
  z-index:100;
  background:rgba(0, 68, 61,.2);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  padding:.5em;
  border-radius: 20em;

  margin:5vh 0 5vh 4em;
  li{
    margin:1rem;
  }
}
.portrait{
  height:3em;
  width:3em;
  border-radius: 3em;
  background:rgb(152, 152, 157);
}
</style>
