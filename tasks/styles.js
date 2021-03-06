'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let autoprefixer = require('gulp-autoprefixer');
let config = require('../config.js');

gulp.task('styles', function() {
  gulp
    .src(config.styles.src)
    .pipe(sass(config.sass).on('error', onError))
    .pipe(autoprefixer())
    .pipe(concat(config.styles.destFile))
    .pipe(gulp.dest(config.styles.dest));
});

function onError (err) {
  let gutil = require('gulp-util');
  let messageFormatted = err.messageFormatted;
  let message = new gutil.PluginError('gulp-sass', messageFormatted).toString();
  process.stderr.write(message + '\n');
  gutil.beep();
}
