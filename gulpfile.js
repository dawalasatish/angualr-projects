var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var path = require('path');
var reload = browserSync.reload;

var paths = {

    serve: ['./js/*.js', './js/**/*.js', './less/**/*.less']

};

// Static Server + watching html/js/css files
gulp.task('serve',['less'], function() {

   browserSync.init({
       server: "./"
   });


   gulp.watch(["*.html", "templates/*.html", "templates/**/*.html", "css/*.css", "css/**/*.css", "js/*.js", "js/**/*.js", "less/*/*.less", "less/**/*.less"], ['less']).on('change', browserSync.reload);
});

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch(paths.serve, reload);

});


gulp.task('default', ['serve','watch']);