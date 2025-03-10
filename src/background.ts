async function getTabs() {
  const tabs = await chrome.tabs.query({
    url: ["https://overcast.fm/podcasts"],
  });

  return tabs;
}

async function getOvercastTab() {
  const tabs = await getTabs();

  return tabs.some((tab) => tab.url?.includes("overcast.fm/podcasts"));
}

chrome.action.onClicked.addListener(async function () {
  const tab = await getOvercastTab();
  console.log(tab);

  if (!tab) {
    const url = "https://overcast.fm/";
    chrome.tabs.create({ url });
  }
});
