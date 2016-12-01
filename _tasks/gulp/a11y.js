var gulp = require('gulp'),
    a11y = require('gulp-a11y'),
    notify = require('gulp-notify');
 
gulp.task('a11y', function () {
  return gulp.src('./_site/**/*.html')
    .pipe(a11y({
      viewportSize: '800x600',
      delay: 1
    }))
    .pipe(a11y.reporter())
    .pipe(notify({ message: 'A11y test complete' }));
});