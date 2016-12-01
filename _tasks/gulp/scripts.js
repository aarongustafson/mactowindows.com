var gulp = require('gulp'),
    path = require('path'),
    pump = require('pump'),
    folder = require('gulp-folders'),
    gulpIf = require('gulp-if'),
    insert = require('gulp-insert'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename');

gulp.task('js', folder(source_folder, function(folder){
    
    var paths = {
        srcPath: './source/javascript',
        destPath: './j'
    };

    function rename_serviceworker = rename({
        dirname: '../'
    });
	
	function createErrorHandler( name )
    {
	    return function (err) {
	        console.error('Error from ' + name + ' in compress task', err.toString());
	    };
    }

    return gulp.src(path.join(source_folder, folder, '*.js'))
        .pipe(concat(folder + '.js'))
        .pipe(insert.prepend('(function(window,document){'))
        .pipe(insert.append('}(this,this.document));'))
        .pipe(gulp.dest(destination_folder))
        .pipe(uglify().on('error', createErrorHandler('uglify')))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(destination_folder))
        .pipe(notify({ message: 'Scripts task complete' }));
    
}));