import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import glob from 'glob';
import es from 'event-stream';

/**
 * find all page specific js using glob
 * push global js to the files array
 * for each js file, run browserify,
 * babelify & bundle
 */
export function scripts(done) {
  glob('source/javascript/pages/**/*.js', (err, files) => {
    if (err) done(err);

    files.push('source/javascript/global.js');

    const tasks = files.map(entry => {
      const fileName = entry.replace(/^.*[\\\/]/, '');

      return browserify({ entries: [entry] })
        .transform(babelify)
        .bundle()
        .pipe(source(fileName))
        .pipe(gulp.dest('./public/assets/javascript'));
    });

    es.merge(tasks).on('end', done);
  });
}
