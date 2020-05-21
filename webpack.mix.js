const mix = require('laravel-mix');

mix.js('src/app.js', 'dist')
    .sass('src/app.scss', 'dist')
    .setPublicPath('dist')
    .browserSync({
        server: true,
        proxy: false
    });