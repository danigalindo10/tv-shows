"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Roboto+Mono:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #e0ce00;\\r\\n  color: black;\\r\\n  font-family: 'Roboto Mono', monospace;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  height: 70px;\\r\\n  background-color: black;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.search-form {\\r\\n  margin: auto;\\r\\n  margin-top: 50px;\\r\\n  width: fit-content;\\r\\n}\\r\\n\\r\\n.search-box {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  background-color: black;\\r\\n  height: 40px;\\r\\n  border-radius: 50px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.search-box input {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  color: #f5f5f5;\\r\\n  background: none;\\r\\n}\\r\\n\\r\\n.search-box button {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  text-decoration: none;\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  border-radius: 50px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin: 60px auto 80px auto;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  text-shadow: 5px 3px gray;\\r\\n}\\r\\n\\r\\n.title h1 {\\r\\n  font-size: 75px;\\r\\n  color: black;\\r\\n  font-weight: 700;\\r\\n  letter-spacing: 5px;\\r\\n  text-align: center;\\r\\n  font-family: 'Abril Fatface', cursive;\\r\\n}\\r\\n\\r\\n.title p {\\r\\n  margin-top: 20px;\\r\\n  color: black;\\r\\n  text-align: center;\\r\\n  width: 60%;\\r\\n  line-height: 2.5rem;\\r\\n  font-size: 30px;\\r\\n  text-shadow: none;\\r\\n}\\r\\n\\r\\nspan.item-counter {\\r\\n  font-size: 40px;\\r\\n  background: black;\\r\\n  color: #e0ce00;\\r\\n  padding: 5px 5px;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  display: flex;\\r\\n  text-decoration: none;\\r\\n  color: #e0ce00;\\r\\n}\\r\\n\\r\\n.logo i {\\r\\n  display: flex;\\r\\n  position: absolute;\\r\\n  font-size: 30px;\\r\\n  color: #e0ce00;\\r\\n}\\r\\n\\r\\n.logo p {\\r\\n  font-size: 25px;\\r\\n  font-weight: bold;\\r\\n  color: #e0ce00;\\r\\n  text-decoration: none;\\r\\n  padding-left: 50px;\\r\\n}\\r\\n\\r\\n.links {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  gap: 30px;\\r\\n\\r\\n  /* font-family: 'Abril Fatface', cursive; */\\r\\n}\\r\\n\\r\\n.links li {\\r\\n  list-style: none;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.links li a {\\r\\n  color: var(--color1);\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n/* CARD STYLES */\\r\\n\\r\\n.grid-container {\\r\\n  width: 80%;\\r\\n  margin: 0 auto;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\r\\n  gap: 30px;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  border-radius: 30px;\\r\\n  background-color: black;\\r\\n  height: 430px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n  padding: 30px 40px;\\r\\n}\\r\\n\\r\\n.card:hover {\\r\\n  border: white solid 2px;\\r\\n}\\r\\n\\r\\n.image-container {\\r\\n  width: 100%;\\r\\n  height: 200px;\\r\\n  margin: 0 auto;\\r\\n  margin-bottom: 10px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.item-image {\\r\\n  border-radius: 5px;\\r\\n  object-fit: contain;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.item-info {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  color: whitesmoke;\\r\\n  font-size: 0.6rem;\\r\\n  justify-content: center;\\r\\n  padding-top: 85px;\\r\\n  gap: 20px;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\nh2.item-title {\\r\\n  font-family: 'Roboto', monospace;\\r\\n}\\r\\n\\r\\n.likes-container {\\r\\n  display: flex;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\nspan {\\r\\n  font-size: 18px;\\r\\n  color: #e0ce00;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.fa-heart {\\r\\n  color: rgb(148, 148, 148);\\r\\n  cursor: pointer;\\r\\n  transition: 0.5s;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.fa-heart:hover {\\r\\n  color: rgb(250, 53, 53);\\r\\n}\\r\\n\\r\\n/* Modal */\\r\\n\\r\\n.modal {\\r\\n  position: fixed;\\r\\n  background-color: #e0ce00;\\r\\n  padding: 10px;\\r\\n  z-index: 999999;\\r\\n  top: 0;\\r\\n  height: 100vh;\\r\\n  opacity: 0.9;\\r\\n  backdrop-filter: blur(4.5px);\\r\\n  display: flex;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.close-icon {\\r\\n  font-weight: 600;\\r\\n  font-size: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.modal-popUp {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.form-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin: 0 auto;\\r\\n  width: 20%;\\r\\n}\\r\\n\\r\\n.individual-comment {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.individual-comment:nth-child(even) {\\r\\n  background-color: blue;\\r\\n}\\r\\n\\r\\n.comment-area {\\r\\n  background-color: green;\\r\\n  height: 200px;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.input-name {\\r\\n  margin: 10px;\\r\\n  width: 120px;\\r\\n  height: 30px;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n.text {\\r\\n  padding: 8px;\\r\\n  width: 150px;\\r\\n  margin: 4px;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  margin: 10px;\\r\\n  width: 65px;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.popup-title-container {\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.data-summary {\\r\\n  margin: 10px;\\r\\n  padding: 15px;\\r\\n}\\r\\n\\r\\n.image-popup {\\r\\n  padding: 2%;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  color: white;\\r\\n  background-color: #000;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 20px;\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  padding: 30px 0;\\r\\n}\\r\\n\\r\\n.footer-link {\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 425px) {\\r\\n  .text-logo {\\r\\n    display: none;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_populate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/populate */ \"./src/modules/populate.js\");\n\n\n\n// initialize elements\ndocument.addEventListener('DOMContentLoaded', _modules_populate__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appId\": () => (/* binding */ appId),\n/* harmony export */   \"baseUrl\": () => (/* binding */ baseUrl),\n/* harmony export */   \"tvApi\": () => (/* binding */ tvApi)\n/* harmony export */ });\nconst tvApi = 'https://api.tvmaze.com';\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';\nconst appId = 'JbH05JvjcbTpE6SAjZIh';\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/element-info.js":
/*!*************************************!*\
  !*** ./src/modules/element-info.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal_modalpopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/modalpopup */ \"./src/modules/modal/modalpopup.js\");\n/* harmony import */ var _likes_postLikes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes/postLikes */ \"./src/modules/likes/postLikes.js\");\n\r\n\r\n\r\n// CREATE ELEMENTS BASED ON INDEX.HTML\r\nclass elementInfo {\r\n  static showCount = (shows) => {\r\n    const showsNumber = document.querySelector('.item-counter');\r\n    showsNumber.innerText = shows.length;\r\n  }\r\n\r\n  static renderCard = (title, imgUrl, itemID, summary, like) => {\r\n    const cardContainer = document.querySelector('.grid-container');\r\n    const card = document.createElement('div');\r\n    card.classList.add('card');\r\n\r\n    const imageContainer = document.createElement('div');\r\n    imageContainer.classList.add('image-container');\r\n    const image = document.createElement('img');\r\n    image.classList.add('item-image');\r\n    image.src = imgUrl;\r\n\r\n    const itemInfo = document.createElement('div');\r\n    itemInfo.classList.add('item-info');\r\n\r\n    const itemTitle = document.createElement('h2');\r\n    itemTitle.classList.add('item-title');\r\n    itemTitle.innerText = title;\r\n\r\n    const likesContainer = document.createElement('div');\r\n    likesContainer.classList.add('likes-container');\r\n    const likesNumber = document.createElement('span');\r\n    likesNumber.textContent = like;\r\n\r\n    // PRINT TOTAL LIKES - RECORDED ON THE Involvement API\r\n    const updateLikes = () => {\r\n      const currentLikes = likesNumber.innerText;\r\n      likesNumber.innerText = currentLikes ? Number(currentLikes) + 1 : 1;\r\n    };\r\n\r\n    const heartIcon = document.createElement('i');\r\n    heartIcon.classList.add('fa-solid', 'fa-heart');\r\n\r\n    const commentsButton = document.createElement('button');\r\n    commentsButton.classList.add('comments-button');\r\n    commentsButton.textContent = 'Comments';\r\n\r\n    commentsButton.addEventListener('click', () => (0,_modal_modalpopup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, imgUrl, itemID, summary));\r\n\r\n    // ADD LIKES - RECORDED ON THE Involvement API\r\n    heartIcon.addEventListener('click', async (e) => {\r\n      e.preventDefault();\r\n      updateLikes();\r\n      await (0,_likes_postLikes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(itemID);\r\n    });\r\n\r\n    // append elements to the card container\r\n    cardContainer.append(card);\r\n    card.append(imageContainer, itemInfo, commentsButton);\r\n\r\n    imageContainer.append(image);\r\n    itemInfo.append(itemTitle, likesContainer);\r\n    likesContainer.append(heartIcon, likesNumber);\r\n  };\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementInfo);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/element-info.js?");

/***/ }),

/***/ "./src/modules/get-shows.js":
/*!**********************************!*\
  !*** ./src/modules/get-shows.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"renderShows\": () => (/* binding */ renderShows)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/modules/api.js\");\n/* harmony import */ var _element_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-info */ \"./src/modules/element-info.js\");\n/* harmony import */ var _likes_getLikes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes/getLikes */ \"./src/modules/likes/getLikes.js\");\n\r\n\r\n\r\n\r\nlet shows = [];\r\nconst renderShows = () => {\r\n  _element_info__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showCount(shows);\r\n  shows.forEach((data) => {\r\n    if (data.image !== null) {\r\n      _element_info__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderCard(data.name, data.image.medium, data.id, data.summary, data.likes.likes);\r\n    }\r\n  });\r\n};\r\n\r\n// GET SHOWS FROM API https://www.tvmaze.com/api/shows\r\nconst getShows = async () => {\r\n  if (shows.length > 0) {\r\n    return shows;\r\n  }\r\n  const response = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__.tvApi}/show`);\r\n  const data = await response.json();\r\n\r\n  // we can display more or less shows if we like\r\n  shows = data.slice(0, 99);\r\n  const likes = (await (0,_likes_getLikes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()).reduce((likesById, like) => {\r\n    likesById[like.item_id] = like;\r\n    return likesById;\r\n  }, {});\r\n  shows = shows.map((show) => {\r\n    show.likes = likes[show.id] || {};\r\n    return show;\r\n  });\r\n  return shows;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShows);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/get-shows.js?");

/***/ }),

/***/ "./src/modules/likes/getLikes.js":
/*!***************************************!*\
  !*** ./src/modules/likes/getLikes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getTotalLikes = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JbH05JvjcbTpE6SAjZIh/likes', {\n    method: 'GET',\n    headers: {\n      Accept: 'application/json',\n    },\n  });\n  const data = await response.json();\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTotalLikes);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/likes/getLikes.js?");

/***/ }),

/***/ "./src/modules/likes/postLikes.js":
/*!****************************************!*\
  !*** ./src/modules/likes/postLikes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// POST ACTION\nconst addLike = async (id) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JbH05JvjcbTpE6SAjZIh/likes', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n    }),\n  });\n  const jsonResponse = await response.text();\n  return jsonResponse;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/likes/postLikes.js?");

/***/ }),

/***/ "./src/modules/modal/commentCounter.js":
/*!*********************************************!*\
  !*** ./src/modules/modal/commentCounter.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getCommentsCounter = () => {\r\n  const comments = document.querySelectorAll('comments-count');\r\n  return comments.length;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCommentsCounter);\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/modal/commentCounter.js?");

/***/ }),

/***/ "./src/modules/modal/getComments.js":
/*!******************************************!*\
  !*** ./src/modules/modal/getComments.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ \"./src/modules/api.js\");\n\r\n\r\nconst getComments = (itemId) => fetch(`${_api_js__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/${_api_js__WEBPACK_IMPORTED_MODULE_0__.appId}/comments?item_id=${itemId}`)\r\n.then((response) => response.json());\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/modal/getComments.js?");

/***/ }),

/***/ "./src/modules/modal/modalpopup.js":
/*!*****************************************!*\
  !*** ./src/modules/modal/modalpopup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments */ \"./src/modules/modal/getComments.js\");\n/* harmony import */ var _postcomments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postcomments */ \"./src/modules/modal/postcomments.js\");\n/* harmony import */ var _commentCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentCounter */ \"./src/modules/modal/commentCounter.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './populateComments'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\n\r\n\r\nconst Modal = async (dataname, dataimagemedium, dataid, datasummary) => {\r\n  const Modal = document.querySelector('.modal');\r\n  const modalPopUp = document.createElement('div');\r\n  modalPopUp.classList.add('modal-popUp');\r\n\r\n  const imageSummary = document.createElement('div');\r\n  imageSummary.classList.add('image-summary');\r\n  const imagePopUp = document.createElement('img');\r\n  imagePopUp.classList.add('image-popup');\r\n  imagePopUp.src = dataimagemedium;\r\n\r\n  const dataSummary = document.createElement('div');\r\n  dataSummary.classList.add('data-summary');\r\n  dataSummary.innerHTML = datasummary;\r\n  imageSummary.append(imagePopUp, dataSummary);\r\n\r\n  const dataInfo = document.createElement('div');\r\n  dataInfo.classList.add('data-info');\r\n\r\n  const titlePopUp = document.createElement('div');\r\n  titlePopUp.classList.add('title-popup');\r\n  titlePopUp.innerText = dataname;\r\n\r\n  const closeIcon = document.createElement('div');\r\n  closeIcon.classList.add('close-icon');\r\n  closeIcon.innerHTML = '&#x3a7';\r\n\r\n  const commentsContainer = document.createElement('div');\r\n  commentsContainer.classList.add('comments-popup');\r\n\r\n  const comments = document.createElement('div');\r\n  comments.classList.add('comments-popup');\r\n\r\n  const commentsCard = document.createElement('button');\r\n  commentsCard.classList.add('comments');\r\n\r\nconst commentUpdate = async () => {\r\n    const comm = await (0,_getComments__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dataid).catch(() => []);\r\n    if (comm.length) {\r\n      Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './populateComments'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(comm, formContainer);\r\n      const commentsCount = (0,_commentCounter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n      comments.textContent = `comments (${commentsCount})`;\r\n    } else {\r\n      comments.textContent = 'comments (0)';\r\n    }\r\n  };\r\n  commentUpdate();\r\n\r\n  const formContainer = document.createElement('div');\r\n  formContainer.classList.add('form-container');\r\n  const h3 = document.createElement('h3');\r\n  h3.textContent = 'Add a comment';\r\n  const form = document.createElement('form');\r\n  form.classList.add('form-comment');\r\n  const name = document.createElement('input');\r\n  name.classList.add('input-name');\r\n  const commentInput = document.createElement('textarea');\r\n  commentInput.classList.add('text');\r\n  const commentBtn = document.createElement('button');\r\n  commentBtn.classList.add('comment-btn');\r\n  commentBtn.textContent = 'titi';\r\n  formContainer.append(h3, name, commentInput, form, commentBtn);\r\n\r\n  commentBtn.addEventListener('click', async (e) => {\r\n    e.preventDefault();\r\n    const details = await (0,_postcomments__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dataid, name.value, commentInput.value);\r\n    commentUpdate();\r\n    form.reset();\r\n  });\r\n\r\n  const title = document.createElement('div');\r\n  title.classList.add('popup-title-container');\r\n  titlePopUp.classList.add('pop-title');\r\n  title.append(titlePopUp, closeIcon);\r\n  commentsContainer.append(formContainer, commentsCard);\r\n  modalPopUp.append(title, imageSummary, comments, commentsContainer);\r\n\r\n  Modal.style.display = 'flex';\r\n  Modal.appendChild(modalPopUp);\r\n\r\n  closeIcon.addEventListener('click', () => {\r\n    modalPopUp.remove();\r\n    modalPopUp.style.display = 'none';\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/modal/modalpopup.js?");

/***/ }),

/***/ "./src/modules/modal/postcomments.js":
/*!*******************************************!*\
  !*** ./src/modules/modal/postcomments.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ \"./src/modules/api.js\");\n\r\n\r\nconst postComments = (id, username, comment) => fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/${_api__WEBPACK_IMPORTED_MODULE_0__.appId}/comments`, {\r\n  method: 'POST',\r\n  body: JSON.stringify({\r\n    item_id: id,\r\n    username: username,\r\n    comment: comment,\r\n  }),\r\n  headers: {\r\n    'Content-type': 'application/json; charset=UTF-8',\r\n  },\r\n});\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComments);\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/modal/postcomments.js?");

/***/ }),

/***/ "./src/modules/populate.js":
/*!*********************************!*\
  !*** ./src/modules/populate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_shows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-shows */ \"./src/modules/get-shows.js\");\n\n\nconst populate = async () => {\n  await (0,_get_shows__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_get_shows__WEBPACK_IMPORTED_MODULE_0__.renderShows)();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populate);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/populate.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);