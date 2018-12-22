import harmonic from 'harmonic';

type MakeUnit<A> = (value: number) => Unit<A>;
type Unit<A> = {
  value: number;
  toString: () => string;
  map: (f: (value: number) => number) => Unit<A>;
  flatMap: <B>(f: (value: number) => Unit<B>) => Unit<B>;
};

export const pixels: MakeUnit<'px'> = (value: number) => ({
  value,
  toString: () => `${value}px`,
  map: f => pixels(f(value)),
  flatMap: f => f(value)
});

export const scale = {
  [-2]: pixels(harmonic(-2)),
  [-1]: pixels(harmonic(-1)),
  [0]: pixels(harmonic(0)),
  [1]: pixels(harmonic(1)),
  [2]: pixels(harmonic(2)),
  [3]: pixels(harmonic(3)),
  [4]: pixels(harmonic(4)),
  [5]: pixels(harmonic(5)),
  [6]: pixels(harmonic(6))
};
