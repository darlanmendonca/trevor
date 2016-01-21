'use strict';

const gulp = require('gulp');
const config = require('../config.js');
const eslint = require('gulp-eslint');

const test = 'test';

gulp.task('lintJS', lintJS);

function lintJS() {
	return gulp
		.src(config.lintJS)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
		.on('error', beep);
}

function beep() {
	const gutil = require('gulp-util');
	gutil.beep();
}
