export class EnigmaSettings {
  // reflector wheel
  public reflector: ReflectorType;
  // wheel order
  public rotorOrder: RotorOrder;
  // plugboard
  public plugboard: PlugBoard;

  // rotor configurations
  rotorConfig: RotorConfig = {
    1: ["EKMFLGDQVZNTOWYHXUSPAIBRCJ", ["Q"]],
    2: ["AJDKSIRUXBLHWTMCQGZNPYFVOE", ["E"]],
    3: ["BDFHJLCPRTXVZNYEIWGAKMUSQO", ["V"]],
    4: ["ESOVPZJAYQUIRHXLNFTGKDCMWB", ["J"]],
    5: ["VZBRGITYUPSDNHLXAWMJQOFECK", ["Z"]],
    6: ["JPGVOUMFYQBENHZRDKASXLICTW", ["Z","M"]],
    7: ["NZJHGRCXMYSWBOUFAIVLPEKQDT", ["Z","M"]],
    8: ["FKQHTLXOCBJSPDZRAMEWNIUYGV", ["Z","M"]]
  }
  // reflector configurations
  reflectorConfig: ReflectorConfig = {
    B: "YRUHQSLDPXNGOKMIEBFZCWVJAT",
    C: "FVPJIAOYEDRZXWGCTKUQSBNMHL"
  }

  constructor(reflector: ReflectorType, rotorOrder: RotorOrder, plugboard: PlugBoard) {
    this.reflector = reflector;
    this.rotorOrder = rotorOrder;
    this.plugboard = plugboard;
  }
}

export type RotorIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type RotorOrder = [RotorIndex, RotorIndex, RotorIndex];
export type PlugBoard = {[letter: string]: string};
export type ReflectorType = "B" | "C";
export type RotorConfig = {[rotNum: number]: [string, string[]]};
export type ReflectorConfig = {[type: string]: string};