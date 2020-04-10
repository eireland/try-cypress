const trustedOrigins = ["http://localhost:5000"];

function displayMessage (evt) {
    var message;
    console.log('origin: '+evt.origin)
    if (!trustedOrigins.includes(evt.origin)) {
        console.log(`Message from main window`, msg);
        message = "You are not worthy";
    }
    else
    {
        message = "I got " + evt.data + " from " + evt.origin;
        parent.postMessage(
            JSON.stringify({
                message: "this should be delivered to main window"
            })
        );
    }
    document.getElementById("received-message").innerHTML = message;
}

if (window.addEventListener) {
    window.addEventListener("message", displayMessage, false);
}
else {
    window.attachEvent("onmessage", displayMessage);
}
