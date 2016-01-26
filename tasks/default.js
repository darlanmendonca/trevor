'use strict';

const gulp = require('gulp');

gulp.task('default', [
	'lintJS',
  'scripts',
  'styles',
	'watch'
]);
