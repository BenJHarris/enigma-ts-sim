import { Rotor } from './Rotor';
import { Reflector } from './Reflector';

export class Enigma {
  private rotors: Rotor[];
  private reflector: Reflector;

  constructor(rotors: Rotor[], reflector: Reflector) {
    this.rotors = rotors;
    this.reflector = reflector;
  }

  public encrypt(char: string): string {
    const rotor_left: Rotor = this.rotors[0];
    const rotor_middle: Rotor = this.rotors[1];
    const rotor_right: Rotor = this.rotors[2];

    rotor_right.rotate();
    char = rotor_right.runForwards(char);
    char = rotor_middle.runForwards(char);
    char = rotor_left.runForwards(char);
    char = this.reflector.reflect(char);
    char = rotor_left.runReverse(char);
    char = rotor_middle.runReverse(char);
    char = rotor_right.runReverse(char);
    return char;
  }
}