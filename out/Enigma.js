"use strict";
exports.__esModule = true;
var Enigma = /** @class */ (function () {
    function Enigma(rotors, reflector) {
        this.rotors = rotors;
        this.reflector = reflector;
    }
    Enigma.prototype.encrypt = function (char) {
        var rotor_left = this.rotors[0];
        var rotor_middle = this.rotors[1];
        var rotor_right = this.rotors[2];
        rotor_right.rotate();
        char = rotor_right.runForwards(char);
        char = rotor_middle.runForwards(char);
        char = rotor_left.runForwards(char);
        char = this.reflector.reflect(char);
        char = rotor_left.runReverse(char);
        char = rotor_middle.runReverse(char);
        char = rotor_right.runReverse(char);
        return char;
    };
    return Enigma;
}());
exports.Enigma = Enigma;
