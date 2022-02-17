"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = require("primereact/button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WiscoButton = function WiscoButton(_ref) {
  var _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'Hello world' : _ref$message;
  return /*#__PURE__*/_react.default.createElement(_button.Button, {
    label: "Save"
  });
};

var _default = WiscoButton;
exports.default = _default;