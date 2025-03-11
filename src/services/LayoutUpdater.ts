import Constants from "~/constants";

let podcastContainer: Element | undefined;

const cleanup = function () {
  const body = document.querySelector("body");
  if (!body) return;

  getChildren(body, (children: Element[]) => {
    for (let child of children) {
      child.tagName === "DIV" &&
        !child.textContent &&
        child.children.length <= 0 &&
        child.remove();
    }
  });
};

const getChildren = function (
  parent: Element,
  callback: (children: Element[]) => void
) {
  if (!parent?.children) return;

  const children = Array.from(parent.children);
  callback(children);

  for (let child of children) {
    getChildren(child, callback);
  }
};

const getPodcastContainer = function (parent: Element) {
  const checkClassList = function (children: Element[]) {
    if (
      children.some((child) =>
        child.classList.contains(Constants.PODCAST_LINK_NAME)
      )
    ) {
      podcastContainer = parent;
    }
  };
  getChildren(parent, checkClassList);
};

const moveElements = function () {};

const updatePodcastsPage = function (parentSelector: string) {
  const parent = document.querySelector(parentSelector);

  if (!parent) {
    console.info(
      "Couldn't find parent element from given selector:",
      parentSelector
    );
    return;
  }

  getPodcastContainer(parent);
  moveElements();
  console.log(podcastContainer);
};

export default { cleanup, updatePodcastsPage };
