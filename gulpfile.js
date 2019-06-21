var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

var paths = {
    dist: './dist/',
    sass: './src/sass/',
    css: './dist/css/',
    data: './src/_data/'
  };

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bulma/bulma.sass', 'src/assets/sass/*.sass'])
        .pipe(sass())
        .pipe(gulp.dest("src/assets/css"))
        .pipe(browserSync.stream());
});


// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['src/ssets/js/*.js'])
        .pipe(gulp.dest("src/ssets/js"))
        .pipe(browserSync.stream());
});


// Move the javascript files into our /src/js folder
gulp.task('docs', function() {
    return gulp.src(['src/**/*'])
        .pipe(gulp.dest("docs"))
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['src/assets/sass/*.sass'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['js','serve']);
