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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todos */ \"./src/modules/todos.js\");\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n\n\n(0,_modules_todos__WEBPACK_IMPORTED_MODULE_0__.todoEventListener)();\n(0,_modules_ui__WEBPACK_IMPORTED_MODULE_1__.renderTodoList)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFormattedDate\": () => (/* binding */ getFormattedDate),\n/* harmony export */   \"getPriority\": () => (/* binding */ getPriority),\n/* harmony export */   \"getTitle\": () => (/* binding */ getTitle),\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\nvar todoList = [];\n\nvar createTodo = function createTodo(title, date, priority) {\n  return {\n    title: title,\n    date: date,\n    priority: priority\n  };\n};\n\nvar getTitle = function getTitle(todo) {\n  return todo.title;\n};\n\nvar getFormattedDate = function getFormattedDate(todoDate) {\n  var year = todoDate.split('-')[0];\n  var month = todoDate.split('-')[1];\n  var day = todoDate.split('-')[2];\n  return \"\".concat(day, \"/\").concat(month, \"/\").concat(year);\n};\n\nvar getPriority = function getPriority(todo) {\n  return todo.priority;\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/todos.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTodoList\": () => (/* binding */ renderTodoList)\n/* harmony export */ });\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/modules/todos.js\");\n\nvar todoForm = document.querySelector('.todo-form');\nvar newTodoList = document.querySelector('.new-todo');\nvar title = document.getElementById('title');\nvar date = document.getElementById('date');\nvar priority = document.getElementById('priority');\nvar sideTodos = document.getElementById('general-list');\nvar sideProjects = document.getElementById('project-list');\nvar mainTodos = document.getElementById('todo-list');\n\nvar todoEventListener = function todoEventListener() {\n  if (!newTodoList.classList.contains('hidden')) {\n    todoForm.addEventListener('submit', function (e) {\n      e.preventDefault();\n      var newTodo = createTodo(title.value, date.value, priority.value);\n      _todos__WEBPACK_IMPORTED_MODULE_0__.todoList.push(newTodo);\n    });\n  }\n};\n\nvar renderTodoList = function renderTodoList() {\n  if (_todos__WEBPACK_IMPORTED_MODULE_0__.todoList.length !== 0) {\n    console.log(_todos__WEBPACK_IMPORTED_MODULE_0__.todoList);\n    _todos__WEBPACK_IMPORTED_MODULE_0__.todoList.map(function (todo) {\n      var html = \"\\n                    <li class=\\\"todo\\\">\\n                        <div class=\\\"check\\\"></div>\\n                        <h3>\".concat((0,_todos__WEBPACK_IMPORTED_MODULE_0__.getTitle)(todo), \"</h3>\\n                        <p>\").concat(getFormatedDate(todo.date), \"</p>\\n                        <div class=\\\"span-todo-list\\\">\\n                        <i class=\\\"edit outline icon\\\"></i>\\n                        <i class=\\\"trash alternate outline icon\\\"></i>\\n                        </div>\\n                    </li>\");\n      mainTodos.insertAdjacentHTML('afterend', html);\n    });\n  }\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/ui.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;