<template>
  <div>
    <Hero />
    <Proof data-sal-duration="600" data-sal="slide-up" data-sal-delay="600" data-sel-easing="ease-out-bounce" />
    <Projects />
  </div>
</template>



<script>
  import Hero from '@/components/Hero'
  import Projects from '@/components/Projects'
  import Proof from '@/components/Proof'
 

  export default {
    components: {
      Hero,
      Projects,
      Proof
    },
    mounted() {
    var scroll = new SmoothScroll('a[href*="#"]', {
          speed: 1100,
          speedAsDuration: true,
          easing: 'easeInOutCubic'
        });
      }
};

</script>