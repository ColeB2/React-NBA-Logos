"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SAS = function SAS(props) {
  var size = props.size;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: size,
    height: size,
    viewBox: "0 0 150 150",
    fill: "none",
    fillRule: "evenodd",
    role: "img",
    "aria-describedby": "title"
  }, /*#__PURE__*/_react["default"].createElement("title", {
    id: "title"
  }, "San Antonio Spurs"), /*#__PURE__*/_react["default"].createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    fill: "#fefefe"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M106.22 20l-6.863 12.17-1.266 9.38-10.894 19.414H75.65l10.13-17.926V20H71.732l-6.585 12.09-1.182 9.465L47.41 71.085l3.39 8.49h8.985l-2.94 7.447-9.983-10.8 1.227 16.535-17.907.75 14.38 10.123-10.13 15.114 16.58-5.422 6.77 16.28 5.108-17.55 18.588 4.795-12.046-13.94 14.575-12.04-13.568.842 10.737-12.136h18.103l20.455-36.28V20z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M107.1 21.508l-6.434 11.406-1.12 9.115-11.47 20.443H73.06l11.2-19.833v-21.13H72.626L66.47 32.814l-1.04 9.215-16.354 29.163 2.747 6.874H62l-4.634 11.74-8.68-9.4L49.708 94.2l-15.03.63 11.955 8.418-8.515 12.703 13.746-4.496 5.665 13.614 4.318-14.84 15.332 3.95-9.902-11.45L79.46 92.666l-12.57.778 13.604-15.38h17.9L118.224 42.9V21.508z"
  }), ' ', /*#__PURE__*/_react["default"].createElement("path", {
    d: "M107.1 22.586V21.51v1.077z"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#2d2925",
    d: "M107.1 21.508l-6.434 11.406-1.12 9.115-11.47 20.443H73.06l11.2-19.833v-21.13H72.626L66.47 32.814l-1.04 9.215-16.354 29.163 2.747 6.874H62l-4.634 11.74-8.68-9.4L49.708 94.2l-15.03.63 11.955 8.418-8.515 12.703 13.746-4.496 5.665 13.614 4.318-14.84 15.332 3.95-9.902-11.45L79.46 92.666l-12.57.778 13.604-15.38h17.9L118.224 42.9V21.508z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M104.692 31.68h5.43l3.78-7.103h-5.234zm-34.15.012l5.85-.015 3.727-7.103-5.638.003zm-1.39 8.946l5.27.015.5-6.104h-5.1zm34.035 0l5.274.015.498-6.104h-5.1zm-47.81 63.604c-1.336 0-2.418-1.08-2.418-2.414a2.42 2.42 0 0 1 2.418-2.417c1.336 0 2.415 1.08 2.415 2.417a2.41 2.41 0 0 1-2.415 2.414zm46.68-59.952l-11.9 20.947H61.633L73.527 44.3H67.93L53.585 69.64H69.5l-12.07 27-4.996-5.552.277 6.545-8.044.444 6.48 4.565-4.616 6.88 7.447-2.435 3.066 7.384 2.343-8.044 8.307 2.14-5.364-6.207 6.603-5.455-10.188.45L77.507 69.64h15.947L107.56 44.3h-5.503z",
    fill: "#c4cdd3"
  })));
};

SAS.propTypes = {
  size: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
SAS.defaultProps = {
  size: '100'
};
var _default = SAS;
exports["default"] = _default;