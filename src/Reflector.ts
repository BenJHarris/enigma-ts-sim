export class Reflector {
  private charSet: number[];

  constructor(charSet: string) {
    this.charSet = charSet.split('').map((n) => this.numFromChar(n));;
  }

  public reflect(num: number): number {
    return this.charSet[num];
  }

  private numFromChar(char: string): number {
    return char.charCodeAt(0) - 65;
  }
}