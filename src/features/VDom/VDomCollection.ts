class VDomCollection implements VDomCollectionInterface {
  collection: VDomElement[];

  constructor() {
    this.collection = [];
  }

  add(elementToAdd: VDomElement) {
    this.collection = [...this.collection, elementToAdd];
  }

  delete(elementToDelete: VDomElement) {
    this.collection.filter((element) => element === elementToDelete);
  }

  map(fn: (v: VDomElement) => any) {
    return this.collection.map(fn);
  }

  static from(iterable: HTMLCollection) {
    const vDomCollection = new VDomCollection();

    // for (let item of iterable) {
    //   vDomCollection.add(item);
    // }
    console.log(iterable);

    return vDomCollection;
  }
}

export default VDomCollection;
