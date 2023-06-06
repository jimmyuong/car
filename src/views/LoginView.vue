<template>
<div>
<HeaderView></HeaderView>
  <main id="login">
     <div id="loginBox">
     <form>
     <div class="time">{{times}}</div>
     <input type="text" class="logininput-Text" placeholder="name/email/phone/code" value="jimmywong">
     <input type="password" class="logininput-Password" value="123456789">
     <router-link to="/" class="loginSubmit" >SUBMIT</router-link>

     </form>
     </div>
  </main>
  </div>
</template>

<script>
import HeaderView from './layouts/HeaderView.vue';
// @ is an alias to /src

export default { 
     //name: 'HomeView',
  components: {
    HeaderView
  },
  data() {
    return {
      times:'',//格式化之后的当前时间
    };
  },
  created() {
    this.getTimes()
  },
  // 在Vue实例销毁前，清除我们的定时器
  beforeDestroy() {
    if (this.times) {
      clearInterval(this.getTimesInterval); 
    }
  },
    methods: {
        //登录
        login(formName){
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log('登录',this.form)
              this.$store.dispatch('user/getUserLogin',this.form).then(() => {
                this.$router.push({ path: this.redirect || '/' })
              }).catch(() => {
                this.loading = false
              })
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
            getTimes(){
      setInterval(this.getTimesInterval, 1000);
    },
    getTimesInterval:function() {
      let _this = this;
      let year = new Date().getFullYear(); //获取当前时间的年份
      let month = new Date().getMonth() + 1; //获取当前时间的月份
      let day = new Date().getDate(); //获取当前时间的天数
      let hours = new Date().getHours(); //获取当前时间的小时
      let minutes = new Date().getMinutes(); //获取当前时间的分数
      let seconds = new Date().getSeconds(); //获取当前时间的秒数
      //当小于 10 的是时候，在前面加 0
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      //拼接格式化当前时间
      _this.times = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
    },
    }
}

</script>

<style lang="scss">
[class^="logininput-"]{
    height:3rem;
    font-size:2rem;
    width: 100%;
    outline:0;
    padding:0;
    margin:0;
    color: #00B7BD;
    text-align: center;
    background:transparent;
    //border:0;
    border:1px solid #006468;
      color: #006468;
    margin-bottom:1rem;
    transition: all .3s ease-in-out;
    &:hover{
      border:1px solid #00B7BD;
    color: #00B7BD;
      
    }
    //border-bottom:1px solid #00B7BD;
}
.time{
  font-size: 4rem;
  font-weight: bold;
  line-height: 4rem;
  padding-bottom: 2rem;
    color: #00B7BD;
}
.loginSubmit{
  margin-top:2rem;
    height:3rem;
    line-height:3rem;
    width: 100%;
    display: block;
    border:0;
    padding:0;
    transition: all .3s ease-in-out;
    //background-color: #006468;
    border-radius: 8px;
    color:#00B7BD;
    background-color: transparent;
    box-shadow: inset 0 0 20px 0 #00b7bd;
    &:hover{
      color:white;
    background-color: #00b7bd;
    box-shadow: inset 0 0 20px 0 #002324; 
    //  background-color: #00B7BD;
     // box-shadow: 0 10px 3px black;
    }
}
#login{
    display: flex;
    justify-content: center;
    align-items: center;
    //height:100%;
    //width:100%;
}
#loginBox{
  padding:2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid transparent;
    //height:380px;
    height:100%;
    box-sizing: border-box;
    width:380px;

    //animation: border-animation 3s infinite;
    animation: main 2s linear;
    -webkit-backdrop-filter: saturate(180%) blur(30px);
    backdrop-filter: saturate(180%) blur(30px);
    &:hover{
      //animation:outline 2s infinite; 
    }
}


</style>
