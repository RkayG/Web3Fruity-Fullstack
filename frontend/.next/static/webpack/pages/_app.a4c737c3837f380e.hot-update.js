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

/***/ "./Components/FeaturedAirdrops.jsx":
/*!*****************************************!*\
  !*** ./Components/FeaturedAirdrops.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/modern/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst FeaturedAirdrops = ()=>{\n    _s();\n    const { isLoading , error , data: airdrops  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)(\"featuredAirdrops\", async ()=>{\n        const response = await fetch(\"http://localhost:1225/api/airdrops\"); // Assuming your API endpoint\n        if (!response.ok) {\n            throw new Error(\"Failed to fetch airdrops\");\n        }\n        return await response.json();\n    });\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading airdrops...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\FeaturedAirdrops.jsx\",\n        lineNumber: 14,\n        columnNumber: 25\n    }, undefined);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error.message\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\FeaturedAirdrops.jsx\",\n        lineNumber: 15,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"featured-airdrops\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Featured Airdrops\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\FeaturedAirdrops.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\",\n                children: airdrops.map((airdrop)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"airdrop-card bg-white rounded-lg shadow-md overflow-hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"airdrop-image-container relative h-48\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: airdrop.image,\n                                        alt: airdrop.title,\n                                        width: 300,\n                                        height: 200,\n                                        className: \"w-full h-full object-cover\" // Achieve cover effect\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\FeaturedAirdrops.jsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"absolute inset-x-0 bottom-2 text-white font-bold bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded focus:outline-none\",\n                                        children: \"View Guide\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\FeaturedAirdrops.jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\FeaturedAirdrops.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"airdrop-details px-4 py-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: airdrop.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\FeaturedAirdrops.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-600\",\n                                        children: airdrop.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\FeaturedAirdrops.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\FeaturedAirdrops.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, airdrop.title, true, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\FeaturedAirdrops.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\FeaturedAirdrops.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\FeaturedAirdrops.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FeaturedAirdrops, \"Uz+W+99nmqFt8hlzGRu06tlr4Ew=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c = FeaturedAirdrops;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturedAirdrops);\nvar _c;\n$RefreshReg$(_c, \"FeaturedAirdrops\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0ZlYXR1cmVkQWlyZHJvcHMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDSztBQUNrQjtBQUVqRCxNQUFNRyxtQkFBbUIsSUFBTTs7SUFDN0IsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLE1BQUssRUFBRUMsTUFBTUMsU0FBUSxFQUFFLEdBQUdMLCtEQUFRQSxDQUFDLG9CQUFvQixVQUFZO1FBQ3BGLE1BQU1NLFdBQVcsTUFBTUMsTUFBTSx1Q0FBdUMsNkJBQTZCO1FBQ2pHLElBQUksQ0FBQ0QsU0FBU0UsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSUMsTUFBTSw0QkFBNEI7UUFDOUMsQ0FBQztRQUNELE9BQU8sTUFBTUgsU0FBU0ksSUFBSTtJQUM1QjtJQUVBLElBQUlSLFdBQVcscUJBQU8sOERBQUNTO2tCQUFFOzs7Ozs7SUFDekIsSUFBSVIsT0FBTyxxQkFBTyw4REFBQ1E7O1lBQUU7WUFBUVIsTUFBTVMsT0FBTzs7Ozs7OztJQUUxQyxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBSUYsV0FBVTswQkFDWlQsU0FBU1ksR0FBRyxDQUFDLENBQUNDLHdCQUNiLDhEQUFDRjt3QkFBSUYsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFJRixXQUFVOztrREFDYiw4REFBQ2YsbURBQUtBO3dDQUNKb0IsS0FBS0QsUUFBUUUsS0FBSzt3Q0FDbEJDLEtBQUtILFFBQVFJLEtBQUs7d0NBQ2xCQyxPQUFPO3dDQUNQQyxRQUFRO3dDQUNSVixXQUFVLDZCQUE2Qix1QkFBdUI7Ozs7OztrREFFaEUsOERBQUNXO3dDQUFPWCxXQUFVO2tEQUFzSDs7Ozs7Ozs7Ozs7OzBDQUkxSSw4REFBQ0U7Z0NBQUlGLFdBQVU7O2tEQUNiLDhEQUFDWTtrREFBSVIsUUFBUUksS0FBSzs7Ozs7O2tEQUNsQiw4REFBQ1g7d0NBQUVHLFdBQVU7a0RBQWlCSSxRQUFRUyxXQUFXOzs7Ozs7Ozs7Ozs7O3VCQWY0QlQsUUFBUUksS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztBQXNCeEc7R0F2Q01yQjs7UUFDeUNELDJEQUFRQTs7O0tBRGpEQztBQXlDTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvRmVhdHVyZWRBaXJkcm9wcy5qc3g/MzcxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcclxuXHJcbmNvbnN0IEZlYXR1cmVkQWlyZHJvcHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpc0xvYWRpbmcsIGVycm9yLCBkYXRhOiBhaXJkcm9wcyB9ID0gdXNlUXVlcnkoJ2ZlYXR1cmVkQWlyZHJvcHMnLCBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjEyMjUvYXBpL2FpcmRyb3BzJyk7IC8vIEFzc3VtaW5nIHlvdXIgQVBJIGVuZHBvaW50XHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIGFpcmRyb3BzJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZyBhaXJkcm9wcy4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWF0dXJlZC1haXJkcm9wc1wiPlxyXG4gICAgICA8aDI+RmVhdHVyZWQgQWlyZHJvcHM8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cclxuICAgICAgICB7YWlyZHJvcHMubWFwKChhaXJkcm9wKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFpcmRyb3AtY2FyZCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW5cIiBrZXk9e2FpcmRyb3AudGl0bGV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFpcmRyb3AtaW1hZ2UtY29udGFpbmVyIHJlbGF0aXZlIGgtNDhcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz17YWlyZHJvcC5pbWFnZX1cclxuICAgICAgICAgICAgICAgIGFsdD17YWlyZHJvcC50aXRsZX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH0gLy8gQWRqdXN0IGFzIG5lZWRlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiAvLyBBY2hpZXZlIGNvdmVyIGVmZmVjdFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC14LTAgYm90dG9tLTIgdGV4dC13aGl0ZSBmb250LWJvbGQgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgcHgtNCBweS0yIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICBWaWV3IEd1aWRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFpcmRyb3AtZGV0YWlscyBweC00IHB5LTJcIj5cclxuICAgICAgICAgICAgICA8aDM+e2FpcmRyb3AudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+e2FpcmRyb3AuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWRBaXJkcm9wcztcclxuICJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwidXNlUXVlcnkiLCJGZWF0dXJlZEFpcmRyb3BzIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiYWlyZHJvcHMiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImpzb24iLCJwIiwibWVzc2FnZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMiIsImRpdiIsIm1hcCIsImFpcmRyb3AiLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJidXR0b24iLCJoMyIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/FeaturedAirdrops.jsx\n"));

/***/ })

});