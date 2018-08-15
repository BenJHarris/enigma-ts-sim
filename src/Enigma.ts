import { Rotor } from './Rotor';
import { Reflector } from './Reflector';
import { Plugboard } from './Plugboard';

/**
 * Represents the Enigma machine.
 * Consists of the following:
 *  - One plugboard
 *  - Three Rotors
 *  - One reflector
 * Allows the user to enter either a single character or a string of characters to encode/decode
 */
export class Enigma {
  private rotors: Rotor[];
  private reflector: Reflector;
  private plugboard: Plugboard;

  /**
   * Construct a new Enigma machine based on it's components.
   * @param plugboard A preconfigured plugboard.
   * @param rotors An array containing three preconfigured rotors.
   * @param reflector A preconfigured reflector.
   */
  constructor(plugboard: Plugboard, rotors: Rotor[], reflector: Reflector) {
    this.plugboard = plugboard;
    this.rotors = rotors;
    this.reflector = reflector;
  }

  /**
   * Encrypt or decrypt a character based on the enigma machines configuration.
   * @param char The character to encrypt/decrypt.
   */
  public encryptChar(char: string): string {
    const rightRotor: Rotor = this.rotors[this.rotors.length - 1];

    // Convert character to number.
    let num = char.charCodeAt(0) - 65;
    
    // Run the number through the plugboard to get mapped character.
    num = this.plugboard.getForwards(num);

    // Rotate the first rotor whenever a character is entered.
    rightRotor.rotate();

    // Run forwards through the rotors going from right to left.
    for (let r of this.rotors.reverse()) {
      num = r.runForwards(num);
    }

    // Run through the reflector to get character mapping.
    num = this.reflector.reflect(num);

    // Run through the rotors in reverse to get the reverse character mappings.
    for (let r of this.rotors) {
      num = r.runReverse(num);
    }

    // Run back through the plugboard to get the mapped character.
    num = this.plugboard.getReverse(num);

    // Revert from number to character.
    char = String.fromCharCode(num + 65);
    return char;
  }

  /**
   * Encrypt or decrypt a string based on the Enigma machine configuration.
   * @param str The string to encrypt/decrypt.
   */
  public encryptString(str: string): string {
    let resultStr = "";
    for (let i = 0; i < str.length; i++) {
      resultStr += this.encryptChar(str.charAt(i));
    }
    return resultStr;
  }
}