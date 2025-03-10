import { pipe } from "./functions";
export * from "./chrome-tabs";
export * from "./selectors";

const pipe2 = function (x: any, ...funcs: Function[]) {
  return funcs.reduce((val, f) => f(val), x);
};

export { pipe, pipe2 };
export default { pipe, pipe2 };
