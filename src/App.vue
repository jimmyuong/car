<template>
  <div>
  <router-view/>
  <div class="side-topleft"></div>
  <div class="side-topright"></div>
  <div class="side-bottomleft"></div>
  <div class="side-bottomright"></div>
  </div>
</template>

<script>

</script>

<style lang="scss">
@import  '@/scss/style.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
[class^="side-"]{
    background-image: url(@/assets/images/svg/side.svg);
  width: 70px;
  height:40px;
  background-repeat: no-repeat;
  position: absolute;
}
.side-bottomleft,.side-bottomright,.side-topleft,.side-topright{
  z-index: 100 ;
}
.side-topleft{
  top: 0;
  left: 0;
  transform: rotateX(180deg);
}
.side-topright{
  top: 0;
  right: 0;
  transform: rotate(180deg);
}
.side-bottomright{
  bottom: 0;
  right: 0;
  //transform: rotateX (180deg);
  transform: rotateY(180deg);
}
.side-bottomleft{
  bottom: 0;
  left: 0;
}


</style>
