'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

var styleWatch = './sass/*.scss';

function css(done) {
    gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
    done();
}

function watch_files(done) {
    gulp.watch(styleWatch, css);
    done();
}

gulp.task("css", css)
gulp.task("watch", watch_files)
