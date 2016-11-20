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

    $('#Redirect').click(function() {
        chrome.tabs.create({
            url: 'https://sjback.herokuapp.com/landing'
        })
    })

});

function AddToBlacklist(domain) {
    //TODO change URL
    var url = "https://sjback.herokuapp.com/api/users/blacklist";
    var data = {userid:'5831a8584847640012afb70e', site: domain};
    $.post(url, data);
}
