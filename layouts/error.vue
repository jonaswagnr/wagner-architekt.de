<template>

        <section class="py-5 align-items-center full-height">
            <div class="container align-items-center full-height">
                <div class="row align-items-center text-md-left justify-content-center percenna">
                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <h1 v-if="error.statusCode === 404"> 404</h1>
                        <h1 v-else>An error occurred</h1>
                        <h2>Seite nicht gefunden</h2>
                        <p>Hier wird vermutlich schon etwas Neues geplant.</p>
                        <PrimaryButton href="/">
                            <template v-slot:title>
                              Zurück zur Home Page
                            </template>
                          </PrimaryButton>
                    </div>
                    <div class="col-lg-4">
                            <img class="img-fluid mt-4 mt-md-0 drop-shadow error-pic" :srcset="require('@/static/img/404.jpg').srcSet" />
                    </div>
                </div>
            </div>
        </section>

</template>

<script>
    import PrimaryButton from '@/components/PrimaryButton'

    export default {
        props: ['error'],
        components: {
            PrimaryButton
        },
        layout: 'empty' // you can set a custom layout for the error page
    }
</script>

<style scoped>
    .full-height {
        padding-bottom: 0px !important;
        padding-top: 0px !important;
        height: 100vh;
        min-height: 100vh;
    }
    .percenna {
        margin-top: 6rem;
    }
</style>

