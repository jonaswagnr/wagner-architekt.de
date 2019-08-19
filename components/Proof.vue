<template>
    <section class="py-5 mb-5">
        <div class="container drop-shadow">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-2 mb-4 flex-center-vertically">
                    <h5 class="text-center no-margin">Bekannt aus <br> Projekten mit</h5>
                </div>
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-4 col-md-2 mb-4 flex-center-vertically"><img class="img-fluid logo-fluid"
                                src="../static/img/zwergnase_logo.png" alt="zwergnase">
                        </div>
                        <div class="col-4 col-md-2 mb-4 flex-center-vertically"><img class="img-fluid logo-fluid"
                                src="../static/img/Arkadenhaus_Logo.png" alt="">
                        </div>
                        <div class="col-4 col-md-2 mb-4 flex-center-vertically"><img class="img-fluid logo-fluid"
                                src="../static/img/hackmann_logo.png" alt="Zweirad_hackmann">
                        </div>
                        <div class="col-4 col-md-2 mb-0 mb-md-4 flex-center-vertically"><img class="img-fluid logo-fluid"
                                src="https://marquettewire.org/wp-content/uploads/2019/01/2000px-Netflix_2015_logo.svg-900x243.png" alt="">
                        </div>
                        <div class="col-4 col-md-2 mb-0 mb-md-4 flex-center-vertically"><img class="img-fluid logo-fluid"
                                src="https://www.designpieces.com/wp-content/uploads/2015/09/Google_2015_logo.svg" alt="">
                        </div>
                        <div class="col-4 col-md-2 mb-0 mb-md-4 flex-center-vertically"><img class="img-fluid logo-fluid"
                            src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="">
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>

    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }

    .no-margin {
        margin-bottom: 0px !important;
    }

    .logo-fluid:hover {
    -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
    }

    .logo-fluid {
        transition: 0.2s ease-in-out;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
   object-fit: contain;
   max-width: 75%;
   max-height: 75%;
   width: auto;
   height: auto;

    }
</style>