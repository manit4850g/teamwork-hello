var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('test', function(){
    console.log('Pug:', (typeof pug === 'function' ? 'its work.' : 'it\'s not work.'), '\n');
});

gulp.task('build-html', function(){
    gulp.src('./src/**/*.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build-min-html', function(){
    gulp.src('./src/**/*.pug')
    .pipe(pug({pretty: false}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function(){
    gulp.watch(['./src/**/*.pug'], ['build-html']);
});