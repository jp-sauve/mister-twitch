/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided:  */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__composeTwitchStreamersList__ = __webpack_require__(/*! ./composeTwitchStreamersList */ 1);\n/*jslint devel:true */\n/*global $, jQuery*/\n\n\nlet debug = true,\n    streamers = [\"geekandsundry\", \"ESL_SC2\", \"OgamingSC2\", \"cretetion\", \"freecodecamp\", \"storbeck\", \"habathcx\", \"RobotCaleb\", \"noobs2ninjas\"],\n    activeTmpl = $.templates(\"#activeStreamTemplate\"),\n    inactiveTmpl = $.templates(\"#inactiveStreamTemplate\"),\n    listHTML = \"\";\n\n$(document).ready(function () {\n  if (debug) {\n    console.log(\"Document ready!\");\n  };\n  Object(__WEBPACK_IMPORTED_MODULE_0__composeTwitchStreamersList__[\"a\" /* getTList */])(streamers);\n  $('#streamList').html(listHTML);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwLmpzP2JkOWMiXSwic291cmNlc0NvbnRlbnQiOlsiLypqc2xpbnQgZGV2ZWw6dHJ1ZSAqL1xuLypnbG9iYWwgJCwgalF1ZXJ5Ki9cbmltcG9ydCB7IGdldFRMaXN0IH0gZnJvbSAnLi9jb21wb3NlVHdpdGNoU3RyZWFtZXJzTGlzdCc7XG5cbmxldCBkZWJ1ZyA9IHRydWUsXG5zdHJlYW1lcnMgPSBbXCJnZWVrYW5kc3VuZHJ5XCIsIFwiRVNMX1NDMlwiLCBcIk9nYW1pbmdTQzJcIiwgXCJjcmV0ZXRpb25cIiwgXCJmcmVlY29kZWNhbXBcIiwgXCJzdG9yYmVja1wiLCBcImhhYmF0aGN4XCIsIFwiUm9ib3RDYWxlYlwiLCBcIm5vb2JzMm5pbmphc1wiXSxcbmFjdGl2ZVRtcGwgPSAkLnRlbXBsYXRlcyhcIiNhY3RpdmVTdHJlYW1UZW1wbGF0ZVwiKSxcbmluYWN0aXZlVG1wbCA9ICQudGVtcGxhdGVzKFwiI2luYWN0aXZlU3RyZWFtVGVtcGxhdGVcIiksXG5saXN0SFRNTCA9IFwiXCI7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgaWYgKGRlYnVnKSB7IGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgcmVhZHkhXCIpO307XG4gIGdldFRMaXN0KHN0cmVhbWVycyk7XG4gICAgJCgnI3N0cmVhbUxpc3QnKS5odG1sKGxpc3RIVE1MKTtcblxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************************!*\
  !*** ./src/composeTwitchStreamersList.js ***!
  \*******************************************/
/*! exports provided: getTList */
/*! exports used: getTList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getTList; });\n/*jslint devel:true */\n/*global $, jQuery*/\n\nlet debug = true,\n    onlinetmpl = $.templates('#activeStreamTemplate'),\n    offlinetmpl = $.templates('#inactiveStreamTemplate');\n// Take in list of Twitch streamer names, make api call\n// and return HTML list, ready for insertion\n\nfunction getTList(...allProps) {\n  let [streamers, ...moreProps] = allProps,\n      streamerRequests = [],\n      channelRequests = [],\n      baseURLonline = 'https://wind-bow.glitch.me/twitch-api/streams/',\n      baseURLoffline = 'https://wind-bow.glitch.me/twitch-api/channels/',\n      composedListHTML = '';\n  if (allProps) {\n    console.log(\"You've given unexpected properties to getTList function!\\n\");\n  }\n  for (let [index, streamer] of streamers.entries()) {\n    streamerRequests.push($.getJSON(baseURLonline + streamer, function (results) {\n      return results;\n    }));\n\n    channelRequests.push($.getJSON(baseURLoffline + streamer, function (results) {\n      return results;\n    }));\n  }\n  let onlinePromises = Promise.all(streamerRequests),\n      offlinePromises = Promise.all(channelRequests);\n\n  Promise.all([onlinePromises, offlinePromises]).then(results => {\n\n    results[0].forEach(function (item) {\n      console.log(\"\\nCOMPLETED PROMISES 0\\n\" + JSON.stringify(item));\n    });\n    results[1].forEach(function (item) {\n      console.log(\"\\nCOMPLETED PROMISES 2\\n\" + JSON.stringify(item));\n    });\n  });\n};\n\nfunction stripResults(...rawResults) {\n  let onlineListedFirst = rawResults[0].stream !== null;\n\n  const onlineStrippedResults = {\n    stream: results.stream,\n    preview: {\n      large: results.stream.preview.large\n    },\n    channel: {\n      display_name: results.stream.channel.display_name,\n      status: results.stream.channel.status,\n      game: results.stream.channel.game\n    }\n  };\n  const offlineStrippedResults = {\n    channel: {\n      display_name: results.display_name,\n      url: results.url,\n      logo: results.logo || \"http://default.image\"\n    }\n  };\n}\n\nfunction addHTMLToList(renderedHTML) {\n  listHTML += renderedHTML;\n  $('#streamList').html();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9zZVR3aXRjaFN0cmVhbWVyc0xpc3QuanM/YjdiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmpzbGludCBkZXZlbDp0cnVlICovXG4vKmdsb2JhbCAkLCBqUXVlcnkqL1xuXG5sZXQgZGVidWcgPSB0cnVlLFxuICBvbmxpbmV0bXBsID0gJC50ZW1wbGF0ZXMoJyNhY3RpdmVTdHJlYW1UZW1wbGF0ZScpLFxuICBvZmZsaW5ldG1wbCA9ICQudGVtcGxhdGVzKCcjaW5hY3RpdmVTdHJlYW1UZW1wbGF0ZScpO1xuLy8gVGFrZSBpbiBsaXN0IG9mIFR3aXRjaCBzdHJlYW1lciBuYW1lcywgbWFrZSBhcGkgY2FsbFxuLy8gYW5kIHJldHVybiBIVE1MIGxpc3QsIHJlYWR5IGZvciBpbnNlcnRpb25cblxuZnVuY3Rpb24gZ2V0VExpc3QoLi4uYWxsUHJvcHMpIHtcbiAgbGV0IFtzdHJlYW1lcnMsIC4uLm1vcmVQcm9wc10gPSBhbGxQcm9wcyxcbiAgICBzdHJlYW1lclJlcXVlc3RzID0gW10sXG4gICAgY2hhbm5lbFJlcXVlc3RzID0gW10sXG4gICAgYmFzZVVSTG9ubGluZSA9ICdodHRwczovL3dpbmQtYm93LmdsaXRjaC5tZS90d2l0Y2gtYXBpL3N0cmVhbXMvJyxcbiAgICBiYXNlVVJMb2ZmbGluZSA9ICdodHRwczovL3dpbmQtYm93LmdsaXRjaC5tZS90d2l0Y2gtYXBpL2NoYW5uZWxzLycsXG4gICAgY29tcG9zZWRMaXN0SFRNTCA9ICcnO1xuaWYgKGFsbFByb3BzKSB7Y29uc29sZS5sb2coXCJZb3UndmUgZ2l2ZW4gdW5leHBlY3RlZCBwcm9wZXJ0aWVzIHRvIGdldFRMaXN0IGZ1bmN0aW9uIVxcblwiKTt9XG4gIGZvciAobGV0IFtpbmRleCwgc3RyZWFtZXJdIG9mIHN0cmVhbWVycy5lbnRyaWVzKCkpIHtcbiAgICBzdHJlYW1lclJlcXVlc3RzLnB1c2goJC5nZXRKU09OKGJhc2VVUkxvbmxpbmUgKyBzdHJlYW1lciwgZnVuY3Rpb24ocmVzdWx0cykge1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSkpO1xuXG4gICAgY2hhbm5lbFJlcXVlc3RzLnB1c2goJC5nZXRKU09OKGJhc2VVUkxvZmZsaW5lICsgc3RyZWFtZXIsIGZ1bmN0aW9uKHJlc3VsdHMpIHtcbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0pKTtcblxuICB9XG4gIGxldCBvbmxpbmVQcm9taXNlcyA9IFByb21pc2UuYWxsKHN0cmVhbWVyUmVxdWVzdHMpLFxuICAgIG9mZmxpbmVQcm9taXNlcyA9IFByb21pc2UuYWxsKGNoYW5uZWxSZXF1ZXN0cyk7XG5cbiAgUHJvbWlzZS5hbGwoW29ubGluZVByb21pc2VzLCBvZmZsaW5lUHJvbWlzZXNdKVxuICAgIC50aGVuKHJlc3VsdHMgPT4ge1xuXG4gICAgICByZXN1bHRzWzBdLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlxcbkNPTVBMRVRFRCBQUk9NSVNFUyAwXFxuXCIgKyBKU09OLnN0cmluZ2lmeShpdGVtKSk7XG4gICAgICB9KTtcbiAgICAgIHJlc3VsdHNbMV0uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiXFxuQ09NUExFVEVEIFBST01JU0VTIDJcXG5cIiArIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcbiAgICAgIH0pO1xuXG4gICAgfSlcbn07XG5cbmZ1bmN0aW9uIHN0cmlwUmVzdWx0cyguLi5yYXdSZXN1bHRzKSB7XG4gIGxldCBvbmxpbmVMaXN0ZWRGaXJzdCA9IChyYXdSZXN1bHRzWzBdLnN0cmVhbSAhPT0gbnVsbCk7XG5cbiAgY29uc3Qgb25saW5lU3RyaXBwZWRSZXN1bHRzID0ge1xuICAgIHN0cmVhbTogcmVzdWx0cy5zdHJlYW0sXG4gICAgcHJldmlldzoge1xuICAgICAgbGFyZ2U6IHJlc3VsdHMuc3RyZWFtLnByZXZpZXcubGFyZ2UsXG4gICAgfSxcbiAgICBjaGFubmVsOiB7XG4gICAgICBkaXNwbGF5X25hbWU6IHJlc3VsdHMuc3RyZWFtLmNoYW5uZWwuZGlzcGxheV9uYW1lLFxuICAgICAgc3RhdHVzOiByZXN1bHRzLnN0cmVhbS5jaGFubmVsLnN0YXR1cyxcbiAgICAgIGdhbWU6IHJlc3VsdHMuc3RyZWFtLmNoYW5uZWwuZ2FtZSxcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9mZmxpbmVTdHJpcHBlZFJlc3VsdHMgPSB7XG4gICAgY2hhbm5lbDoge1xuICAgICAgZGlzcGxheV9uYW1lOiByZXN1bHRzLmRpc3BsYXlfbmFtZSxcbiAgICAgIHVybDogcmVzdWx0cy51cmwsXG4gICAgICBsb2dvOiByZXN1bHRzLmxvZ28gfHwgXCJodHRwOi8vZGVmYXVsdC5pbWFnZVwiXG4gICAgfVxuICB9O1xufVxuXG5cbmZ1bmN0aW9uIGFkZEhUTUxUb0xpc3QocmVuZGVyZWRIVE1MKSB7XG4gIGxpc3RIVE1MICs9IHJlbmRlcmVkSFRNTDtcbiAgJCgnI3N0cmVhbUxpc3QnKS5odG1sKCk7XG59XG5leHBvcnQge1xuICBnZXRUTGlzdFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9zZVR3aXRjaFN0cmVhbWVyc0xpc3QuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);