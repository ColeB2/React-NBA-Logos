"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CHI = function CHI(props) {
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
  }, "Chicago Bulls"), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("path", {
    id: "A_CHI",
    d: "M109.973.063H.001v110.66h109.972V.063z"
  })), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(20 15.164)"
  }, /*#__PURE__*/_react["default"].createElement("mask", {
    id: "B_CHI",
    fill: "#fff"
  }, /*#__PURE__*/_react["default"].createElement("use", {
    xlinkHref: "#A_CHI"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M101.27 54.586l-4.384-1.47c6.7-2.71 13.7-8.125 13.046-19.442-.445-7.832-3.86-14.675-5.902-18.77L96.61.063l1.476 15.99c.458 5.012.293 11.616-1.593 15.2-2.517 5.233-10.864 4.657-13.853 4.458-5.28-.352-22.47-.937-27.686-.937-6.968.03-14.612.59-20.83 1.05l-7.23.47c-.178.005-.437.03-.783.06-10.9 1.007-12.755-4.1-13.368-5.78-1.13-3.097-1.1-10.04-1.087-13.03l.048-13.03-5.72 10.577c-1.7 3.145-4.86 8.993-5.937 18.87C-.684 47.87 8.074 51.92 10.95 53.25c.39.18.778.35 1.167.506l-.674.22c-1.875.64-3.822 1.53-4.41 1.803l-3.268 1.555L5.898 60.3c.27.365.98 1.302 1.763 2.072 1.976 1.944 6.962 5.03 13.06 4.274 2.133-.264 3.82-.647 5.122-1.04a40.72 40.72 0 0 0 .732 1.987c1.87 4.644 6.118 13.485 7.716 16.558a133.07 133.07 0 0 0 2.914 5.273l-.072.06a11.03 11.03 0 0 0-.549.517l-.724.863-.045 1.02c-.045.96-.264 9.565 5.69 15.972l.495.48.573.218c2.797 1.07 6.44 2.168 12.273 2.168 6.01 0 11.048-1.443 12.982-2.42l.562-.3.368-.434c4.04-4.78 5.817-11.783 5.897-14.707l.064-.083-.06-.048-.08-1.174-1.12-1.134c-.245-.234-.43-.413-.583-.658.418-.826.93-1.888 1.486-3.052l.115-.24.767-1.58c1.545-3.006 6.05-12.673 7.838-17.24l.964-2.405c1.286.39 2.98.762 5.148.985 6.09.634 11.86-3.132 13.855-5.874.107-.144.256-.325.36-.45l2.746-3.222-3.74-1.688c-.05-.02-.282-.12-1.143-.413",
    fill: "#fefefe",
    mask: "url(#B_CHI)"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M127.273 48.99c-.415-7.29-3.68-13.83-5.63-17.74l-.232-.466-.85-1.696.173 1.89c.24 2.612.818 11.538-1.843 16.595-3.297 6.86-12.998 6.197-16.186 5.976l-.242-.016c-5.24-.35-22.28-.953-27.5-.932-6.904.03-14.52.59-20.644 1.04l-7.332.48c-.14.005-.35.024-.63.05-8.584.8-14.007-1.73-16.12-7.52C28.942 43.1 28.976 36.077 29 32.703l.008-2.426-.674 1.246C26.7 34.506 23.71 40.058 22.7 49.266c-.565 10.854 5.074 14.747 9.367 16.73 4.483 2.074 9.064 2.373 10.57 2.47l.11.008-.043-.005c.31.056.663.072 1.036.088.463.02.964.048 1.478.144-.812.157-1.88.34-2.818.5l-2.432.437c-1.017.216-5.338 1.225-7.665 2.018-1.976.676-4.104 1.68-4.126 1.688l-.39.184.253.35c.03.04.743 1.03 1.486 1.76 1.52 1.497 5.753 4.165 10.864 3.528 4.086-.506 6.275-1.454 7.12-1.9.264.88.898 2.913 1.534 4.498 1.84 4.575 6.03 13.29 7.607 16.32 1.276 2.453 2.54 4.63 3.38 6.07l.3.52c-.274.94-.93 1.526-1.42 1.955-.13.115-.242.213-.338.312l-.096.096-.005.136c-.04.844-.237 8.42 4.917 13.97l.056.06.077.03c2.568.983 5.92 1.992 11.32 1.992 5.508 0 10.14-1.307 11.764-2.128l.067-.032.048-.056c3.596-4.253 5.23-10.65 5.27-12.974v-.15l-.104-.107a9.2 9.2 0 0 0-.28-.274c-.56-.538-1.252-1.204-1.65-2.777.44-.75 1.297-2.543 1.995-4.002l.914-1.885c1.523-2.964 5.966-12.492 7.73-16.995 1.116-2.847 1.742-4.27 2.014-4.86.78.42 2.882 1.353 6.853 1.763 5.15.533 10.062-2.916 11.43-4.793.23-.317.62-.772.623-.775l.31-.362-.43-.194c-.03-.013-.205-.088-.972-.352l-2.85-.953-2.842-.953c-.775-.264-4.254-1.017-6.79-1.568l-1.923-.418.63-.115c5.88-1.04 21.505-3.808 20.626-19.277",
    fill: "#2d2925"
  }), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "#c21f32"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M24.034 45.856c.858-4.434 2.275-8.58 4.208-12.56l.02-.048h.093v.085-.085h.085l-.003.088c-.053 1.2-.088 2.415-.088 3.65 0 2.937.202 5.925.858 8.6l.064.26-.2-.178c-.855-.764-1.705-1.64-2.6-2.4-.778.87-1.523 1.816-2.3 2.65l-.197.2.056-.282zm101.726-1.82l-.08.02.077-.024c-1.135-3.744-2.15-7.536-4.006-10.97l-.157.043a56.63 56.63 0 0 1 .112 3.547c0 2.873-.224 5.7-.7 8.425l-.027.16.146-.072c.9-.44 1.774-1.03 2.706-1.427l2.243 1.622-.325-1.32zM89.096 84.082l-.173.077c-1.276.562-2.584 1.12-3.966 1.395a10.91 10.91 0 0 1-2.701.349c-2.805-.003-5.484-1.16-7.14-3.7l-.053-.083-.072.067c-.333.293-.535.658-.882.97-1.766 2.032-4.328 2.812-6.946 2.812-2.032 0-4.096-.47-5.822-1.2l-.178-.072.067.18c1.326 3.507 2.14 7.4 2.14 11.312 0 1.755-.162 3.5-.517 5.238-.242 1.212-.647 2.47-.97 3.65l-.053.184.17-.088c3.737-1.98 8.3-2.982 12.848-2.982 4.307 0 8.603.897 12.177 2.7.6.242 1.14.652 1.678.826l.16.05-.053-.157c-1.04-3.086-1.657-6.364-1.657-9.797V95.7l-.008-.652c0-3.752.786-7.446 1.9-10.777l.06-.178zM52.558 87.7c-.4-.495-.724-1.036-.844-1.667l-.037-.192.165.104c.67.434 1.4.612 2.165.612 1.56 0 3.2-.767 4.43-1.63l.056-.04.048.05.043.04-.06.06.06-.06.027.027-.003.04c-.17 1.595-.738 3.42-2.43 4.045a2.99 2.99 0 0 1-.738.093c-1.135 0-2.12-.66-2.882-1.483"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M92.254 87.103c-.362-.54-.562-1.124-.68-1.78l-.04-.218.173.136c.84.663 1.896.95 2.978.95a6.78 6.78 0 0 0 3.57-1.04l.2-.128-.075.226c-.495 1.443-1.747 2.92-3.268 3.25-.13.02-.264.03-.394.03-.996 0-1.894-.538-2.464-1.422m1.944 2.115c.197.043.397.06.597.06.573 0 1.148-.152 1.7-.328l.168-.053-.067.162c-2.096 5.24-4.626 10.308-7.24 15.338l-.088.168-.064-.178c-.527-1.446-.677-2.982-.677-4.554 0-1.153.08-2.325.154-3.496.376-3.38 1.2-6.633 2.2-9.762l.06-.192.093.178c.62 1.2 1.798 2.455 3.146 2.658M61.098 104.42c-3.162-4.823-5.564-9.922-7.884-15.096l-.1-.224.216.115c.63.338 1.473.604 2.275.604.543 0 1.063-.12 1.497-.415 1.015-.7 1.6-1.83 2.014-2.958l.064-.186.088.178c1.745 3.526 2.58 7.797 2.58 12.02a31.37 31.37 0 0 1-.557 5.9l-.005.024-.016.02-.115.115-.056-.085zm2.78 16.147l-.016-.008-.013-.013c-3.22-3.534-4.435-8.077-4.6-12.883v-.045l.037-.027c4.235-3.084 9.897-4.713 15.48-4.713 3.665 0 7.298.703 10.47 2.16 2.027.905 3.98 1.896 5.77 3.334l-.05.067.05-.067.037.03-.005.045c-.543 4.524-2.16 8.556-5.015 12.052l-.013.02-.02.008c-3.4 1.323-7.404 2.04-11.392 2.04-3.758 0-7.5-.634-10.7-1.997m56.63-47.525l-2.504-.956c-5.46-2.056-12.48-3.3-18.447-3.454-.57-6.644-1.334-10.798-2.63-14.553l-.02-.05-.053-.005c-3.074-.177-16.716-.727-22-.727s-18.673.83-21.747 1l-.053.003-.02.053c-1.238 3.58-2.647 8.04-3.303 14.6-6.03.37-14.146 2.096-19.608 4.15-.397.15-.685.3-.882.394l-.224.125c-.013.005-.024.013-.035.02l-.165-.2.06.3c.003.02.01.032.02.043.836.948 3.913 4.636 9.626 4.764a9.45 9.45 0 0 0 .3.003c1.867 0 5.03-.362 7.143-1.286a65.03 65.03 0 0 1 1.785-.748c.1.192.402.775.55 1.193.613 1.702 1.342 4.146 1.88 5.214.794 1.584 2.088 2.857 4.187 2.905h.083c1.896-.005 3.204-1.518 3.433-1.84l.088-.122-.152-.008c-5.282-.266-7.442-3.07-7.8-7.307l-.005-.064-.06-.01c-.623-.112-1.02-.2-1.265-.333s-.354-.298-.437-.623a1.84 1.84 0 0 1-.051-.434c0-.52.2-1.084.602-1.736.408-.546 1-1.084 2.208-1.086.495 0 1.092.093 1.82.325 1.643.52 2.962 1.58 3.878 2.383 1.097.96 4.283 4.28 6.214 5.44 1.135.68 2.858 1.313 4.613 1.313 1.404 0 2.83-.407 3.97-1.53 2.456-2.407 2.754-4.48 3.076-5.76l.024-.1-.104-.003c-4.238-.12-8.25-.535-11.948-1.047-.43-.06-.557-.242-.557-.394.003-.186.208-.407.55-.407.064 0 .133.008.208.027.01.003 7 .927 11.876.956h.077l.005-.077c.04-.57.048-1.568.083-2.692l.003-.085-.085-.003c-2.895-.064-7.76-.37-12.372-1.3-.4-.083-.557-.322-.557-.522.005-.194.136-.365.423-.367a.81.81 0 0 1 .216.03c.687.18 8.195 1.244 12.284 1.244h.032l.085.003v-.083l.032-3.37h-.34c-2.642 0-6.467-.266-11.906-1.094-.445-.07-.602-.285-.602-.45s.16-.354.5-.357c.03 0 .06.003.093.005-.003 0 6.637.988 11.815.988l.357-.003h.083v-.083l-.013-2.695c.003-.5.23-.714.394-.714.154 0 .354.178.357.647l.02 2.796.085-.003c5.005-.152 9.407-.738 11.474-1.108a1.82 1.82 0 0 1 .314-.032c.4.008.517.173.522.333s-.138.352-.346.4c-.677.122-6.477 1.244-11.996 1.363h-.083l.003.083c0 .975.037 2.24.053 3.27l.003.085.083-.003c3.7-.133 8.006-.272 11.695-1.086.173-.037.322-.056.453-.056.43.005.6.176.6.32.008.168-.216.423-.743.5-3.617.602-8.832 1.222-11.967 1.246H75.7l.003.085.075 2.714.005.08h.08c5.918-.14 11.522-.983 12.476-1.148a1.37 1.37 0 0 1 .194-.016c.37.003.54.202.54.4s-.162.407-.6.47c-1.04.144-7.985 1.04-12.43 1.15l-.1.003.03.104c.44 1.505.525 3.696 2.7 5.573 1.068.92 2.504 1.33 3.985 1.33a8.59 8.59 0 0 0 4.21-1.12c1.952-1.13 5.037-4.508 6.13-5.467.9-.8 2.988-2.72 5.764-2.72a1.72 1.72 0 0 1 .117.003c1.425.03 2.12.405 2.485.812s.408.863.495 1.108a1.93 1.93 0 0 1 .117.644c-.003.346-.1.687-.455.9-.485.3-.943.22-1.457.455l-.04.02-.008.043c-.362 2.317-1.1 4.95-2.906 6.327-.98.746-2.245 1.164-3.265 1.395s-1.787.272-1.787.272l-.176.01.117.13a15.14 15.14 0 0 0 .575.6c.322.304 1.236.746 2.432.748.128 0 .258-.005.392-.013 1.308-.112 2.815-1.105 3.457-1.766.972-1.262 1.864-3.883 2.525-5.568.232-.602.762-1.643.977-2.178.538.253.852.42 1.88.836 2.136.855 4.845 1.23 6.664 1.23l.304-.003c2.972-.077 6.334-1.875 8.36-3.752.354-.33 1.012-1.148 1.015-1.15l.072-.1-.107-.04z"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M78.04 109.547c-.314.527-.453 1.132-.453 1.747a4.65 4.65 0 0 0 .943 2.76.17.17 0 0 0 .138.072c.064 0 .136-.035.2-.093v-.053c.005-.6-.376-1.1-.38-1.747a1.44 1.44 0 0 1 .077-.471l.056-.173.093.154c.58.96 1.513 1.563 2.488 1.888a4.53 4.53 0 0 0 1.132.149c1.3-.003 2.506-.6 3.36-1.638.405-.567.714-1.286.714-2a2.11 2.11 0 0 0-.226-.97c-.613-1.193-1.856-1.883-3.106-2.088-.213-.024-.426-.035-.64-.035-1.808 0-3.5.8-4.384 2.487m-7.085 4.98c.104.005.23-.115.314-.26.474-.746.796-1.715.796-2.66 0-.62-.138-1.23-.458-1.763l.072-.043-.075.037c-.498-.953-1.515-1.723-2.485-2.048a5.64 5.64 0 0 0-1.721-.272c-1.4 0-2.75.533-3.606 1.678-.33.434-.495.993-.495 1.55 0 .3.045.58.138.852.455 1.273 1.665 2.28 2.946 2.522a4.88 4.88 0 0 0 .844.077c1.492 0 2.805-.73 3.737-2l.093-.128.053.15a1.04 1.04 0 0 1 .056.349c-.003.264-.07.53-.096.743-.045.375-.34.666-.33.924a.42.42 0 0 0 .099.266c.045.027.083.037.117.037m-6.742 4.904c3.255-1.366 7.146-2.157 11-2.157 2.916 0 5.814.45 8.416 1.446.653.277 1.342.503 2 .708.165-.216.245-.264.357-.453-3.175-1.558-6.904-2.282-10.65-2.282-3.998 0-8.017.826-11.405 2.333a1.16 1.16 0 0 0 .272.405m2.84-24.062c1.947 2.426 4.855 3.5 7.828 3.502a12.95 12.95 0 0 0 3.255-.423c4.957-1.374 7.948-6.774 8.97-11.498-.144-.133-.272-.162-.458-.218-.62 2.78-1.806 5.5-3.56 7.808-2.1 2.556-5.196 3.848-8.246 3.848a10.52 10.52 0 0 1-3.191-.49c-4.536-1.414-6.893-6.388-7.332-10.9-.186.003-.312.013-.458.115.3 3.102 1.238 5.866 3.193 8.25",
    fill: "#2d2925"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M30.188 48.7c2.6 5.014 7.84 6.63 13.173 6.375 2.983-.027 5.85-.336 8.795-.525l-.003.205c-1.5 4.223-2.47 8.524-3.1 12.952-7.72.282-15.632-.328-21.334-5.48-3.862-3.928-4.847-9.315-4.008-14.635.922-1.092 1.867-2.008 2.83-3.1 1.265 1.307 3.3 2.375 3.638 4.207m95.998-2.25c.194.775.232 1.507.306 2.32.368 5.938-2.197 11.413-7.266 14.436-5.548 3.345-11.96 4.5-18.76 4.657-.115-.6-.2-1.385-.266-2.074-.538-3.906-1.273-7.856-2.368-11.602 7.282-.083 16.14 1.837 20.948-4.847.642-.932 1.284-1.784 1.846-2.796 1.076-.482 2.112-1.17 3.15-1.734.874.453 1.537 1.148 2.4 1.64M98.503 76.52c.03 2.277-.698 4.63-2.735 5.717-.956.525-2.07.722-3.146.674-.037-.2-.117-.447-.035-.7 1.67.05 3.265-.55 4.147-1.928.602-1.015.844-2.152.852-3.4.28-.162.597-.282.916-.362m-41.094 6.19c-.3.05-.445.128-1 .003-2.68 0-5.48-2.146-5.32-5.784.317-.122.674-.075 1 .032 0 2.064.834 4.884 5.218 4.884.298.48.01.527.1.865",
    fill: "#fefefe"
  })));
};

CHI.propTypes = {
  size: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
CHI.defaultProps = {
  size: '100'
};
var _default = CHI;
exports["default"] = _default;