// /*global iframePhone */
var IframePhoneRpcEndpoint = iframePhone.IframePhoneRpcEndpoint;
var count = 1;

window.onload = function() {
	var form = document.getElementById("the-form");
	var	myMessage = document.getElementById("my-message");
	var childMessage = document.getElementById("return-message");
	var msg = "start"

	function areIframesLoaded() {
		return frames['child-1'] && frames['child-1'].loaded 
	}

	function handler(message, callback) {
			callback({message:"Child said: "+ JSON.stringify(message)+" Reply back to child"});
	}

	var parentEndpoint = new IframePhoneRpcEndpoint(handler, 'test-namespace', frames['child-page'], location.origin);
	console.log('parent location.origin: '+ JSON.stringify(location.origin));

	if (areIframesLoaded){
		frames['child-page'].initPhone();
	}

	form.onsubmit = function() {
		var msg = myMessage.value;
		parentEndpoint.call({message: msg}, function(reply){
			console.log('parent said: '+msg);
			console.log('child replied with: '+JSON.stringify(reply));
			childMessage.innerHTML=('#'+count+': Got child message: '+JSON.stringify(reply));
			count=count+1;
		});
		return false;
	};
};

