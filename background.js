//TODO
/*
Browser Action: add website to list of banned websites
EventPage: check that new loaded website isn't in list
if it is in list, programatically inject html/css
*/

$(function() {
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if (changeInfo.url != undefined) {
            var url = new URL(changeInfo.url);
            var domain = url.hostname;

            //send domain to server
            sendDomain(domain);
        }
    }
})


function sendDomain(domain) {
    //TODO replace url with server url
    var url = "temp";
    $.post(url, domain);

    //TODO handle cases where this doesn't reach server
}
