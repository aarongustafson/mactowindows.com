var gulp     = require('gulp'),
	newer    = require('gulp-newer'),
	imagemin = require('gulp-imagemin'),
	notify   = require('gulp-notify'),
    webp     = require('gulp-webp');

gulp.task('images', function() {
	
	var paths = {
        srcPath: './source/images',
        destPath: './i'
    };
	
	// Optimize & move
	gulp.src( paths.srcPath + '/**/*.{jpg,png,svg,gif}')
		 // Only new stuff
		.pipe(newer(paths.destPath))
		 // Optimize
		.pipe(imagemin())
		 // Copy
		.pipe(gulp.dest(paths.destPath))
		;

	// Make WebP versions or PNG & JPG
	gulp.src( paths.srcPath + '/**/*.{jpg,png}' )
		 // Only new stuff
		.pipe(newer(paths.destPath))
		 // WebP
		.pipe(webp())
		 // Publish
		.pipe(gulp.dest(paths.destPath))
		;

	return true;

});