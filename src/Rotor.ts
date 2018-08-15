/**
 * Represents a single rotor in the enigma machine.
 * Maps input character to output character based on set pairings.
 */
export class Rotor {

  // Holds the character mappings, represented as an array of tuples containing number pairings.
  private mapping: [number, number][];

  // Holds a number representation of the character which the rotor rotates the adjacent rotor on.
  private notch: number[];

  // Defines the offeset of the internal wiring within the rotor.
  private ringSetting: number;

  // Holds the next rotor if there is one, this allows a rotor to rotate the following rotor.
  private nextRotor?: Rotor;

  /**
   * Constructor a Rotor based on character set and various settings
   * @param charSet The characters that are mapped to - based on index 0 being mapped from A, index 1 being mapped from B, etc.
   * @param notchChar The character at which the rotor triggers the adjacent rotor to turn.
   * @param ringSetting An offset that rotates the internal mapping to modify which external letter maps to which internal letter.
   * @param nextRotor The rotor adjacent to the "left" of the current rotor, allows the current rotor to rotate the next rotor.
   */
  constructor(charSet: string, notchChar: string, ringSetting: string, nextRotor?: Rotor) {
    // Create the mappings as an array of tuples containing two numbers representing the character mapped from and to.
    this.mapping = charSet.split('').map((n, index) => [index, this.numFromChar(n)] as [number, number]);

    // Convert the notch char(s) to an array of numbers representing the position in the alphabet.
    this.notch = notchChar.split('').map((n) => this.numFromChar(n));

    // Convert the ring setting from a character to a number.
    this.ringSetting = this.numFromChar(ringSetting);
    this.nextRotor = nextRotor;

    // Rotate the rotor based on the ring setting to get to correct starting position.
    for (let x = 0; x < this.ringSetting; x++) {
      this.rotate();
    }
  }

  /**
   * Run a signal forwards through the rotor
   * @param num A number representing the position the signal is entering the rotor by.
   */
  public runForwards(num: number): number {
    return this.getForwardMapping(num);
  }

  /**
   * Run a signal backwards through the rotor
   * @param num A number representing the position the signal is entering the rotor by.
   */
  public runReverse(num: number): number {
    return this.getReverseMapping(num);
  }

  /**
   * Rotate the rotor by one character, rotors always rotate anticlockwise.
   */
  public rotate(): void {
    // Check if this rotor is on the "notch" character, if so, rotate the next rotor also.
    if (this.nextRotor &&
      this.isNotch(this.mapping[0][0])) {
        this.nextRotor.rotate();
    }
    // Move mapping from start of array to end of array to simulate rotation.
    this.mapping.push(this.mapping.shift() as [number, number]);
  }

  /**
   * Check the mapping and return a character based on the rotors internal mapping.
   * @param num The position at which the signal is coming in to the rotor.
   */
  private getForwardMapping(num: number): number {
    return this.mapping.findIndex((e) => e[0] === this.mapping[num][1]);
  }

  /**
   * Check the mapping and return a character based on the reverse mapping of the rotor.
   * @param num The position at which the signal is coming in to the rotor.
   */
  private getReverseMapping(num: number): number {
    const letter = this.mapping[num][0];
    const pair = this.mapping.find((e) => e[1] === letter) as [number, number];
    return this.mapping.findIndex((e) => pair[0] === e[0]);
  }

  /**
   * Helper method to get ascii character from a number.
   * @param char The character to return a number for.
   */
  private numFromChar(char: string): number {
    return char.charCodeAt(0) - 65;
  }

  /**
   * Check to see if the rotor is currently on a notch character.
   * @param num The current position of the rotor.
   */
  private isNotch(num: number): boolean {
    for (let n of this.notch) {
      if (this.notch.indexOf(num) !== -1) {
        return true;
      }
    }
    return false;
  }
}