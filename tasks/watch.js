'use strict';

const gulp = require('gulp');
const config = require('../config.js');

gulp.task('watch', taskWatch);

function taskWatch() {
	gulp.watch(config.lintJS, ['lintJS']);
}
