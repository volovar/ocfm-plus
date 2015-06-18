chrome.browserAction.onClicked.addListener(function () {
    var newURL = "https://overcast.fm/";
    chrome.tabs.create({ url: newURL });
});