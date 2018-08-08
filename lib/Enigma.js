"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Enigma = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Enigma =
/*#__PURE__*/
function () {
  function Enigma(plugboard, rotors, reflector) {
    _classCallCheck(this, Enigma);

    _defineProperty(this, "rotors", void 0);

    _defineProperty(this, "reflector", void 0);

    _defineProperty(this, "plugboard", void 0);

    this.plugboard = plugboard;
    this.rotors = rotors;
    this.reflector = reflector;
  }

  _createClass(Enigma, [{
    key: "encryptChar",
    value: function encryptChar(char) {
      var rotor_left = this.rotors[0];
      var rotor_middle = this.rotors[1];
      var rotor_right = this.rotors[2];
      var num = char.charCodeAt(0) - 65; // run through plugboard

      num = this.plugboard.getForwards(num);
      rotor_right.rotate(); // run forwards through rotors

      num = rotor_right.runForwards(num);
      num = rotor_middle.runForwards(num);
      num = rotor_left.runForwards(num); // run through reflector

      num = this.reflector.reflect(num); // run back through rotors

      num = rotor_left.runReverse(num);
      num = rotor_middle.runReverse(num);
      num = rotor_right.runReverse(num); // run back through plugboard

      num = this.plugboard.getReverse(num);
      char = String.fromCharCode(num + 65);
      return char;
    }
  }, {
    key: "encryptString",
    value: function encryptString(str) {
      var resultStr = "";

      for (var i = 0; i < str.length; i++) {
        resultStr += this.encryptChar(str.charAt(i));
      }

      return resultStr;
    }
  }]);

  return Enigma;
}();

exports.Enigma = Enigma;