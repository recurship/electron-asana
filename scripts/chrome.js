window.tracker = {};
window.tracker.sendEvent = function(category, action, label) {
  if(!ga) return;
  //ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);
  ga('send', 'event', category, action, label);
};

window.tracker.sendAppView = function(view) {
  if(!ga) return;
  ga('send', 'pageview', view);
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
