<template>

  <div>
    <Cookie />
    <Header />
    <nuxt />
    <Footer />
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
</style>