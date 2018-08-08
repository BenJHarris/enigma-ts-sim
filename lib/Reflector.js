"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reflector = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Reflector =
/*#__PURE__*/
function () {
  function Reflector(charSet) {
    var _this = this;

    _classCallCheck(this, Reflector);

    _defineProperty(this, "charSet", void 0);

    this.charSet = charSet.split('').map(function (n) {
      return _this.numFromChar(n);
    });
    ;
  }

  _createClass(Reflector, [{
    key: "reflect",
    value: function reflect(num) {
      return this.charSet[num];
    }
  }, {
    key: "numFromChar",
    value: function numFromChar(char) {
      return char.charCodeAt(0) - 65;
    }
  }]);

  return Reflector;
}();

exports.Reflector = Reflector;