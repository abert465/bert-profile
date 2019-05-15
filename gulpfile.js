var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.
gulp.task('serve', function() {
    var options = {
        server: { baseDir: './' },
        port: 8080,
        ui: { port: 8081 }
    };

    // Serve files from the root of this project
    browserSync.init(options);

    gulp.watch("*.html").on("change", reload);
    gulp.watch("*.css").on("change", reload);
});