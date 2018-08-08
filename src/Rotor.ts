export class Rotor {

  private mapping: [number, number][];
  private notch: number[];
  private ringSetting: number;
  private nextRotor?: Rotor;

  constructor(charSet: string, notchChar: string, ringSetting: string, nextRotor?: Rotor) {
    this.mapping = charSet.split('').map((n, index) => [index, this.numFromChar(n)] as [number, number]);
    this.notch = notchChar.split('').map((n) => this.numFromChar(n));
    this.ringSetting = this.numFromChar(ringSetting);
    this.nextRotor = nextRotor;
    for (let x = 0; x < this.ringSetting; x++) {
      this.rotate();
    }
  }

  public runForwards(num: number): number {
    return this.getForwardMapping(num);
  }

  public runReverse(num: number): number {
    return this.getReverseMapping(num);
  }

  public rotate(): void {
    if (this.nextRotor &&
      this.isNotch(this.mapping[0][0])) {
        this.nextRotor.rotate();
    }
    this.mapping.push(this.mapping.shift() as [number, number]);
  }

  private getForwardMapping(num: number): number {
    return this.mapping.findIndex((e) => e[0] === this.mapping[num][1]);
  }

  private getReverseMapping(num: number): number {
    const letter = this.mapping[num][0];
    const pair = this.mapping.find((e) => e[1] === letter) as [number, number];
    return this.mapping.findIndex((e) => pair[0] === e[0]);
  }

  private numFromChar(char: string): number {
    return char.charCodeAt(0) - 65;
  }

  private isNotch(num: number): boolean {
    for (let n of this.notch) {
      if (this.notch.indexOf(num) !== -1) {
        console.log(String.fromCharCode(n + 65));
        return true;
      }
    }
    return false;
  }

}