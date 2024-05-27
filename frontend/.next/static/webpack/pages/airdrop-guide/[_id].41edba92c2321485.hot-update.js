"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/airdrop-guide/[_id]",{

/***/ "./pages/airdrop-guide/[_id].js":
/*!**************************************!*\
  !*** ./pages/airdrop-guide/[_id].js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ \"./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AirdropGuide = ()=>{\n    _s();\n    const [airdropData, setAirdropData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchAirdrop = async (_id)=>{\n            try {\n                const response = await fetch(\"http://localhost:1225/airdrops/\".concat(_id));\n                const airdrop = await response.json();\n                console.log(airdrop);\n                setAirdropData(airdrop);\n            } catch (error) {\n                console.error(\"Failed to load airdrop guide:\", error);\n            //setError('Failed to load airdrop guide');\n            }\n        };\n        if (router.isReady) {\n            const { _id  } = router.query;\n            console.log(_id);\n            if (_id) {\n                fetchAirdrop(_id);\n            }\n        }\n    }, [\n        router.isReady,\n        router.query._id\n    ]);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: error\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n            lineNumber: 33,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (!airdropData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading airdrop guide...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n            lineNumber: 37,\n            columnNumber: 12\n        }, undefined);\n    }\n    const { title , description , logo , guide  } = airdropData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            logo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: logo,\n                alt: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                lineNumber: 44,\n                columnNumber: 16\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            guide ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Guide\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: (0,_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_3__.documentToReactComponents)(guide.content)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"No guide available for this airdrop.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AirdropGuide, \"uSnqoEUMNRTZv1CpNFIX3EnWSLU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AirdropGuide;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AirdropGuide);\nvar _c;\n$RefreshReg$(_c, \"AirdropGuide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9haXJkcm9wLWd1aWRlL1tfaWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDWDtBQUN5QztBQUVqRixNQUFNSyxlQUFlLElBQU07O0lBQ3pCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ25ELE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3ZDLE1BQU1TLFNBQVNQLHNEQUFTQTtJQUV4QkQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1TLGVBQWUsT0FBT0MsTUFBUTtZQUNsQyxJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxrQ0FBc0MsT0FBSkY7Z0JBQy9ELE1BQU1HLFVBQVUsTUFBTUYsU0FBU0csSUFBSTtnQkFDbkNDLFFBQVFDLEdBQUcsQ0FBQ0g7Z0JBQ1pSLGVBQWVRO1lBQ2pCLEVBQUUsT0FBT1AsT0FBTztnQkFDZFMsUUFBUVQsS0FBSyxDQUFDLGlDQUFpQ0E7WUFDL0MsMkNBQTJDO1lBQzdDO1FBQ0Y7UUFFQSxJQUFJRSxPQUFPUyxPQUFPLEVBQUU7WUFDbEIsTUFBTSxFQUFFUCxJQUFHLEVBQUUsR0FBR0YsT0FBT1UsS0FBSztZQUM1QkgsUUFBUUMsR0FBRyxDQUFDTjtZQUNaLElBQUlBLEtBQUs7Z0JBQ1BELGFBQWFDO1lBQ2YsQ0FBQztRQUNILENBQUM7SUFDSCxHQUFHO1FBQUNGLE9BQU9TLE9BQU87UUFBRVQsT0FBT1UsS0FBSyxDQUFDUixHQUFHO0tBQUM7SUFFckMsSUFBSUosT0FBTztRQUNULHFCQUFPLDhEQUFDYTtzQkFBS2I7Ozs7OztJQUNmLENBQUM7SUFFRCxJQUFJLENBQUNGLGFBQWE7UUFDaEIscUJBQU8sOERBQUNlO3NCQUFJOzs7Ozs7SUFDZCxDQUFDO0lBRUQsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR25CO0lBRTVDLHFCQUNFLDhEQUFDZTs7WUFDRUcsc0JBQVEsOERBQUNFO2dCQUFJQyxLQUFLSDtnQkFBTUksS0FBS047Ozs7OzswQkFDOUIsOERBQUNPOzBCQUFJUDs7Ozs7OzBCQUNMLDhEQUFDUTswQkFBR1A7Ozs7OztZQUNIRSxzQkFDQyw4REFBQ0o7O2tDQUNDLDhEQUFDVTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDVjtrQ0FBS2pCLCtGQUF5QkEsQ0FBQ3FCLE1BQU1PLE9BQU87Ozs7Ozs7Ozs7OzBDQUcvQyw4REFBQ0Y7MEJBQUU7Ozs7O3lCQUNKOzs7Ozs7O0FBR1A7R0FwRE16Qjs7UUFHV0Ysa0RBQVNBOzs7S0FIcEJFO0FBc0ROLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FpcmRyb3AtZ3VpZGUvW19pZF0uanM/YTBiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzIH0gZnJvbSAnQGNvbnRlbnRmdWwvcmljaC10ZXh0LXJlYWN0LXJlbmRlcmVyJztcclxuXHJcbmNvbnN0IEFpcmRyb3BHdWlkZSA9ICgpID0+IHtcclxuICBjb25zdCBbYWlyZHJvcERhdGEsIHNldEFpcmRyb3BEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEFpcmRyb3AgPSBhc3luYyAoX2lkKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDoxMjI1L2FpcmRyb3BzLyR7X2lkfWApO1xyXG4gICAgICAgIGNvbnN0IGFpcmRyb3AgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWlyZHJvcCk7XHJcbiAgICAgICAgc2V0QWlyZHJvcERhdGEoYWlyZHJvcCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgYWlyZHJvcCBndWlkZTonLCBlcnJvcik7XHJcbiAgICAgICAgLy9zZXRFcnJvcignRmFpbGVkIHRvIGxvYWQgYWlyZHJvcCBndWlkZScpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChyb3V0ZXIuaXNSZWFkeSkge1xyXG4gICAgICBjb25zdCB7IF9pZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgICBjb25zb2xlLmxvZyhfaWQpO1xyXG4gICAgICBpZiAoX2lkKSB7XHJcbiAgICAgICAgZmV0Y2hBaXJkcm9wKF9pZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcm91dGVyLmlzUmVhZHksIHJvdXRlci5xdWVyeS5faWRdKTtcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gPGRpdj57ZXJyb3J9PC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgaWYgKCFhaXJkcm9wRGF0YSkge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZyBhaXJkcm9wIGd1aWRlLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGxvZ28sIGd1aWRlIH0gPSBhaXJkcm9wRGF0YTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtsb2dvICYmIDxpbWcgc3JjPXtsb2dvfSBhbHQ9e3RpdGxlfSAvPn1cclxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICB7Z3VpZGUgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj5HdWlkZTwvaDI+XHJcbiAgICAgICAgICA8ZGl2Pntkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzKGd1aWRlLmNvbnRlbnQpfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwPk5vIGd1aWRlIGF2YWlsYWJsZSBmb3IgdGhpcyBhaXJkcm9wLjwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBaXJkcm9wR3VpZGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyIsIkFpcmRyb3BHdWlkZSIsImFpcmRyb3BEYXRhIiwic2V0QWlyZHJvcERhdGEiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwiZmV0Y2hBaXJkcm9wIiwiX2lkIiwicmVzcG9uc2UiLCJmZXRjaCIsImFpcmRyb3AiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImlzUmVhZHkiLCJxdWVyeSIsImRpdiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsb2dvIiwiZ3VpZGUiLCJpbWciLCJzcmMiLCJhbHQiLCJoMSIsInAiLCJoMiIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/airdrop-guide/[_id].js\n"));

/***/ })

});