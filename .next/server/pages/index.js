module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_comps_Modals_Slissto_ModalTutorial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/comps/Modals/Slissto/ModalTutorial */ \"./src/comps/Modals/Slissto/ModalTutorial.js\");\nvar _jsxFileName = \"/Users/jesuscova/local/components/react-tailwind/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Index() {\n  return __jsx(\"div\", {\n    className: \"p-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(_src_comps_Modals_Slissto_ModalTutorial__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNlLFNBQVNBLEtBQVQsR0FBaUI7QUFDOUIsU0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQURGO0FBS0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBNb2RhbFR1dG9yaWFsIGZyb20gJy4uL3NyYy9jb21wcy9Nb2RhbHMvU2xpc3N0by9Nb2RhbFR1dG9yaWFsJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncC04Jz5cbiAgICA8TW9kYWxUdXRvcmlhbC8+XG4gIDwvZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./src/comps/Modals/Slissto/ModalTutorial.js":
/*!***************************************************!*\
  !*** ./src/comps/Modals/Slissto/ModalTutorial.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/jesuscova/local/components/react-tailwind/src/comps/Modals/Slissto/ModalTutorial.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst ModalTutorial = () => {\n  const {\n    0: modal,\n    1: setModal\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const toggleModal = () => setModal(val => !val);\n\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: toggleModal,\n    className: \"px-4 py-2 rounded shadow bg-pink-500 text-white focus:outline-none\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"toggle modal\"), modal && __jsx(\"div\", {\n    className: \"absolute z-40 inset-0 opacity-25 bg-black\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }), modal && __jsx(\"div\", {\n    className: \"fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"relative mx-auto w-auto max-w-2xl\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"bg-white w-full rounded shadow-lg\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, \"Id culpa ex veniam officia deserunt consectetur sint amet commodo amet ex. Consectetur aliqua magna voluptate pariatur do officia proident. Laborum voluptate incididunt non ullamco ut consequat laborum. Mollit qui id irure enim quis nostrud dolor occaecat sunt qui aliqua voluptate. Officia labore in quis laboris labore elit duis qui fugiat amet. Laborum id exercitation culpa aliquip anim irure ad mollit.\"), __jsx(\"button\", {\n    className: \"rounded px-4 py-2 shadow bg-red-500 text-white\",\n    onClick: toggleModal,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, \"Close\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalTutorial);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcHMvTW9kYWxzL1NsaXNzdG8vTW9kYWxUdXRvcmlhbC5qcz81NjBkIl0sIm5hbWVzIjpbIk1vZGFsVHV0b3JpYWwiLCJtb2RhbCIsInNldE1vZGFsIiwidXNlU3RhdGUiLCJ0b2dnbGVNb2RhbCIsInZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUMxQixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsS0FBRCxDQUFsQzs7QUFDQSxRQUFNQyxXQUFXLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxHQUFHLElBQUksQ0FBQ0EsR0FBVCxDQUFsQzs7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRUQsV0FBakI7QUFBOEIsYUFBUyxFQUFDLG9FQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUdILEtBQUssSUFDSjtBQUFLLGFBQVMsRUFBQywyQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFNS0EsS0FBSyxJQUNOO0FBQUssYUFBUyxFQUFDLHVGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxtQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK1pBRkEsRUFHQTtBQUFRLGFBQVMsRUFBQyxnREFBbEI7QUFBbUUsV0FBTyxFQUFFRyxXQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEEsQ0FERixDQURGLENBUEosQ0FERjtBQW1CRCxDQXRCRDs7QUF3QmVKLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBzL01vZGFscy9TbGlzc3RvL01vZGFsVHV0b3JpYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBNb2RhbFR1dG9yaWFsID0gKCkgPT4ge1xuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHNldE1vZGFsKHZhbCA9PiAhdmFsKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfSBjbGFzc05hbWU9J3B4LTQgcHktMiByb3VuZGVkIHNoYWRvdyBiZy1waW5rLTUwMCB0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSc+dG9nZ2xlIG1vZGFsPC9idXR0b24+XG4gICAgICB7bW9kYWwgJiYgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSB6LTQwIGluc2V0LTAgb3BhY2l0eS0yNSBiZy1ibGFjayc+XG4gICAgICAgIDwvZGl2Pn1cblxuICAgICAgICB7bW9kYWwgJiYgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXhlZCBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gaW5zZXQtMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB6LTUwJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgbXgtYXV0byB3LWF1dG8gbWF4LXctMnhsJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSB3LWZ1bGwgcm91bmRlZCBzaGFkb3ctbGcnPlxuXG4gICAgICAgICAgICA8c3Bhbj5JZCBjdWxwYSBleCB2ZW5pYW0gb2ZmaWNpYSBkZXNlcnVudCBjb25zZWN0ZXR1ciBzaW50IGFtZXQgY29tbW9kbyBhbWV0IGV4LiBDb25zZWN0ZXR1ciBhbGlxdWEgbWFnbmEgdm9sdXB0YXRlIHBhcmlhdHVyIGRvIG9mZmljaWEgcHJvaWRlbnQuIExhYm9ydW0gdm9sdXB0YXRlIGluY2lkaWR1bnQgbm9uIHVsbGFtY28gdXQgY29uc2VxdWF0IGxhYm9ydW0uIE1vbGxpdCBxdWkgaWQgaXJ1cmUgZW5pbSBxdWlzIG5vc3RydWQgZG9sb3Igb2NjYWVjYXQgc3VudCBxdWkgYWxpcXVhIHZvbHVwdGF0ZS4gT2ZmaWNpYSBsYWJvcmUgaW4gcXVpcyBsYWJvcmlzIGxhYm9yZSBlbGl0IGR1aXMgcXVpIGZ1Z2lhdCBhbWV0LiBMYWJvcnVtIGlkIGV4ZXJjaXRhdGlvbiBjdWxwYSBhbGlxdWlwIGFuaW0gaXJ1cmUgYWQgbW9sbGl0Ljwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdyb3VuZGVkIHB4LTQgcHktMiBzaGFkb3cgYmctcmVkLTUwMCB0ZXh0LXdoaXRlJyBvbkNsaWNrPXt0b2dnbGVNb2RhbH0+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsVHV0b3JpYWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/comps/Modals/Slissto/ModalTutorial.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });