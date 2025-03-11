import PopupContent from "~/components/PopupContent";
import { typedQuerySelector } from "~/utils";
import "./popup.css";

const systemDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

async function setupPopup() {
  let popup;
  let popupContent;

  try {
    popup = typedQuerySelector(document, HTMLBodyElement, ".ocfmp-popup");
    popupContent = typedQuerySelector(
      document,
      HTMLDivElement,
      ".ocfmp-popup-content"
    );

    if (systemDarkMode) {
      popup.classList.add("dark");
    }

    PopupContent.setup(popupContent);
  } catch (error) {
    console.error(error);
    return;
  }
}

setupPopup();
