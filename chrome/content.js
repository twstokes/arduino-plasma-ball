// random integers 1 to max
function randNum(max) {
	return Math.floor((Math.random() * max) + 1);
}

function boom(parentNode) {
	// iterate through each new span element
	$(parentNode).children('span').each(function() {
		// apply new css
		$(this).css(
			{
				transform: 'skew('+randNum(30)+'deg,'+randNum(30)+'deg) scale('+randNum(3)+') translate3d('+(2000-randNum(4000))+'px, '+(2000-randNum(4000))+'px, '+randNum(2000)+'px)',
				backgroundColor: 'rgb('+randNum(55)+','+randNum(55)+','+randNum(55)+')',
				opacity: 0,
			}
		);
	});
}

function prepareBoom() {
	// get the parent of the text that was highlighted
	var parentNode = window.getSelection().anchorNode.parentNode;

	// get the parent node's text, split into an array by spaces, wrap <span>
	var spannedArray = $(parentNode).text().split(" ").map(function(word){
		return '<span class="boom">'+word+' </span>';
	});

	// will replace the html of the parent
	var newHTML = "";

	for(word in spannedArray) {
		newHTML += spannedArray[word];
	}

	// replace the html of the parent
	$(parentNode).html(newHTML);

	// bind to the end of CSS transitions for all matches
	$('.boom').on('transitionend', function(e) {
		// remove it from the DOM
		$(this).remove();
	});

	// force a delay to make our animations work - DOM needs time
	setTimeout(function() {
		boom(parentNode, spannedArray);	
	}, 10);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if(request.message == 'sendBoom') {
		console.log("Sending the boom.");
		prepareBoom();
	}
});
