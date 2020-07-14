const {src, dest, task, series} = require( 'gulp' );
const rm = require( 'gulp-rm' );
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const px2rem = require('gulp-smile-px2rem');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');

sass.compiler = require('node-sass');

task( 'clean', ()=> {
    return gulp.src( 'app/tmp/**/*', { read: false })
      .pipe( rm() );
  });

task('styles', ()=>{
    return src('./sass/**/*.scss')
    .pipe(concat('main.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css'));
});

tasks("default", series('clean', 'styles'));