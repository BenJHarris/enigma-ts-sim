"use strict";
exports.__esModule = true;
var Rotor = /** @class */ (function () {
    function Rotor(charSet, notchChar, ringSetting, nextRotor) {
        this.rotations = 0;
        this.charSet = charSet;
        this.notch = this.numFromChar(notchChar);
        this.ringSetting = this.numFromChar(ringSetting);
        this.nextRotor = nextRotor;
    }
    Rotor.prototype.runForwards = function (char) {
        var index = (this.numFromChar(char) + this.ringSetting + this.rotations) % 26;
        if (this.nextRotor &&
            this.rotations === this.notch) {
            this.nextRotor.rotate();
        }
        index = this.charSet[index].charCodeAt(0) - 65 - this.rotations;
        if (index < 0)
            index = 26 + index;
        return String.fromCharCode(index + 65);
    };
    Rotor.prototype.runReverse = function (char) {
        var realChar = String.fromCharCode((char.charCodeAt(0) - 65 + this.rotations) % 26 + 65);
        var index = this.charSet.indexOf(realChar) - this.rotations % 26;
        if (index < 0)
            index = 26 + index;
        return String.fromCharCode(index + 65);
    };
    Rotor.prototype.rotate = function () {
        this.rotations = (this.rotations + 1) % 26;
    };
    Rotor.prototype.numFromChar = function (char) {
        return char.charCodeAt(0) - 65;
    };
    return Rotor;
}());
exports.Rotor = Rotor;
