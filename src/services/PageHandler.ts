import Constants from "~/constants";

const fetchPage = async (path: string) => {
  console.log("fetching page:", path);
  const page = await fetch(path);
  const parser = new DOMParser();

  const text = await page.text();
  const htmlDoc = parser.parseFromString(text, "text/html");

  console.log(htmlDoc);
  console.log(htmlDoc.querySelector(".content .pure-u-1.pure-u-sm-3-5"));
};

const createButton = function (parentSelector: string) {
  const button = document.createElement("button");
  button.className = "fetcher-btn";
  button.onclick = () => fetchPage("/fetched-page.html");
  button.textContent = "Fetch HTML";
  document.querySelector(parentSelector)?.appendChild(button);
};

const setup = function () {
  const buttons: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(
    Constants.PODCAST_LINK_SELECTOR
  );

  for (let button of buttons.values()) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const href = button.href;

      fetchPage(href);
    });
  }
};

export default { createButton, setup };
