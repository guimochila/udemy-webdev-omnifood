var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer');

// Styles task
// * Minify CSS files
// * Concatenate multiples files into one
// Auto-prefix CSS
gulp.task('styles', function () {
    return gulp.src(['src/css/style.css', 'src/css/**/*.css'])
        .pipe(autoprefixer())
        .pipe(concat('styles.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/resources/css'))
        .pipe(livereload());
});

// Script task
// * Concatenate javascript files
// * Minify javascript (compress)
// * Compile script like Babel - Convert ES6 files to ES5.
gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/resources/js'))
        .pipe(livereload());
});

// Images task
// Compress Images
gulp.task('images', function () {
    console.log('## Starting images task');
});

// Watch task
// Watch all changes made in the files
gulp.task('watch', function () {
    require('./server.js');
    livereload.listen();
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/css/**/*.css', ['styles']);
});

// Default task
gulp.task('default', function () {
    console.log('## Starting defaul task');
})