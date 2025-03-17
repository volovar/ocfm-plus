import Constants from "~/constants";

export const fetchPage = async (path: string) => {
  console.log("fetching page:", path);
  const page = await fetch(path);
  const parser = new DOMParser();

  const text = await page.text();
  const htmlDoc = parser.parseFromString(text, "text/html");

  console.log(htmlDoc.querySelector(".content .pure-u-1.pure-u-sm-3-5"));
};

export function setup() {
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
}

export default { fetchPage, setup };
