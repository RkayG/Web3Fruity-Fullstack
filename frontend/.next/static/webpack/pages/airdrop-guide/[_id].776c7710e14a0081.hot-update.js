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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ \"./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js\");\n/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @contentful/rich-text-types */ \"./node_modules/@contentful/rich-text-types/dist/index.js\");\n/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AirdropGuide = ()=>{\n    _s();\n    const [airdropData, setAirdropData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchAirdrop = async (_id)=>{\n            try {\n                const response = await fetch(\"http://localhost:1225/airdrops/\".concat(_id));\n                const airdrop = await response.json();\n                console.log(airdrop);\n                setAirdropData(airdrop);\n            } catch (error) {\n                console.error(\"Failed to load airdrop guide:\", error);\n                setError(\"Failed to load airdrop guide\");\n            }\n        };\n        if (router.isReady) {\n            const { _id  } = router.query;\n            console.log(_id);\n            if (_id) {\n                fetchAirdrop(_id);\n            }\n        }\n    }, [\n        router.isReady,\n        router.query._id\n    ]);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-red-500\",\n            children: error\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n            lineNumber: 34,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (!airdropData) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center text-gray-500\",\n            children: \"Loading airdrop guide...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n            lineNumber: 38,\n            columnNumber: 12\n        }, undefined);\n    }\n    const { title , description , logo , guide  } = airdropData;\n    // Define custom render options\n    const renderOptions = {\n        renderNode: {\n            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__.BLOCKS.EMBEDDED_ASSET]: (node)=>{\n                const { file , title  } = node.data.target.fields;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-4 rounded-md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: file.url,\n                            alt: title,\n                            className: \"mx-auto\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined),\n                        title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-sm text-gray-600\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                            lineNumber: 51,\n                            columnNumber: 23\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, undefined);\n            },\n            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__.BLOCKS.PARAGRAPH]: (node, children)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mb-4\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                    lineNumber: 55,\n                    columnNumber: 47\n                }, undefined),\n            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__.BLOCKS.HEADING_1]: (node, children)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold mb-4\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                    lineNumber: 56,\n                    columnNumber: 47\n                }, undefined),\n            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__.BLOCKS.HEADING_2]: (node, children)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-bold mb-4\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                    lineNumber: 57,\n                    columnNumber: 47\n                }, undefined),\n            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__.INLINES.HYPERLINK]: (node, children)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: node.data.uri,\n                    className: \"text-blue-500 hover:underline\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-3xl mx-auto p-4 mt-12\",\n        children: [\n            logo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: logo,\n                alt: title,\n                className: \"w-32 h-32 mx-auto\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                lineNumber: 68,\n                columnNumber: 16\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold text-center my-6\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg mb-6\",\n                children: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            guide ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-bold mb-4\",\n                        children: \"Step-By-Step Guide\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: (0,_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_3__.documentToReactComponents)(guide, renderOptions)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-gray-500\",\n                children: \"No guide available for this airdrop.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\weB3fruity\\\\frontend\\\\pages\\\\airdrop-guide\\\\[_id].js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AirdropGuide, \"uSnqoEUMNRTZv1CpNFIX3EnWSLU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AirdropGuide;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AirdropGuide);\nvar _c;\n$RefreshReg$(_c, \"AirdropGuide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkUsc0JBQ0MsOERBQUNMOztrQ0FDQyw4REFBQ3dCO3dCQUFHdkIsV0FBVTtrQ0FBMEI7Ozs7OztrQ0FDeEMsOERBQUNEO2tDQUFLbkIsK0ZBQXlCQSxDQUFDd0IsT0FBT0M7Ozs7Ozs7Ozs7OzBDQUd6Qyw4REFBQ1k7Z0JBQUVqQixXQUFVOzBCQUE0Qjs7Ozs7eUJBQzFDOzs7Ozs7O0FBR1A7R0EzRU1qQjs7UUFHV0osa0RBQVNBOzs7S0FIcEJJO0FBNkVOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FpcmRyb3AtZ3VpZGUvW19pZF0uanM/YTBiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzIH0gZnJvbSAnQGNvbnRlbnRmdWwvcmljaC10ZXh0LXJlYWN0LXJlbmRlcmVyJztcclxuaW1wb3J0IHsgQkxPQ0tTLCBJTkxJTkVTIH0gZnJvbSAnQGNvbnRlbnRmdWwvcmljaC10ZXh0LXR5cGVzJztcclxuXHJcbmNvbnN0IEFpcmRyb3BHdWlkZSA9ICgpID0+IHtcclxuICBjb25zdCBbYWlyZHJvcERhdGEsIHNldEFpcmRyb3BEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEFpcmRyb3AgPSBhc3luYyAoX2lkKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDoxMjI1L2FpcmRyb3BzLyR7X2lkfWApO1xyXG4gICAgICAgIGNvbnN0IGFpcmRyb3AgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWlyZHJvcCk7XHJcbiAgICAgICAgc2V0QWlyZHJvcERhdGEoYWlyZHJvcCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgYWlyZHJvcCBndWlkZTonLCBlcnJvcik7XHJcbiAgICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGFpcmRyb3AgZ3VpZGUnKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAocm91dGVyLmlzUmVhZHkpIHtcclxuICAgICAgY29uc3QgeyBfaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgICAgY29uc29sZS5sb2coX2lkKTtcclxuICAgICAgaWYgKF9pZCkge1xyXG4gICAgICAgIGZldGNoQWlyZHJvcChfaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5pc1JlYWR5LCByb3V0ZXIucXVlcnkuX2lkXSk7XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+e2Vycm9yfTwvZGl2PjtcclxuICB9XHJcblxyXG4gIGlmICghYWlyZHJvcERhdGEpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS01MDBcIj5Mb2FkaW5nIGFpcmRyb3AgZ3VpZGUuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgbG9nbywgZ3VpZGUgfSA9IGFpcmRyb3BEYXRhO1xyXG5cclxuICAvLyBEZWZpbmUgY3VzdG9tIHJlbmRlciBvcHRpb25zXHJcbiAgY29uc3QgcmVuZGVyT3B0aW9ucyA9IHtcclxuICAgIHJlbmRlck5vZGU6IHtcclxuICAgICAgW0JMT0NLUy5FTUJFRERFRF9BU1NFVF06IChub2RlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBmaWxlLCB0aXRsZSB9ID0gbm9kZS5kYXRhLnRhcmdldC5maWVsZHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNCByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtmaWxlLnVybH0gYWx0PXt0aXRsZX0gY2xhc3NOYW1lPVwibXgtYXV0b1wiIC8+XHJcbiAgICAgICAgICAgIHt0aXRsZSAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj57dGl0bGV9PC9wPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICAgIFtCTE9DS1MuUEFSQUdSQVBIXTogKG5vZGUsIGNoaWxkcmVuKSA9PiA8cCBjbGFzc05hbWU9XCJtYi00XCI+e2NoaWxkcmVufTwvcD4sXHJcbiAgICAgIFtCTE9DS1MuSEVBRElOR18xXTogKG5vZGUsIGNoaWxkcmVuKSA9PiA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj57Y2hpbGRyZW59PC9oMT4sXHJcbiAgICAgIFtCTE9DS1MuSEVBRElOR18yXTogKG5vZGUsIGNoaWxkcmVuKSA9PiA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj57Y2hpbGRyZW59PC9oMj4sXHJcbiAgICAgIFtJTkxJTkVTLkhZUEVSTElOS106IChub2RlLCBjaGlsZHJlbikgPT4gKFxyXG4gICAgICAgIDxhIGhyZWY9e25vZGUuZGF0YS51cml9IGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0byBwLTQgbXQtMTJcIj5cclxuICAgICAge2xvZ28gJiYgPGltZyBzcmM9e2xvZ299IGFsdD17dGl0bGV9IGNsYXNzTmFtZT1cInctMzIgaC0zMiBteC1hdXRvXCIgLz59XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgbXktNlwiPnt0aXRsZX08L2gxPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1iLTZcIj57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICB7Z3VpZGUgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPlN0ZXAtQnktU3RlcCBHdWlkZTwvaDI+XHJcbiAgICAgICAgICA8ZGl2Pntkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzKGd1aWRlLCByZW5kZXJPcHRpb25zKX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNTAwXCI+Tm8gZ3VpZGUgYXZhaWxhYmxlIGZvciB0aGlzIGFpcmRyb3AuPC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFpcmRyb3BHdWlkZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzIiwiQkxPQ0tTIiwiSU5MSU5FUyIsIkFpcmRyb3BHdWlkZSIsImFpcmRyb3BEYXRhIiwic2V0QWlyZHJvcERhdGEiLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwiZmV0Y2hBaXJkcm9wIiwiX2lkIiwicmVzcG9uc2UiLCJmZXRjaCIsImFpcmRyb3AiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImlzUmVhZHkiLCJxdWVyeSIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsb2dvIiwiZ3VpZGUiLCJyZW5kZXJPcHRpb25zIiwicmVuZGVyTm9kZSIsIkVNQkVEREVEX0FTU0VUIiwibm9kZSIsImZpbGUiLCJkYXRhIiwidGFyZ2V0IiwiZmllbGRzIiwiaW1nIiwic3JjIiwidXJsIiwiYWx0IiwicCIsIlBBUkFHUkFQSCIsImNoaWxkcmVuIiwiSEVBRElOR18xIiwiaDEiLCJIRUFESU5HXzIiLCJoMiIsIkhZUEVSTElOSyIsImEiLCJocmVmIiwidXJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/airdrop-guide/[_id].js\n"));

/***/ })

});