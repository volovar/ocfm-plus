const { browserAction, action, tabs } = chrome;

action.onClicked.addListener((): void => {
  const newURL = "https://overcast.fm/";
  tabs.create({ url: newURL });
});
