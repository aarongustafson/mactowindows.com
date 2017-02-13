var gulp = require('gulp'),
    path = require('path'),
    pump = require('pump'),
    folder = require('gulp-folders'),
    gulpIf = require('gulp-if'),
    insert = require('gulp-insert'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    paths = {
        srcPath: './_source/javascript',
        destPath: './j'
    };

gulp.task('js', folder(paths.srcPath, function(folder){
    
    function rename_serviceworker()
    { 
        return rename({
            dirname: '../'
        });
    }
	
	function createErrorHandler( name )
    {
	    return function (err) {
	        console.error('Error from ' + name + ' in compress task', err.toString());
	    };
    }

    return gulp.src(path.join(paths.srcPath, folder, '*.js'))
        .pipe(concat(folder + '.js'))
        .pipe(insert.prepend('(function(window,document){'))
        .pipe(insert.append('}(this,this.document));'))
        .pipe(gulp.dest(destination_folder))
        .pipe(uglify().on('error', createErrorHandler('uglify')))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.destPath))
        .pipe(notify({ message: 'Scripts task complete' }));
    
}));