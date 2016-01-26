'use strict';

let gulp = require('gulp');
let bower = require('bower-files')();
let dependencies = bower.relative(__dirname).ext('scss').files;
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let config = require('../config.js');

gulp.task('styles', function() {
  gulp
    .src(config.styles.src)
    .pipe(sass(config.sass).on('error', onError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.styles.dest));
});

function onError (err) {
  let gutil = require('gulp-util');
  let messageFormatted = err.messageFormatted;
  let message = new gutil.PluginError('gulp-sass', messageFormatted).toString();
  process.stderr.write(message + '\n');
  gutil.beep();
}
