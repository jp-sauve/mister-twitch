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
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getTList; });\n/*jslint devel:true */\n/*global $, jQuery*/\n\nlet debug = true,\n    onlinetmpl = $.templates('#activeStreamTemplate'),\n    offlinetmpl = $.templates('#inactiveStreamTemplate');\n// Take in list of Twitch streamer names, make api call\n// and return HTML list, ready for insertion\n\nfunction getTList(...allProps) {\n  let [streamers, ...moreProps] = allProps,\n      streamerRequests = [],\n      channelRequests = [],\n      baseURLonline = 'https://wind-bow.glitch.me/twitch-api/streams/',\n      baseURLoffline = 'https://wind-bow.glitch.me/twitch-api/channels/';\n\n  for (let [index, streamer] of streamers.entries()) {\n    streamerRequests.push($.getJSON(baseURLonline + streamer, function (results) {\n      return results;\n    }));\n    channelRequests.push($.getJSON(baseURLoffline + streamer, function (results) {\n      return results;\n    }));\n  }\n  let onlinePromises = Promise.all(streamerRequests),\n      offlinePromises = Promise.all(channelRequests);\n\n  Promise.all([onlinePromises, offlinePromises]).then(allResults => {\n\n    for (let [index, streamerResult] of allResults[0].entries()) {\n      if (streamerResult.stream !== null) {\n        const streamerStrippedResults = {\n          stream: {\n            preview: {\n              large: streamerResult.stream.preview.large\n            },\n            channel: {\n              display_name: streamerResult.stream.channel.display_name,\n              status: streamerResult.stream.channel.status,\n              game: streamerResult.stream.channel.game\n            }\n          }\n        };\n        console.log(\"\\nOnline:\\n\" + JSON.stringify(streamerStrippedResults, null, '\\t'));\n        addHTMLToList(onlinetmpl.render(streamerStrippedResults));\n      } else {\n        const channelStrippedResults = {\n          channel: {\n            display_name: allResults[1][index].display_name,\n            url: allResults[1][index].url,\n            logo: allResults[1][index].logo || \"/mister-twitch/images/logo-transp-dark-300.png\"\n          }\n        };\n        console.log(\"\\nOffline:\\n\" + JSON.stringify(channelStrippedResults, null, '\\t'));\n        addHTMLToList(offlinetmpl.render(channelStrippedResults));\n      }\n    }\n  });\n};\n\nfunction addHTMLToList(renderedHTML) {\n  let composedListHTML = renderedHTML;\n  $('#streamList').append(composedListHTML);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9zZVR3aXRjaFN0cmVhbWVyc0xpc3QuanM/YjdiMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmpzbGludCBkZXZlbDp0cnVlICovXG4vKmdsb2JhbCAkLCBqUXVlcnkqL1xuXG5sZXQgZGVidWcgPSB0cnVlLFxuICBvbmxpbmV0bXBsID0gJC50ZW1wbGF0ZXMoJyNhY3RpdmVTdHJlYW1UZW1wbGF0ZScpLFxuICBvZmZsaW5ldG1wbCA9ICQudGVtcGxhdGVzKCcjaW5hY3RpdmVTdHJlYW1UZW1wbGF0ZScpO1xuLy8gVGFrZSBpbiBsaXN0IG9mIFR3aXRjaCBzdHJlYW1lciBuYW1lcywgbWFrZSBhcGkgY2FsbFxuLy8gYW5kIHJldHVybiBIVE1MIGxpc3QsIHJlYWR5IGZvciBpbnNlcnRpb25cblxuZnVuY3Rpb24gZ2V0VExpc3QoLi4uYWxsUHJvcHMpIHtcbiAgbGV0IFtzdHJlYW1lcnMsIC4uLm1vcmVQcm9wc10gPSBhbGxQcm9wcyxcbiAgc3RyZWFtZXJSZXF1ZXN0cyA9IFtdLFxuICAgIGNoYW5uZWxSZXF1ZXN0cyA9IFtdLFxuICAgIGJhc2VVUkxvbmxpbmUgPSAnaHR0cHM6Ly93aW5kLWJvdy5nbGl0Y2gubWUvdHdpdGNoLWFwaS9zdHJlYW1zLycsXG4gICAgYmFzZVVSTG9mZmxpbmUgPSAnaHR0cHM6Ly93aW5kLWJvdy5nbGl0Y2gubWUvdHdpdGNoLWFwaS9jaGFubmVscy8nO1xuXG4gIGZvciAobGV0IFtpbmRleCwgc3RyZWFtZXJdIG9mIHN0cmVhbWVycy5lbnRyaWVzKCkpIHtcbiAgICBzdHJlYW1lclJlcXVlc3RzLnB1c2goJC5nZXRKU09OKGJhc2VVUkxvbmxpbmUgKyBzdHJlYW1lciwgZnVuY3Rpb24ocmVzdWx0cykge1xuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSkpO1xuICAgIGNoYW5uZWxSZXF1ZXN0cy5wdXNoKCQuZ2V0SlNPTihiYXNlVVJMb2ZmbGluZSArIHN0cmVhbWVyLCBmdW5jdGlvbihyZXN1bHRzKSB7XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9KSk7XG4gIH1cbiAgbGV0IG9ubGluZVByb21pc2VzID0gUHJvbWlzZS5hbGwoc3RyZWFtZXJSZXF1ZXN0cyksXG4gICAgb2ZmbGluZVByb21pc2VzID0gUHJvbWlzZS5hbGwoY2hhbm5lbFJlcXVlc3RzKTtcblxuICBQcm9taXNlLmFsbChbb25saW5lUHJvbWlzZXMsIG9mZmxpbmVQcm9taXNlc10pXG4gICAgLnRoZW4oYWxsUmVzdWx0cyA9PiB7XG5cbiAgICAgIGZvciAobGV0IFtpbmRleCwgc3RyZWFtZXJSZXN1bHRdIG9mIGFsbFJlc3VsdHNbMF0uZW50cmllcygpKSB7XG4gICAgICAgIGlmIChzdHJlYW1lclJlc3VsdC5zdHJlYW0gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdHJlYW1lclN0cmlwcGVkUmVzdWx0cyA9IHtcbiAgICAgICAgICAgIHN0cmVhbToge1xuICAgICAgICAgICAgcHJldmlldzoge1xuICAgICAgICAgICAgICBsYXJnZTogc3RyZWFtZXJSZXN1bHQuc3RyZWFtLnByZXZpZXcubGFyZ2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhbm5lbDoge1xuICAgICAgICAgICAgICBkaXNwbGF5X25hbWU6IHN0cmVhbWVyUmVzdWx0LnN0cmVhbS5jaGFubmVsLmRpc3BsYXlfbmFtZSxcbiAgICAgICAgICAgICAgc3RhdHVzOiBzdHJlYW1lclJlc3VsdC5zdHJlYW0uY2hhbm5lbC5zdGF0dXMsXG4gICAgICAgICAgICAgIGdhbWU6IHN0cmVhbWVyUmVzdWx0LnN0cmVhbS5jaGFubmVsLmdhbWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc29sZS5sb2coXCJcXG5PbmxpbmU6XFxuXCIgKyBKU09OLnN0cmluZ2lmeShzdHJlYW1lclN0cmlwcGVkUmVzdWx0cyxudWxsLCdcXHQnKSk7XG4gICAgICAgICAgYWRkSFRNTFRvTGlzdChvbmxpbmV0bXBsLnJlbmRlcihzdHJlYW1lclN0cmlwcGVkUmVzdWx0cykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNoYW5uZWxTdHJpcHBlZFJlc3VsdHMgPSB7XG4gICAgICAgICAgICBjaGFubmVsOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXlfbmFtZTogYWxsUmVzdWx0c1sxXVtpbmRleF0uZGlzcGxheV9uYW1lLFxuICAgICAgICAgICAgICB1cmw6IGFsbFJlc3VsdHNbMV1baW5kZXhdLnVybCxcbiAgICAgICAgICAgICAgbG9nbzogYWxsUmVzdWx0c1sxXVtpbmRleF0ubG9nbyB8fCBcIi9taXN0ZXItdHdpdGNoL2ltYWdlcy9sb2dvLXRyYW5zcC1kYXJrLTMwMC5wbmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc29sZS5sb2coXCJcXG5PZmZsaW5lOlxcblwiICsgSlNPTi5zdHJpbmdpZnkoY2hhbm5lbFN0cmlwcGVkUmVzdWx0cyxudWxsLCdcXHQnKSk7XG4gICAgICAgICAgYWRkSFRNTFRvTGlzdChvZmZsaW5ldG1wbC5yZW5kZXIoY2hhbm5lbFN0cmlwcGVkUmVzdWx0cykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbn07XG5cbmZ1bmN0aW9uIGFkZEhUTUxUb0xpc3QocmVuZGVyZWRIVE1MKSB7XG4gIGxldCBjb21wb3NlZExpc3RIVE1MID0gcmVuZGVyZWRIVE1MO1xuICAkKCcjc3RyZWFtTGlzdCcpLmFwcGVuZChjb21wb3NlZExpc3RIVE1MKTtcbn1cbmV4cG9ydCB7XG4gIGdldFRMaXN0XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb3NlVHdpdGNoU3RyZWFtZXJzTGlzdC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFEQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);