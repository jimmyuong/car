<template>
  <div class="home">
    <HeaderView></HeaderView>
    <main class="main">
    <div class="mainBox">
    </div>
    </main>
    <FooterView></FooterView>
  </div>
</template>

<script>
import HeaderView from './layouts/HeaderView.vue';
import FooterView from './layouts/FooterView.vue';

// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    HeaderView,
    FooterView,
  }
}
</script>
