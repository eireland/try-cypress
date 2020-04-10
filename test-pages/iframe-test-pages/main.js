const trustedOrigins = ["http://localhost:5000"];
var count = 1;

window.onload = function () {
    var iframeWin = document.getElementById("my-iframe").contentWindow
    var form = document.getElementById("the-form"),
        myMessage = document.getElementById("my-message");  
        myMessage.select();

        iframeWin.postMessage(
            JSON.stringify({ message: "this should be delivered to an iframe" })
        );    
    form.onsubmit = function () {
        iframeWin.postMessage(myMessage.value, "http://localhost:5000");
        return false;
    };
};

function onMsg(msg) {
    var childMessage = document.getElementById('return-message');
  if (!trustedOrigins.includes(msg.origin)) return;
  console.log(`Message from an iframe`, msg);
  childMessage.innerHTML=('#'+count+': Got message from iframe: ' + msg.data);//JSON.stringify(msg.data)
  count=count+1;
}

window.addEventListener("message", onMsg, false)