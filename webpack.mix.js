/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
const mix = require('laravel-mix');


mix.js('resources/js/app.js', 'public/js')
    .babel('public/js/app.js', 'public/js/app.js');



/*const fs = require('fs');
const webpack = require('webpack');
const tailwind = require('tailwindcss');
const path = require('path');
const glob = require('glob');
const exec = require('child_process').exec;
const pwa = require('sw-precache-webpack-plugin');

/*mix.webpackConfig({
    output: {
        chunkFilename: 'js/[name].js',
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
});*/

//mix.version();


//mix.js('resources/js/app/app.js', 'public/js/app.js');