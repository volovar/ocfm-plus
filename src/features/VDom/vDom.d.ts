type VDomElement = {
  type: string;
  props: { class?: string; [string]: string };
  children?: VDomElement[] | null;
  textContent: string | null;
};

interface VDomCollectionInterface {
  collection: VDomElement[];
  add: (a: VDomElement) => void;
  // createObject: <T extends VDomCollectionInterface>(
  //   node: Element,
  //   children: T | null
  // ) => VDomElement;
  delete: (d: VDomElement) => void;
}
