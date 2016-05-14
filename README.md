#electron-asana

A simple offline supporting interface for Asana. This was originally a [Chrome app](https://github.com/marketlytics/chrome-asana-taskviewer) which has been ported into ElectronJS. Will be adding additional features like native notifications (done!) and better key bindings (partially completed!) for a more focused integration.

Very much like the original project this is not meant to be a replacement for Asana's interface rather it is designed to complement it, with a quick access and minimal take on the original project.

### Technologies used

- Angular 1.3
- Bootstrap with Paper theme (from Bootswatch)
- Restangular library for communicating with Asana api
- ElectronJS pre-built
- Electron Connect for livereload
- Electron Menubar to generate the Menubar functionality [https://github.com/maxogden/menubar]
- Electron open-link-in-browser
- Modified Google Analytics script for Electron

### Getting started

`
npm install -g electron-prebuilt
npm install
gulp serve
`
