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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__composeTwitchStreamersList__ = __webpack_require__(/*! ./composeTwitchStreamersList */ 1);\n/*jslint devel:true */\n/*global $, jQuery*/\n\n\n\nlet debug = true,\n    streamers = [\"geekandsundry\", \"ESL_SC2\", \"OgamingSC2\", \"cretetion\", \"freecodecamp\", \"storbeck\", \"habathcx\", \"RobotCaleb\", \"noobs2ninjas\"],\n    activeTmpl = $.templates(\"#activeStreamTemplate\"),\n    inactiveTmpl = $.templates(\"#inactiveStreamTemplate\"),\n    listHTML = \"\";\n\n$(document).ready(function () {\n  if (debug) {\n    console.log(\"Document ready!\");\n  };\n  Object(__WEBPACK_IMPORTED_MODULE_0__composeTwitchStreamersList__[\"a\" /* getTList */])(streamers);\n  $('#streamList').html(listHTML);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwLmpzP2JkOWMiXSwic291cmNlc0NvbnRlbnQiOlsiLypqc2xpbnQgZGV2ZWw6dHJ1ZSAqL1xuLypnbG9iYWwgJCwgalF1ZXJ5Ki9cblxuaW1wb3J0IHtcbiAgZ2V0VExpc3Rcbn0gZnJvbSAnLi9jb21wb3NlVHdpdGNoU3RyZWFtZXJzTGlzdCc7XG5cbmxldCBkZWJ1ZyA9IHRydWUsXG4gIHN0cmVhbWVycyA9IFsgXCJnZWVrYW5kc3VuZHJ5XCIsIFwiRVNMX1NDMlwiLCBcIk9nYW1pbmdTQzJcIiwgXCJjcmV0ZXRpb25cIiwgXCJmcmVlY29kZWNhbXBcIiwgXCJzdG9yYmVja1wiLCBcImhhYmF0aGN4XCIsIFwiUm9ib3RDYWxlYlwiLCBcIm5vb2JzMm5pbmphc1wiIF0sXG4gIGFjdGl2ZVRtcGwgPSAkLnRlbXBsYXRlcyggXCIjYWN0aXZlU3RyZWFtVGVtcGxhdGVcIiApLFxuICBpbmFjdGl2ZVRtcGwgPSAkLnRlbXBsYXRlcyggXCIjaW5hY3RpdmVTdHJlYW1UZW1wbGF0ZVwiICksXG4gIGxpc3RIVE1MID0gXCJcIjtcblxuJCggZG9jdW1lbnQgKS5yZWFkeSggZnVuY3Rpb24gKCkge1xuICBpZiAoIGRlYnVnICkge1xuICAgIGNvbnNvbGUubG9nKCBcIkRvY3VtZW50IHJlYWR5IVwiICk7XG4gIH07XG4gIGdldFRMaXN0KCBzdHJlYW1lcnMgKTtcbiAgJCggJyNzdHJlYW1MaXN0JyApLmh0bWwoIGxpc3RIVE1MICk7XG5cbn0gKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************************!*\
  !*** ./src/composeTwitchStreamersList.js ***!
  \*******************************************/
/*! exports provided: getTList */
/*! exports used: getTList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getTList; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(/*! ./util */ 2);\n/*jslint devel:true */\n/*global $, jQuery*/\n\n\n\nlet debug = true,\n    onlinetmpl = $.templates('#activeStreamTemplate'),\n    offlinetmpl = $.templates('#inactiveStreamTemplate');\n\nfunction getTList(streamers) {\n  let streamerRequests = [],\n      channelRequests = [];\n  const baseURLonline = 'https://wind-bow.glitch.me/twitch-api/streams/',\n        baseURLoffline = 'https://wind-bow.glitch.me/twitch-api/channels/';\n  streamers.forEach(streamer => {\n    streamerRequests.push($.getJSON(baseURLonline + streamer, function (results) {\n      return results;\n    }));\n    channelRequests.push($.getJSON(baseURLoffline + streamer, function (results) {\n      return results;\n    }));\n  });\n  let onlinePromises = Promise.all(streamerRequests),\n      offlinePromises = Promise.all(channelRequests);\n  Promise.all([onlinePromises, offlinePromises]).then(([online, offline]) => {\n    for (let [index, streamerResult] of online.entries()) {\n      if (streamerResult.stream !== null) {\n        if (debug) {\n          console.log(JSON.stringify(streamerResult, null, '\\t'));\n        };\n        const streamerStrippedResults = {\n          stream: {\n            preview: {\n              large: streamerResult.stream.preview.large\n            },\n            url: streamerResult.stream.channel.url,\n            channel: {\n              display_name: streamerResult.stream.channel.display_name,\n              status: streamerResult.stream.channel.status,\n              game: streamerResult.stream.channel.game\n            }\n          }\n        };\n        if (debug) {\n          console.log(\"Stripped:\\n\" + JSON.stringify(streamerStrippedResults, null, '\\t'));\n        };\n        addHTMLToList(onlinetmpl.render(streamerStrippedResults));\n      } else {\n        const channelStrippedResults = {\n          channel: {\n            display_name: offline[index].display_name,\n            url: offline[index].url,\n            logo: offline[index].logo || \"/mister-twitch/images/logo-transp-dark-300.png\",\n            last_seen: Object(__WEBPACK_IMPORTED_MODULE_0__util__[\"a\" /* timeElapsed */])(offline[index].updated_at)\n          }\n        };\n        //      console.log( \"\\nOffline:\\n\" + JSON.stringify( channelStrippedResults, null, '\\t' ) );\n        addHTMLToList(offlinetmpl.render(channelStrippedResults));\n      }\n    }\n  });\n};\n\nfunction addHTMLToList(renderedHTML) {\n  $('#streamList').append(renderedHTML);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9zZVR3aXRjaFN0cmVhbWVyc0xpc3QuanM/YjdiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmpzbGludCBkZXZlbDp0cnVlICovXG4vKmdsb2JhbCAkLCBqUXVlcnkqL1xuXG5pbXBvcnQge1xuICB0aW1lRWxhcHNlZFxufSBmcm9tICcuL3V0aWwnO1xuXG5sZXQgZGVidWcgPSB0cnVlLFxuICBvbmxpbmV0bXBsID0gJC50ZW1wbGF0ZXMoICcjYWN0aXZlU3RyZWFtVGVtcGxhdGUnICksXG4gIG9mZmxpbmV0bXBsID0gJC50ZW1wbGF0ZXMoICcjaW5hY3RpdmVTdHJlYW1UZW1wbGF0ZScgKTtcblxuZnVuY3Rpb24gZ2V0VExpc3QoIHN0cmVhbWVycyApIHtcbiAgbGV0IHN0cmVhbWVyUmVxdWVzdHMgPSBbXSxcbiAgICBjaGFubmVsUmVxdWVzdHMgPSBbXTtcbiAgY29uc3QgYmFzZVVSTG9ubGluZSA9ICdodHRwczovL3dpbmQtYm93LmdsaXRjaC5tZS90d2l0Y2gtYXBpL3N0cmVhbXMvJyxcbiAgICBiYXNlVVJMb2ZmbGluZSA9ICdodHRwczovL3dpbmQtYm93LmdsaXRjaC5tZS90d2l0Y2gtYXBpL2NoYW5uZWxzLyc7XG4gIHN0cmVhbWVycy5mb3JFYWNoKCBzdHJlYW1lciA9PiB7XG4gICAgc3RyZWFtZXJSZXF1ZXN0cy5wdXNoKCAkLmdldEpTT04oIGJhc2VVUkxvbmxpbmUgKyBzdHJlYW1lciwgZnVuY3Rpb24gKCByZXN1bHRzICkge1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSApICk7XG4gICAgY2hhbm5lbFJlcXVlc3RzLnB1c2goICQuZ2V0SlNPTiggYmFzZVVSTG9mZmxpbmUgKyBzdHJlYW1lciwgZnVuY3Rpb24gKCByZXN1bHRzICkge1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSApICk7XG4gIH0gKTtcbiAgbGV0IG9ubGluZVByb21pc2VzID0gUHJvbWlzZS5hbGwoIHN0cmVhbWVyUmVxdWVzdHMgKSxcbiAgICBvZmZsaW5lUHJvbWlzZXMgPSBQcm9taXNlLmFsbCggY2hhbm5lbFJlcXVlc3RzICk7XG4gIFByb21pc2UuYWxsKCBbIG9ubGluZVByb21pc2VzLCBvZmZsaW5lUHJvbWlzZXMgXSApLnRoZW4oICggWyBvbmxpbmUsIG9mZmxpbmUgXSApID0+IHtcbiAgICBmb3IgKCBsZXQgWyBpbmRleCwgc3RyZWFtZXJSZXN1bHQgXSBvZiBvbmxpbmUuZW50cmllcygpICkge1xuICAgICAgaWYgKCBzdHJlYW1lclJlc3VsdC5zdHJlYW0gIT09IG51bGwgKSB7XG4gICAgICAgIGlmIChkZWJ1Zyl7Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoc3RyZWFtZXJSZXN1bHQsIG51bGwsICdcXHQnKSl9O1xuICAgICAgICBjb25zdCBzdHJlYW1lclN0cmlwcGVkUmVzdWx0cyA9IHtcbiAgICAgICAgICBzdHJlYW06IHtcbiAgICAgICAgICAgIHByZXZpZXc6IHtcbiAgICAgICAgICAgICAgbGFyZ2U6IHN0cmVhbWVyUmVzdWx0LnN0cmVhbS5wcmV2aWV3LmxhcmdlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiBzdHJlYW1lclJlc3VsdC5zdHJlYW0uY2hhbm5lbC51cmwsXG4gICAgICAgICAgICBjaGFubmVsOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogc3RyZWFtZXJSZXN1bHQuc3RyZWFtLmNoYW5uZWwuZGlzcGxheV9uYW1lLFxuICAgICAgICAgICAgICBzdGF0dXM6IHN0cmVhbWVyUmVzdWx0LnN0cmVhbS5jaGFubmVsLnN0YXR1cyxcbiAgICAgICAgICAgICAgZ2FtZTogc3RyZWFtZXJSZXN1bHQuc3RyZWFtLmNoYW5uZWwuZ2FtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRlYnVnKXtjb25zb2xlLmxvZyhcIlN0cmlwcGVkOlxcblwiICsgSlNPTi5zdHJpbmdpZnkoc3RyZWFtZXJTdHJpcHBlZFJlc3VsdHMsIG51bGwsICdcXHQnKSl9O1xuICAgICAgICBhZGRIVE1MVG9MaXN0KCBvbmxpbmV0bXBsLnJlbmRlciggc3RyZWFtZXJTdHJpcHBlZFJlc3VsdHMgKSApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY2hhbm5lbFN0cmlwcGVkUmVzdWx0cyA9IHtcbiAgICAgICAgICBjaGFubmVsOiB7XG4gICAgICAgICAgICBkaXNwbGF5X25hbWU6IG9mZmxpbmVbIGluZGV4IF0uZGlzcGxheV9uYW1lLFxuICAgICAgICAgICAgdXJsOiBvZmZsaW5lWyBpbmRleCBdLnVybCxcbiAgICAgICAgICAgIGxvZ286IG9mZmxpbmVbIGluZGV4IF0ubG9nbyB8fCBcIi9taXN0ZXItdHdpdGNoL2ltYWdlcy9sb2dvLXRyYW5zcC1kYXJrLTMwMC5wbmdcIixcbiAgICAgICAgICAgIGxhc3Rfc2VlbjogdGltZUVsYXBzZWQoIG9mZmxpbmVbIGluZGV4IF0udXBkYXRlZF9hdCApXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAvLyAgICAgIGNvbnNvbGUubG9nKCBcIlxcbk9mZmxpbmU6XFxuXCIgKyBKU09OLnN0cmluZ2lmeSggY2hhbm5lbFN0cmlwcGVkUmVzdWx0cywgbnVsbCwgJ1xcdCcgKSApO1xuICAgICAgICBhZGRIVE1MVG9MaXN0KCBvZmZsaW5ldG1wbC5yZW5kZXIoIGNoYW5uZWxTdHJpcHBlZFJlc3VsdHMgKSApO1xuICAgICAgfVxuICAgIH1cbiAgfSApO1xufTtcblxuZnVuY3Rpb24gYWRkSFRNTFRvTGlzdCggcmVuZGVyZWRIVE1MICkge1xuICAkKCAnI3N0cmVhbUxpc3QnICkuYXBwZW5kKCByZW5kZXJlZEhUTUwgKTtcbn1cbmV4cG9ydCB7XG4gIGdldFRMaXN0XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb3NlVHdpdGNoU3RyZWFtZXJzTGlzdC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQTtBQURBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: timeElapsed */
/*! exports used: timeElapsed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return timeElapsed; });\nfunction timeElapsed(startTime, ...finishTime) {\n  let now = new Date(),\n      then = new Date(startTime),\n      msElapsed = now - then,\n      seconds = (msElapsed / 1000).toFixed(1),\n      minutes = (msElapsed / (1000 * 60)).toFixed(1),\n      hours = (msElapsed / (1000 * 60 * 60)).toFixed(1),\n      days = (msElapsed / (1000 * 60 * 60 * 24)).toFixed(1);\n  switch (true) {\n    case seconds < 60:\n      return seconds + \" seconds\";\n    case minutes < 60:\n      return minutes + \" minutes\";\n    case hours < 24:\n      return hours + \" hours\";\n    default:\n      return days + \" days\";\n  }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbC5qcz8zNGE2Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRpbWVFbGFwc2VkKCBzdGFydFRpbWUsIC4uLmZpbmlzaFRpbWUgKSB7XG4gIGxldCBub3cgPSBuZXcgRGF0ZSgpLFxuICAgIHRoZW4gPSBuZXcgRGF0ZSggc3RhcnRUaW1lICksXG4gICAgbXNFbGFwc2VkID0gbm93IC0gdGhlbixcbiAgICBzZWNvbmRzID0gKCBtc0VsYXBzZWQgLyAxMDAwICkudG9GaXhlZCggMSApLFxuICAgIG1pbnV0ZXMgPSAoIG1zRWxhcHNlZCAvICggMTAwMCAqIDYwICkgKS50b0ZpeGVkKCAxICksXG4gICAgaG91cnMgPSAoIG1zRWxhcHNlZCAvICggMTAwMCAqIDYwICogNjAgKSApLnRvRml4ZWQoIDEgKSxcbiAgICBkYXlzID0gKCBtc0VsYXBzZWQgLyAoIDEwMDAgKiA2MCAqIDYwICogMjQgKSApLnRvRml4ZWQoIDEgKTtcbiAgc3dpdGNoICggdHJ1ZSApIHtcbiAgICBjYXNlICggc2Vjb25kcyA8IDYwICk6XG4gICAgICByZXR1cm4gc2Vjb25kcyArIFwiIHNlY29uZHNcIjtcbiAgICBjYXNlICggbWludXRlcyA8IDYwICk6XG4gICAgICByZXR1cm4gbWludXRlcyArIFwiIG1pbnV0ZXNcIjtcbiAgICBjYXNlICggaG91cnMgPCAyNCApOlxuICAgICAgcmV0dXJuIGhvdXJzICsgXCIgaG91cnNcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRheXMgKyBcIiBkYXlzXCI7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgdGltZUVsYXBzZWRcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3V0aWwuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);