import { hasOvercastTab, openNewTab, typedQuerySelector } from "~/utils";

function setupNoActiveTabTemplate<T extends Element>(
  parent: T,
  template: DocumentFragment
) {
  try {
    const button = typedQuerySelector(
      template,
      HTMLButtonElement,
      ".ocfmp-popup-button"
    );

    button.addEventListener("click", () => {
      openNewTab();
    });

    parent.appendChild(template);
  } catch (error) {
    console.error(error);
  }
}

async function setup<T extends Element>(parent: T) {
  let miniPlayerTemplate;
  let noActiveTabTemplate;

  try {
    miniPlayerTemplate = typedQuerySelector(
      document,
      HTMLTemplateElement,
      "#mini-player"
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
    parent.appendChild(miniPlayerTemplate.content);
  } else {
    setupNoActiveTabTemplate(parent, noActiveTabTemplate.content);
  }
}

export default { setup };
