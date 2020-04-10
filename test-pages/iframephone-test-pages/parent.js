/*global iframePhone */
var iframeWin = document.getElementById("my-iframe").contentWindow
var form = document.getElementById("the-form"),
	myMessage = document.getElementById("my-message");  
	myMessage.select();

var IframePhoneRpcEndpoint = iframePhone.IframePhoneRpcEndpoint;

window.onload = function() {
	function handler(message, callback) {
		if (message === "hello") {
			callback("hello to you from your parent!");
		}
	}

	new IframePhoneRpcEndpoint(handler, 'test-namespace', frames['child-iframe'], location.origin);
};
