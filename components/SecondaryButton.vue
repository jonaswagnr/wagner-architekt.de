<template>
        <a class="btn btn-secondary btn-shadow">
            <slot name="title">
    
            </slot>
        </a>
    </template>
    
    <style lang="scss">
        .btn-secondary {
            background-color: $primary-color;
            color: #fff;
            font: 100% $font-h;
            border: solid 1px $primary-color;
            padding: 15px 13px 13px 13px !important;
            border-radius: 2px;
            box-shadow: 5px 5px 0px 0 lightgray;
        }
    
        .btn-secondary:hover {
            background-color: #fff;
            color: $primary-color;
            border: solid 1px $primary-color;
            box-shadow: 3px 3px 0 0 $primary-color;
            cursor: pointer;
        }
    

    </style>