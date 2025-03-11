const tabs: { cache: chrome.tabs.Tab[] | null } = { cache: null };

async function getTabs() {
  if (!tabs.cache) {
    console.log("no tab cache, fetching tabs");
    tabs.cache = await chrome.tabs.query({
      url: ["https://overcast.fm/podcasts"],
    });
  }

  return tabs.cache;
}

export async function getTabId() {
  const tabs = await getTabs();

  return tabs.find(
    (tab) =>
      (tab.active && tab.url?.includes("overcast.fm")) ||
      tab.url?.includes("overcast.fm")
  );
}

export async function hasOvercastTab() {
  const tabs = await getTabs();

  return tabs.some((tab) => tab.url?.includes("overcast.fm/podcasts"));
}

export function openNewTab() {
  const url = "https://overcast.fm/";
  chrome.tabs.create({ url });
}

export default { getTabs, getTabId, hasOvercastTab, openNewTab };
