const gulp = require('gulp');
const pug = require('gulp-pug');
const path = require('path');

const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

const browserSync = require('browser-sync').create();

const del = require('del');

const paths = {
  root: './build',
  templates: {
    pages: 'src/templates/pages/*.pug',
    src: 'src/templates/**/*.pug'
  },
  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'build/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'build/'
  },
  images: {
    src: 'src/images/**/*.*',
    dest: 'build/assets/images/'
  },
  fonts: {
    src: 'src/fonts/**/*.*',
    dest: 'build/assets/fonts/'
  }
};

// pug
function templates() {
  return gulp
    .src(paths.templates.pages)
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(paths.root));
}

// scss
function styles() {
  return gulp
    .src('./src/styles/styles.scss')
    .pipe(
      sass({
        outputStyle: 'compressed',
        includePaths: require('node-normalize-scss').includePaths
      }).on('error', function(error) {
        console.log(error);
      })
    )
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.styles.dest));
}

// очистка
function clean() {
  return del(paths.root);
}

// галповский вотчер
function watch() {
  gulp.watch(paths.templates.src, templates);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.scripts.src, scripts);
}

// локальный сервер + livereload (встроенный)
function server() {
  browserSync.init({
    server: paths.root
  });
  browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

// просто переносим картинки
function images() {
  return gulp.src(paths.images.src).pipe(gulp.dest(paths.images.dest));
}
// просто переносим скрипты
function scripts() {
  return gulp.src(paths.scripts.src).pipe(gulp.dest(paths.scripts.dest));
}

// просто переносим шрифты
function fonts() {
  return gulp.src(paths.fonts.src).pipe(gulp.dest(paths.fonts.dest));
}

exports.templates = templates;
exports.styles = styles;
exports.fonts = fonts;
exports.clean = clean;
exports.images = images;
exports.scripts = scripts;

gulp.task('css', gulp.series(clean, styles));

gulp.task(
  'default',
  gulp.series(
    clean,
    gulp.parallel(styles, templates, fonts, images, scripts),
    gulp.parallel(watch, server)
  )
);
