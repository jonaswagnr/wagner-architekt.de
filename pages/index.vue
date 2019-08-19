<template>
  <div>
    <Hero />
    <Proof data-aos="fade-up" data-aos-offset="100" data-aos-delay="850" data-aos-duration="900" />
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

  export default {
    components: {
      Hero,
      Projects,
      Proof
    }
  }
</script>