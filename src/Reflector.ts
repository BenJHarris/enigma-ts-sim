/**
 * Represents the reflector, which is a simple character mapping.
 */
export class Reflector {
  private charSet: number[];

  /**
   * Construct a new Reflector by passing a character set.
   * @param charSet A number array representing characters based on index.
   */
  constructor(charSet: string) {
    this.charSet = charSet.split('').map((n) => this.numFromChar(n));;
  }

  /**
   * Return character mapping based on a given number.
   * @param num the position at which to pass the signal in to the reflector.
   */
  public reflect(num: number): number {
    return this.charSet[num];
  }

  /**
   * Helper method to get a number from a given input character.
   * @param char String containing a single character to convert
   */
  private numFromChar(char: string): number {
    return char.charCodeAt(0) - 65;
  }
}