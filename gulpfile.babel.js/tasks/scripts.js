import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import glob from 'glob';
import es from 'event-stream';

/**
 * transform es6 modules into es5 amd
 * @param done
 */
export function scripts(done) {
  glob('source/javascript/**/*.js', (err, files) => {
    if (err) done(err);

    const tasks = files.map(entry => {
      const fileName = entry.replace(/^.*[\\\/]/, '');
      const dest = entry.substring(entry.length - fileName.length, 7);

      return browserify({ entries: [entry] })
        .transform(babelify.configure({
          presets: ['es2015'],
        }))
        .bundle()
        .pipe(source(fileName))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(`./public/assets/${dest}`));
    });

    es.merge(tasks).on('end', done);
  });
}
