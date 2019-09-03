<template>

    <div>
    <div class="container marginnnnnz" id="anderes">

        <section class="py-5">
            <div class="row">
                <div class="col-md-12 my-auto text-center">
                    <h2 class="display-4">Sprechen Sie mit uns!
                    </h2>
                    <p class="lead text-muted mb-4">Sie haben eine Anfrage oder möchten sich mit uns über ein Projekt
                        austauschen? <br> Dann schreiben Sie uns oder rufen Sie uns an.
                    </p>
                    <a @click="open" class="btn btn-primary btn-shadow">
                        Kontakt
                    </a>
                </div>
            </div>
        </section>
        <sweet-modal ref="modal" title="Kontakt">
            <p>Architekt <br>
                Dipl.-Ing. Hans Hermann Wagner FH <br>
                Ingenieur für den Hoch- und Tiefbau <br>
                <br>
                26892 Dörpen <br>
                Gewerbegebiet Süd 29 <br>
                <br>
                Tel.: +49 (0) 4963 - 914560 <br>
                Fax: +49 (0) 4963 - 914561</p>
            <PrimaryButton href="mailto:kontakt@wagner-architekt.de">
                <template v-slot:title>
                    Email
                </template>
            </PrimaryButton>
        </sweet-modal>
    </div>
</div>
</template>

<script>
    import PrimaryButton from '@/components/PrimaryButton'
    import PrimaryContactBtn from '@/components/PrimaryContactBtn'
    import { SweetModal, SweetModalTab } from 'sweet-modal-vue'

    export default {
        components: {
            PrimaryButton,
            PrimaryContactBtn,
            SweetModal,
            SweetModalTab,
        },
        methods: {
            open: function () {
                this.$refs.modal.open()
            }
        }
    };
</script>

<style lang="scss">

    .btn-primary {
        background-color: white;
        color: $primary-color;
        font: 100% $font-h;
        border: solid 1px $primary-color;
        padding: 15px 13px 13px 13px !important;
        border-radius: 2px;
    }

    .btn-primary:hover {
        background-color: $primary-color;
        color: #fff;
        border: solid 1px $primary-color;
        cursor: pointer;
    }

    .btn-shadow:hover {
        box-shadow: 3px 3px 0 0 lightgray;
        transition: 0.2s all ease-in-out !important;
        background-color: #354247;
        color: #fff;
        border: 1px solid #354247 !important;
    }

    .btn-shadow {
        box-shadow: 5px 5px 0px 0 #354247;
        background-color: #fff;
        color: #354247;
        border: 1px solid #354247;
    }

    .marginnnnnz {
        margin-bottom: 8rem !important;
    }

    #anderes>div>div>div.sweet-title>h2 {
        margin-top: 0.9rem !important;
    }


</style>