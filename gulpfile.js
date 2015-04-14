// Include gulp
var gulp = require('gulp');
// Define source and build directories
var src = 'dev/';
var build = 'build/';
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

// Default task
gulp.task('default', ['scripts']);