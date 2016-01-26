'use strict';

let gulp = require('gulp');
let config = require('../config.js');
let plumber = require('gulp-plumber');
let ngAnnotate = require('gulp-ng-annotate');
let concat = require('gulp-concat');
let minify = require('gulp-uglify');
let babel = require('gulp-babel');

gulp.task('scripts', function() {
  return gulp
    .src(config.scripts.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(ngAnnotate())
    .pipe(babel(config.babel))
    .pipe(concat(config.scripts.destFile))
    .pipe(minify(config.minify))
    .pipe(gulp.dest(config.scripts.dest));
});

function onError(err) {
  let gutil = require('gulp-util');
  let message = new gutil.PluginError(err.plugin, err.message).toString();
  process.stderr.write(message + '\n');
  gutil.beep();
};
