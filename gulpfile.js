import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';
import squoosh from 'gulp-libsquoosh';
import svgo from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import del from 'del';
import browser from 'browser-sync';

// Styles

export const styles = () => {
  return gulp.src('less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// HTML

const html = () => {
  return gulp.src('*.html')
    .pipe(gulp.dest('Nzt'));
}

  // Scripts

  // Server

const server = (done) => {
  browser.init({
    server: {
    baseDir: './'
  },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
  }

  // Reload

const reload = (done) => {
  browser.reload();
  done();
  }

  // Watcher

const watcher = () => {
  gulp.watch('less/**/*.less', gulp.series(styles));
  gulp.watch('*.html', gulp.series(html, reload));
  }

  // Default

export default gulp.series(
  gulp.parallel(
    styles,
    html,
  ),
  gulp.series(
    server,
    watcher
  ));
