import { expect, test } from "vitest";
import VirtualDom from "../VirtualDom";

const htmlObjectStub: VDomElement = {
  type: "HTML",
  props: {},
  children: [
    {
      type: "BODY",
      props: {},
      children: [
        {
          type: "DIV",
          props: { class: "content" },
          children: null,
          textContent: "Test content",
        },
      ],
      textContent: null,
    },
  ],
  textContent: null,
};

test("build dom object from html element", () => {
  const html = document.createElement("html");
  const body = document.createElement("body");
  const div = document.createElement("div");
  div.textContent = "Test content";
  div.className = "content";

  body.appendChild(div);
  html.appendChild(body);

  expect(VirtualDom.buildTreeFromHtml(html)).toStrictEqual(htmlObjectStub);
});
