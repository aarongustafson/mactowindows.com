var gulp = require('gulp');

gulp.task('watch', ['setWatch'], function() {
	gulp.watch('./_source/scss/**', ['css']);
	gulp.watch('./_source/javascript/**', ['js']);
	gulp.watch('./_source/images/**', ['images']);
	gulp.watch('./_site/**/*.html', ['a11y']);
});