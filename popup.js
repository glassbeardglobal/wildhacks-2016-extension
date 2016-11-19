$(function() {

    $('#BlacklistButton').click(function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
            var activeTab = arrayOfTabs[0];
            var url = new URL(activeTab.url);
            var domain = url.hostname;

            AddToBlacklist(domain)
        })
    })

    $('#Settings').click(function() {
        //open settings tab
        chrome.tabs.create({
                url: chrome.extension.getURL('settings.html')
            });
    })
});

function AddToBlacklist(domain) {
    //TODO change URL
    var url = "https://sjback.herokuapp.com/api/users/blacklist";
    var data = {userid: 'temp', site: domain};
    $.post(url, data);
}
