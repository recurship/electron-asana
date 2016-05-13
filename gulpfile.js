'use strict';

var gulp = require('gulp');
var electron = require('electron-connect').server.create({
  useGlobalElectron: true
});

gulp.task('serve', function () {

  // Start browser process
  electron.start();

  // Restart browser process
  // this isnt working properly so not using it for now.
  //gulp.watch('main.js', electron.restart);

  // Reload renderer process
  gulp.watch(['scripts/**/*.js', 'scripts/**/*.html', 'index.html'], electron.reload);
});
