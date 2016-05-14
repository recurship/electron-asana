var menubar = require('menubar')
const {app, globalShortcut} = require('electron');
var isHidden = true
var mb = menubar({
  width: 430,
  height: 300,
  tooltip: 'Asana Desktop',
  icon: 'icon.png',
  transparent: true
});

mb.on('after-create-window', function() {
    mb.window.openDevTools({ detach: true });
});

app.on('ready', () => {
  const ret = globalShortcut.register('CommandOrControl+Shift+5', () => {
    console.log('Showing/hiding window...');
    if(isHidden) {
      mb.showWindow();
      isHidden = false;
    } else {
      mb.hideWindow();
      isHidden = true;
    }
  });

  if (!ret) {
    console.log('Registration for keyboard shortcuts failed');
  }
});

app.on('will-quit', () => {
  // Unregister a shortcut.
  globalShortcut.unregister('CommandOrControl+Shift+5');

  // Unregister all shortcuts.
  globalShortcut.unregisterAll();
});
