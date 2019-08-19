<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">


                <nuxt-link class="navbar-brand" to="/">
                    <img class="logo" src="../static/img/Group.svg" alt="logo">

                </nuxt-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigations-08"
                    aria-controls="navigations-08" aria-expanded="false" aria-label="Toggle navigation"><span
                        class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navigations-08">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown"><nuxt-link class="nav-link" to="#" data-toggle="dropdown">Projekte</nuxt-link>
                            <div class="dropdown-menu">
                                <nuxt-link class="dropdown-item" to="/projekte/privat">Private Bauvorhaben</nuxt-link>
                                <nuxt-link class="dropdown-item" to="/projekte/oeffentlich">Öffentliche Bauvorhaben</nuxt-link>
                                <nuxt-link class="dropdown-item" to="/projekte/gewerblich">Gewerbliche Bauvorhaben</nuxt-link>
                                <nuxt-link class="dropdown-item" to="/projekte/betreutes-wohnen">Betreutes Wohnen</nuxt-link>
                            </div>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link last-link" to="/about">
                                Über uns
                            </nuxt-link>
                        </li>
                       <!--  <li class="nav-item">
                            <nuxt-link class="nav-link last-link" to="#">
                                Kontakt
                            </nuxt-link>
                        </li>


                                            
                    <li class="nav-item dropdown"><nuxt-link class="nav-link dropdown-toggle" to="#"
                            data-toggle="dropdown">Über uns</nuxt-link>
                        <div class="dropdown-menu"><nuxt-link class="dropdown-item" to="#">Whitepaper</nuxt-link><a
                                class="dropdown-item" to="#">Token</nuxt-link></div>
                    </li> 
                <nuxt-link class="btn btn-outline-primary mt-2 mt-md-0 ml-lg-3" to="#">Kontakt</nuxt-link>-->
                    </ul>
                </div>
            </div>
        </nav>

    </header>
</template>

<style lang="scss">
    .logo {
        padding-top: 10px;
        padding-bottom: 10px;
        height: 50px;
        width: auto;
    }

    .navbar {
        background: #FFFFFF;
        box-shadow: 0 11px 37px -12px rgba(0, 0, 0, 0.20);
    }

    .navbar-brand {
        padding: 0 0;
    }

    .nav-link {
        padding: 8px 16px !important;
    }

    .last-link {
        padding-right: 0px !important;
    }

    @media (min-width: 992px) {
        .dropdown:hover>.dropdown-menu {
            display: block;
        }
    }

    .nav-link:hover {
        color: $primary-color !important;
    }

    .navbar {
        font: 100% $font-h;
        color: $primary-color-muted;
        font-size: 18px;
    }

    .dropdown-menu {
        margin: 0 !important;
        padding: 0 !important;
        border: 0px !important;
        box-shadow: 0 5px 25px -5px rgba(15, 18, 63, 0.2);
        left: 10px;
        animation: dropdown-fade 0.25s ease-in-out;
        transform-origin: top;

    }

    .dropdown-item {
        padding: 16px !important;
        color: $secondary-color;
    }

    @keyframes dropdown-fade {
        from {
            opacity: 0.25;
            visibility: hidden;
            transform: scaleY(0);
            transform: rotate3d(1, 1, 0, 340deg);
        }

        to {
            opacity: 1;
            visibility: visible;
            transform: scaleY(1);
        }
    }
</style>