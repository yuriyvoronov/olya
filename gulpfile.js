const gulp = require('gulp');
const wiredep = require('gulp-wiredep');
var sass = require('gulp-sass');
var rigger = require('gulp-rigger');
 
gulp.task('rigger', function () {
    gulp.src('./components/**/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('./build/'));
});



gulp.task('sass', function () {
  return gulp.src('./components/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./components/**/*.scss', ['sass']);
}); 

gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep({
      directory: "./bower_components"
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('image:build', function () {
    gulp.src('./components/*/*.png') //Выберем наши картинки
        
        .pipe(gulp.dest('./img')); //И бросим в build
});

gulp.task('inject', function () {
    var target = gulp.src('./index.html');

    var sources = gulp.src(['src/**/*.js', 'src/**/*.css'], {read: false});

    return target
        .pipe(wiredep({
            devDependencies: true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', function(){
    gulp.watch("bower.json", ['bower']);
    gulp.watch('./components/**/*.html', ['rigger']);
    gulp.watch('./components/**/*.scss', ['sass']);
});