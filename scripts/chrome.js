// var fs = null;
// var FOLDERNAME = 'testchromeapp';
// &uid ==> user id

/* Analytics library in bower was manually updated to 1.5.2 since bower couldnt find it */
// var service = analytics.getService('asana-chrome-app');
// window.tracker = service.getTracker('UA-18735851-11');
// var resolutionLabel = window.innerWidth + ' x ' + window.innerHeight;
// var trackResolution = analytics.EventBuilder.builder()
// .category('app')
// .action('resolution')
// .dimension(1, resolutionLabel);
// tracker.send(trackResolution.label(resolutionLabel));

window.tracker = {};
window.tracker.sendEvent = function() {
  console.log('TBI');
};

window.tracker.sendAppView = function() {
  console.log('TBI');
};

function storeValue(key, value, callback) {
	localStorage.setItem(key, JSON.stringify(value));
  if(typeof callback === 'function')
    callback();
}

function getValue(key, callback) {
  var result = {};
  result[key] = JSON.parse(localStorage.getItem(key)) || {};
	callback(result);
}
