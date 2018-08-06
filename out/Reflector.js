"use strict";
exports.__esModule = true;
var Reflector = /** @class */ (function () {
    function Reflector(mappings) {
        this.mappings = mappings;
    }
    Reflector.prototype.reflect = function (char) {
        var c = char.charCodeAt(0) - 65;
        return this.mappings[c];
    };
    return Reflector;
}());
exports.Reflector = Reflector;
