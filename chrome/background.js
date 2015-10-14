// random integers 1 to max
function randNum(max) {
	return Math.floor((Math.random() * max) + 1);
}

// play a sound and send the message to the active tab
function sendBoom(tab) {
	var bombAudio = new Audio();
	bombAudio.src = "sounds/sound"+randNum(3)+".wav";
	bombAudio.play();
	chrome.tabs.sendMessage(tab.id, {message: "sendBoom"});
}

// connect with our client-side script
var port = chrome.runtime.connectNative('com.tannr.power');

// attach to the event when we get stdout
port.onMessage.addListener(function(msg) {
	// we don't care what the actual message is
	// query for the active tab
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function(tabArray) {
		if(tabArray.length > 0) {
			// send the first tab in the array
			sendBoom(tabArray[0]);
		}
	});
});
