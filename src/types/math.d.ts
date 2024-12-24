declare module 'canvas-sketch-util/math' {
  /**
   * Map a value from one range to another.
   * @param value The value to map.
   * @param inputMin The minimum of the input range.
   * @param inputMax The maximum of the input range.
   * @param outputMin The minimum of the output range.
   * @param outputMax The maximum of the output range.
   * @param clamp Whether to clamp the output value to the range (default false).
   */
  export function mapRange(
    value: number,
    inputMin: number,
    inputMax: number,
    outputMin: number,
    outputMax: number,
    clamp?: boolean
  ): number;

  /**
   * Clamp a value between a minimum and a maximum.
   * @param value The value to clamp.
   * @param min The minimum value.
   * @param max The maximum value.
   */
  export function clamp(value: number, min: number, max: number): number;

  /**
   * Return a random value between -1 and 1.
   */
  export function lerp(min: number, max: number, t: number): number;

  /**
   * Convert degrees to radians.
   * @param degrees Angle in degrees.
   */
  export function degToRad(degrees: number): number;

  /**
   * Convert radians to degrees.
   * @param radians Angle in radians.
   */
  export function radToDeg(radians: number): number;

  /**
   * Smoothly interpolate between 0 and 1.
   * @param t The value to smooth.
   */
  export function smoothstep(min: number, max: number, t: number): number;

  /**
   * Return the modulo of a number, considering wrapping for negative values.
   * @param n The value to wrap.
   * @param m The modulo base.
   */
  export function mod(n: number, m: number): number;

  /**
   * Linear interpolation function.
   * @param min Start value.
   * @param max End value.
   * @param t Interpolation factor between 0 and 1.
   */
  export function lerp(min: number, max: number, t: number): number;

  /**
   * Inverse Lerp function.
   * @param min Start value.
   * @param max End value.
   * @param t Value to find the interpolation factor.
   */
  export function inverseLerp(min: number, max: number, t: number): number;
}
