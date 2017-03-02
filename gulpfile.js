var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');
  
var $ = require('gulp-load-plugins')();

gulp.task('es6', function() {  
  return gulp.src('src/**/*.js')
    .pipe($.plumber())
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', ['es6'], function() {
  gulp.watch(['src/**/*.js'], ['es6']);
});