declare module 'canvas-sketch-util/random' {
  export function noise3D(
    x: number,
    y: number,
    z: number,
    frequency?: number
  ): number;

  export function noise2D(
    x: number,
    y: number,
    frequency?: number
  ): number;

  export function pick<T>(array: T[]): T;
}
