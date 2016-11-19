$(function() {
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if (changeInfo.url != undefined) {
            //grab domain
            var url = new URL(changeInfo.url)
            var domain = url.hostname;
            //send domain
            sendDomain(domain);
        }
    });
});

function sendDomain(domain) {
    var url = 'https://sjback.herokuapp.com/api/users/addpage';
    var data = {userid: "temp", site: domain};
    $.post(url, data)
}
