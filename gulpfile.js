// including plugins
var gulp = require('gulp')
var concat = require("gulp-concat");
var eslint = require('gulp-eslint');
var babelify    = require('babelify');
var browserify  = require('browserify');
var source = require('vinyl-source-stream');
var cachebust = require('gulp-cache-bust');
var distFolder = "./dist";
 
// task
gulp.task('concat:libs', function () {
    gulp.src('node_modules/jquery/dist/jquery.js') // path to your files
    .pipe(concat('libs.js'))  // concat and name it "concat.js"
    .pipe(gulp.dest(distFolder));
});

gulp.task('concat:css', function () {
    gulp.src(["css/*.css", "components/*.css"])
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(distFolder));
});

gulp.task('eslint', function () {
    gulp.src(["components/*.jsx", "dataaccess/*.js", "stores/*.js", "main.js"])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('scripts', function () {
    return browserify({
            entries: 'main.js'
        })
        .transform(babelify.configure({
            presets : ["es2015", "react"]
        }))
        .bundle()
        .pipe(source('scripts.js'))
        .pipe(gulp.dest(distFolder));
});

gulp.task('cachebust', function () {
    gulp.src('index.html')
    .pipe(cachebust({
        type: 'timestamp'
    }))
    .pipe(gulp.dest(distFolder));
});

gulp.task('watch', function () {
    gulp.watch(["components/*.jsx", "dataaccess/*.js", "stores/*.js", "main.js"], [ "eslint", "scripts", "cachebust" ]);
    gulp.watch(["css/*.css"], [ "concat:css" ]);
});

gulp.task( 'default', [ "eslint", "scripts", "concat:css", "concat:libs", "cachebust" ] )