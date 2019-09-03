<template>
  <div>
    <div class="container">
      <section class="py-5">
        <div class="row">
          <div class="col-md-6 my-auto">
            <h1 class="display-4">Private Bauvorhaben</h1>
            <p class="lead text-muted mb-4">Besonders bei Privatbauten ist uns wichtig einen bleibenden Eindruck zu
              hinterlassen. <span class="hashtag">Jedes Projekt ist einzigartig</span> und erfordert eine Menge Arbeit
              und
              Kreativität.</p>
            <PrimaryButton  href="#privat" v-smooth-scroll="{
              duration: 1100,offset:-70}">
              <template v-slot:title>
                Jetzt anschauen
              </template>
            </PrimaryButton>
          </div>
          <div class="col-md-6"><img class="img-fluid mt-4 mt-md-0"
              :srcset="require('@/static/img/Saeule.png').srcSet" />
          </div>
        </div>
      </section>
    </div>
    <div class="wave4">
      <div class="container">
        <section class="py-5">
          <div class="row align-items-center text-md-left mb-5 mb-6rem">

            <div id="privat" class="d-flex col-lg-6 flex-wrap">
              <div class="p-2 col-sm-6">
                <img v-img:arkadenhaus class="img-fluid drop-shadow" src="@/static/img/02.jpg" alt="Arkadenhaus Front-Süd">
              </div>
              <div class="p-2 col-sm-6">
                <img v-img:arkadenhaus class="img-fluid drop-shadow" src="@/static/img/03.jpg" alt="Arkadenhaus Front-Süd 2">
              </div>
              <div class="p-2 col-sm-6">
                <img v-img:arkadenhaus class="img-fluid drop-shadow" src="@/static/img/14.jpg" alt="Giovanni L. Gelato">
              </div>
              <div class="p-2 col-sm-6">
                <img v-img:arkadenhaus class="img-fluid drop-shadow" src="@/static/img/18.jpg" alt="Arkadenhaus Fassade">
              </div>
            </div>
              <div class="col-lg-6">
                <div class="flex-column h-100 p-4">
                  <h2>Das Arkadenhaus in Papenburg</h2>

                  <p>Das Papenburger Arkadenhaus war 2015 eines unserer größten und zugleich spannensten Projekte. Dabei
                    war
                    uns sehr wichtig, ein harmonisches Bild mit dem <span class="hashtag">historisch geprägtem
                      Stadtzentrum</span> zu schaffen.</p>

                  <PrimaryButton href="/projekte/privat/arkadenhaus">
                    <template v-slot:title>
                      Mehr über das Arkadenhaus erfahren
                    </template>
                  </PrimaryButton>

                </div>
              </div>
            </div>
        </section>
      </div>
    </div>
    <div class="container-fluid">

      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2>Ein Ausschnitt aus unsererem Portfolio</h2>
            </div>
            <div class="col-md-6">
              <!-- <p>We are constantly looking for new partners to migrate onto the Piper Net. The future of the internet is
                here - venture towards it with Pied Piper!</p> -->
            </div>
          </div>
        </div>
        <div class="container-fluid mt-4">
          <div class="row">
            <div class="col-md-6 col-lg-3 p-0 imgmarg">
              <img v-img:privat-portfolio class="img-fluid drop-shadow" src="../static/img/01-gross.jpg"
                alt="Arkadenhaus Front">
            </div>
            <div class="col-md-6 col-lg-3 p-0 imgmarg">
              <img v-img:privat-portfolio class="img-fluid drop-shadow" src="../static/img/02.jpg"
                alt="Arkadenhaus Front">
            </div>
            <div class="col-md-6 col-lg-3 p-0 imgmarg">
              <img v-img:privat-portfolio class="img-fluid drop-shadow" src="../static/img/03.jpg"
                alt="Arkadenhaus Front">
            </div>
            <div class="col-md-6 col-lg-3 p-0 imgmarg">
              <img v-img:privat-portfolio class="img-fluid drop-shadow" src="../static/img/10.jpg"
                alt="Arkadenhaus Front">
            </div>
            <div class="col-md-6 col-lg-3 p-0 imgmarg">
              <img v-img:privat-portfolio class="img-fluid drop-shadow" src="../static/img/11.jpg"
                alt="Arkadenhaus Front">
            </div>
            <div class="col-md-6 col-lg-3 p-0 imgmarg">
              <img v-img:privat-portfolio class="img-fluid drop-shadow" src="../static/img/121.jpg"
                alt="Arkadenhaus Front">
            </div>
            <div class="col-md-6 col-lg-3 p-0 imgmarg">
              <img v-img:privat-portfolio class="img-fluid drop-shadow" src="../static/img/14.jpg"
                alt="Arkadenhaus Front">
            </div>
            <div class="col-md-6 col-lg-3 p-0 imgmarg">
              <img v-img:privat-portfolio class="img-fluid drop-shadow" src="../static/img/18.jpg"
                alt="Arkadenhaus Front">
            </div>
            <div class="col-md-6 col-lg-3 p-0 imgmarg">
              <img v-img:privat-portfolio class="img-fluid drop-shadow" src="../static/img/19.jpg"
                alt="Arkadenhaus Front">
            </div>
            <div class="col-md-6 col-lg-3 p-0 imgmarg">
              <img v-img:privat-portfolio class="img-fluid drop-shadow" src="../static/img/20.jpg"
                alt="Arkadenhaus Front">
            </div>
            <div class="col-md-6 col-lg-3 p-0 imgmarg">
              <img v-img:privat-portfolio class="img-fluid drop-shadow" src="../static/img/6.jpg"
                alt="Arkadenhaus Front">
            </div>
            <div class="col-md-6 col-lg-3 p-0 imgmarg">
              <img v-img:privat-portfolio class="img-fluid drop-shadow" src="@/static/img/01-gross.jpg"
                alt="Arkadenhaus Front">
            </div>
          </div>
        </div>
      </section>
    </div>


    <!-- <div class="container">
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
              <carousel :perPage="1" :loop="true" :autoplay="true" :autoplayTimeout="3000" :autoplayHoverPause="true"
                :paginationEnabled="false" :navigationEnabled="true">
                <slide>
                  <img class="slide-img drop-shadow" :srcset="require('@/static/img/01-gross.jpg').srcSet" />
                </slide>
                <slide>
                  <img class="slide-img drop-shadow" :srcset="require('@/static/img/02.jpg').srcSet" />
                </slide>
                <slide>
                  <img class="slide-img drop-shadow" :srcset="require('@/static/img/02.jpg').srcSet" />
                </slide>
                <slide>
                  <img class="slide-img drop-shadow" :srcset="require('@/static/img/02.jpg').srcSet" />
                </slide>
                <slide>
                  <img class="slide-img drop-shadow" :srcset="require('@/static/img/02.jpg').srcSet" />
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </section>
    </div> -->

  </div>


</template>

<script>
  import PrimaryButton from '@/components/PrimaryButton'


  export default {
    components: {
      PrimaryButton
    },
    responsiveLoader: {
      min: 1080
    }
  };
</script>



<style>
.container-fluid {
  max-width: 1500px;
  margin-bottom: 5rem;
}

  .imgmarg {
    padding: 10px !important;
  }

  .modal {
    background-color: rgba(0, 0, 0, 0.7);
  }

  .slide-img {
    width: 100%;
  }

  .wave4 {
    background-image: url('../static/img/wave4.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>