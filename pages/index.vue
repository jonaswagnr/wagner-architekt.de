<template>
  <div>
    <Hero />
    <Proof data-sal-duration="600" data-sal="slide-up" data-sal-delay="600" data-sel-easing="ease-out-bounce" />
    <Projects />
    <CTAHomePage />
  </div>
</template>



<script>
  import Hero from '@/components/Hero'
  import Projects from '@/components/Projects'
  import Proof from '@/components/Proof'
  import CTAHomePage from '@/components/CTAHomePage'
 

  export default {
    components: {
      Hero,
      Projects,
      Proof,
      CTAHomePage,
    },
};

</script>