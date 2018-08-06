import { RotorConfig, ReflectorConfig } from './EnigmaSettings';
import { Rotor } from './Rotor';
import { Enigma } from './Enigma';
import { Reflector } from './Reflector';

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

const rotor_left: Rotor = new Rotor(rotorConfig["1"][0], rotorConfig["1"][1][0], "A", undefined);
const rotor_middle: Rotor = new Rotor(rotorConfig["2"][0], rotorConfig["2"][1][0], "A", rotor_left);
const rotor_right: Rotor = new Rotor(rotorConfig["3"][0], rotorConfig["3"][1][0], "A", rotor_middle);

const reflector: Reflector = new Reflector(reflectorConfig["B"]);

const enigma: Enigma = new Enigma([rotor_left, rotor_middle, rotor_right], reflector);

console.log(enigma.encrypt("B"));
console.log(enigma.encrypt("D"));
console.log(enigma.encrypt("Z"));
console.log(enigma.encrypt("G"));
console.log(enigma.encrypt("O"));
console.log(enigma.encrypt("W"));
console.log(enigma.encrypt("A"));
console.log(enigma.encrypt("A"));
console.log(enigma.encrypt("A"));
console.log(enigma.encrypt("A"));
console.log(enigma.encrypt("A"));
console.log(enigma.encrypt("A"));
console.log(enigma.encrypt("A"));
console.log(enigma.encrypt("A"));
console.log(enigma.encrypt("A"));
console.log(enigma.encrypt("A"));
console.log(enigma.encrypt("A"));
console.log(enigma.encrypt("A"));
