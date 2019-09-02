<template>
    <div>
        <section class="py-5 margin-bbb">

            <div class="row">
                <div class="col-md-6 my-auto">
                    <h1 class="display-4">Hinter jedem Projekt steht ein Team</h1>
                </div>
                <div class="col-md-6"><img class="drop-shadow img-fluid mt-4 mt-md-0"
                        src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
                        alt="">
                </div>
            </div>
        </section>
        <section class="py-5">
            <div class="container text-center">
                <!-- <h2 class="mb-5">Unser Team</h2> -->
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="card drop-shadow"><img class="card-img-top"
                                        src="https://images.unsplash.com/photo-1515486191131-efd6be9f711f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        alt="">
                                    <div class="card-body">
                                        <h5 class="card-title">Hans Hermann Wagner</h5>
                                        <p>Ein Auge für das richtige Maß und Gründer des Architekturbüros. Hans Hermann
                                            ist ein leidenschaftlicher Tierfreund und Familienvater von drei Kindern.
                                            Als Vogelliebhaber freut er sich stets über den Besuch seiner Störche.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="card drop-shadow"><img class="card-img-top"
                                        src="https://images.unsplash.com/photo-1482849297070-f4fae2173efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        alt="">
                                    <div class="card-body">
                                        <h5 class="card-title">Regina Janßen</h5>
                                        <p>Nobody will be able to use your data without your consent.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="card drop-shadow"><img class="card-img-top"
                                        src="https://images.unsplash.com/photo-1482849297070-f4fae2173efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        alt="">
                                    <div class="card-body">
                                        <h5 class="card-title">Tatjana XYZ</h5>
                                        <p>Your data is stored in many places at once. Awesome, right?</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="card drop-shadow"><img class="card-img-top"
                                        src="https://images.unsplash.com/photo-1482849297070-f4fae2173efe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                        alt="">
                                    <div class="card-body">
                                        <h5 class="card-title">Annette</h5>
                                        <p>Nobody will be able to use your data without your consent.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Career />
    </div>
</template>



<script>
    import Career from '@/components/Career'


    export default {
        components: {
            Career
        }
    };

</script>

<style>
    .card {
        border: 0px;
    }

    .margin-bbb {
        margin-bottom: 5rem !important;
    }
</style>