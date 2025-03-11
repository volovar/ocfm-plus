function checkedQuerySelector(
  parent: Document | DocumentFragment | Element,
  selector: string
) {
  const elem = parent.querySelector(selector);

  if (!elem) {
    throw new Error(`no elem found for ${selector}`);
  }

  return elem;
}

export function typedQuerySelector<T extends typeof Element>(
  parent: Document | DocumentFragment | Element,
  type: T,
  selector: string
) {
  const elem = checkedQuerySelector(parent, selector);

  if (!(elem instanceof type)) {
    throw new Error(`element is not of type: ${type}`);
  }

  return elem as InstanceType<T>;
}
