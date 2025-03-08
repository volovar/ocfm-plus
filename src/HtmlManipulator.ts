import Constants from "../constants";

let podcastContainer: Element | undefined;

const getChildren = function (parent: Element) {
  // if (parent.tagName === "DIV" && parent.childNodes.length <= 0) {
  //   parent.remove();
  // }
  if (!parent?.children) return;

  const children = Array.from(parent.children);

  if (
    children.some((child) =>
      child.classList.contains(Constants.PODCAST_LINK_SELECTOR)
    )
  ) {
    return parent;
  }

  for (let child of children) {
    getChildren(child);
  }
};

const updateContent = function (parentSelector: string) {
  const parent = document.querySelector(parentSelector);

  if (!parent) {
    return;
  }

  podcastContainer = getChildren(parent);
  console.log(podcastContainer);
};

export default { updateContent };
