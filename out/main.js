"use strict";
exports.__esModule = true;
var Rotor_1 = require("./Rotor");
var Enigma_1 = require("./Enigma");
var Reflector_1 = require("./Reflector");
// rotor configurations
var rotorConfig = {
    1: ["EKMFLGDQVZNTOWYHXUSPAIBRCJ", ["Q"]],
    2: ["AJDKSIRUXBLHWTMCQGZNPYFVOE", ["E"]],
    3: ["BDFHJLCPRTXVZNYEIWGAKMUSQO", ["V"]],
    4: ["ESOVPZJAYQUIRHXLNFTGKDCMWB", ["J"]],
    5: ["VZBRGITYUPSDNHLXAWMJQOFECK", ["Z"]],
    6: ["JPGVOUMFYQBENHZRDKASXLICTW", ["Z", "M"]],
    7: ["NZJHGRCXMYSWBOUFAIVLPEKQDT", ["Z", "M"]],
    8: ["FKQHTLXOCBJSPDZRAMEWNIUYGV", ["Z", "M"]]
};
// reflector configurations
var reflectorConfig = {
    B: "YRUHQSLDPXNGOKMIEBFZCWVJAT",
    C: "FVPJIAOYEDRZXWGCTKUQSBNMHL"
};
var rotor_left = new Rotor_1.Rotor(rotorConfig["1"][0], rotorConfig["1"][1][0], "A", undefined);
var rotor_middle = new Rotor_1.Rotor(rotorConfig["2"][0], rotorConfig["2"][1][0], "A", rotor_left);
var rotor_right = new Rotor_1.Rotor(rotorConfig["3"][0], rotorConfig["3"][1][0], "A", rotor_middle);
var reflector = new Reflector_1.Reflector(reflectorConfig["B"]);
var enigma = new Enigma_1.Enigma([rotor_left, rotor_middle, rotor_right], reflector);
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
