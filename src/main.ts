import { RotorConfig, ReflectorConfig } from './EnigmaSettings';
import { Rotor } from './Rotor';
import { Enigma } from './Enigma';
import { Reflector } from './Reflector';
import { Plugboard } from './Plugboard';

// rotor configurations
const rotorConfig: RotorConfig = {
  1: ["EKMFLGDQVZNTOWYHXUSPAIBRCJ", ["Q"]],
  2: ["AJDKSIRUXBLHWTMCQGZNPYFVOE", ["E"]],
  3: ["BDFHJLCPRTXVZNYEIWGAKMUSQO", ["V"]],
  4: ["ESOVPZJAYQUIRHXLNFTGKDCMWB", ["J"]],
  5: ["VZBRGITYUPSDNHLXAWMJQOFECK", ["Z"]],
  6: ["JPGVOUMFYQBENHZRDKASXLICTW", ["Z", "M"]],
  7: ["NZJHGRCXMYSWBOUFAIVLPEKQDT", ["Z", "M"]],
  8: ["FKQHTLXOCBJSPDZRAMEWNIUYGV", ["Z", "M"]]
}
// reflector configurations
const reflectorConfig: ReflectorConfig = {
  B: "YRUHQSLDPXNGOKMIEBFZCWVJAT",
  C: "FVPJIAOYEDRZXWGCTKUQSBNMHL"
}

const mapArr = [[0, 1] as [number, number]];
const pb = new Plugboard(mapArr)
const rotor_left: Rotor = new Rotor(rotorConfig[1][0], rotorConfig[1][1][0], "A", undefined);
const rotor_middle: Rotor = new Rotor(rotorConfig[2][0], rotorConfig[2][1][0], "A", rotor_left);
const rotor_right: Rotor = new Rotor(rotorConfig[3][0], rotorConfig[3][1][0], "B", rotor_middle);
const reflector: Reflector = new Reflector(reflectorConfig["B"]);

const enigma: Enigma = new Enigma(pb, [rotor_left, rotor_middle, rotor_right], reflector);

console.log(enigma.encryptString("AAAAAAAAAAAAAA"));

