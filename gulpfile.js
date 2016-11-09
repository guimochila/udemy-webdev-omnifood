var gulp = require('gulp'),
    uglify = require('gulp-uglify');

// Styles task
// * Minify CSS files
// * Concatenate multiples files into one
// Auto-prefix CSS
gulp.task('styles', function () {
    console.log('## Starting styles task');
});

// Script task
// * Concatenate javascript files
// * Minify javascript (compress)
// * Compile script like Babel - Convert ES6 files to ES5.
gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('resources/js'));
});

// Images task
// Compress Images
gulp.task('images', function () {
    console.log('## Starting images task');
});

// Default task
gulp.task('default', function () {
    console.log('## Starting defaul task');
})