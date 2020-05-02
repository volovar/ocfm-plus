export const createDiv = (className): HTMLDivElement => {
  const elem = document.createElement("div");
  elem.className = className;

  return elem;
};
