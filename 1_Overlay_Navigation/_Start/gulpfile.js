const gulp                = require('gulp');
const del                 = require('del');
const bsync               = require('browser-sync');
const reload              = bsync.reload;



// CLEANS DIST FOLDER
gulp.task('clean', () => {
  return del('dist/**/*');
});

// HTML
gulp.task('html', () => {
  return gulp.src('index.html')
  .pipe(gulp.dest('dist'))
  .pipe(bsync.stream());
});

// SCRIPTS
gulp.task('scripts', () => {
  return gulp.src('scripts/**/*.js')
  .pipe(gulp.dest('dist/scripts'))
  .pipe(bsync.stream());
});

// STYLES
gulp.task('styles', () => {
return gulp.src('styles/*.css')
  .pipe(gulp.dest('dist/styles/'))
  .pipe(bsync.stream());
});

//BROWSER-SYNC SERVER
gulp.task('server', (done) => {
  bsync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
  done();
});

//DEFAULT TASK
gulp.task('default', gulp.series('clean',
  gulp.parallel('html', 'styles', 'scripts'), 'server', (done) => {
    gulp.watch('index.html',                                gulp.parallel('html'));
    gulp.watch('styles/**/*.css',                           gulp.parallel('styles'));
    gulp.watch('scripts/**.js',                             gulp.parallel('scripts'));
  done();
}));
