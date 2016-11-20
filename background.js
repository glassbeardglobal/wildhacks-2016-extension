$(function() {
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if (changeInfo.url != undefined) {
            //grab domain
            var url = new URL(changeInfo.url)
            var domain = url.hostname;
            sendDomain(domain);
        }
    });
});

function sendDomain(domain) {
    //hardcode for testing
    var id = '58311c2c6a7d0000120e1b55';
    var url = 'https://sjback.herokuapp.com/api/users/addpage';
    var data = {userid: id, site: domain};
    $.post(url, data)
}
/*
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
*/
