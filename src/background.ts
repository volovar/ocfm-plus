chrome.action.onClicked.addListener(function () {
  const url = "https://overcast.fm/";
  chrome.tabs.create({ url });
});
