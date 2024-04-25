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

/***/ "./Components/Airdrops.jsx":
/*!*********************************!*\
  !*** ./Components/Airdrops.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// Airdrops skeleton component\nconst AirdropsSkeleton = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4\",\n        children: [\n            1,\n            2,\n            3,\n            4\n        ].map((index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-md shadow-md p-4 border-2 border-solid border-gray-200 animate-pulse\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-24 bg-gray-200 mb-4 rounded\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-4 bg-gray-200 mb-2 rounded\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-4 bg-gray-200 mb-2 rounded\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-4 bg-gray-200 mb-2 rounded\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-4 bg-gray-200 mb-2 rounded\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-4 bg-gray-200 mb-2 rounded\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AirdropsSkeleton;\nconst Airdrops = ()=>{\n    _s();\n    const [airdrops, setAirdrops] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:1225/airdrops\");\n                setAirdrops(response.data);\n                setLoading(false); // Set loading to false after data is fetched\n            } catch (error) {\n                console.error(\"Error fetching airdrops:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-lg md:text-xl lg:text-3xl font-bold mb-8 pl-8 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500\",\n                children: \"Recent Airdrops\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AirdropsSkeleton, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4\",\n                children: airdrops.map((airdrop)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white rounded-md shadow-md p-4 border-2 border-solid border-gray-200 relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"absolute top-2 right-2 text-sm font-semibold text-white green bg-opacity-50 py-1 px-2 rounded-xl\",\n                                children: airdrop.platformType\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-16 h-16 relative\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: airdrop.image,\n                                            className: \" w-16 h-16 rounded-full\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-lg font-bold absolute left-24 top-5\",\n                                        children: airdrop.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-500 mb-2\",\n                                children: [\n                                    \"Total Reward Pool: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-semibold absolute top-10\",\n                                        children: airdrop.rewardPool || \"N/A\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 36\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-500 mb-2\",\n                                children: [\n                                    \"% of Total Supply: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-semibold\",\n                                        children: airdrop.rewardPercentFromSupply || \"N/A\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 36\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-500\",\n                                children: [\n                                    \"End Date: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-semibold\",\n                                        children: new Date(airdrop.endDate).toLocaleDateString() || \"N/A\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 27\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-500\",\n                                children: [\n                                    \"Chain: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-semibold\",\n                                        children: airdrop.chain || \"N/A\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 24\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, airdrop._id, true, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\Components\\\\Airdrops.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Airdrops, \"s2jUeNMH1Yfh2aAK40IS++oKhK0=\");\n_c1 = Airdrops;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Airdrops);\nvar _c, _c1;\n$RefreshReg$(_c, \"AirdropsSkeleton\");\n$RefreshReg$(_c1, \"Airdrops\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0FpcmRyb3BzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBQ2I7QUFDTDtBQUUxQiw4QkFBOEI7QUFDOUIsTUFBTUksbUJBQW1CLElBQU07SUFDN0IscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1o7WUFBQztZQUFHO1lBQUc7WUFBRztTQUFFLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxzQkFDakIsOERBQUNIO2dCQUFnQkMsV0FBVTs7a0NBQ3pCLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7OztlQU5QRTs7Ozs7Ozs7OztBQVdsQjtLQWZNSjtBQWlCTixNQUFNSyxXQUFXLElBQU07O0lBQ3JCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTNDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWMsWUFBWSxVQUFZO1lBQzVCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNWixpREFBUyxDQUFDO2dCQUNqQ1EsWUFBWUksU0FBU0UsSUFBSTtnQkFDekJKLFdBQVcsS0FBSyxHQUFHLDZDQUE2QztZQUNsRSxFQUFFLE9BQU9LLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1lBQzVDO1FBQ0Y7UUFFQUo7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1Q7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNjO2dCQUFHZCxXQUFVOzBCQUEwSTs7Ozs7O1lBR3pKTSx3QkFDQyw4REFBQ1I7Ozs7MENBRUQsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNaSSxTQUFTSCxHQUFHLENBQUMsQ0FBQ2Msd0JBQ2IsOERBQUNoQjt3QkFFQ0MsV0FBVTs7MENBRVYsOERBQUNnQjtnQ0FBS2hCLFdBQVU7MENBQ2JlLFFBQVFFLFlBQVk7Ozs7OzswQ0FFdkIsOERBQUNsQjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNYLDRFQUFDa0I7NENBQUlDLEtBQUtKLFFBQVFLLEtBQUs7NENBQUVwQixXQUFVOzs7Ozs7Ozs7OztrREFFdkMsOERBQUNjO3dDQUFHZCxXQUFVO2tEQUE0Q2UsUUFBUU0sS0FBSzs7Ozs7Ozs7Ozs7OzBDQUd6RSw4REFBQ0M7Z0NBQUV0QixXQUFVOztvQ0FBNkI7a0RBQ3JCLDhEQUFDZ0I7d0NBQUtoQixXQUFVO2tEQUFpQ2UsUUFBUVEsVUFBVSxJQUFJOzs7Ozs7Ozs7Ozs7MENBRTVGLDhEQUFDRDtnQ0FBRXRCLFdBQVU7O29DQUE2QjtrREFDckIsOERBQUNnQjt3Q0FBS2hCLFdBQVU7a0RBQWlCZSxRQUFRUyx1QkFBdUIsSUFBSTs7Ozs7Ozs7Ozs7OzBDQUV6Riw4REFBQ0Y7Z0NBQUV0QixXQUFVOztvQ0FBd0I7a0RBQ3pCLDhEQUFDZ0I7d0NBQUtoQixXQUFVO2tEQUFpQixJQUFJeUIsS0FBS1YsUUFBUVcsT0FBTyxFQUFFQyxrQkFBa0IsTUFBTTs7Ozs7Ozs7Ozs7OzBDQUUvRiw4REFBQ0w7Z0NBQUV0QixXQUFVOztvQ0FBd0I7a0RBQzVCLDhEQUFDZ0I7d0NBQUtoQixXQUFVO2tEQUFpQmUsUUFBUWEsS0FBSyxJQUFJOzs7Ozs7Ozs7Ozs7O3VCQXZCdERiLFFBQVFjLEdBQUc7Ozs7Ozs7Ozt5QkE0QnZCOzs7Ozs7O0FBR1A7R0E1RE0xQjtNQUFBQTtBQThETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0FpcmRyb3BzLmpzeD84MTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbi8vIEFpcmRyb3BzIHNrZWxldG9uIGNvbXBvbmVudFxyXG5jb25zdCBBaXJkcm9wc1NrZWxldG9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTRcIj5cclxuICAgICAge1sxLCAyLCAzLCA0XS5tYXAoKGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy1tZCBwLTQgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTIwMCBhbmltYXRlLXB1bHNlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMjQgYmctZ3JheS0yMDAgbWItNCByb3VuZGVkXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCBiZy1ncmF5LTIwMCBtYi0yIHJvdW5kZWRcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktMjAwIG1iLTIgcm91bmRlZFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTQgYmctZ3JheS0yMDAgbWItMiByb3VuZGVkXCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNCBiZy1ncmF5LTIwMCBtYi0yIHJvdW5kZWRcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00IGJnLWdyYXktMjAwIG1iLTIgcm91bmRlZFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBBaXJkcm9wcyA9ICgpID0+IHtcclxuICBjb25zdCBbYWlyZHJvcHMsIHNldEFpcmRyb3BzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDoxMjI1L2FpcmRyb3BzJyk7XHJcbiAgICAgICAgc2V0QWlyZHJvcHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7IC8vIFNldCBsb2FkaW5nIHRvIGZhbHNlIGFmdGVyIGRhdGEgaXMgZmV0Y2hlZFxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFpcmRyb3BzOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbXktMjAnPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQteGwgbGc6dGV4dC0zeGwgZm9udC1ib2xkIG1iLTggcGwtOCBpbmxpbmUtYmxvY2sgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAwIHRvLXJlZC01MDBcIj5cclxuICAgICAgICAgICAgUmVjZW50IEFpcmRyb3BzXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAge2xvYWRpbmcgPyAoIC8vIFJlbmRlciBsb2FkaW5nIHNrZWxldG9uIGlmIGxvYWRpbmcgaXMgdHJ1ZVxyXG4gICAgICAgIDxBaXJkcm9wc1NrZWxldG9uIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC00IG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy00XCI+XHJcbiAgICAgICAgICB7YWlyZHJvcHMubWFwKChhaXJkcm9wKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2FpcmRyb3AuX2lkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbWQgc2hhZG93LW1kIHAtNCBib3JkZXItMiBib3JkZXItc29saWQgYm9yZGVyLWdyYXktMjAwIHJlbGF0aXZlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgZ3JlZW4gYmctb3BhY2l0eS01MCBweS0xIHB4LTIgcm91bmRlZC14bFwiPlxyXG4gICAgICAgICAgICAgICAge2FpcmRyb3AucGxhdGZvcm1UeXBlfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthaXJkcm9wLmltYWdlfSBjbGFzc05hbWU9XCIgdy0xNiBoLTE2IHJvdW5kZWQtZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBhYnNvbHV0ZSBsZWZ0LTI0IHRvcC01XCI+e2FpcmRyb3AudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi0yXCI+e2FpcmRyb3AuZGVzY3JpcHRpb259PC9wPiAqL31cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgVG90YWwgUmV3YXJkIFBvb2w6IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgYWJzb2x1dGUgdG9wLTEwXCI+e2FpcmRyb3AucmV3YXJkUG9vbCB8fCAnTi9BJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAlIG9mIFRvdGFsIFN1cHBseTogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPnthaXJkcm9wLnJld2FyZFBlcmNlbnRGcm9tU3VwcGx5IHx8ICdOL0EnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICBFbmQgRGF0ZTogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPntuZXcgRGF0ZShhaXJkcm9wLmVuZERhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpIHx8ICdOL0EnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICBDaGFpbjogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPnthaXJkcm9wLmNoYWluIHx8ICdOL0EnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWlyZHJvcHM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiYXhpb3MiLCJBaXJkcm9wc1NrZWxldG9uIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiLCJBaXJkcm9wcyIsImFpcmRyb3BzIiwic2V0QWlyZHJvcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImgyIiwiYWlyZHJvcCIsInNwYW4iLCJwbGF0Zm9ybVR5cGUiLCJpbWciLCJzcmMiLCJpbWFnZSIsInRpdGxlIiwicCIsInJld2FyZFBvb2wiLCJyZXdhcmRQZXJjZW50RnJvbVN1cHBseSIsIkRhdGUiLCJlbmREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiY2hhaW4iLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Airdrops.jsx\n"));

/***/ })

});