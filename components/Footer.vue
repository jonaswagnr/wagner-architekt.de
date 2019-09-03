<template>
    <div class="footer-bg">
        <div class="container">
            <footer class="py-4">
                <div class="container text-center text-lg-left">
                    <div
                        class="row d-flex justify-content-between flex-column flex-lg-row align-items-center align-items-lg-start">
                        <div class="d-flex flex-column col-10 col-lg-5 pl-0 logo-foot">

                            <div
                                class="row d-flex justify-content-between flex-column flex-lg-row align-items-center align-items-lg-start">
                                <div class="col-3">
                                    <div
                                        class="row d-flex justify-content-between flex-column flex-lg-row align-items-center align-items-lg-start">
                                        <img class="mb1 logo-footer" src="../static/img/Group.svg" alt="logo">
                                    </div>
                                </div>
                                <div class="col-9">
                                    <h5>Architekturbüro Wagner</h5>
                                    <p>Projekte fürs Leben</p>
                                </div>
                            </div>
                            <div
                                class="bottomer row d-flex justify-content-between flex-column flex-lg-row align-items-center align-items-lg-start">
                                <div class="col-3">
                                    <div
                                        class="row d-flex justify-content-between flex-column flex-lg-row align-items-center align-items-lg-start">
                                        <img class="mb1 architektenkammer_logo"
                                            src="../static/img/architektenkammer_logo.png" alt="logo">
                                    </div>
                                </div>
                                <div class="col-9">
                                    <h5 class="architektenkammer-type">Mitglied der <br> Architektenkammer <br>
                                        Niedersachsen</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5>Projekte</h5>
                            <ul class="list-inline ml-0">
                                <li class="py-1">
                                    <nuxt-link class="a-remove-style-sec" to="/projekte/privat">Privat</nuxt-link>
                                </li>
                                <li class="py-1">
                                    <nuxt-link class="a-remove-style-sec" to="/projekte/oeffentlich">Öffentlich
                                    </nuxt-link>
                                </li>
                                <li class="py-1">
                                    <nuxt-link class="a-remove-style-sec" to="/projekte/gewerblich">Gewerblich
                                    </nuxt-link>
                                </li>
                                <li class="py-1">
                                    <nuxt-link class="a-remove-style-sec" to="/projekte/wohnen-im-alter">Wohnen im Alter
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5>Über uns</h5>
                            <ul class="list-inline ml-">
                                <li class="py-1">
                                    <nuxt-link class="a-remove-style-sec" to="/about/">Unternehmen</nuxt-link>
                                </li>
                                <li class="py-1">
                                    <nuxt-link class="a-remove-style-sec" to="/about/">Unser Team</nuxt-link>
                                </li>
                                <li class="py-1">
                                    <nuxt-link class="a-remove-style-sec" to="/about/karriere">Karriere</nuxt-link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5>Kontakt</h5>
                            <ul class="list-inline ml-0">
                                <li class="py-1"><a class="a-remove-style-sec"
                                        href="mailto:info@wagner-architekt.de">Email</a>
                                </li>
                                <li class="py-1">
                                    <nuxt-link class="a-remove-style-sec" to="/impressum">Impressum</nuxt-link>
                                </li>
                                <!-- <li class="py-1"><p class="nomargin">+49 0 4963 914560</p></li>
                        <li class="py-1"><p class="nomargin">Gewerbegebiet Süd 29 <br> 26892 Dörpen</p></li>-->
                            </ul>
                        </div>
                        <div class="w-100 border-top my-3"></div>
                    </div>
                    <div class="row vert-center">
                        <h5 class="mb-0 small under-footer-text">&copy; 2019 Wagner. All rights reserved.</h5>
                        <div class="last-link advertise-me">
                            <!-- <PrimaryButton class="small a-advertise-me">
                        <template v-slot:title>
                            made by Jonas Wagner
                        </template>
                    </PrimaryButton>-->
                        </div>

                    </div>

                </div>

        </footer>
    </div>
    </div>
</template>


<style lang="scss">
    .mb1 {
        margin-bottom: 0.8rem;
    }

    @media (min-width: 480px) {
        .advertise-me {
            margin-left: auto !important;
        }
    }

    @media (max-width: 480px) {
        .advertise-me {
            padding-top: 10px !important;
        }
    }

    @media (max-width: 992px) {
        .logo-foot {
            padding-right: 0px;
            padding-bottom: 10px;
        }
    }

    .a-advertise-me {
        text-decoration-color: rgb(255, 101, 132) !important;
        text-decoration-style: wavy !important;
    }

    #__layout>div>div>div>footer>div>div>div>ul>li {
        font-size: 14px;
    }

    #__layout>div>div>div>footer>div>div>div>ul>li>p {
        font-size: 14px !important;
    }

    #__layout>div>div>div>footer>div>div>div>p {
        font-size: 14px !important;
    }

    #__layout>div>div>div>footer>div>div>div>div>div>p {
        font-size: 14px !important;
    }

    .under-footer-text {
        color: $secondary-color !important;
    }

    .logo-footer {
        padding-top: 0;
        padding-bottom: 20px;
        height: 59px;
    }

    @media (min-width: 992px) {
        .col-9 {
            padding-left: 0px !important;
        }
    }

    .architektenkammer_logo {
        margin-left: 15px;
        height: 52px;
    }


    @media (max-width: 992px) {
        .architektenkammer_logo {
            margin-left: 0px;
        }
    }

    .bottomer {
        margin-bottom: 15px !important;
        margin-top: 10px !important;
    }

    .architektenkammer-type {
        font-size: 12px;
        margin-top: 10px;
        line-height: 1.2;
    }

    .footer-bg {
        background-image: url('../static/img/wave3.svg');
        background-repeat: no-repeat;
        background-size: cover;
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