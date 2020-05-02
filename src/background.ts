const { browserAction, tabs } = chrome;

browserAction.onClicked.addListener((): void => {
  const newURL = "https://overcast.fm/";
  tabs.create({ url: newURL });
});
