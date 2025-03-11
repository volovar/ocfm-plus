class VDomArray extends Array {
  constructor(...args: Iterable<Element>[]) {
    super(args.length);

    console.log("inside VDomArray constructor", this);

    args.forEach((item, i) => {
      this[i] = item;
    });
  }

  delete() {}

  static from(input: HTMLCollection): VDomArray {
    input.length;
    input[0];

    const temp = [];

    for (let i = 0; i < input.length; i++) {
      temp.push(input[i]);
    }

    console.log("inside VDomArray from", temp);

    return new VDomArray(temp);
  }
}

export default VDomArray;
