"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/avatar */ \"./node_modules/antd/lib/avatar/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout */ \"./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/bobtang/Desktop/nextjs-github/components/Layout.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Header,\n    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Content,\n    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Footer;\n\n\nvar githubIconStyle = {\n  color: 'white',\n  fontSize: 40,\n  paddingTop: 10,\n  marginRight: 20,\n  display: 'inline-block'\n};\nvar logoStyle = {\n  dispaly: 'inline-block',\n  height: 64\n};\nvar inputStyle = {\n  display: 'inline-block',\n  height: 64\n};\nvar footerStyle = {\n  textAlign: 'center'\n};\n\nvar AppLayout = function AppLayout(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var handleSearchChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {\n    setSearch(event.target.value);\n  }, []);\n  var handleOnSearch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {});\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(antd_lib_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Header, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"jsx-1887051239\" + \" \" + \"header-inner\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          style: \"width:50%;\",\n          className: \"jsx-1887051239\" + \" \" + \"header-left\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            style: logoStyle,\n            className: \"jsx-1887051239\" + \" \" + \"logo\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.GithubOutlined, {\n              style: githubIconStyle\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 26\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            style: inputStyle,\n            className: \"jsx-1887051239\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Search, {\n              placeholder: \"\\u641C\\u7D22\\u4ED3\\u5E93\",\n              value: search,\n              onChange: handleSearchChange,\n              onSearch: handleOnSearch\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 25\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"jsx-1887051239\" + \" \" + \"header-right\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"jsx-1887051239\" + \" \" + \"user\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              size: 40,\n              icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UserOutlined, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 49\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 25\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Content, {\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Footer, {\n      style: footerStyle,\n      children: [\"Develop by Bob @\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"a\", {\n        href: \"mailto:tangbob171@gmail.com\",\n        className: \"jsx-1887051239\",\n        children: \"Bob@gmail.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {\n      id: \"1887051239\",\n      children: \".header-inner.jsx-1887051239{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-left.jsx-1887051239{dispaly:-webkit-box;dispaly:-webkit-flex;dispaly:-ms-flexbox;dispaly:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib2J0YW5nL0Rlc2t0b3AvbmV4dGpzLWdpdGh1Yi9jb21wb25lbnRzL0xheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERTLEFBSTZCLEFBS0MsMEVBSmlCLEFBS0gseUdBRS9CLFVBTkEiLCJmaWxlIjoiL1VzZXJzL2JvYnRhbmcvRGVza3RvcC9uZXh0anMtZ2l0aHViL2NvbXBvbmVudHMvTGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExheW91dCwgSW5wdXQsQXZhdGFyIH0gZnJvbSAnYW50ZCc7XG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXQ7XG5pbXBvcnQge0dpdGh1Yk91dGxpbmVkLFVzZXJPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXG5jb25zdCBnaXRodWJJY29uU3R5bGUgPSB7XG4gICAgY29sb3I6J3doaXRlJyxcbiAgICBmb250U2l6ZTo0MCxcbiAgICBwYWRkaW5nVG9wOjEwLFxuICAgIG1hcmdpblJpZ2h0OjIwLFxuICAgIGRpc3BsYXk6J2lubGluZS1ibG9jaydcbn1cbmNvbnN0IGxvZ29TdHlsZSA9IHtcbiAgICBkaXNwYWx5OidpbmxpbmUtYmxvY2snLFxuICAgIGhlaWdodDo2NCxcbn1cbmNvbnN0IGlucHV0U3R5bGUgPSB7XG4gICAgZGlzcGxheTonaW5saW5lLWJsb2NrJyxcbiAgICBoZWlnaHQ6NjRcbn1cbmNvbnN0IGZvb3RlclN0eWxlID0ge1xuICAgIHRleHRBbGlnbjonY2VudGVyJ1xufVxuIGNvbnN0IEFwcExheW91dCA9ICh7Y2hpbGRyZW59KSA9PntcbiAgICBjb25zdCBbc2VhcmNoLHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IHVzZUNhbGxiYWNrKChldmVudCk9PntcbiAgICAgICAgc2V0U2VhcmNoKGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICB9LFtdKVxuXG4gICAgY29uc3QgaGFuZGxlT25TZWFyY2ggPSB1c2VDYWxsYmFjayggKCkgPT4ge1xuXG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbm5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIiBzdHlsZT1cIndpZHRoOjUwJTtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgc3R5bGU9e2xvZ29TdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPEdpdGh1Yk91dGxpbmVkIHN0eWxlPXtnaXRodWJJY29uU3R5bGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2lucHV0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5pCc57Si5LuT5bqTXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoPXtoYW5kbGVPblNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXs0MH0gaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgPENvbnRlbnQ+e2NoaWxkcmVufTwvQ29udGVudD5cbiAgICAgICAgPEZvb3RlciBzdHlsZT17Zm9vdGVyU3R5bGV9PlxuICAgICAgICAgICAgRGV2ZWxvcCBieSBCb2IgQFxuICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzp0YW5nYm9iMTcxQGdtYWlsLmNvbVwiPkJvYkBnbWFpbC5jb208L2E+XG4gICAgICAgIDwvRm9vdGVyPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgICAgey8qIOmHjOmdoueahOWFg+e0oOW3puWPs+W8gOWni+eJjCAqL31cbiAgICAgICAgICAgIC5oZWFkZXItaW5uZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9ICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiDorqnph4zpnaLnmoTlhYPntKDku47lt6bliLDlj7PmjpLliJcgKi99XG4gICAgICAgICAgICAuaGVhZGVyLWxlZnQge1xuICAgICAgICAgICAgICAgIGRpc3BhbHk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICB7LyrlhajlsYDnmoTmoLflvI8gKi99XG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXYjX19uZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hbnQtbGF5b3V0IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDsiXX0= */\\n/*@ sourceURL=/Users/bobtang/Desktop/nextjs-github/components/Layout.jsx */\"\n    }, void 0, false, void 0, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"style\", {\n      children: \"\\n                body {\\n                    height:100%;\\n                }\\n                div#__next {\\n                    height:100%;\\n                }\\n                .ant-layout {\\n                    height:100%;\\n                }\\n                \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AppLayout, \"t9a9HHLcQHAeP66BMr22cuTn9MQ=\");\n\n_c = AppLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\n\nvar _c;\n\n$RefreshReg$(_c, \"AppLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUF4Qko7QUFBQTtBQUFBO0FBQUEsbURBNkNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBK0RILENBekVBOztHQUFNRTs7S0FBQUE7QUEyRVAsK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanN4P2M2MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGF5b3V0LCBJbnB1dCxBdmF0YXIgfSBmcm9tICdhbnRkJztcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dDtcbmltcG9ydCB7R2l0aHViT3V0bGluZWQsVXNlck91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcbmNvbnN0IGdpdGh1Ykljb25TdHlsZSA9IHtcbiAgICBjb2xvcjond2hpdGUnLFxuICAgIGZvbnRTaXplOjQwLFxuICAgIHBhZGRpbmdUb3A6MTAsXG4gICAgbWFyZ2luUmlnaHQ6MjAsXG4gICAgZGlzcGxheTonaW5saW5lLWJsb2NrJ1xufVxuY29uc3QgbG9nb1N0eWxlID0ge1xuICAgIGRpc3BhbHk6J2lubGluZS1ibG9jaycsXG4gICAgaGVpZ2h0OjY0LFxufVxuY29uc3QgaW5wdXRTdHlsZSA9IHtcbiAgICBkaXNwbGF5OidpbmxpbmUtYmxvY2snLFxuICAgIGhlaWdodDo2NFxufVxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XG4gICAgdGV4dEFsaWduOidjZW50ZXInXG59XG4gY29uc3QgQXBwTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+e1xuICAgIGNvbnN0IFtzZWFyY2gsc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGV2ZW50KT0+e1xuICAgICAgICBzZXRTZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH0sW10pXG5cbiAgICBjb25zdCBoYW5kbGVPblNlYXJjaCA9IHVzZUNhbGxiYWNrKCAoKSA9PiB7XG5cbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiIHN0eWxlPVwid2lkdGg6NTAlO1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiBzdHlsZT17bG9nb1N0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8R2l0aHViT3V0bGluZWQgc3R5bGU9e2dpdGh1Ykljb25TdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17aW5wdXRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLmkJzntKLku5PlupNcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e2hhbmRsZU9uU2VhcmNofVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBpY29uPXs8VXNlck91dGxpbmVkIC8+fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgICA8Q29udGVudD57Y2hpbGRyZW59PC9Db250ZW50PlxuICAgICAgICA8Rm9vdGVyIHN0eWxlPXtmb290ZXJTdHlsZX0+XG4gICAgICAgICAgICBEZXZlbG9wIGJ5IEJvYiBAXG4gICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOnRhbmdib2IxNzFAZ21haWwuY29tXCI+Qm9iQGdtYWlsLmNvbTwvYT5cbiAgICAgICAgPC9Gb290ZXI+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgICB7Lyog6YeM6Z2i55qE5YWD57Sg5bem5Y+z5byA5aeL54mMICovfVxuICAgICAgICAgICAgLmhlYWRlci1pbm5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxuICAgICAgICAgICAgey8qIOiuqemHjOmdoueahOWFg+e0oOS7juW3puWIsOWPs+aOkuWIlyAqL31cbiAgICAgICAgICAgIC5oZWFkZXItbGVmdCB7XG4gICAgICAgICAgICAgICAgZGlzcGFseTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIHsvKuWFqOWxgOeahOagt+W8jyAqL31cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpdiNfX25leHQge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFudC1sYXlvdXQge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0OyJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIkdpdGh1Yk91dGxpbmVkIiwiVXNlck91dGxpbmVkIiwiZ2l0aHViSWNvblN0eWxlIiwiY29sb3IiLCJmb250U2l6ZSIsInBhZGRpbmdUb3AiLCJtYXJnaW5SaWdodCIsImRpc3BsYXkiLCJsb2dvU3R5bGUiLCJkaXNwYWx5IiwiaGVpZ2h0IiwiaW5wdXRTdHlsZSIsImZvb3RlclN0eWxlIiwidGV4dEFsaWduIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJzZWFyY2giLCJzZXRTZWFyY2giLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlT25TZWFyY2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.jsx\n");

/***/ })

});