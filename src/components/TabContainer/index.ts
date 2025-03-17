function createTabs(tabElements: Element[][]) {
  const tabs = tabElements.map((tab) => {
    tab.map((element) => document.createElement(element));
  });

  return tabs;
}

function TabContainer(tabElements: Element[][]) {
  const tabContainer = document.createElement("div");
  tabContainer.className = "ocfmp-tab-container";
  tabContainer.append(createTabs(tabElements));

  return tabContainer;
}

export default TabContainer;
