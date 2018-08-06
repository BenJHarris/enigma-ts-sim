"use strict";
exports.__esModule = true;
var EnigmaSettings = /** @class */ (function () {
    function EnigmaSettings(reflector, rotorOrder, plugboard) {
        // rotor configurations
        this.rotorConfig = {
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
        this.reflectorConfig = {
            B: "YRUHQSLDPXNGOKMIEBFZCWVJAT",
            C: "FVPJIAOYEDRZXWGCTKUQSBNMHL"
        };
        this.reflector = reflector;
        this.rotorOrder = rotorOrder;
        this.plugboard = plugboard;
    }
    return EnigmaSettings;
}());
exports.EnigmaSettings = EnigmaSettings;
