window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;   //compatibility for firefox and chrome
var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};
pc.createDataChannel("");    //create a bogus data channel
pc.createOffer(pc.setLocalDescription.bind(pc), noop);    // create offer and set local description
pc.onicecandidate = function(ice){  //listen for candidate events
    if(!ice || !ice.candidate || !ice.candidate.candidate)  return;
    var myIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
    document.getElementById('ip-info').innerHTML = '<h4>Vui lòng truy cập ' + myIP + ':3000 trên điện thoại hoặc các thiết bị khác có cùng kết nối wifi để upload ảnh.</h4>';
    pc.onicecandidate = noop;
};