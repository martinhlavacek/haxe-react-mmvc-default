"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //runs a local dev server
var open = require('gulp-open'); // open url in web browser

var config = {
    port:8888,
    devBaseUrl:"http://localhost",
    paths: {
        html: './src/*.html',
        js: './src/js/*.js',
        json: './src/json/*.json',
        dist: './dist',
        mainJs: './src/js/index.js'
    }
};

gulp.task('connect', function(){
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    })
});

gulp.task('open',['connect'], function(){
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function(){

    gulp.src(config.paths.js)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('json', function(){
    gulp.src(config.paths.json)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html,['html']);
    gulp.watch(config.paths.js,['js']);
});

gulp.task('default',['html','js','json','open','watch']);