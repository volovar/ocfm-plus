import { hasOvercastTab, typedQuerySelector } from "../utils";
import "./popup.css";

async function setupPopup() {
  let popupContent;
  let playerTemplate;
  let noActiveTabTemplate;

  try {
    popupContent = typedQuerySelector(document, HTMLDivElement, ".content");

    playerTemplate = typedQuerySelector(
      document,
      HTMLTemplateElement,
      "#player"
    );

    noActiveTabTemplate = typedQuerySelector(
      document,
      HTMLTemplateElement,
      "#no-active-tab"
    );
  } catch (error) {
    console.error(error);
    return;
  }

  const hasTab = await hasOvercastTab();

  if (hasTab) {
    popupContent.appendChild(playerTemplate.content);
  } else {
    popupContent.appendChild(noActiveTabTemplate.content);
  }
}

setupPopup();
