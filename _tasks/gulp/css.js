var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-clean-css'),
    //notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    csso = require('gulp-csso'),
    shorthand = require('gulp-shorthand'),
    uncss = require('gulp-uncss');

gulp.task('css', function() {
    
    var paths = {
        srcPath:     './_source/scss/**/*.scss',
        destPath:    './c',
        importsPath: './_source/scss/'
    };

    return gulp.src(paths.srcPath)
        .pipe(sass({
            precision: 4
         }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest(paths.destPath))
        .pipe(rename({suffix: '.min'}))
        .pipe(shorthand())
        //.pipe(uncss({
        //   html: ['_site/**/*.html'],
        //    ignore: [
        //        // /winners/
        //    ]
        // }))
        .pipe(csso())
        .pipe(minifycss())
        .pipe(gulp.dest(paths.destPath));
       // .pipe(notify({ message: 'Styles task complete' }));
});