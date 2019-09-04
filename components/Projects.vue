<template>
  <div class="container">
    <section id="project-scroll" class="py-5">
      <div class="row align-items-center text-md-left mb-5 mb-6rem">
        <div class="col-md-6 order-0 order-xs-1 mb-3rem img-head">
          <div>
            <img data-sal-duration="800" data-sal="slide-up" data-sal-delay="100" data-sel-easing="ease-out-bounce"
              class="img-z-1 img-fluid drop-shadow" :srcset="require('@/static/img/03_cut.jpg').srcSet" />
          </div>
          <div>
            <img data-sal-duration="800" data-sal="slide-up" data-sal-delay="250" data-sel-easing="ease-out-bounce"
              class="img-z-2 img-fluid drop-shadow" :srcset="require('@/static/img/18_cut.jpg').srcSet" />
          </div>
        </div>
        <div class="col-md-6 mb-4 mb-md-0 mb-3rem mblr-3rem">
          <h2 data-sal-duration="800" data-sal="slide-up" data-sal-delay="400" data-sel-easing="ease-out-bounce"
            class="mb-4">Private
            Bauvorhaben</h2>
          <p data-sal-duration="800" data-sal="slide-up" data-sal-delay="500" data-sel-easing="ease-out-bounce"
            class="description-project">In Bauaufträgen privater Herkunft arbeiten wir vor allem an Neubauten oder
            Sanierungen von Wohnhäusern.
            Wir haben in den vergangenen Jahren verschiedene Projekte wie zum Beispiel das Arkadenhaus Papenburg geplant
            und gebaut.</p>
          <PrimaryButton href="/projekte/privat" data-sal-duration="800" data-sal="slide-up" data-sal-delay="600"
            data-sel-easing="ease-out-bounce">
            <template v-slot:title>
              Private Bauvorhaben anschauen
            </template>
          </PrimaryButton>
          <PrimaryButton class="weiternpm install --save-dev css-loader" href="#oeffentlich" v-smooth-scroll="{
            duration: 1100, offset:-70}" data-sal-duration="800" data-sal="slide-up" data-sal-delay="600"
            data-sel-easing="ease-out-bounce">
            <template v-slot:title>
              Weiter
            </template>
          </PrimaryButton>
        </div>
      </div>

      <div class="row align-items-center text-md-right mb-5 mb-6rem">
        <div id="oeffentlich" class="col-md-6 order-md-1 mb-3rem">
          <img data-sal-duration="600" data-sal="slide-up" data-sal-delay="100" data-sel-easing="ease-out-bounce"
            class="img-fluid drop-shadow"
            src="https://images.unsplash.com/photo-1530200917055-116e350d5b7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=998&q=80"" alt=""></div>
                      <div class=" col-md-6 mb-4 mb-md-0 order-md-0 mb-3rem">
          <h2 data-sal-duration="800" data-sal="slide-up" data-sal-delay="400" data-sel-easing="ease-out-bounce"
            class="mb-4">
            Öffentliche Bauvorhaben</h2>
          <p data-sal-duration="800" data-sal="slide-up" data-sal-delay="500" data-sel-easing="ease-out-bounce"
            class="description-project">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend euismod
            varius. Proin venenatis neque dapibus ex elementum suscipit. Donec mi ante, condimentum in dignissim non,
            mattis in magna. Aenean a molestie turpis. Nunc fermentum vulputate fringilla. Ut mi sapien, ultricies
            eleifend tincidunt id, maximus tristique purus.</p>
          <PrimaryButton data-sal-duration="800" data-sal="slide-up" data-sal-delay="600"
            data-sel-easing="ease-out-bounce">
            <template v-slot:title>
              Öffentliche Bauvorhaben anschauen
            </template>
          </PrimaryButton>
          <PrimaryButton class="weiter" href="#gewerblich" v-smooth-scroll="{
            duration: 1100, offset:-70}" data-sal-duration="800" data-sal="slide-up" data-sal-delay="600"
            data-sel-easing="ease-out-bounce">
            <template v-slot:title>
              Weiter
            </template>
          </PrimaryButton>
        </div>
      </div>

      <div class="row align-items-center text-md-left mb-5 mb-6rem">
        <div id="gewerblich" class="col-md-6 order-0 order-xs-1 mb-3rem">
          <img data-sal-duration="600" data-sal="slide-up" data-sal-delay="100" data-sel-easing="ease-out-bounce"
            class="img-fluid drop-shadow"
            src="https://images.unsplash.com/photo-1529676468696-f3a47aba7d5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            alt="">
        </div>
        <div class="col-md-6 mb-4 mb-md-0 mb-3rem">
          <h2 data-sal-duration="800" data-sal="slide-up" data-sal-delay="400" data-sel-easing="ease-out-bounce"
            class="mb-4">
            Gewerbliche Bauvorhaben</h2>
          <p data-sal-duration="800" data-sal="slide-up" data-sal-delay="500" data-sel-easing="ease-out-bounce"
            class="description-project">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend euismod
            varius. Proin venenatis neque dapibus ex elementum suscipit. Donec mi ante, condimentum in dignissim non,
            mattis in magna. Aenean a molestie turpis. Nunc fermentum vulputate fringilla. Ut mi sapien, ultricies
            eleifend tincidunt id, maximus tristique purus.</p>
          <PrimaryButton data-sal-duration="800" data-sal="slide-up" data-sal-delay="600"
            data-sel-easing="ease-out-bounce">
            <template v-slot:title>
              Gewerbliche Bauvorhaben anschauen
            </template>
          </PrimaryButton>
          <PrimaryButton class="weiter" href="#alter" v-smooth-scroll="{
            duration: 1100, offset:-70}" data-sal-duration="800" data-sal="slide-up" data-sal-delay="600"
            data-sel-easing="ease-out-bounce">
            <template v-slot:title>
              Weiter
            </template>
          </PrimaryButton>
        </div>
      </div>

      <div class="row align-items-center text-md-right mb-5 mb-6rem">
        <div id="alter" class="col-md-6 order-md-1 mb-3rem">
          <img data-sal-duration="600" data-sal="slide-up" data-sal-delay="100" data-sel-easing="ease-out-bounce"
            class="img-fluid drop-shadow"
            src="https://images.unsplash.com/photo-1521574873411-508db8dbe55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"" alt=""></div>
                            <div class=" col-md-6 mb-4 mb-md-0 order-md-0 mb-3rem">
          <h2 data-sal-duration="800" data-sal="slide-up" data-sal-delay="400" data-sel-easing="ease-out-bounce"
            class="mb-4">Wohnen im Alter</h2>
          <p data-sal-duration="800" data-sal="slide-up" data-sal-delay="500" data-sel-easing="ease-out-bounce"
            class="description-project">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend euismod
            varius. Proin venenatis neque dapibus ex elementum suscipit. Donec mi ante, condimentum in dignissim non,
            mattis in magna. Aenean a molestie turpis. Nunc fermentum vulputate fringilla. Ut mi sapien, ultricies
            eleifend tincidunt id, maximus tristique purus.</p>
          <PrimaryButton data-sal-duration="800" data-sal="slide-up" data-sal-delay="600"
            data-sel-easing="ease-out-bounce">
            <template v-slot:title>
              Wohnen im Alter anschauen
            </template>
          </PrimaryButton>
          <PrimaryButton class="weiter" href="#anderes" v-smooth-scroll="{
            duration: 1100, offset:-70}" data-sal-duration="800" data-sal="slide-up" data-sal-delay="600"
            data-sel-easing="ease-out-bounce">
            <template v-slot:title>
              Weiter
            </template>
          </PrimaryButton>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
  .img-head {
    position: relative;
  }

  @media (min-width: 992px) {
    .img-z-1 {
      display: block;
      width: 70%;
    }
  }

  @media (max-width: 992px) {
    .img-z-2 {
      display: none !important;
    }
  }

  .img-z-2 {
    display: block;
    width: 40%;
    bottom: -5rem;
    display: block;
    position: absolute;
    right: 4rem;
  }

  h2 {
    font-size: 2.5rem !important;
  }

  .weiter {
    margin-left: 10px;
  }

  .mb-6rem {
    margin-bottom: 9rem !important;
  }

  .mb-3rem {
    margin-bottom: 3rem !important;
  }

  @media (min-width: 992px) {
    .mblr-3rem {
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }

  .description-project {
    margin-bottom: 3rem;
  }
</style>

<script>
  import PrimaryButton from '@/components/PrimaryButton'

  export default {
    components: {
      PrimaryButton
    }
  }
</script>