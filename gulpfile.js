var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass');

var defaultTasks = ['sass'],
    SRC = './src/grid.scss',
    BUILD_DIR = './build/css/';

gulp.task('sass', function() {
    gulp.src( SRC )
        .pipe( sass({ outputStyle: 'compressed' }) )
        .pipe( rename({ suffix: '.min' }) )
        .pipe( gulp.dest(BUILD_DIR) );
});

gulp.task('default', defaultTasks);

gulp.task('watch', defaultTasks, function() {
    gulp.watch( SRC, ['sass'] );
});
