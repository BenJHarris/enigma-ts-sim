"use strict";

var _Rotor = require("./Rotor");

var _Enigma = require("./Enigma");

var _Reflector = require("./Reflector");

var _Plugboard = require("./Plugboard");

// rotor configurations
var rotorConfig = {
  1: ["EKMFLGDQVZNTOWYHXUSPAIBRCJ", ["Q"]],
  2: ["AJDKSIRUXBLHWTMCQGZNPYFVOE", ["E"]],
  3: ["BDFHJLCPRTXVZNYEIWGAKMUSQO", ["V"]],
  4: ["ESOVPZJAYQUIRHXLNFTGKDCMWB", ["J"]],
  5: ["VZBRGITYUPSDNHLXAWMJQOFECK", ["Z"]],
  6: ["JPGVOUMFYQBENHZRDKASXLICTW", ["Z", "M"]],
  7: ["NZJHGRCXMYSWBOUFAIVLPEKQDT", ["Z", "M"]],
  8: ["FKQHTLXOCBJSPDZRAMEWNIUYGV", ["Z", "M"]] // reflector configurations

};
var reflectorConfig = {
  B: "YRUHQSLDPXNGOKMIEBFZCWVJAT",
  C: "FVPJIAOYEDRZXWGCTKUQSBNMHL"
};
var mapArr = [[0, 1]];
var pb = new _Plugboard.Plugboard(mapArr);
var rotor_left = new _Rotor.Rotor(rotorConfig[1][0], rotorConfig[1][1][0], "A", undefined);
var rotor_middle = new _Rotor.Rotor(rotorConfig[2][0], rotorConfig[2][1][0], "A", rotor_left);
var rotor_right = new _Rotor.Rotor(rotorConfig[3][0], rotorConfig[3][1][0], "B", rotor_middle);
var reflector = new _Reflector.Reflector(reflectorConfig["B"]);
var enigma = new _Enigma.Enigma(pb, [rotor_left, rotor_middle, rotor_right], reflector);
console.log(enigma.encryptString("AAAAAAAAAAAAAA"));