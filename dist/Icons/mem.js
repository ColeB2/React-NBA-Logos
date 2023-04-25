"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MEM = function MEM(props) {
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
  }, "Memphis Grizzlies"), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M120.16 47.906c1.286-2.427 1.9-4.86 1.9-7.187 0-5.303-2.958-10.048-7.115-12.877-5.78-3.935-14.468-4.478-20.608 2.865-8.964-1.225-16.48 1.24-19.337 2.415-2.857-1.174-10.374-3.64-19.337-2.415-6.14-7.343-14.827-6.8-20.608-2.865-4.158 2.83-7.115 7.574-7.115 12.877 0 2.327.613 4.76 1.9 7.187C25.206 54.593 22 62.523 22 70.6c0 9.727 4.153 14.734 5.72 16.888l1.254-1.253c4.398 11.195 11.93 17.22 21.02 22.7l.38-2.098c9.788 8.483 14.452 6.397 24.625 17.904 10.136-11.464 14.923-9.494 24.625-17.904l.38 2.098c4.047-2.444 15.465-8.568 21.022-22.7l1.252 1.253c.96-1.32 5.72-6.63 5.72-16.888 0-8.074-3.205-16.005-7.84-22.693",
    fill: "#707271"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M117.36 48.044c9.337-14.33-11.837-29.253-22.096-14.817C84.9 31.39 76.17 35.168 75 35.713c-1.17-.545-9.902-4.322-20.265-2.486-10.26-14.436-31.432.486-22.096 14.817C22 62.652 23.073 77.056 28.006 83.832l2.04-2.04s2.9 14.08 18.22 23.328l.552-3.037c9.432 10.075 18.05 9.848 26.18 19.05 8.13-9.2 16.75-8.974 26.18-19.05l.552 3.037c15.322-9.248 18.222-23.328 18.222-23.328l2.04 2.04c4.947-6.796 6.013-21.168-4.634-35.788",
    fill: "#12173f"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M75.095 101.63s-7.357.1-8.444.8c0 0-1.264 2.188 8.444 2.147 9.234-.042 7.872-1.725 7.94-1.974 0 0-3.125-.964-7.94-.964m-6.38-8.55s1.147-3.323 2.372-2.272C72.8 92.265 75 95.227 75 95.544V99.5l-2.682.14c-1.54.044-6.5 1.23-6.5 1.23-6.84-16.94-3.048-29.76-1.22-34.333-6.782 1.47-7.876-6.67-7.876-6.67.704-.144 1.742.164 2.912.724 1.813.867 3.945 2.34 5.645 3.66a46.63 46.63 0 0 1 1.38 1.113c4.61 3.88 8.35 3.094 8.35 3.094v16.58s-13.454-1.042-6.284 8.043m12.61.003c8.562-8.687-5.4-8.18-6.293-8.044 1.434.08 12.265.14 6.293 8.044m5.7-26.28c7.706 20.75-2.063 34.103-2.118 34.177 6.065-15.88 2.167-29.087-.487-33.992-1.363.136-3 .057-3 .057s2.048-1.265 3.375-2.47l.3-.28c1.102-.978 3.206-2.7 5.76-3.694.933-.364 1.928-.632 2.955-.73 0 0-.735 6.84-6.797 6.933M39.33 46.6c-.278-2.623 3.036-5.223 3.036-5.223-1.367-1.4-3.752-.188-3.752-.188 2.165-4.234 7.014-2.164 7.014-2.164-1.838-2.252-5.73-2.1-5.73-2.1 4.817-4.774 10.632 2.523 10.632 2.523-5.178 1.173-11.2 7.162-11.2 7.162m59.885-6.638s3.144-7.86 12.777-5.962c0 0-8.844-5.82-14.998 4.7 0 0-8.83-4.142-21.994 1.55 0 0-12.372-4.348-21.775-1.886 0 0-5.484-9.515-13.208-5.596S36.324 45.74 37.67 48.1c0 0-12.797 13.037-7.986 29.158l2.575-3.212s3.676 17.555 13.16 23.088l.57-4.316s9.902 11.948 21.546 17.022c1.108.52 7.276 3.585 7.466 5.098v-8.36s-8.077.672-10.208-3.056c-1.448-2.536-10.735-19.103-6.146-36.454 0 0-4.468-.668-5.3-8.205 0 0-3.33-1.622-7.472-1.286 0 0 7.406-2.325 14.347.363s8.798 9.526 13.5 6.503L75 45.165l1.42 19.27c4.702 3.023 6.562-3.817 13.5-6.503s14.35-.363 14.35-.363-2.963-2.1-7.724-3.04c-3.974-.795-9.815 1.76-9.815 1.76s.808-5.467 3.46-8.38c2.277-2.506 7.433-3.06 9.026-7.954",
    fill: "#5d76a9"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M65.27 64.252c-.744-.232-1.972.536-2.657 1.87-2.3-.664-3.086-3.147-3-5.527l.001-.001c1.813.867 3.945 2.34 5.645 3.66m22.598 1.868c-.72-1.403-2.045-2.185-2.77-1.828 1.102-.978 3.207-2.7 5.76-3.694.104 2.38-.703 4.862-3 5.522",
    fill: "#fb2"
  }));
};

MEM.propTypes = {
  size: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
MEM.defaultProps = {
  size: '100'
};
var _default = MEM;
exports["default"] = _default;