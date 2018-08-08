import { Rotor } from './Rotor';
import { Reflector } from './Reflector';
import { Plugboard } from './Plugboard';

export class Enigma {
  private rotors: Rotor[];
  private reflector: Reflector;
  private plugboard: Plugboard;

  constructor(plugboard: Plugboard, rotors: Rotor[], reflector: Reflector) {
    this.plugboard = plugboard;
    this.rotors = rotors;
    this.reflector = reflector;
  }

  public encryptChar(char: string): string {
    const rotor_left: Rotor = this.rotors[0];
    const rotor_middle: Rotor = this.rotors[1];
    const rotor_right: Rotor = this.rotors[2];
    let num = char.charCodeAt(0) - 65;
    
    // run through plugboard
    num = this.plugboard.getForwards(num);

    rotor_right.rotate();
    // run forwards through rotors
    num = rotor_right.runForwards(num);
    num = rotor_middle.runForwards(num);
    num = rotor_left.runForwards(num);
    // run through reflector
    num = this.reflector.reflect(num);
    // run back through rotors
    num = rotor_left.runReverse(num);
    num = rotor_middle.runReverse(num);
    num = rotor_right.runReverse(num);

    // run back through plugboard
    num = this.plugboard.getReverse(num);

    char = String.fromCharCode(num + 65);
    return char;
  }

  public encryptString(str: string): string {
    let resultStr = "";
    for (let i = 0; i < str.length; i++) {
      resultStr += this.encryptChar(str.charAt(i));
    }
    return resultStr;
  }
}