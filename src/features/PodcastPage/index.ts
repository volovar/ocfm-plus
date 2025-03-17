import { typedQuerySelector } from "~/utils";

function getPodcastLists() {
  let podcastParent;
  try {
    podcastParent = typedQuerySelector(
      document,
      HTMLDivElement,
      ".pure-u-1.pure-u-sm-3-5"
    );
  } catch (error) {
    console.error(error);
    return;
  }

  const children = Array.from(podcastParent.children);
  let indexes: number[] = [];

  for (let [i, child] of children.entries()) {
    if (child.classList.contains("ocseparatorbar")) {
      indexes.push(i);
    }
  }

  const tabs = indexes.reduce<Element[][]>((tabs, _, i) => {
    const tab = children.slice(indexes[i], indexes[i + 1]);
    return [...tabs, tab];
  }, []);

  return tabs;
}

function setup() {
  const tabs = getPodcastLists();
  console.log(tabs);
}

export default { setup };
