const gulp = require('gulp');
const minify = require('gulp-minify');
const sass = require('gulp-sass');
const fileinclude = require('gulp-file-include');
const watch = require('gulp-watch');

gulp.task('copy', async()=>{
    return gulp.src('./dev/img/**')
        .pipe(gulp.dest('./dest/img/'))
});

gulp.task('minify', async()=>{
    return gulp.src('./dev/js/script.js')
        .pipe(minify())
        .pipe(gulp.dest('./dest/js/'))
});

gulp.task('sass', async()=>{
    return gulp.src('./dev/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dest/css/'))
});

gulp.task('template', async()=>{
    return gulp.src(['./dev/*.html', '!./dev/src.html', '!./dev/loading.html', '!./dev/header.html', '!./dev/footer.html'])
        .pipe(fileinclude({
            prefix: "@@",
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dest/'))
});


gulp.task('watch', async()=>{
    gulp.watch('./dev/sass/*.scss', gulp.series('sass'));
    gulp.watch('./dev/', gulp.series('template'));
});