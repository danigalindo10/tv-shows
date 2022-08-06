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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Roboto+Mono:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: #e0ce00;\\n  color: black;\\n  font-family: 'Roboto Mono', monospace;\\n}\\n\\nheader {\\n  display: flex;\\n  width: 100%;\\n  height: 70px;\\n  background-color: black;\\n}\\n\\nnav {\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n\\n.search-form {\\n  margin: auto;\\n  margin-top: 50px;\\n  width: fit-content;\\n}\\n\\n.search-box {\\n  display: flex;\\n  align-items: center;\\n  background-color: black;\\n  height: 40px;\\n  border-radius: 50px;\\n  padding: 10px;\\n}\\n\\n.search-box input {\\n  border: none;\\n  outline: none;\\n  color: #f5f5f5;\\n  background: none;\\n}\\n\\n.search-box button {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  text-decoration: none;\\n  width: 30px;\\n  height: 30px;\\n  border-radius: 50px;\\n}\\n\\n.title {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 60px auto 80px auto;\\n  justify-content: center;\\n  align-items: center;\\n  text-shadow: 5px 3px gray;\\n}\\n\\n.title h1 {\\n  font-size: 75px;\\n  color: black;\\n  font-weight: 700;\\n  letter-spacing: 5px;\\n  text-align: center;\\n  font-family: 'Abril Fatface', cursive;\\n}\\n\\n.title p {\\n  margin-top: 20px;\\n  color: black;\\n  text-align: center;\\n  width: 60%;\\n  line-height: 2.5rem;\\n  font-size: 30px;\\n  text-shadow: none;\\n}\\n\\nspan.item-counter {\\n  font-size: 40px;\\n  background: black;\\n  color: #e0ce00;\\n  padding: 5px 5px;\\n  border-radius: 15px;\\n}\\n\\n.logo {\\n  display: flex;\\n  text-decoration: none;\\n  color: #e0ce00;\\n}\\n\\n.logo i {\\n  display: flex;\\n  position: absolute;\\n  font-size: 30px;\\n  color: #e0ce00;\\n}\\n\\n.logo p {\\n  font-size: 25px;\\n  font-weight: bold;\\n  color: #e0ce00;\\n  text-decoration: none;\\n  padding-left: 50px;\\n}\\n\\n.links {\\n  display: flex;\\n  list-style: none;\\n  gap: 30px;\\n\\n  /* font-family: 'Abril Fatface', cursive; */\\n}\\n\\n.links li {\\n  list-style: none;\\n  color: white;\\n}\\n\\n.links li a {\\n  color: var(--color1);\\n  text-decoration: none;\\n}\\n\\n/* CARD STYLES */\\n\\n.grid-container {\\n  width: 80%;\\n  margin: 0 auto;\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\n  gap: 30px;\\n}\\n\\n.card {\\n  border-radius: 30px;\\n  background-color: black;\\n  height: 430px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  padding: 30px 40px;\\n}\\n\\n.card:hover {\\n  border: white solid 2px;\\n}\\n\\n.image-container {\\n  width: 100%;\\n  height: 200px;\\n  margin: 0 auto;\\n  margin-bottom: 10px;\\n  cursor: pointer;\\n}\\n\\n.item-image {\\n  border-radius: 5px;\\n  object-fit: contain;\\n  display: flex;\\n  align-items: center;\\n  margin: 0 auto;\\n}\\n\\n.item-info {\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  color: whitesmoke;\\n  font-size: 0.6rem;\\n  justify-content: center;\\n  padding-top: 85px;\\n  gap: 20px;\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\nh2.item-title {\\n  font-family: 'Roboto', monospace;\\n}\\n\\n.likes-container {\\n  display: flex;\\n  gap: 20px;\\n}\\n\\nspan {\\n  font-size: 18px;\\n  color: #e0ce00;\\n  font-weight: bold;\\n}\\n\\n.fa-heart {\\n  color: rgb(148, 148, 148);\\n  cursor: pointer;\\n  transition: 0.5s;\\n  font-size: 20px;\\n}\\n\\n.fa-heart:hover {\\n  color: rgb(250, 53, 53);\\n}\\n\\n/* Modal */\\n\\n.modal {\\n  position: fixed;\\n  background-color: #e0ce00;\\n  padding: 10px;\\n  z-index: 999999;\\n  top: 0;\\n  height: 100vh;\\n  opacity: 0.9;\\n  backdrop-filter: blur(4.5px);\\n  display: flex;\\n  overflow-y: auto;\\n}\\n\\n.close-icon {\\n  font-weight: 600;\\n  font-size: 20px;\\n  cursor: pointer;\\n}\\n\\n.modal-popUp {\\n  text-align: center;\\n}\\n\\n.form-container {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0 auto;\\n  width: 20%;\\n}\\n\\n.individual-comment {\\n  display: flex;\\n}\\n\\n.individual-comment:nth-child(even) {\\n  background-color: #fff;\\n}\\n\\n.comment-area {\\n  background-color: #e0ce00;\\n  height: 20px;\\n  overflow-y: auto;\\n}\\n\\n.input-name {\\n  margin: 10px;\\n  width: 120px;\\n  height: 30px;\\n  border-radius: 8px;\\n}\\n\\n.text {\\n  padding: 8px;\\n  width: 150px;\\n  margin: 4px;\\n  border-radius: 8px;\\n}\\n\\n.comment-btn {\\n  margin: 10px;\\n  width: 65px;\\n  border-radius: 5px;\\n}\\n\\n.popup-title-container {\\n  float: right;\\n}\\n\\n.pop-title {\\n  font-weight: 700;\\n}\\n\\nh3 {\\n  display: flex;\\n}\\n\\n.data-summary {\\n  margin: 10px;\\n  padding: 15px;\\n  font-weight: 700;\\n}\\n\\n.image-popup {\\n  border: 20px solid #000;\\n}\\n\\n.footer {\\n  color: white;\\n  background-color: #000;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  position: fixed;\\n  bottom: 0;\\n  width: 100%;\\n  text-align: center;\\n  padding: 30px 0;\\n}\\n\\n.footer-link {\\n  text-decoration: none;\\n  cursor: pointer;\\n  color: white;\\n}\\n\\n@media only screen and (max-width: 425px) {\\n  .text-logo {\\n    display: none;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal_modalpopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/modalpopup */ \"./src/modules/modal/modalpopup.js\");\n/* harmony import */ var _likes_postLikes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes/postLikes */ \"./src/modules/likes/postLikes.js\");\n\n\n\n// CREATE ELEMENTS BASED ON INDEX.HTML\nclass elementInfo {\n  static showCount = (shows) => {\n    const showsNumber = document.querySelector('.item-counter');\n    showsNumber.innerText = shows.length;\n  }\n\n  static renderCard = (title, imgUrl, itemID, summary, like) => {\n    const cardContainer = document.querySelector('.grid-container');\n    const card = document.createElement('div');\n    card.classList.add('card');\n\n    const imageContainer = document.createElement('div');\n    imageContainer.classList.add('image-container');\n    const image = document.createElement('img');\n    image.classList.add('item-image');\n    image.src = imgUrl;\n    const itemInfo = document.createElement('div');\n    itemInfo.classList.add('item-info');\n\n    const itemTitle = document.createElement('h2');\n    itemTitle.classList.add('item-title');\n    itemTitle.innerText = title;\n\n    const likesContainer = document.createElement('div');\n    likesContainer.classList.add('likes-container');\n    const likesNumber = document.createElement('span');\n    likesNumber.textContent = like;\n\n    // PRINT TOTAL LIKES - RECORDED ON THE Involvement API\n    const updateLikes = () => {\n      const currentLikes = likesNumber.innerText;\n      likesNumber.innerText = currentLikes ? Number(currentLikes) + 1 : 1;\n    };\n\n    const heartIcon = document.createElement('i');\n    heartIcon.classList.add('fa-solid', 'fa-heart');\n\n    const commentsButton = document.createElement('button');\n    commentsButton.classList.add('comments-button');\n    commentsButton.textContent = 'Comments';\n\n    commentsButton.addEventListener('click', () => (0,_modal_modalpopup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, imgUrl, itemID, summary));\n\n    // ADD LIKES - RECORDED ON THE Involvement API\n    heartIcon.addEventListener('click', async (e) => {\n      e.preventDefault();\n      updateLikes();\n      await (0,_likes_postLikes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(itemID);\n    });\n\n    // append elements to the card container\n    cardContainer.append(card);\n    card.append(imageContainer, itemInfo, commentsButton);\n\n    imageContainer.append(image);\n    itemInfo.append(itemTitle, likesContainer);\n    likesContainer.append(heartIcon, likesNumber);\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementInfo);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/element-info.js?");

/***/ }),

/***/ "./src/modules/get-shows.js":
/*!**********************************!*\
  !*** ./src/modules/get-shows.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"renderShows\": () => (/* binding */ renderShows)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/modules/api.js\");\n/* harmony import */ var _element_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-info */ \"./src/modules/element-info.js\");\n/* harmony import */ var _likes_getLikes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes/getLikes */ \"./src/modules/likes/getLikes.js\");\n\n\n\n\nlet shows = [];\nconst renderShows = () => {\n  _element_info__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showCount(shows);\n  shows.forEach((data) => {\n    if (data.image !== null) {\n      _element_info__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderCard(data.name, data.image.medium, data.id, data.summary, data.likes.likes);\n    }\n  });\n};\n\n// GET SHOWS FROM API https://www.tvmaze.com/api/shows\nconst getShows = async () => {\n  if (shows.length > 0) {\n    return shows;\n  }\n  const response = await fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__.tvApi}/show`);\n  const data = await response.json();\n  // we can display more or less shows if we like\n  shows = data.slice(0, 240);\n  const likes = (await (0,_likes_getLikes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()).reduce((likesById, like) => {\n    likesById[like.item_id] = like;\n    return likesById;\n  }, {});\n  shows = shows.map((show) => {\n    show.likes = likes[show.id] || {};\n    return show;\n  });\n  return shows;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShows);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/get-shows.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getCommentsCounter = () => {\n  const comments = document.querySelectorAll('comments-count');\n  return comments.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCommentsCounter);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/modal/commentCounter.js?");

/***/ }),

/***/ "./src/modules/modal/getComments.js":
/*!******************************************!*\
  !*** ./src/modules/modal/getComments.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ \"./src/modules/api.js\");\n\n\nconst getComments = (itemId) => fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/${_api__WEBPACK_IMPORTED_MODULE_0__.appId}/comments?item_id=${itemId}`)\n  .then((response) => response.json());\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/modal/getComments.js?");

/***/ }),

/***/ "./src/modules/modal/modalpopup.js":
/*!*****************************************!*\
  !*** ./src/modules/modal/modalpopup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComments */ \"./src/modules/modal/getComments.js\");\n/* harmony import */ var _postcomments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postcomments */ \"./src/modules/modal/postcomments.js\");\n/* harmony import */ var _commentCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentCounter */ \"./src/modules/modal/commentCounter.js\");\n/* harmony import */ var _populateComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./populateComments */ \"./src/modules/modal/populateComments.js\");\n/* eslint-disable */\n\n\n\n\n\nconst Modal = async (dataname, dataimagemedium, dataid, datasummary) => {\n  const Modal = document.querySelector('.modal');\n  const modalPopUp = document.createElement('div');\n  modalPopUp.classList.add('modal-popUp');\n\n  const imageSummary = document.createElement('div');\n  imageSummary.classList.add('image-summary');\n  const imagePopUp = document.createElement('img');\n  imagePopUp.classList.add('image-popup');\n  imagePopUp.src = dataimagemedium;\n\n  const dataSummary = document.createElement('div');\n  dataSummary.classList.add('data-summary');\n  dataSummary.innerHTML = datasummary;\n  imageSummary.append(imagePopUp, dataSummary);\n\n  const dataInfo = document.createElement('div');\n  dataInfo.classList.add('data-info');\n\n  const titlePopUp = document.createElement('div');\n  titlePopUp.classList.add('title-popup');\n  titlePopUp.innerText = dataname;\n\n  const closeIcon = document.createElement('div');\n  closeIcon.classList.add('close-icon');\n  closeIcon.innerHTML = '&#x3a7';\n\n  const commentsContainer = document.createElement('div');\n  commentsContainer.classList.add('comments-popup');\n\n  const comments = document.createElement('div');\n  comments.classList.add('comments-popup');\n\n  const commentsCard = document.createElement('button');\n  commentsCard.classList.add('comments');\n\n  const commentUpdate = async () => {\n    const comm = await (0,_getComments__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dataid).catch(() => []);\n    if (comm.length) {\n      (0,_populateComments__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(comm, formContainer);\n      const commentsCount = (0,_commentCounter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      comments.textContent = `comments (${commentsCount})`;\n    } else {\n      comments.textContent = 'comments (0)';\n    }\n  };\n  commentUpdate();\n\n  const formContainer = document.createElement('div');\n  formContainer.classList.add('form-container');\n  const h3 = document.createElement('h3');\n  h3.textContent = 'Add a comment';\n  const form = document.createElement('form');\n  form.classList.add('form-comment');\n  const name = document.createElement('input');\n  name.classList.add('input-name');\n  name.placeholder = 'Enter you name...'\n  const commentInput = document.createElement('textarea');\n  commentInput.classList.add('text');\n  commentInput.placeholder = 'Write a message...'\n  const commentBtn = document.createElement('button');\n  commentBtn.classList.add('comment-btn');\n  commentBtn.textContent = 'Submit';\n  formContainer.append(h3, name, commentInput, form, commentBtn);\n\n  commentBtn.addEventListener('click', async (e) => {\n    e.preventDefault();\n    const details = await (0,_postcomments__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dataid, name.value, commentInput.value);\n    commentUpdate();\n    form.reset();\n  });\n\n  const title = document.createElement('div');\n  title.classList.add('popup-title-container');\n  titlePopUp.classList.add('pop-title');\n  title.append(titlePopUp, closeIcon);\n  commentsContainer.append(formContainer, commentsCard);\n  modalPopUp.append(title, imageSummary, comments, commentsContainer);\n\n  Modal.style.display = 'flex';\n  Modal.appendChild(modalPopUp);\n\n  closeIcon.addEventListener('click', () => {\n    modalPopUp.remove();\n    modalPopUp.style.display = 'none';\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/modal/modalpopup.js?");

/***/ }),

/***/ "./src/modules/modal/populateComments.js":
/*!***********************************************!*\
  !*** ./src/modules/modal/populateComments.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentData = (d) => {\n  const commData = document.createElement('comment-data');\n  commData.textContent = d;\n  return d;\n};\n\nconst createComment = (data) => {\n  const dataDisplay = document.createElement('data-display');\n  dataDisplay.classList.add('d-display');\n  const dateData = commentData(`${data.creation_date}`);\n  const user = commentData(`${data.username}`);\n  const comment = commentData(`${data.comment}`);\n  dataDisplay.append(dateData, user, comment);\n  return dataDisplay;\n};\n\nconst createComments = (Comments, formContainer) => {\n  const commentArea = document.createElement('div');\n  commentArea.classList.add('comment-area');\n  formContainer.appendChild(commentArea);\n  Comments.forEach((comment) => {\n    const individualComment = document.createElement('div');\n    individualComment.classList.add('individual-comment');\n    const userDate = document.createElement('p');\n    userDate.textContent = comment.creation_date;\n    individualComment.appendChild(userDate);\n    commentArea.appendChild(individualComment);\n    const userName = document.createElement('p');\n    userName.textContent = comment.username;\n    individualComment.appendChild(userName);\n    commentArea.appendChild(individualComment);\n    const userComment = document.createElement('p');\n    userComment.textContent = comment.comment;\n    individualComment.appendChild(userComment);\n    commentArea.appendChild(individualComment);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createComments);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/modal/populateComments.js?");

/***/ }),

/***/ "./src/modules/modal/postcomments.js":
/*!*******************************************!*\
  !*** ./src/modules/modal/postcomments.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ \"./src/modules/api.js\");\n\n\nconst postComments = (id, username, comment) => fetch(`${_api__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/${_api__WEBPACK_IMPORTED_MODULE_0__.appId}/comments`, {\n  method: 'POST',\n  body: JSON.stringify({\n    item_id: id,\n    username,\n    comment,\n  }),\n  headers: {\n    'Content-type': 'application/json; charset=UTF-8',\n  },\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComments);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/modal/postcomments.js?");

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