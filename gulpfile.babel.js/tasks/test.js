import gulp from 'gulp';
import karma from 'karma';
import istanbul from 'gulp-istanbul';

const Server = karma.Server;

/**
 * Run test once and exit
 */
export function preTest() {
  return gulp.src(['public/assets/javascript/**/*.js'])
    .pipe(istanbul({ includeUntested: true }))
    .pipe(istanbul.hookRequire());
}

export function test(done) {
  new Server({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true,
  }, done).start();
}
