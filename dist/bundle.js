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
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getTList; });\n/*jslint devel:true */\n/*global $, jQuery*/\n\nlet debug = true,\n    onlinetmpl = $.templates('#activeStreamTemplate'),\n    offlinetmpl = $.templates('#inactiveStreamTemplate');\n// Take in list of Twitch streamer names, make api call\n// and return HTML list, ready for insertion\n\nfunction getTList(...allProps) {\n  let [streamers, ...moreProps] = allProps,\n      allRequestPromises = [],\n      baseURLonline = 'https://wind-bow.glitch.me/twitch-api/streams/',\n      composedListHTML = '';\n\n  if (debug) {\n    console.log('Getting TList for ' + streamers.toString());\n  };\n\n  for (let [index, streamer] of streamers.entries()) {\n    if (debug) {\n      console.log('About to push ' + 'streamer' + ' to entry ' + index + \".\\n\");\n    }\n    allRequestPromises.push(new Promise((resolve, reject) => {\n      $.getJSON(baseURLonline + streamer, function (results) {\n        if (results.stream === null) {\n          var user = results._links.self.substr(37);\n          console.log(user + 'is offline!\\n');\n          return processOffline(user);\n        } else {\n          return new Promise((resolve, reject) => {\n            if (debug) {\n              console.log(results.stream.channel.display_name + ' is online!\\n');\n            }\n            const strippedResults = {\n              stream: results.stream,\n              preview: {\n                large: results.stream.preview.large\n              },\n              channel: {\n                display_name: results.stream.channel.display_name,\n                status: results.stream.channel.status,\n                game: results.stream.channel.game\n              }\n            };\n            resolve(strippedResults);\n          });\n        }\n      });\n    }));\n  }\n  Promise.all(allRequestPromises).then(function (results) {\n    results.forEach(function (item) {\n      console.log(\"Item: \" + JSON.stringify(item));\n      // Future site of passing the json through the jsrender template\n    });\n  });\n};\n\nfunction processOffline(user) {\n  let baseURLoffline = 'https://wind-bow.glitch.me/twitch-api/channels/';\n  return new Promise((resolve, reject) => {\n    $.getJSON(baseURLoffline + user + '?callback=', function (results) {\n      const strippedResults = {\n        channel: {\n          display_name: results.display_name,\n          url: results.url,\n          logo: results.logo || \"http://default.image\"\n        }\n      };\n      resolve(strippedResults);\n    });\n  });\n};\n\nfunction addHTMLToList(renderedHTML) {\n  listHTML += renderedHTML;\n  $('#streamList').html();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9zZVR3aXRjaFN0cmVhbWVyc0xpc3QuanM/YjdiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmpzbGludCBkZXZlbDp0cnVlICovXG4vKmdsb2JhbCAkLCBqUXVlcnkqL1xuXG5sZXQgZGVidWcgPSB0cnVlLFxuICBvbmxpbmV0bXBsID0gJC50ZW1wbGF0ZXMoJyNhY3RpdmVTdHJlYW1UZW1wbGF0ZScpLFxuICBvZmZsaW5ldG1wbCA9ICQudGVtcGxhdGVzKCcjaW5hY3RpdmVTdHJlYW1UZW1wbGF0ZScpO1xuLy8gVGFrZSBpbiBsaXN0IG9mIFR3aXRjaCBzdHJlYW1lciBuYW1lcywgbWFrZSBhcGkgY2FsbFxuLy8gYW5kIHJldHVybiBIVE1MIGxpc3QsIHJlYWR5IGZvciBpbnNlcnRpb25cblxuZnVuY3Rpb24gZ2V0VExpc3QoLi4uYWxsUHJvcHMpIHtcbiAgbGV0IFtzdHJlYW1lcnMsIC4uLm1vcmVQcm9wc10gPSBhbGxQcm9wcyxcbiAgYWxsUmVxdWVzdFByb21pc2VzID0gW10sXG4gICAgYmFzZVVSTG9ubGluZSA9ICdodHRwczovL3dpbmQtYm93LmdsaXRjaC5tZS90d2l0Y2gtYXBpL3N0cmVhbXMvJyxcbiAgICBjb21wb3NlZExpc3RIVE1MID0gJyc7XG5cbiAgaWYgKGRlYnVnKSB7XG4gICAgY29uc29sZS5sb2coJ0dldHRpbmcgVExpc3QgZm9yICcgKyBzdHJlYW1lcnMudG9TdHJpbmcoKSlcbiAgfTtcblxuICBmb3IgKGxldCBbaW5kZXgsIHN0cmVhbWVyXSBvZiBzdHJlYW1lcnMuZW50cmllcygpKSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZygnQWJvdXQgdG8gcHVzaCAnICsgJ3N0cmVhbWVyJyArICcgdG8gZW50cnkgJyArIGluZGV4ICsgXCIuXFxuXCIpO1xuICAgIH1cbiAgICBhbGxSZXF1ZXN0UHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAkLmdldEpTT04oYmFzZVVSTG9ubGluZSArIHN0cmVhbWVyLCBmdW5jdGlvbihyZXN1bHRzKSB7XG4gICAgICAgIGlmIChyZXN1bHRzLnN0cmVhbSA9PT0gbnVsbCkge1xuICAgICAgICAgIHZhciB1c2VyID0gcmVzdWx0cy5fbGlua3Muc2VsZi5zdWJzdHIoMzcpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIgKyAnaXMgb2ZmbGluZSFcXG4nKTtcbiAgICAgICAgICByZXR1cm4gcHJvY2Vzc09mZmxpbmUodXNlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLnN0cmVhbS5jaGFubmVsLmRpc3BsYXlfbmFtZSArICcgaXMgb25saW5lIVxcbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3RyaXBwZWRSZXN1bHRzID0ge1xuICAgICAgICAgICAgICBzdHJlYW06IHJlc3VsdHMuc3RyZWFtLFxuICAgICAgICAgICAgICBwcmV2aWV3OiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHJlc3VsdHMuc3RyZWFtLnByZXZpZXcubGFyZ2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNoYW5uZWw6IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6IHJlc3VsdHMuc3RyZWFtLmNoYW5uZWwuZGlzcGxheV9uYW1lLFxuICAgICAgICAgICAgICAgIHN0YXR1czogcmVzdWx0cy5zdHJlYW0uY2hhbm5lbC5zdGF0dXMsXG4gICAgICAgICAgICAgICAgZ2FtZTogcmVzdWx0cy5zdHJlYW0uY2hhbm5lbC5nYW1lLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc29sdmUoc3RyaXBwZWRSZXN1bHRzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSkpO1xuICB9XG4gIFByb21pc2UuYWxsKGFsbFJlcXVlc3RQcm9taXNlcylcbiAgICAudGhlbihmdW5jdGlvbihyZXN1bHRzKSB7XG4gICAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW06IFwiICsgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xuICAgICAgICAvLyBGdXR1cmUgc2l0ZSBvZiBwYXNzaW5nIHRoZSBqc29uIHRocm91Z2ggdGhlIGpzcmVuZGVyIHRlbXBsYXRlXG4gICAgICB9KVxuICAgIH0pXG59O1xuXG5mdW5jdGlvbiBwcm9jZXNzT2ZmbGluZSh1c2VyKSB7XG4gIGxldCBiYXNlVVJMb2ZmbGluZSA9ICdodHRwczovL3dpbmQtYm93LmdsaXRjaC5tZS90d2l0Y2gtYXBpL2NoYW5uZWxzLyc7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgJC5nZXRKU09OKGJhc2VVUkxvZmZsaW5lICsgdXNlciArICc/Y2FsbGJhY2s9JywgZnVuY3Rpb24ocmVzdWx0cykge1xuICAgICAgY29uc3Qgc3RyaXBwZWRSZXN1bHRzID0ge1xuICAgICAgICBjaGFubmVsOiB7XG4gICAgICAgICAgZGlzcGxheV9uYW1lOiByZXN1bHRzLmRpc3BsYXlfbmFtZSxcbiAgICAgICAgICB1cmw6IHJlc3VsdHMudXJsLFxuICAgICAgICAgIGxvZ286IHJlc3VsdHMubG9nbyB8fCBcImh0dHA6Ly9kZWZhdWx0LmltYWdlXCJcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJlc29sdmUoc3RyaXBwZWRSZXN1bHRzKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5cbmZ1bmN0aW9uIGFkZEhUTUxUb0xpc3QocmVuZGVyZWRIVE1MKSB7XG4gIGxpc3RIVE1MICs9IHJlbmRlcmVkSFRNTDtcbiAgJCgnI3N0cmVhbUxpc3QnKS5odG1sKCk7XG59XG5leHBvcnQge1xuICBnZXRUTGlzdFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9zZVR3aXRjaFN0cmVhbWVyc0xpc3QuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUxBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);