import { pipe } from "~/utils";
import VDomArray from "./VDomArray";

function b(node: Element): VDomElement {
  if (node.children.length <= 0) {
    return createElementObject(node);
  }

  const children = VDomArray.from(node.children).map((child) => {
    return b(child);
  });

  return createElementObject(node, children);
}

function buildTreeFromHtml(html: string | HTMLHtmlElement) {
  if (typeof html === "string") {
    const body = pipe(html, parseDom, getBody);
    return b(body);
  }

  return b(html);
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

function getBody(doc: Document) {
  return doc.body;
}

function parseDom(html: string) {
  const parser = new DOMParser();
  return parser.parseFromString(html, "text/html");
}

export function removeEmptyElements(
  domObject: VDomElement,
  parent: VDomElement | null
) {
  if (!domObject.children && !domObject.textContent) {
    console.log(parent);
  }

  domObject;
}

export default { buildTreeFromHtml };
