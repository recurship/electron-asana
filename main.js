var menubar = require('menubar')

var mb = menubar();

mb.setOption('icon','icon.png');

mb.on('after-create-window', function() {
    mb.window.openDevTools({ detach: true });
});
