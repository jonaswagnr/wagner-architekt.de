<template>
    <section class="py-5">
        <div class="row">
            <div class="col-md-4 my-auto">
                <!--<h6 class="sub-header">ARCHITEKTURBÜRO WAGNER</h6>-->
                <h1                    
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="600"
                class="display-4">Projekte <br> fürs Leben</h1>
                <p                  
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="300"
                data-aos-duration="600"
                class="lead text-muted mb-4">Seit 1995 arbeiten wir eng mit unseren Kunden zusammen, um spannende
                    Projekte zum Leben zu erwecken.</p>
                <PrimaryButton 
                href="#project-scroll"                
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="550"
                data-aos-duration="600">
                    <template v-slot:title>
                        Zu den Projekten
                    </template>
                </PrimaryButton>
               <!-- <a                 
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="600"
                data-aos-duration="600"
                class="btn btn-secondary" href="#">Über uns</a>-->
            </div>
            <div class="col-md-8"><img                 
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="700"
                data-aos-duration="800"
                class="img-fluid mt-4 mt-md-0 drop-shadow" src="../static/img/arkadenhaus.jpeg"
                    alt=""></div>
        </div>
    </section>
</template>


<style>
    .btn-secondary {
        margin-left: 15px;
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