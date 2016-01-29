'use strict';

let config = {
  lintJS: [
    './config.js',
    './gulpfile.js',
    './tasks/*.js',
    './eslintrc.js',
    './app/**/*.js'
  ],
  scripts: {
    src: './app/**/*.js',
    dest: './dist',
    destFile: 'trevor.min.js'
  },
  minify: {
    mangle: false
  },
  babel: {
    presets: ['es2015']
  },
  sass: {
    outputStyle: 'compressed'
  },
  styles: {
    src: './app/app.scss',
    dest: './dist',
    destFile: 'trevor.min.css'
  },
  bump: {
    type: 'minor'
  }
};

module.exports = config;
