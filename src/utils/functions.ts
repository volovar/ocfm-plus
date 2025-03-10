export function pipe<A>(a: A): A;

export function pipe<A, B>(a: A, ab: (a: A) => B): B;

export function pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C;

export function pipe<A, B, C, D>(
  a: A,
  ab: (a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D
): D;

export function pipe(a: unknown, ...funcs: Function[]): unknown {
  return funcs.reduce((val, f) => f(val), a);
}
