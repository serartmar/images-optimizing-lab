'use strict';

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');

//Optimizes images with no-repeating
gulp.task('images', function(){
  return gulp.src('todo/*.+(png|JPG|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,
      verbose: true
    })))
  .pipe(gulp.dest('done'))
});

//Cleans up build folder
gulp.task('clean', function(){
  return del('done');
});

gulp.task('default', gulp.series('clean', 'images')
);
