<template>
    <header>
        <div class="box">
              <nav>
                <li>
                  <router-link to="/"><i v-html="home"></i></router-link>
                  <router-link to="/table">TableView</router-link>
                  <router-link to="/car">CarView</router-link>
                  <router-link to="/chat">ChatView</router-link>
                  <router-link to="/play">PlayView</router-link>
                  <router-link to="/box">BoxView</router-link>
                </li>
                <li>
                <router-link to="/setting"><i v-html="setting"></i></router-link>
                <router-link to="/login"><i v-html="people"></i></router-link>
                </li>
              </nav>
              <div class="top"></div>
              <div class="flash"></div>
              <div class="middlea"></div>
              <div class="middle"></div>
              <div class="flashbottom"></div>
              <div class="bottoma"></div>
              <div class="bottom"><span class="title">MAKE THE PREFECT WORLD</span></div>
        </div>
<!--nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav-->
    </header>

</template>

<script>
 export default {
  data () {
    return {
      home:'<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.85067 12.2146L15.5378 8.13017C15.6772 8.04504 15.8375 8 16.0009 8C16.1643 8 16.3245 8.04504 16.464 8.13017L23.1502 12.2155C23.4098 12.3744 23.6243 12.5973 23.7731 12.8628C23.9219 13.1283 24 13.4276 24 13.7319V21.6235C24 22.095 23.8127 22.5472 23.4793 22.8806C23.1459 23.214 22.6937 23.4013 22.2222 23.4013H9.77778C9.30628 23.4013 8.8541 23.214 8.5207 22.8806C8.1873 22.5472 8 22.095 8 21.6235V13.7319C7.99992 13.4273 8.07812 13.1278 8.22707 12.8621C8.37603 12.5964 8.59076 12.3735 8.85067 12.2146Z" fill="black"/> </svg>',
      people:"<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'> <g clip-path='url(#clip0_649_16306-899876)'> <path d='M18 19L6 19L6 18C6 15.2386 8.23858 13 11 13L13 13C15.7614 13 18 15.2386 18 18L18 19Z' stroke='' stroke-width='1.5'/> <circle cx='12' cy='9' r='4' stroke='' stroke-width='1.5'/> </g> <defs> <clipPath id='clip0_649_16306-899876'> <rect width='24' height='24' fill='white'/> </clipPath> </defs> </svg>"
    }
  }
 }
</script>


<style lang="scss">

    html,body{
      padding:0;
      margin:0;
    }
    body{
      background-image: url("@/assets/images/svg/background.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    .title{
      animation:title 2s ease-in-out;
      font-size: 1.2rem;
      font-weight: bolder;
    }
    nav{
      position: absolute;
      z-index: 100;
      width:100%;
      height:100%;
      display: flex;
      justify-content: space-between;
      align-items:end;
      li{
        display: flex;
        justify-content: center;
        align-items: center;
        a{
          padding:0 .3rem;
        display: flex;
        justify-content: center;
        align-items: center;

        }
        height:2rem;
        padding:1rem 2rem;
      }
    }

    .box{
      position:relative;
      min-height:90px;
      width: 100%;
      margin:auto;
      left:0;
      right:0;
    }

    .top,.middlea,.middle,.bottoma,.bottom{
      max-width: 1900px;
      min-height:90px;
      margin:auto;
      top:-6px;
      left:0;
      right:0;
      position: absolute;
      background-repeat: no-repeat;
      background-size:100%;
      background-position: center -6px;
    }

    .flash{
      height:90px;
      width: 100%;
      left:0;
      position: absolute;
      background-repeat: no-repeat;
      background-position: center -6px;
    }

    .flashbottom{
      height:90px;
      width: 100%;
      left:0;
      right:0;
      position: absolute;
      z-index: 33;
      //background-color: blue;
      //background-repeat: no-repeat;
      //background-position-x: -36px;
      background-image: url("@/assets/images/png/flashbottom.png") ;
      background-repeat: no-repeat;
      background-position-y: 60px;
      animation: flashBottom 10s infinite;
    }


    .top{
      z-index: 37; 
      background-image: url("@/assets/images/png/top.png");
      animation:top .5s ease-in-out;
    }
    .flash{
      z-index: 36;
      //background-position-y: 2px;
      background-size:15%;
      background-image: url("@/assets/images/png/flash.png");
      animation:flash 10s infinite;
    }
    .middlea{
      z-index: 35;
      background-image: url("@/assets/images/svg/middlea.svg");
      animation:middle 1s ease-in-out;
    }
    .middle{
      z-index: 34;
      background-image: url("@/assets/images/png/middle.png");
      animation:middle 1s ease-in-out;
    }
    .bottoma,.bottom{
      text-align: center;
      color:white;
      padding-top:10px;
      line-height: 90px;
      background-position-y: 10px;
    }
    .flashBottom{
      z-index: 33;
      background-image: url("@/assets/images/png/flashbottom.png");
      //animation:bottom 1.5s ease-in-out;
    }
    .bottoma{
      z-index: 32;
      background-image: url("@/assets/images/svg/bottoma.svg");
      animation:bottom 1.5s ease-in-out;
    }
    .bottom{
      z-index: 31;
      background-image: url("@/assets/images/png/bottom.png");
      animation:bottom 1.5s ease-in-out;
    }

    .border-box{
    border:1px solid transparent;
    //background:linear-gradient(to bottom, #00B7BD,#005757);
    animation: border-animation 2s ease-in-out infinite;
  }

  @keyframes flash{
    0%{ background-position-x: 30%;opacity: 0;background-size: 0;}
    10%{ background-position-x: 30%;opacity: 0;background-size: 30%;}
    50%{background-position-x: 50%;opacity: 1; background-size: 30%;}
    90%{ background-position-x: 70%;opacity: 0;background-size: 30%;}
    100%{ background-position-x: 70%;opacity: 0;background-size: 0;}
  }
  @keyframes flashBottom{
    0%{background-position-x:30%;opacity: 0;}
    20%{background-position-x:40%;opacity: 0;}
    80%{background-position-x:50%;opacity: 1;}
    100%{background-position-x:70%;opacity: 0;}

  }

</style>