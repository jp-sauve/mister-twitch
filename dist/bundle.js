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
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getTList; });\n/*jslint devel:true */\n/*global $, jQuery*/\n\nlet debug = true,\n    onlinetmpl = $.templates('#activeStreamTemplate'),\n    offlinetmpl = $.templates('#inactiveStreamTemplate');\n// Take in list of Twitch streamer names, make api call\n// and return HTML list, ready for insertion\n\nfunction getTList(...allProps) {\n  let [streamers, ...moreProps] = allProps,\n      allRequestPromises = [],\n      baseURLonline = 'https://wind-bow.glitch.me/twitch-api/streams/',\n      composedListHTML = '';\n\n  if (debug) {\n    console.log('Getting TList for ' + streamers.toString());\n  };\n\n  for (let [index, streamer] of streamers.entries()) {\n    if (debug) {\n      console.log('About to push entry ' + index + \".\\n\");\n    }\n    allRequestPromises.push($.getJSON(baseURLonline + streamer, processResults));\n  }\n  Promise.all(allRequestPromises).then(function (results) {\n    results.forEach(function (item) {\n      console.log(\"Item: \" + JSON.stringify(item));\n    });\n  });\n};\n\nfunction processResults(results) {\n  if (results.stream === null) {\n    var user = results._links.self.substr(37);\n    console.log(user + ' is offline!\\n');\n    return processOffline(user);\n  } else {\n    return new Promise((resolve, reject) => {\n      const strippedResults = {\n        stream: results.stream,\n        preview: {\n          large: results.stream.preview.large\n        },\n        channel: {\n          display_name: results.stream.channel.display_name,\n          status: results.stream.channel.status,\n          game: results.stream.channel.game\n        }\n      };\n      resolve(strippedResults);\n    });\n  }\n}\n\nfunction processOffline(user) {\n  let baseURLoffline = 'https://wind-bow.glitch.me/twitch-api/channels/';\n  return new Promise((resolve, reject) => {\n    $.getJSON(baseURLoffline + user + '?callback=', function (results) {\n      const strippedResults = {\n        channel: {\n          display_name: results.display_name,\n          url: results.url,\n          logo: results.logo || \"http://default.image\"\n        }\n      };\n      resolve(strippedResults);\n      //\n    });\n  });\n};\n\nfunction addHTMLToList(renderedHTML) {\n  listHTML += renderedHTML;\n  $('#streamList').html();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9zZVR3aXRjaFN0cmVhbWVyc0xpc3QuanM/YjdiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmpzbGludCBkZXZlbDp0cnVlICovXG4vKmdsb2JhbCAkLCBqUXVlcnkqL1xuXG5sZXQgZGVidWcgPSB0cnVlLFxub25saW5ldG1wbCA9ICQudGVtcGxhdGVzKCcjYWN0aXZlU3RyZWFtVGVtcGxhdGUnKSxcbm9mZmxpbmV0bXBsID0gJC50ZW1wbGF0ZXMoJyNpbmFjdGl2ZVN0cmVhbVRlbXBsYXRlJyk7XG4vLyBUYWtlIGluIGxpc3Qgb2YgVHdpdGNoIHN0cmVhbWVyIG5hbWVzLCBtYWtlIGFwaSBjYWxsXG4vLyBhbmQgcmV0dXJuIEhUTUwgbGlzdCwgcmVhZHkgZm9yIGluc2VydGlvblxuXG5mdW5jdGlvbiBnZXRUTGlzdCAoLi4uYWxsUHJvcHMpIHtcbiAgbGV0IFtzdHJlYW1lcnMsIC4uLm1vcmVQcm9wc10gPSBhbGxQcm9wcyxcbiAgYWxsUmVxdWVzdFByb21pc2VzID0gW10sXG4gIGJhc2VVUkxvbmxpbmUgPSAnaHR0cHM6Ly93aW5kLWJvdy5nbGl0Y2gubWUvdHdpdGNoLWFwaS9zdHJlYW1zLycsXG4gIGNvbXBvc2VkTGlzdEhUTUwgPSAnJztcblxuICBpZiAoZGVidWcpIHtjb25zb2xlLmxvZygnR2V0dGluZyBUTGlzdCBmb3IgJyArIHN0cmVhbWVycy50b1N0cmluZygpKX07XG5cbmZvciAobGV0IFtpbmRleCwgc3RyZWFtZXJdIG9mIHN0cmVhbWVycy5lbnRyaWVzKCkpIHtcbiAgaWYgKGRlYnVnKSB7Y29uc29sZS5sb2coJ0Fib3V0IHRvIHB1c2ggZW50cnkgJyArIGluZGV4ICsgXCIuXFxuXCIpO31cbiAgYWxsUmVxdWVzdFByb21pc2VzLnB1c2goJC5nZXRKU09OKGJhc2VVUkxvbmxpbmUgKyBzdHJlYW1lciwgcHJvY2Vzc1Jlc3VsdHMpKTtcbiAgfVxuUHJvbWlzZS5hbGwoYWxsUmVxdWVzdFByb21pc2VzKVxuICAudGhlbihmdW5jdGlvbihyZXN1bHRzKXtcbiAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG4gICAgICBjb25zb2xlLmxvZyhcIkl0ZW06IFwiICsgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xuICAgIH0pXG4gIH0pXG59O1xuXG5mdW5jdGlvbiBwcm9jZXNzUmVzdWx0cyhyZXN1bHRzKSB7XG4gIGlmIChyZXN1bHRzLnN0cmVhbSA9PT0gbnVsbCkge1xuICAgIHZhciB1c2VyID0gcmVzdWx0cy5fbGlua3Muc2VsZi5zdWJzdHIoMzcpO1xuICAgIGNvbnNvbGUubG9nKHVzZXIgKyAnIGlzIG9mZmxpbmUhXFxuJyk7XG4gICAgcmV0dXJuIHByb2Nlc3NPZmZsaW5lKHVzZXIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHN0cmlwcGVkUmVzdWx0cyA9IHtcbiAgICAgICAgc3RyZWFtOiByZXN1bHRzLnN0cmVhbSxcbiAgICAgICAgcHJldmlldzoge1xuICAgICAgICAgIGxhcmdlOiByZXN1bHRzLnN0cmVhbS5wcmV2aWV3LmxhcmdlLFxuICAgICAgICB9LFxuICAgICAgICBjaGFubmVsOiB7XG4gICAgICAgICAgZGlzcGxheV9uYW1lOiByZXN1bHRzLnN0cmVhbS5jaGFubmVsLmRpc3BsYXlfbmFtZSxcbiAgICAgICAgICBzdGF0dXM6IHJlc3VsdHMuc3RyZWFtLmNoYW5uZWwuc3RhdHVzLFxuICAgICAgICAgIGdhbWU6IHJlc3VsdHMuc3RyZWFtLmNoYW5uZWwuZ2FtZSxcbiAgICB9LFxuICB9O1xuICByZXNvbHZlKHN0cmlwcGVkUmVzdWx0cyk7XG4gICAgICB9KTtcbn19XG5cbmZ1bmN0aW9uIHByb2Nlc3NPZmZsaW5lKHVzZXIpIHtcbiAgbGV0IGJhc2VVUkxvZmZsaW5lID0gJ2h0dHBzOi8vd2luZC1ib3cuZ2xpdGNoLm1lL3R3aXRjaC1hcGkvY2hhbm5lbHMvJztcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT57XG4gICQuZ2V0SlNPTihiYXNlVVJMb2ZmbGluZSArIHVzZXIgKyAnP2NhbGxiYWNrPScsZnVuY3Rpb24ocmVzdWx0cykge1xuICAgIGNvbnN0IHN0cmlwcGVkUmVzdWx0cyA9IHtcbiAgICAgIGNoYW5uZWw6IHtcbiAgICAgICAgZGlzcGxheV9uYW1lOiByZXN1bHRzLmRpc3BsYXlfbmFtZSxcbiAgICAgICAgdXJsOiByZXN1bHRzLnVybCxcbiAgICAgICAgbG9nbzogcmVzdWx0cy5sb2dvIHx8IFwiaHR0cDovL2RlZmF1bHQuaW1hZ2VcIlxuICAgICAgfVxuICAgIH07XG4gICAgICByZXNvbHZlKHN0cmlwcGVkUmVzdWx0cyk7XG4vL1xuICB9KTtcbiAgfSk7XG4gIH07XG5cblxuZnVuY3Rpb24gYWRkSFRNTFRvTGlzdChyZW5kZXJlZEhUTUwpIHtcbiAgbGlzdEhUTUwgKz0gcmVuZGVyZWRIVE1MO1xuICAkKCAnI3N0cmVhbUxpc3QnICkuaHRtbCgpO1xufVxuZXhwb3J0IHsgZ2V0VExpc3QgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9zZVR3aXRjaFN0cmVhbWVyc0xpc3QuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);