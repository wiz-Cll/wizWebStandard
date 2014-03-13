var gulp = require('gulp');
var less = require('gulp-less');
var imagemin = require('gulp-imagemin');

gulp.task('less-compile', function(){
    gulp.src('layout/less/layout.less')
        .pipe( less() )
        .pipe( gulp.dest('layout/css/') );
});

gulp.task('watch', function(){
    // 当前目录下的文件
    gulp.watch('layout/less/*.less', ['less-compile']);
    // n(n=1,2,3..)层子目录下的文件 多深都会监控
    gulp.watch('layout/less/**/*.less', ['less-compile']);
});

gulp.task('img-min', function(){
    gulp.src(['./*.png', './*.jpg'])
        .pipe( imagemin({optimizationLevel: 1}) )
        .pipe( gulp.dest('./layout') );
});

gulp.task( 'default', ['less-compile','watch'] );
// gulp.task( 'default', ['less-compile','img-min'] );
