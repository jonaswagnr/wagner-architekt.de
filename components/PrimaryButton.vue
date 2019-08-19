<template>
    <a v-bind:href="url" class="btn btn-primary btn-shadow">
        <slot name="title">

        </slot>
    </a>
</template>

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
    }

    .btn-shadow:hover {
        box-shadow: 3px 3px 0 0 lightgray;
        transition: 0.2s all ease-in-out;
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
</style>