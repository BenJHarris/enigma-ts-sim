"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rotor = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Rotor =
/*#__PURE__*/
function () {
  function Rotor(charSet, notchChar, ringSetting, nextRotor) {
    var _this = this;

    _classCallCheck(this, Rotor);

    _defineProperty(this, "mapping", void 0);

    _defineProperty(this, "notch", void 0);

    _defineProperty(this, "ringSetting", void 0);

    _defineProperty(this, "nextRotor", void 0);

    this.mapping = charSet.split('').map(function (n, index) {
      return [index, _this.numFromChar(n)];
    });
    this.notch = notchChar.split('').map(function (n) {
      return _this.numFromChar(n);
    });
    this.ringSetting = this.numFromChar(ringSetting);
    this.nextRotor = nextRotor;

    for (var x = 0; x < this.ringSetting; x++) {
      this.rotate();
    }
  }

  _createClass(Rotor, [{
    key: "runForwards",
    value: function runForwards(num) {
      return this.getForwardMapping(num);
    }
  }, {
    key: "runReverse",
    value: function runReverse(num) {
      return this.getReverseMapping(num);
    }
  }, {
    key: "rotate",
    value: function rotate() {
      if (this.nextRotor && this.isNotch(this.mapping[0][0])) {
        this.nextRotor.rotate();
      }

      this.mapping.push(this.mapping.shift());
    }
  }, {
    key: "getForwardMapping",
    value: function getForwardMapping(num) {
      var _this2 = this;

      return this.mapping.findIndex(function (e) {
        return e[0] === _this2.mapping[num][1];
      });
    }
  }, {
    key: "getReverseMapping",
    value: function getReverseMapping(num) {
      var letter = this.mapping[num][0];
      var pair = this.mapping.find(function (e) {
        return e[1] === letter;
      });
      return this.mapping.findIndex(function (e) {
        return pair[0] === e[0];
      });
    }
  }, {
    key: "numFromChar",
    value: function numFromChar(char) {
      return char.charCodeAt(0) - 65;
    }
  }, {
    key: "isNotch",
    value: function isNotch(num) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.notch[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var n = _step.value;

          if (this.notch.indexOf(num) !== -1) {
            console.log(String.fromCharCode(n + 65));
            return true;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return false;
    }
  }]);

  return Rotor;
}();

exports.Rotor = Rotor;