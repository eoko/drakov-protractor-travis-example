'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var drakov = require('drakov');
var drakovConf = require('../drakov.conf');

gulp.task('drakov', function(done) {
  drakov.run(drakovConf, done);
});
