// /*global iframePhone */
var IframePhoneRpcEndpoint = iframePhone.IframePhoneRpcEndpoint;

function displayMessage(msg){
    var iframeWin = document.getElementById("received-message");

    iframeWin.innerHTML=('got message from parent: '+JSON.stringify(msg));
}
function initPhone() {
    console.log('in initPhone')

    function handler(message, callback) {
        console.log('message to child: '+ JSON.stringify(message));
        callback({message:"Reply back from child!"});
        if (!message==''){
            displayMessage(message)
        }
    }

    var childEndpoint = new IframePhoneRpcEndpoint(handler, 'test-namespace', window.parent, location.origin);
    console.log('window.parent: '+window.parent+' child location.origin'+JSON.stringify(location.origin))
    childEndpoint.call({message:'hello'},function(reply){
        console.log('child said hello');
        console.log('parent replied with: '+JSON.stringify(reply));
    });
}