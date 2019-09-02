<template>
  <div>
    <section class="py-5">
      <div class="row">
        <div class="col-md-6 my-auto">
          <h1 class="display-4">Private Bauvorhaben</h1>
          <p class="lead text-muted mb-4">Besonders bei Privatbauten ist uns wichtig einen bleibenden Eindruck zu
            hinterlassen. <span class="hashtag">Jedes Projekt ist einzigartig</span> und erfordert eine Menge Arbeit und
            Kreativität.</p>
          <PrimaryButton>
            <template v-slot:title>
              Jetzt anschauen
            </template>
          </PrimaryButton>
        </div>
        <div class="col-md-6"><img class="img-fluid mt-4 mt-md-0" src="../static/img/Saeule.png" alt=""></div>
      </div>
    </section>
    <section class="py-5">
      <div class="row align-items-center text-md-left mb-5 mb-6rem">

        <div class="d-flex col-lg-6 flex-wrap">
          <div class="p-2 col-sm-6"><img class="img-fluid drop-shadow" src="../static/img/02.jpg" alt=""></div>
          <div class="p-2 col-sm-6"><img class="img-fluid drop-shadow" src="../static/img/03.jpg" alt=""></div>
          <div class="p-2 col-sm-6"><img class="img-fluid drop-shadow" src="../static/img/14.jpg" alt=""></div>
          <div class="p-2 col-sm-6"><img class="img-fluid drop-shadow" src="../static/img/11.jpg" alt=""></div>
        </div>
        <div class="col-lg-6">
          <div class="flex-column h-100 p-4">
            <h2>Das Arkadenhaus in Papenburg</h2>

            <p>Das Papenburger Arkadenhaus war 2015 eines unserer größten und zugleich spannensten Projekte. Dabei war
              uns sehr wichtig, ein harmonisches Bild mit dem <span class="hashtag">historisch geprägtem
                Stadtzentrum</span> zu schaffen.</p>

            <PrimaryButton>
              <template v-slot:title>
                Mehr über das Arkadenhaus erfahren
              </template>
            </PrimaryButton>

          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="row align-items-center text-md-left mb-5 mb-6rem">
        <div class="d-flex col-lg-4 flex-wrap">
          <div class="flex-column h-100 p-4 text-md-right">
            <h2>Weitere Projekte</h2>

            <p>In den vergangenen Jahren haben wir viele weitere interessante Objekte geplant.</p>


          </div>
        </div>

        <div class="col-lg-8">
          <div class="flex-column h-100 p-4">
            <carousel :perPage="1" :autoplay="true" :autoplayTimeout="6000" :autoplayHoverPause="true" :paginationEnabled="false">
              <slide>
                <img class="slide-img drop-shadow" src="../static/img/01-gross.jpg" alt="">
              </slide>
              <slide>
                <img class="slide-img drop-shadow" src="../static/img/02.jpg" alt="">
              </slide>
              <slide>
                Slide 3 Content
              </slide>
              <slide>
                Slide 4 Content
              </slide>
              <slide>
                Slide 5 Content
              </slide>
            </carousel>
          </div>
        </div>
      </div>
    </section>


  </div>


</template>

<script>
  import PrimaryButton from '@/components/PrimaryButton'

  export default {
    components: {
      PrimaryButton
    }
  }
</script>


<style>
  .slide-img {
    width: 100%;
  }
</style>