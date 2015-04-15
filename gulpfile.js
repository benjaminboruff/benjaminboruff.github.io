// Include gulp
var gulp = require('gulp');
// Define source and build directories
var src = 'dev/';
var build = '/';
// mkdev directories
var devsrc = 'public/vendor/';
var = jqsrc = 'jquery/dist/jquery.js';
var = bootjssrc = 'bootstrap/dist/js/bootstrap.js';
var = bootcsssrc = 'bootstrap/dist/css/bootstrap.css';
var = bootcssthsrc = 'bootstrap/dist/css/bootstrap-theme.css';
var = angularsrc = 'angular/angular.js';
var = angularrtsrc = 'angular-route/angular-route.js';
var devdest = 'dev/';


// Include plug-ins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Concatenate js files from app-dev into app
gulp.task('scripts', function () {
  return gulp.src(src + 'js/*.js')
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(build + 'js/'));
});

// Move index.html from dev to build
gulp.task('index', function () {
  return gulp.src(src + 'index.html')
    .pipe(gulp.dest(build));
});

// Setup Angular dev directories in main project directory
gulp.task('mkdevng', function () {
  return gulp.src(devsrc +)
});

// Default task
gulp.task('default', ['scripts']);