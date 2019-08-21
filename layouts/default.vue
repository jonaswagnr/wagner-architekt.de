<template>

  <div class="container0">
    <Cookie />
    <Header />
    <div class="container">
      <nuxt />
    </div>
    <div class="footer-bg">
      <div class="container">
        <Footer />
      </div>
    </div>
  </div>

</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import Cookie from '@/components/Cookie'
  import sal from 'sal.js'

  export default {
    components: {
      Header,
      Footer,
      Cookie
    },
    mounted() {
      sal({
        threshold: 0.6,
        once: true,
            });
    }
  }
</script>

<style>
   @import "../node_modules/sal.js/dist/sal.css";

  .container {
    max-width: 1140px;
    margin: auto;
  }

  .footer-bg {
    background-image: url('../static/img/wave3.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>