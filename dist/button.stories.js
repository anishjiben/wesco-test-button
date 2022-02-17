"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.button = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireDefault(require("./button.jsx"));

var _addonKnobs = require("@storybook/addon-knobs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Button component',
  decorators: [_addonKnobs.withKnobs]
};
exports.default = _default;

var button = function button() {
  var message = (0, _addonKnobs.text)('Text', 'Click here now!');
  return /*#__PURE__*/_react.default.createElement(_button.default, {
    message: message
  });
};

exports.button = button;