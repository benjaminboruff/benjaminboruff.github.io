// Include gulp
var gulp = require('gulp');

// Include plug-ins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var stylemin = require('gulp-cssnano');
var templateCache = require('gulp-angular-templatecache');
var runSequence = require('run-sequence');

// Define source and build directories
var src = 'dev/';
var build = './';
// mkdev directories
var devsrc = 'public/vendor/';
var jqsrc = 'jquery/dist/jquery.js';
var bootjssrc = 'bootstrap/dist/js/bootstrap.js';
var bootcsssrc = 'bootstrap/dist/css/bootstrap.css';
var bootcsssrcmap = 'bootstrap/dist/css/bootstrap.css.map';
var bootcssthsrc = 'bootstrap/dist/css/bootstrap-theme.css';
var bootcssthsrcmap = 'bootstrap/dist/css/bootstrap-theme.css.map';
var angularsrc = 'angular/angular.js';
var angularanisrc = 'angular-animate/angular-animate.js';
var angularrtsrc = 'angular-route/angular-route.js';
var angularBootstrapsrc = 'angular-bootstrap/ui-bootstrap-tpls.js'
var angularVideoBgsrc = 'angular-video-bg/angular-video-bg.js';
var devdest = 'dev/';

//********** BUILD Section ***************
// Preload partials into $templateCache
gulp.task('templates', function () {
  return gulp.src(src + 'partials/*.html')
    .pipe(templateCache('templates.js', {root: 'partials/', module: 'site-manager'}))
    .pipe(gulp.dest(src + 'js/'));
});


// Concatenate js files from dev into build
gulp.task('scripts', function () {
  return gulp.src([
        src + 'js/jquery.js',
        src + 'js/bootstrap.js', 
        src + 'js/angular.js', 
        src + 'js/angular-route.js',
        src + 'js/ui-bootstrap-tpls.js',
        src + 'js/angular-animate.js',
        src + 'js/angular-video-bg.js', 
        src + 'js/app.js',
        src + 'js/templates.js',
        src + 'js/pwheader.js',
        src + 'js/pwfooter.js'
      ])
      .pipe(concat('main.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest(build + 'js/'));
});

// Concatenate css files from dev into build
gulp.task('style', function () {
  return gulp.src([src + 'css/bootstrap.css', src + 'css/bootstrap-theme.css',
   src + 'css/main.css'])
    .pipe(concat('main.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(stylemin())
    .pipe(gulp.dest(build + 'css/'));
});

// move img files from dev into build
gulp.task('img', function () {
  return gulp.src(src + 'img/*')
    .pipe(gulp.dest(build + 'img/'));
});

// move partials from dev into build
gulp.task('partials', function () {
  return gulp.src(src + 'partials/*.html')
    .pipe(gulp.dest(build + 'partials/'));
});

// Move index.html from dev to build
gulp.task('index', function () {
  return gulp.src(src + 'index.html')
    .pipe(gulp.dest(build));
});

//**************** dev SETUP section *****************
// Setup Angular dev directories in main project directory
gulp.task('mkdevjs', function () {
  return gulp.src([devsrc + jqsrc, devsrc + bootjssrc, devsrc + angularsrc, devsrc + angularrtsrc, devsrc + angularBootstrapsrc, devsrc + angularVideoBgsrc])
    .pipe(gulp.dest(devdest + 'js/'));
});

gulp.task('mkdevcss', function () {
  return gulp.src([devsrc + bootcsssrc, devsrc + bootcsssrcmap, devsrc + bootcssthsrc, devsrc + bootcssthsrcmap])
    .pipe(gulp.dest(devdest + 'css/'));
});

gulp.task('mkdevind', function () {
  return gulp.src('./index.html')
    .pipe(gulp.dest(devdest));
});

gulp.task('mkdevpart', function () {
  return gulp.src('./partials/*.html')
    .pipe(gulp.dest(devdest + 'partials/'));
});

gulp.task('mkdevimg', function () {
  return gulp.src('./img/*')
    .pipe(gulp.dest(devdest + 'img/'));
});

//****** macro tasks *******
// setup dev env task
gulp.task('mkdev', ['mkdevjs', 'mkdevcss', 'mkdevind', 'mkdevpart', 'mkdevimg']);

// Default build task
gulp.task('default', function() {
  runSequence('templates', 'scripts', ['style', 'img', 'partials'], function(){
    console.log('Done!');
  })});