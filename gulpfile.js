var gulp = require('gulp');
debug = require('gulp-debug');
var sourceFiles = ['./public/**/*'];
var destination = 'dist/';

gulp.task('copy', function () {
    return gulp.src([sourceFiles], {base: "."})
      .pipe(gulp.dest(destination));
  });
