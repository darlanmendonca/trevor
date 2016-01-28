'use strict';

let gulp = require('gulp');
let bump = require('gulp-bump');
let args = require('yargs').argv;

gulp.task('bump', bumpTask);

function bumpTask() {
  let type = args.type || 'patch'; // major || minor || patch
  gulp
    .src('./bower.json')
    .pipe(bump({type}))
    .pipe(gulp.dest('./'));

   gulp
    .src('./package.json')
    .pipe(bump({type}))
    .pipe(gulp.dest('./'));
}
