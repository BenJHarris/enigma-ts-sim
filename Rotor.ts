export class Rotor {

  private charSet: string;
  private notch: number;
  private ringSetting: number;
  private nextRotor?: Rotor;
  private rotations: number = 0;


  constructor(charSet: string, notchChar: string, ringSetting: string, nextRotor?: Rotor) {
    this.charSet = charSet;
    this.notch = this.numFromChar(notchChar);
    this.ringSetting = this.numFromChar(ringSetting);
    this.nextRotor = nextRotor;
  }

  public runForwards(char: string): string {
    let index = (this.numFromChar(char) + this.ringSetting + this.rotations) % 26
    if (this.nextRotor &&
      this.rotations === this.notch) {
      this.nextRotor.rotate();
    }
    index = this.charSet[index].charCodeAt(0) - 65 - this.rotations;
    if (index < 0) index = 26 + index;
    return String.fromCharCode(index + 65);
  }

  public runReverse(char: string): string {
    const realChar = String.fromCharCode((char.charCodeAt(0) - 65 + this.rotations) % 26 + 65);
    let index = this.charSet.indexOf(realChar) - this.rotations % 26;
    if (index < 0) index = 26 + index;
    return String.fromCharCode(index + 65);
  }

  public rotate(): void {
    this.rotations = (this.rotations + 1) % 26;
  }

  private numFromChar(char: string): number {
    return char.charCodeAt(0) - 65;
  }

}