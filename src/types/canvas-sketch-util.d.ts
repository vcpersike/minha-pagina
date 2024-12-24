declare module 'canvas-sketch-util/random' {
  export function pick<T>(array: T[]): T;
  export function range(min: number, max: number): number;
  export function chance(probability: number): boolean;
  export function gaussian(mean?: number, stddev?: number): number;
}
