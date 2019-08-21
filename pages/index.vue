<template>
  <div>
    <Hero />
    <Proof data-sal-duration="800" data-sal="slide-down" data-sal-delay="300" data-sel-easing="ease-out-bounce" />
    <Projects />
    <script>
      var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1100,
        speedAsDuration: true,
        easing: 'easeInOutCubic'
      });
    </script>
  </div>
</template>



<script>
  import Hero from '@/components/Hero'
  import Projects from '@/components/Projects'
  import Proof from '@/components/Proof'
  import sal from 'sal.js'

  export default {
    components: {
      Hero,
      Projects,
      Proof
    },
    mounted() {
      sal();
    }
};

</script>