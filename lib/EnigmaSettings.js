"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnigmaSettings = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EnigmaSettings = // reflector wheel
// wheel order
// plugboard
// rotor configurations
function EnigmaSettings(reflector, rotorOrder, plugboard) {
  _classCallCheck(this, EnigmaSettings);

  _defineProperty(this, "reflector", void 0);

  _defineProperty(this, "rotorOrder", void 0);

  _defineProperty(this, "plugboard", void 0);

  _defineProperty(this, "rotorConfig", {
    1: ["EKMFLGDQVZNTOWYHXUSPAIBRCJ", ["Q"]],
    2: ["AJDKSIRUXBLHWTMCQGZNPYFVOE", ["E"]],
    3: ["BDFHJLCPRTXVZNYEIWGAKMUSQO", ["V"]],
    4: ["ESOVPZJAYQUIRHXLNFTGKDCMWB", ["J"]],
    5: ["VZBRGITYUPSDNHLXAWMJQOFECK", ["Z"]],
    6: ["JPGVOUMFYQBENHZRDKASXLICTW", ["Z", "M"]],
    7: ["NZJHGRCXMYSWBOUFAIVLPEKQDT", ["Z", "M"]],
    8: ["FKQHTLXOCBJSPDZRAMEWNIUYGV", ["Z", "M"]] // reflector configurations

  });

  _defineProperty(this, "reflectorConfig", {
    B: "YRUHQSLDPXNGOKMIEBFZCWVJAT",
    C: "FVPJIAOYEDRZXWGCTKUQSBNMHL"
  });

  this.reflector = reflector;
  this.rotorOrder = rotorOrder;
  this.plugboard = plugboard;
};

exports.EnigmaSettings = EnigmaSettings;