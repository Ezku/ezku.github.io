import scale from './typography/scale';

export type Unit<A> = {
  value: number;
  toString: () => string;
  map: (f: (value: number) => number) => Unit<A>;
};
type MakeUnit<A> = (value: number) => Unit<A>;

export const pixels: MakeUnit<'px'> = (value: number) => ({
  value,
  toString: () => `${value}px`,
  map: f => pixels(f(value))
});

export type Harmonic = {
  value: number;
  toString: () => string;
  map: (f: (value: number) => number) => Harmonic;
  toPixels: () => Unit<'px'>;
};
export const harmonic = (value: number) => ({
  value,
  toString: () => `${scale(value)}px`,
  map: (f: (v: number) => number) => harmonic(f(value)),
  toPixels: () => pixels(scale(value))
});
