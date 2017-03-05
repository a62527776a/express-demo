var gulp = require('gulp');
var eslint = require('gulp-eslint');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

gulp.task('es6', function () {  
  return gulp.src('src/**/*.js')
    .pipe($.plumber())
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('lint',function (){
  return gulp.src(['src/**/*.js'])
    .pipe(eslint({configFle:"./.eslintrc"}))
    .pipe(eslint.format())
});

gulp.task('watch', ['es6'], function () {
  gulp.watch(['src/**/*.js'], ['es6', 'lint']);
});