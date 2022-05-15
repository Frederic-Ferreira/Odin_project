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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectedCategoryEventListener();\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoFormEventListener();\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleCheckedEventListener();\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTodoEventListener();\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].editTodoEventListener();\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTodoEventListener();\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].confirmDeleteEventListener();\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].exitNewTodoEventListener();\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dateCategoryEventListener();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/dates.js":
/*!******************************!*\
  !*** ./src/modules/dates.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dates)\n/* harmony export */ });\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/modules/todos.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar dates = /*#__PURE__*/function () {\n  function dates() {\n    _classCallCheck(this, dates);\n  }\n\n  _createClass(dates, null, [{\n    key: \"compareDay\",\n    value: function compareDay(date, todo) {\n      return date.getDate() == _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoDay(todo) && date.getMonth() == Number(_todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoMonth(todo)) - 1 && date.getFullYear() == _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoYear(todo);\n    }\n  }, {\n    key: \"compareMonth\",\n    value: function compareMonth(date, todo) {\n      return date.getMonth() == Number(_todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoMonth(todo)) - 1 && date.getFullYear() == _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoYear(todo);\n    }\n  }, {\n    key: \"compareYear\",\n    value: function compareYear(year, todoYear) {\n      return year == todoYear;\n    }\n  }]);\n\n  return dates;\n}();\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/dates.js?");

/***/ }),

/***/ "./src/modules/general.js":
/*!********************************!*\
  !*** ./src/modules/general.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ general)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar title = document.getElementById('title');\nvar date = document.getElementById('date');\nvar priority = document.getElementById('priority');\nvar mainTodos = document.getElementById('todo-list');\n\nvar general = /*#__PURE__*/function () {\n  function general() {\n    _classCallCheck(this, general);\n  }\n\n  _createClass(general, null, [{\n    key: \"clearInputFields\",\n    value: function clearInputFields() {\n      title.value = '';\n      date.value = '';\n      priority.value = 'normal';\n    }\n  }, {\n    key: \"toggleHidden\",\n    value: function toggleHidden(node) {\n      node.classList.toggle('hidden');\n    }\n  }, {\n    key: \"clearMainDisplay\",\n    value: function clearMainDisplay() {\n      mainTodos.innerHTML = '';\n    }\n  }]);\n\n  return general;\n}();\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/general.js?");

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todos)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar todos = /*#__PURE__*/function () {\n  function todos() {\n    _classCallCheck(this, todos);\n  }\n\n  _createClass(todos, null, [{\n    key: \"createTodo\",\n    value: function createTodo(title, date, priority, id, category) {\n      return {\n        title: title,\n        date: date,\n        priority: priority,\n        id: id,\n        category: category\n      };\n    }\n  }, {\n    key: \"modifyTodo\",\n    value: function modifyTodo(index, title, date, priority) {\n      var todo = this.todoList[index];\n      todo.title = title;\n      todo.date = date;\n      todo.priority = priority;\n    }\n  }, {\n    key: \"deleteTodo\",\n    value: function deleteTodo(index) {\n      this.todoList.splice(index, 1);\n    }\n  }, {\n    key: \"getTitle\",\n    value: function getTitle(todo) {\n      return todo.title;\n    }\n  }, {\n    key: \"getTodoDay\",\n    value: function getTodoDay(todo) {\n      return todo.date.split('-')[2];\n    }\n  }, {\n    key: \"getTodoMonth\",\n    value: function getTodoMonth(todo) {\n      var month = todo.date.split('-')[1].startsWith('0') ? todo.date.split('-')[1].replace('0', '') : todo.date.split('-')[1];\n      return month;\n    }\n  }, {\n    key: \"getTodoYear\",\n    value: function getTodoYear(todo) {\n      return todo.date.split('-')[0];\n    }\n  }, {\n    key: \"getFormattedDate\",\n    value: function getFormattedDate(todoDate) {\n      var year = todoDate.split('-')[0];\n      var month = todoDate.split('-')[1];\n      var day = todoDate.split('-')[2];\n      return \"\".concat(day, \"/\").concat(month, \"/\").concat(year);\n    }\n  }, {\n    key: \"inputFormattedDate\",\n    value: function inputFormattedDate(todoDate) {\n      var year = todoDate.split('/')[2];\n      var month = todoDate.split('/')[1];\n      var day = todoDate.split('/')[0];\n      return \"\".concat(year, \"-\").concat(month, \"-\").concat(day);\n    }\n  }, {\n    key: \"toggleCheck\",\n    value: function toggleCheck(btn, li) {\n      btn.classList.toggle('checked--btn');\n      li.classList.toggle('checked--list');\n    }\n  }]);\n\n  return todos;\n}();\n\n_defineProperty(todos, \"todoList\", []);\n\n_defineProperty(todos, \"getPriority\", function (todo) {\n  return todo.priority;\n});\n\n_defineProperty(todos, \"getIndex\", function (node) {\n  return node.dataset.index;\n});\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/todos.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/modules/todos.js\");\n/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dates */ \"./src/modules/dates.js\");\n/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general */ \"./src/modules/general.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar todoForm = document.querySelector('.todo-form');\nvar newTodoLi = document.querySelector('.new-todo');\nvar mainTodos = document.getElementById('todo-list');\nvar title = document.getElementById('title');\nvar date = document.getElementById('date');\nvar priority = document.getElementById('priority');\nvar btnAddTodo = document.getElementById('create-todo');\nvar btnExitNewTodo = document.querySelector('.exit--new-todo');\nvar btnsGeneralDates = document.querySelectorAll('.general');\n\nvar UI = /*#__PURE__*/function () {\n  function UI() {\n    _classCallCheck(this, UI);\n\n    _defineProperty(this, \"delete\", false);\n  }\n\n  _createClass(UI, null, [{\n    key: \"selectedCategoryEventListener\",\n    value: function selectedCategoryEventListener() {\n      btnsGeneralDates.forEach(function (btn) {\n        if (btn.classList.contains(UI.generalCategory)) btn.classList.add('selected-category');else btn.classList.remove('selected-category');\n      });\n    }\n  }, {\n    key: \"todoFormEventListener\",\n    value: function todoFormEventListener() {\n      todoForm.addEventListener('submit', function (e) {\n        e.preventDefault();\n        var id = Math.floor(Math.random() * 100);\n        var newTodo = _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createTodo(title.value, date.value, priority.value, id);\n        _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.push(newTodo);\n        _general__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clearInputFields();\n        UI.toggleNewTodo();\n        UI.renderTodoList();\n      });\n    }\n  }, {\n    key: \"exitNewTodoEventListener\",\n    value: function exitNewTodoEventListener() {\n      btnExitNewTodo.addEventListener('click', UI.toggleNewTodo);\n    }\n  }, {\n    key: \"editTodoEventListener\",\n    value: function editTodoEventListener() {\n      document.addEventListener('click', function (e) {\n        if (!e.target.classList.contains('edit')) return;\n        var li = e.target.closest('li');\n        UI.renderModifyTodoForm(li);\n        UI.modifiedTodoFormEventListener();\n      });\n    }\n  }, {\n    key: \"deleteTodoEventListener\",\n    value: function deleteTodoEventListener() {\n      document.addEventListener('click', function (e) {\n        if (!e.target.classList.contains('trash')) return;\n        var confirm = e.target.closest('div').nextElementSibling; // Hide any other possible confirm-delete already open\n\n        UI.hideConfirmsDelete(); // Show the confirm-delete the user just clicked\n\n        _general__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toggleHidden(confirm); // Set EventListener to possibly hide the confirm-delete\n\n        UI.hideConfirmDeleteEventListener();\n        UI[\"delete\"] = true;\n      });\n    }\n  }, {\n    key: \"hideConfirmDeleteEventListener\",\n    value: function hideConfirmDeleteEventListener() {\n      document.addEventListener('click', function (e) {\n        var guardClause = e.target.closest('li');\n        if (UI[\"delete\"] === false) return; // If the user click anywhere but on a todo element\n\n        if (guardClause === null) {\n          UI.hideConfirmsDelete();\n          UI[\"delete\"] = false;\n        }\n      });\n    }\n  }, {\n    key: \"hideConfirmsDelete\",\n    value: function hideConfirmsDelete() {\n      document.querySelectorAll('.delete-request').forEach(function (btn) {\n        if (!btn.classList.contains('hidden')) _general__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toggleHidden(btn);\n      });\n    }\n  }, {\n    key: \"confirmDeleteEventListener\",\n    value: function confirmDeleteEventListener() {\n      document.addEventListener('click', function (e) {\n        if (!e.target.classList.contains('delete-request')) return;\n        var index = e.target.closest('li').dataset.index;\n        _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTodo(index);\n        UI.renderTodoList();\n      });\n    }\n  }, {\n    key: \"modifiedTodoFormEventListener\",\n    value: function modifiedTodoFormEventListener() {\n      var form = document.querySelector('.modified-todo-form');\n      form.addEventListener('submit', function (e) {\n        e.preventDefault();\n        var form = e.target.closest('form');\n        UI.renderModifiedTodo(form);\n      });\n    }\n  }, {\n    key: \"addTodoEventListener\",\n    value: function addTodoEventListener() {\n      btnAddTodo.addEventListener('click', UI.toggleNewTodo);\n    }\n  }, {\n    key: \"toggleNewTodo\",\n    value: function toggleNewTodo() {\n      mainTodos.appendChild(newTodoLi);\n      _general__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toggleHidden(newTodoLi);\n    }\n  }, {\n    key: \"toggleCheckedEventListener\",\n    value: function toggleCheckedEventListener() {\n      document.addEventListener('click', function (e) {\n        if (!e.target.classList.contains('check')) return;\n        var btn = e.target;\n        var li = e.target.closest('li');\n        _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toggleCheck(btn, li);\n      });\n    }\n  }, {\n    key: \"dateCategoryEventListener\",\n    value: function dateCategoryEventListener() {\n      btnsGeneralDates.forEach(function (btn) {\n        btn.addEventListener('click', function (e) {\n          var targetClass = e.target.classList;\n          targetClass.contains('today') ? UI.generalCategory = 'today' : targetClass.contains('year') ? UI.generalCategory = 'year' : targetClass.contains('month') ? UI.generalCategory = 'month' : UI.generalCategory = 'all';\n          if (!newTodoLi.classList.contains('hidden')) _general__WEBPACK_IMPORTED_MODULE_2__[\"default\"].toggleHidden(newTodoLi);\n          UI.selectedCategoryEventListener();\n          UI.renderTodoList();\n        });\n      });\n    }\n  }, {\n    key: \"renderModifyTodoForm\",\n    value: function renderModifyTodoForm(todoNode) {\n      var title = todoNode.childNodes[3].textContent;\n      var date = todoNode.childNodes[5].textContent;\n      var priority = todoNode.classList.value.slice(5);\n      var index = _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getIndex(todoNode);\n      var li = document.createElement('li');\n      var html = \"\\n    <form class=\\\"modified-todo-form\\\" data-index=\\\"\".concat(index, \"\\\">\\n      <label for=\\\"title\\\">Title</label>\\n      <input\\n        type=\\\"text\\\"\\n        id=\\\"title\\\"\\n        name=\\\"title\\\"\\n        minlength=\\\"3\\\"\\n        value=\\\"\").concat(title, \"\\\"\\n        required\\n      />\\n      <label for=\\\"date\\\">Date</label>\\n      <input type=\\\"date\\\" id=\\\"date\\\" name=\\\"date\\\" value=\\\"\").concat(_todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].inputFormattedDate(date), \"\\\" required />\\n      <label for=\\\"priority\\\">Priority</label>\\n      <select id=\\\"priority\\\" name=\\\"priority\\\">\\n        <option value=\\\"high\\\" \").concat(priority === 'high' ? 'selected' : '', \">High</option>\\n        <option value=\\\"normal\\\" \").concat(priority === 'normal' ? 'selected' : '', \">Normal</option>\\n        <option value=\\\"low\\\" \").concat(priority === 'low' ? 'selected' : '', \">Low</option>\\n      </select>\\n      <button>OK</button>\\n  </form>\");\n      li.classList.add('new-todo');\n      li.insertAdjacentHTML('afterbegin', html);\n      todoNode.closest('#todo-list').replaceChild(li, todoNode);\n    }\n  }, {\n    key: \"renderModifiedTodo\",\n    value: function renderModifiedTodo(form) {\n      var title = form.childNodes[3].value;\n      var date = form.childNodes[7].value;\n      var priority = form.childNodes[11].value;\n      var index = form.dataset.index;\n      _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modifyTodo(index, title, date, priority);\n      var li = document.createElement('li');\n      var html = \"\\n          <div class=\\\"check\\\"></div>\\n            <h3>\".concat(title, \"</h3>\\n            <p>\").concat(_todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFormattedDate(date), \"</p>\\n            <div class=\\\"span-todo-list\\\">\\n              <i class=\\\"edit outline icon\\\"></i>\\n              <i class=\\\"trash alternate outline icon\\\"></i>\\n            </div>\\n            <div class=\\\"delete-request hidden\\\"></div>\\n    \");\n      li.classList.add('todo');\n      li.classList.add(priority);\n      li.dataset.index = index;\n      li.insertAdjacentHTML('afterbegin', html);\n      form.closest('#todo-list').replaceChild(li, form.closest('li'));\n    }\n  }, {\n    key: \"renderTodoList\",\n    value: function renderTodoList() {\n      _general__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clearMainDisplay();\n\n      if (_todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.length !== 0) {\n        _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.map(function (todo, i) {\n          if (UI.generalCategory === 'today' ? _dates__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compareDay(new Date(), todo) : UI.generalCategory === 'month' ? _dates__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compareMonth(new Date(), todo) : UI.generalCategory === 'year' ? _dates__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compareYear(new Date().getFullYear(), _todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodoYear(todo)) : UI.generalCategory === 'all' ? true : false) UI.renderTodo(todo, i);\n        });\n      }\n    }\n  }, {\n    key: \"renderTodo\",\n    value: function renderTodo(todo, i) {\n      var html = \"<li class=\\\"todo \".concat(_todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPriority(todo), \"\\\" data-index=\\\"\").concat(i, \"\\\">\\n                  <div class=\\\"check\\\"></div>\\n                    <h3>\").concat(_todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTitle(todo), \"</h3>\\n                    <p>\").concat(_todos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFormattedDate(todo.date), \"</p>\\n                    <div class=\\\"span-todo-list\\\">\\n                      <i class=\\\"edit outline icon\\\"></i>\\n                      <i class=\\\"trash alternate outline icon\\\"></i>\\n                    </div>\\n                    <div class=\\\"delete-request hidden\\\"></div>\\n                </li>\");\n      mainTodos.insertAdjacentHTML('beforeend', html);\n    }\n  }]);\n\n  return UI;\n}();\n\n_defineProperty(UI, \"generalCategory\", 'all');\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/ui.js?");

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