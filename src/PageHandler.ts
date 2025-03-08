const fetchPage = async () => {
  const page = await fetch("/fetched-page.html");
  const parser = new DOMParser();

  const text = await page.text();
  const htmlDoc = parser.parseFromString(text, "text/html");

  console.log(htmlDoc);
  console.log(htmlDoc.querySelector(".page-title"));
};

const setup = function (parentSelector: string) {
  const button = document.createElement("button");
  button.className = "fetcher-btn";
  button.onclick = fetchPage;
  button.textContent = "Fetch HTML";
  document.querySelector(parentSelector)?.appendChild(button);
};

export default { setup };
