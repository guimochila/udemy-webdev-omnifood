var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    del = require('del');

//Handlebars plugin
var handlebars = require('gulp-compile-handlebars');

//Image compression
var imagemin = require('gulp-imagemin'),
    imageminPngQuant = require('imagemin-pngquant'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress');

//Image Path and extensions
var IMAGES_PATH = 'src/img/*.{png,jpeg,jpg,svg,gif}';
    
// Styles task
// * Minify CSS files
// * Concatenate multiples files into one
// Auto-prefix CSS
gulp.task('styles', function () {
    return gulp.src(['src/css/style.css', 'src/css/**/*.css'])
        .pipe(plumber(function (err) {
            console.log('Styles task error: \n' + err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(concat('styles.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/resources/css'))
        .pipe(livereload());
});

// Script task
// * Concatenate javascript files
// * Minify javascript (compress)
// * Compile script like Babel - Convert ES6 files to ES5.
gulp.task('scripts', function () {
    return gulp.src('src/js/*.js')
        .pipe(plumber(function (err) {
            console.log('Scripts task error: \n' + err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/resources/js'))
        .pipe(livereload());
});

// Images task
// Compress Images
gulp.task('images', function () {
    return gulp.src(IMAGES_PATH)
    .pipe(imagemin(
        [
            imagemin.gifsicle(),
            imagemin.jpegtran(),
            imagemin.optipng(),
            imagemin.svgo(),
            imageminPngQuant(),
            imageminJpegRecompress()
        ]
    ))
    .pipe(gulp.dest('public/resources/img'));
});

//Template task
// Handlebars templates
gulp.task('templates', function() {
    var options = {
        batch: ['./src/templates/components']
    };
    return gulp.src('src/templates/index.hbs')
        .pipe(plumber(function (err) {
            console.log('Scripts task error: \n' + err);
            this.emit('end');
        }))
        .pipe(handlebars(null, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('public/'))
        .pipe(livereload());
});

//Gulp copy vendors static files to public - Vendors folder
gulp.task('copyVendors', function() {
    return gulp.src(['src/vendors/**/*'], {
        base: 'src'
    }).pipe(gulp.dest('public'))
});

//Gulp copy favicons - favicons folder
gulp.task('copyFavicons', function() {
    return gulp.src(['src/favicons/**/*'], {
        base: 'src'
    }).pipe(gulp.dest('public/resources'))
});

//Clean task
//Clear the public folder
gulp.task('clean', function () {
    del(['public/*']);
});

// Watch task
// Watch all changes made in the files
gulp.task('watch', ['default'], function () {
    require('./server.js');
    livereload.listen();
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/css/**/*.css', ['styles']);
    gulp.watch('src/templates/**/*.hbs', ['templates']);
});

// Default task
gulp.task('default', ['clean', 'copyVendors', 'copyFavicons', 'images', 'templates', 'styles', 'scripts'], function () {});