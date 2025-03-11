import { pipe, typedQuerySelector } from "../utils";

function buildDomElement(node: Element): VDomElement {
  if (node.children.length <= 0) {
    return createElementObject(node);
  }

  const children = Array.from(node.children).map((child) => {
    return buildDomElement(child);
  });

  return createElementObject(node, children);
}

function buildTreeFromHtml(html: string | Element) {
  if (typeof html === "string") {
    const body = pipe(html, parseDom, (doc: Document) => doc.body);
    return buildDomElement(body);
  }

  return buildDomElement(html);
}

function createElementObject(
  node: Element,
  children: VDomElement[] | null = null
): VDomElement {
  const props = node
    .getAttributeNames()
    .reduce((p, prop) => ({ ...p, [prop]: node.getAttribute(prop) }), {});

  return {
    type: node.nodeName,
    props,
    children,
    textContent: !children && node.textContent ? node.textContent : null,
  };
}

function findNodeByClassName(vDom: VDomElement, className: string) {
  if (vDom.props.class?.includes(className)) {
    return vDom;
  }

  // const length = vDom.children ? vDom.children.length : 0
  //   for (let i = 0; i < length; i++) {
  //     const child = vDom.children[i];
  //     return findNodeByClassName(child, className);
  //   }

  //   return false;
}

function getNavObject(vDom: VDomElement) {
  return findNodeByClassName(vDom, "nav");
}

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

  const tabs = indexes.reduce((tabs, _, i): Element[][] => {
    const tab = children.slice(indexes[i], indexes[i + 1]);
    return [...tabs, tab];
  }, []);

  return tabs;
}

function parseDom(html: string) {
  const parser = new DOMParser();
  return parser.parseFromString(html, "text/html");
}

export default { buildTreeFromHtml, getNavObject, getPodcastLists };
