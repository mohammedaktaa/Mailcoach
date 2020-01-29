(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/forms/components/CheckBoxField.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/forms/components/CheckBoxField.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CheckboxField; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction CheckboxField(_ref) {\n  var name = _ref.name,\n      label = _ref.label,\n      value = _ref.value,\n      className = _ref.className,\n      onChange = _ref.onChange;\n\n  function handleChange(event) {\n    onChange(event.target.checked);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"flex items-center justify-start text-gray-600 \".concat(className),\n    tabIndex: 0\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"form-checkbox text-green-300 mr-2\",\n    type: \"checkbox\",\n    id: name,\n    name: name,\n    checked: value,\n    onChange: handleChange,\n    tabIndex: -1\n  }), !!label && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"flex-1\"\n  }, label));\n}\n\n//# sourceURL=webpack:///./resources/js/forms/components/CheckBoxField.tsx?");

/***/ }),

/***/ "./resources/js/forms/components/CheckBoxesField.tsx":
/*!***********************************************************!*\
  !*** ./resources/js/forms/components/CheckBoxesField.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CheckboxesField; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! forms */ \"./resources/js/forms/index.tsx\");\n\n\n\n\nfunction CheckboxesField(_ref) {\n  var name = _ref.name,\n      _ref$options = _ref.options,\n      options = _ref$options === void 0 ? [] : _ref$options,\n      value = _ref.value,\n      onChange = _ref.onChange;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(value || []),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      checkBoxValues = _useState2[0],\n      setCheckboxValues = _useState2[1];\n\n  function handleInput(checked, value) {\n    var updatedCheckBoxValues = checked ? [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(checkBoxValues), [value]) : checkBoxValues.filter(function (o) {\n      return o !== value;\n    });\n    setCheckboxValues(updatedCheckBoxValues);\n    onChange(updatedCheckBoxValues);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"checkbox-group\"\n  }, options.map(function (option) {\n    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(forms__WEBPACK_IMPORTED_MODULE_3__[\"CheckboxField\"], {\n      key: option.value,\n      name: \"\".concat(name, \"[]\"),\n      value: checkBoxValues.includes(option.value),\n      onChange: function onChange(checked) {\n        return handleInput(checked, option.value);\n      },\n      label: option.label\n    });\n  }), !checkBoxValues.length && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"input\", {\n    type: \"hidden\",\n    name: \"\".concat(name, \"[]\"),\n    value: \"\"\n  }));\n}\n\n//# sourceURL=webpack:///./resources/js/forms/components/CheckBoxesField.tsx?");

/***/ }),

/***/ "./resources/js/forms/components/DateField.tsx":
/*!*****************************************************!*\
  !*** ./resources/js/forms/components/DateField.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DateField; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker */ \"./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/locale */ \"./node_modules/date-fns/esm/locale/index.js\");\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Field */ \"./resources/js/forms/components/Field.tsx\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n\n\n\n\n\n\nObject(react_datepicker__WEBPACK_IMPORTED_MODULE_2__[\"registerLocale\"])('en-GB', date_fns_locale__WEBPACK_IMPORTED_MODULE_3__[\"enGB\"]);\nfunction DateField(_ref) {\n  var name = _ref.name,\n      label = _ref.label,\n      error = _ref.error,\n      value = _ref.value,\n      onChange = _ref.onChange,\n      required = _ref.required;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(value ? new Date(value) : null),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      date = _useState2[0],\n      setDate = _useState2[1];\n\n  var datePickerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useLayoutEffect\"])(function () {\n    setDate(value ? new Date(value) : null);\n  }, [value]);\n\n  function handleChange(newDate) {\n    onChange(newDate ? Object(date_fns__WEBPACK_IMPORTED_MODULE_5__[\"format\"])(newDate, 'yyyy-MM-dd HH:mm:00') : null);\n    setDate(newDate);\n  }\n\n  function stopEnterKeyPropagation(event) {\n    if (event.key === 'Enter') {\n      event.preventDefault();\n\n      if (datePickerRef.current) {\n        datePickerRef.current.setOpen(false);\n      }\n    }\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Field__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    label: label,\n    name: name,\n    required: required,\n    error: error,\n    onKeyUp: stopEnterKeyPropagation,\n    onKeyPress: stopEnterKeyPropagation\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    ref: datePickerRef,\n    locale: \"en-GB\",\n    selected: date,\n    onChange: handleChange,\n    inline: true,\n    showTimeSelect: true,\n    timeFormat: \"HH:mm\",\n    timeIntervals: 10,\n    timeCaption: \"time\",\n    isClearable: true\n  }));\n}\n\n//# sourceURL=webpack:///./resources/js/forms/components/DateField.tsx?");

/***/ }),

/***/ "./resources/js/forms/components/Field.tsx":
/*!*************************************************!*\
  !*** ./resources/js/forms/components/Field.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Field; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Field(_ref) {\n  var name = _ref.name,\n      label = _ref.label,\n      required = _ref.required,\n      children = _ref.children,\n      error = _ref.error,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? '' : _ref$className;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"\".concat(className)\n  }, !!label && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"text-gray-600\",\n    htmlFor: name\n  }, label, \" \", required === false ? '' : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"text-gray-400\"\n  }, \"*\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, children, !!error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mt-2 text-sm text-red-400\"\n  }, error)));\n}\n\n//# sourceURL=webpack:///./resources/js/forms/components/Field.tsx?");

/***/ }),

/***/ "./resources/js/forms/components/SelectField.tsx":
/*!*******************************************************!*\
  !*** ./resources/js/forms/components/SelectField.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SelectField; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ \"./resources/js/forms/components/Field.tsx\");\n\n\nfunction SelectField(_ref) {\n  var options = _ref.options,\n      name = _ref.name,\n      label = _ref.label,\n      error = _ref.error,\n      value = _ref.value,\n      required = _ref.required,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? '' : _ref$className,\n      onChange = _ref.onChange;\n\n  function handleChange(event) {\n    onChange(event.target.value);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    label: label,\n    name: name,\n    error: error,\n    required: required,\n    className: \"grid gap-1 \".concat(className)\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    className: \"form-select form-input w-full max-w-2xl\",\n    id: name,\n    name: name,\n    required: required,\n    value: value || '',\n    onChange: handleChange\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"\",\n    disabled: true\n  }, \"Select an option\"), options.map(function (_ref2, index) {\n    var label = _ref2.label,\n        value = _ref2.value;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      key: index,\n      value: value\n    }, label);\n  })));\n}\n\n//# sourceURL=webpack:///./resources/js/forms/components/SelectField.tsx?");

/***/ }),

/***/ "./resources/js/forms/components/TextField.tsx":
/*!*****************************************************!*\
  !*** ./resources/js/forms/components/TextField.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextField; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ \"./resources/js/forms/components/Field.tsx\");\n\n\nfunction TextField(_ref) {\n  var _ref$type = _ref.type,\n      type = _ref$type === void 0 ? 'text' : _ref$type,\n      name = _ref.name,\n      label = _ref.label,\n      error = _ref.error,\n      value = _ref.value,\n      required = _ref.required,\n      placeholder = _ref.placeholder,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? '' : _ref$className,\n      onChange = _ref.onChange;\n\n  function handleChange(event) {\n    onChange(event.target.value);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Field__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    label: label,\n    name: name,\n    error: error,\n    required: required,\n    className: \"grid gap-1 \".concat(className)\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"form-input w-full max-w-2xl\",\n    type: type,\n    id: name,\n    name: name,\n    required: required,\n    placeholder: placeholder,\n    value: value || '',\n    autoComplete: \"off\",\n    onChange: handleChange\n  }));\n}\n\n//# sourceURL=webpack:///./resources/js/forms/components/TextField.tsx?");

/***/ }),

/***/ "./resources/js/forms/hooks/useForm.tsx":
/*!**********************************************!*\
  !*** ./resources/js/forms/hooks/useForm.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useForm; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ \"./node_modules/@inertiajs/inertia/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction useForm(initialValues) {\n  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'POST';\n\n  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__[\"usePage\"])(),\n      errors = _usePage.errors;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(initialValues),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      values = _useState2[0],\n      setValues = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      hasChanged = _useState4[0],\n      setHasChanged = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    window.addEventListener('beforeunload', function (e) {\n      if (!hasChanged) {\n        return undefined;\n      }\n\n      var confirmationMessage = 'Your changes will be lost';\n      (e || window.event).returnValue = confirmationMessage;\n      return confirmationMessage;\n    });\n    return function () {\n      window.onbeforeunload = null;\n    };\n  }, []);\n\n  function submit(event) {\n    if (event) {\n      event.preventDefault();\n    }\n\n    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__[\"Inertia\"].visit(action, {\n      method: method,\n      data: values,\n      preserveState: true\n    });\n  }\n\n  function reset() {\n    var newValues = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"cloneDeep\"])(values);\n\n    for (var _i = 0, _Object$entries = Object.entries(newValues); _i < _Object$entries.length; _i++) {\n      var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i], 1),\n          fieldName = _Object$entries$_i[0];\n\n      Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"set\"])(newValues, fieldName, '');\n    }\n\n    setValues(newValues);\n  }\n\n  function getInputProps(fieldName) {\n    function handleChange(value) {\n      var newValues = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"cloneDeep\"])(values);\n      Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"set\"])(newValues, fieldName, value);\n      setValues(newValues);\n      setHasChanged(true);\n    }\n\n    var value = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(values, fieldName);\n\n    if (value === undefined) {\n      console.error(\"The form value for [\".concat(fieldName, \"] was undefined.\"));\n    }\n\n    return {\n      name: fieldName,\n      value: value,\n      error: Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"get\"])(errors, [fieldName, 0], ''),\n      onChange: handleChange\n    };\n  }\n\n  return {\n    values: values,\n    setValues: setValues,\n    reset: reset,\n    submit: submit,\n    getInputProps: getInputProps\n  };\n}\n\n//# sourceURL=webpack:///./resources/js/forms/hooks/useForm.tsx?");

/***/ }),

/***/ "./resources/js/forms/index.tsx":
/*!**************************************!*\
  !*** ./resources/js/forms/index.tsx ***!
  \**************************************/
/*! exports provided: CheckboxField, CheckboxesField, DateField, SelectField, TextAreaField, TextField, useForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_CheckBoxField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/CheckBoxField */ \"./resources/js/forms/components/CheckBoxField.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CheckboxField\", function() { return _components_CheckBoxField__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _components_CheckBoxesField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CheckBoxesField */ \"./resources/js/forms/components/CheckBoxesField.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CheckboxesField\", function() { return _components_CheckBoxesField__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _components_DateField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DateField */ \"./resources/js/forms/components/DateField.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DateField\", function() { return _components_DateField__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _components_SelectField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SelectField */ \"./resources/js/forms/components/SelectField.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SelectField\", function() { return _components_SelectField__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _components_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TextField */ \"./resources/js/forms/components/TextField.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextAreaField\", function() { return _components_TextField__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextField\", function() { return _components_TextField__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _hooks_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useForm */ \"./resources/js/forms/hooks/useForm.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useForm\", function() { return _hooks_useForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./resources/js/forms/index.tsx?");

/***/ }),

/***/ "./resources/js/views/users/partials/UserFormFields.tsx":
/*!**************************************************************!*\
  !*** ./resources/js/views/users/partials/UserFormFields.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UserFormFields; });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! forms */ \"./resources/js/forms/index.tsx\");\n\n\n\nfunction UserFormFields(_ref) {\n  var form = _ref.form;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(forms__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n    label: \"Email\"\n  }, form.getInputProps('email'))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(forms__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n    label: \"Name\",\n    required: false\n  }, form.getInputProps('name'))));\n}\n\n//# sourceURL=webpack:///./resources/js/views/users/partials/UserFormFields.tsx?");

/***/ })

}]);