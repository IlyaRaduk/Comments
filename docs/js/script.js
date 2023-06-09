/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./\u0000#src/js/addComments.js":
/*!*********************************!*\
  !*** ./ #src/js/addComments.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addComments)\n/* harmony export */ });\n/* harmony import */ var _setDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setDate.js */ \"./\\u0000#src/js/setDate.js\");\n/* harmony import */ var _countComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countComments.js */ \"./\\u0000#src/js/countComments.js\");\n/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation.js */ \"./\\u0000#src/js/validation.js\");\n/* harmony import */ var _likeSwitch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likeSwitch.js */ \"./\\u0000#src/js/likeSwitch.js\");\n\r\n\r\n\r\n\r\n\r\nfunction addComments() {\r\n\r\n    const form = document.querySelector('.form');\r\n    const comments = document.querySelector('.comments__colomns')\r\n\r\n    function createDate(day, month, year) {\r\n        let date = new Date();\r\n        let diff = date - new Date(year, month - 1, day);\r\n        let hours = date.getHours();\r\n        let min = date.getMinutes();\r\n        if (month < 10) month = '0' + month;\r\n        if (day < 10) day = '0' + day;\r\n        if (hours < 10) hours = '0' + min;\r\n        if (min < 10) min = '0' + min;\r\n        if (diff < 86400000) return 'сегодня' + ' ' + hours + \":\" + min;\r\n        if (diff >= 86400000 && diff < 172800000) return 'вчера' + ' ' + hours + \":\" + min;\r\n        return day + '.' + month + '.' + year.slice(2) + ' ' + hours + \":\" + min;\r\n    }\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n\r\n        if (!(0,_validation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()) return;\r\n\r\n        let date = createDate(form.day.value, form.month.value, form.year.value);\r\n        let newComment = document.createElement('div');\r\n        newComment.classList.add('comments__item');\r\n        newComment.innerHTML = `\r\n        <div class=\"comments__title\">\r\n            <div class=\"comments__name\">\r\n                ${form.firstName.value}\r\n            </div>\r\n            <div class=\"comments__date\">\r\n            ${date}\r\n            </div>\r\n            <div class=\"comments__like\">\r\n            </div>\r\n            <div class=\"comments__remove\">\r\n                <img src=\"./img/remove.gif\" alt=\"remove\">\r\n            </div>\r\n        </div>\r\n        <div class=\"comments__text\">\r\n            ${form.comments.value}\r\n        </div>`;\r\n        comments.prepend(newComment);\r\n        form.firstName.value = null;\r\n        form.comments.value = null;\r\n        (0,_setDate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        (0,_countComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        (0,_likeSwitch_js__WEBPACK_IMPORTED_MODULE_3__.newLikeSwitch)();\r\n    })\r\n}\n\n//# sourceURL=webpack://myform/./%00#src/js/addComments.js?");

/***/ }),

/***/ "./\u0000#src/js/countComments.js":
/*!***********************************!*\
  !*** ./ #src/js/countComments.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ countComments)\n/* harmony export */ });\nfunction countComments() {\r\n    let counts = document.querySelectorAll('.comments__item').length;\r\n    const lastOne = counts % 10;\r\n    const lastTwo = counts % 100;\r\n    let str = '';\r\n    if (lastTwo > 10 && lastTwo < 15) {\r\n        str = ' комментариев';\r\n    }\r\n    else if (lastOne == 1) {\r\n        str = 'комментарий';\r\n    }\r\n    else if (lastOne > 1 && lastOne < 5) {\r\n        str = 'комментария';\r\n    }\r\n    else {\r\n        str = ' комментариев';\r\n    }\r\n    let title = document.querySelector('.comments__count');\r\n    title.innerHTML = counts + \" \" + str;\r\n}\r\n\n\n//# sourceURL=webpack://myform/./%00#src/js/countComments.js?");

/***/ }),

/***/ "./\u0000#src/js/likeSwitch.js":
/*!********************************!*\
  !*** ./ #src/js/likeSwitch.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ likeSwitch),\n/* harmony export */   \"newLikeSwitch\": () => (/* binding */ newLikeSwitch)\n/* harmony export */ });\nfunction likeSwitch() {\r\n    let likes = document.querySelectorAll('.comments__like');\r\n    for(let like of likes){\r\n        like.addEventListener('click',(e)=>{\r\n            e.target.classList.toggle('like-active')\r\n        })\r\n    }\r\n}\r\n\r\nfunction newLikeSwitch() {\r\n    document.querySelectorAll('.comments__like')[0].addEventListener('click',(e)=>{\r\n        e.target.classList.toggle('like-active')\r\n    });\r\n}\n\n//# sourceURL=webpack://myform/./%00#src/js/likeSwitch.js?");

/***/ }),

/***/ "./\u0000#src/js/removeCommemt.js":
/*!***********************************!*\
  !*** ./ #src/js/removeCommemt.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeCommemt)\n/* harmony export */ });\n/* harmony import */ var _countComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countComments.js */ \"./\\u0000#src/js/countComments.js\");\n\r\n\r\nfunction removeCommemt() {\r\n    let comments = document.querySelector('.comments__colomns');\r\n    comments.addEventListener('click', (e) => {\r\n        if (!e.target.parentElement.classList.contains('comments__remove')) return;\r\n        let comment = e.target.closest('.comments__item');\r\n        comment.remove();\r\n        (0,_countComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://myform/./%00#src/js/removeCommemt.js?");

/***/ }),

/***/ "./\u0000#src/js/script.js":
/*!****************************!*\
  !*** ./ #src/js/script.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _countComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countComments.js */ \"./\\u0000#src/js/countComments.js\");\n/* harmony import */ var _likeSwitch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likeSwitch.js */ \"./\\u0000#src/js/likeSwitch.js\");\n/* harmony import */ var _removeCommemt_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeCommemt.js */ \"./\\u0000#src/js/removeCommemt.js\");\n/* harmony import */ var _addComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addComments.js */ \"./\\u0000#src/js/addComments.js\");\n/* harmony import */ var _setDate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setDate.js */ \"./\\u0000#src/js/setDate.js\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    (0,_countComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_likeSwitch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_removeCommemt_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    (0,_addComments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    (0,_setDate_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n})\r\n\r\nconst inputs = document.querySelectorAll('.form__input')\r\nfor (let input of inputs) {\r\n    input.addEventListener('input', (e) => {\r\n        if (e.target.closest('.error')) e.target.closest('.error').classList.remove('error');\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://myform/./%00#src/js/script.js?");

/***/ }),

/***/ "./\u0000#src/js/setDate.js":
/*!*****************************!*\
  !*** ./ #src/js/setDate.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setDate)\n/* harmony export */ });\nconst form = document.querySelector('.form');\r\nfunction setDate() {\r\n    let date = new Date();\r\n    form.day.value = date.getDate();\r\n    form.month.value = date.getMonth() + 1;\r\n    form.year.value = date.getFullYear();\r\n}\n\n//# sourceURL=webpack://myform/./%00#src/js/setDate.js?");

/***/ }),

/***/ "./\u0000#src/js/validation.js":
/*!********************************!*\
  !*** ./ #src/js/validation.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ validation)\n/* harmony export */ });\nconst form = document.querySelector('.form');\r\n\r\nfunction validation() {\r\n    let result = true;\r\n    if (!form.firstName.value) {\r\n        document.querySelector('.form__name').classList.add('error');\r\n        result = false;\r\n    }\r\n    if (!form.comments.value) {\r\n        document.querySelector('.form__comments').classList.add('error')\r\n        result = false;\r\n    }\r\n    return result;\r\n}\n\n//# sourceURL=webpack://myform/./%00#src/js/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./\u0000#src/js/script.js");
/******/ 	
/******/ })()
;