(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _extends() {\n  module.exports = _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nmodule.exports = _extends;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/extends.js?");

/***/ }),

/***/ "./resources/js/components/Modal.tsx":
/*!*******************************************!*\
  !*** ./resources/js/components/Modal.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Modal; });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar ModalContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])({\n  onDismiss: function onDismiss() {}\n});\nfunction Modal(_ref) {\n  var children = _ref.children,\n      title = _ref.title,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? '' : _ref$className,\n      _ref$size = _ref.size,\n      size = _ref$size === void 0 ? 'base' : _ref$size,\n      onDismiss = _ref.onDismiss,\n      _ref$confirmOnDismiss = _ref.confirmOnDismiss,\n      confirmOnDismiss = _ref$confirmOnDismiss === void 0 ? false : _ref$confirmOnDismiss,\n      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, [\"children\", \"title\", \"className\", \"size\", \"onDismiss\", \"confirmOnDismiss\"]);\n\n  function dismissModal(checkConfirmation) {\n    if (onDismiss) {\n      if (checkConfirmation && confirmOnDismiss && !confirm('Close this form and lose your input?')) {\n        return;\n      }\n\n      onDismiss();\n    }\n  }\n\n  var modalTarget = document.getElementById('modal-target');\n  var modalContextValue = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return {\n      onDismiss: function () {\n        return dismissModal(false);\n      } || function () {}\n    };\n  }, [onDismiss]);\n\n  if (!modalTarget) {\n    return null;\n  }\n\n  function stop(event) {\n    event.stopPropagation();\n  }\n\n  var sizeClassName = size === 'lg' ? 'modal-wrapper-lg' : size === 'md' ? 'modal-wrapper-md' : '';\n  return Object(react_dom__WEBPACK_IMPORTED_MODULE_3__[\"createPortal\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ModalContext.Provider, {\n    value: modalContextValue\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"modal-backdrop\",\n    onMouseDown: function onMouseDown() {\n      return dismissModal(true);\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n    className: \"modal-wrapper \".concat(sizeClassName, \" \").concat(className),\n    onMouseDown: stop\n  }, props), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return dismissModal(false);\n    },\n    className: \"modal-close\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"i\", {\n    className: \"fas fa-times\"\n  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"modal\"\n  }, title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"header\", {\n    className: \"modal-header\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n    className: \"modal-title\"\n  }, title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"modal-content scrollbar\"\n  }, children && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"section\", {\n    className: \"h-full\"\n  }, children)))))), modalTarget);\n}\n\nfunction ModalButtons(_ref2) {\n  var children = _ref2.children,\n      _ref2$className = _ref2.className,\n      className = _ref2$className === void 0 ? '' : _ref2$className;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(ModalContext),\n      onDismiss = _useContext.onDismiss;\n\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"\".concat(className)\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"form-buttons-modal gap-4 mt-6 -mb-6 py-3 bg-white border-t-3 border-tint-200\"\n  }, children, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"button\", {\n    type: \"button\",\n    className: \"link-dimmed\",\n    onClick: onDismiss\n  }, \"Cancel\")));\n}\n\nModal.Buttons = ModalButtons;\n\n//# sourceURL=webpack:///./resources/js/components/Modal.tsx?");

/***/ }),

/***/ "./resources/js/views/campaigns/components/CampaignPreviewModal.tsx":
/*!**************************************************************************!*\
  !*** ./resources/js/views/campaigns/components/CampaignPreviewModal.tsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CampaignPreviewModal; });\n/* harmony import */ var react_frame_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-frame-component */ \"./node_modules/react-frame-component/lib/index.js\");\n/* harmony import */ var react_frame_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_frame_component__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Modal */ \"./resources/js/components/Modal.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction CampaignPreviewModal(_ref) {\n  var html = _ref.html,\n      onDismiss = _ref.onDismiss;\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onDismiss: onDismiss,\n    size: \"lg\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_frame_component__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    className: \"w-full h-full\"\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: html\n    }\n  })));\n}\n\n//# sourceURL=webpack:///./resources/js/views/campaigns/components/CampaignPreviewModal.tsx?");

/***/ })

}]);