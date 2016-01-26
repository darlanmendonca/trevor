'use strict';

let config = {
  lintJS: [
    './config.js',
    './gulpfile.js',
    './tasks/*.js',
    './eslintrc.js',
    './app/components/**/*.js'
  ],
  scripts: {
    src: './app/components/**/*.js',
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
    src: './app/styles.scss',
    dest: './dist',
    destFile: 'trevor.min.css'
  }
};

module.exports = config;
