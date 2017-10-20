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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__composeTwitchStreamersList__ = __webpack_require__(1);
/*jslint devel:true */
/*global $, jQuery*/



let debug = true,
    streamers = ["geekandsundry", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
    activeTmpl = $.templates("#activeStreamTemplate"),
    inactiveTmpl = $.templates("#inactiveStreamTemplate"),
    listHTML = "";

$(document).ready(function () {
  if (debug) {
    console.log("Document ready!");
  };
  Object(__WEBPACK_IMPORTED_MODULE_0__composeTwitchStreamersList__["a" /* getTList */])(streamers);
  $('#streamList').html(listHTML);
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(2);
/*jslint devel:true */
/*global $, jQuery*/



let debug = true,
    onlinetmpl = $.templates('#activeStreamTemplate'),
    offlinetmpl = $.templates('#inactiveStreamTemplate');

function getTList(streamers) {
  let streamerRequests = [],
      channelRequests = [];
  const baseURLonline = 'https://wind-bow.glitch.me/twitch-api/streams/',
        baseURLoffline = 'https://wind-bow.glitch.me/twitch-api/channels/';
  streamers.forEach(streamer => {
    streamerRequests.push($.getJSON(baseURLonline + streamer, function (results) {
      return results;
    }));
    channelRequests.push($.getJSON(baseURLoffline + streamer, function (results) {
      return results;
    }));
  });
  let onlinePromises = Promise.all(streamerRequests),
      offlinePromises = Promise.all(channelRequests);
  Promise.all([onlinePromises, offlinePromises]).then(([online, offline]) => {
    for (let [index, streamerResult] of online.entries()) {
      if (streamerResult.stream !== null) {
        //    if (debug){console.log(JSON.stringify(streamerResult, null, '\t'))};
        const streamerStrippedResults = {
          stream: {
            preview: {
              large: streamerResult.stream.preview.large
            },
            url: streamerResult.stream.channel.url,
            channel: {
              display_name: streamerResult.stream.channel.display_name,
              status: streamerResult.stream.channel.status,
              game: streamerResult.stream.channel.game
            }
          }
        };
        //    if (debug){console.log("Stripped:\n" + JSON.stringify(streamerStrippedResults, null, '\t'))};
        addHTMLToList(onlinetmpl.render(streamerStrippedResults));
      } else {
        if (debug) {
          console.log("Offline source:\n" + JSON.stringify(offline[index], null, '\t'));
        };
        const channelStrippedResults = {
          channel: {
            display_name: offline[index].display_name,
            url: offline[index].url,
            logo: offline[index].logo || "/mister-twitch/images/logo-transp-dark-300.png",
            last_seen: Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* timeElapsed */])(offline[index].updated_at)
          }
        };
        console.log("\nOffline:\n" + JSON.stringify(channelStrippedResults, null, '\t'));
        addHTMLToList(offlinetmpl.render(channelStrippedResults));
      }
    }
  });
};

function addHTMLToList(renderedHTML) {
  $('#streamList').append(renderedHTML);
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeElapsed; });
function timeElapsed(startTime, ...finishTime) {
  let now = new Date(),
      then = new Date(startTime),
      msElapsed = now - then,
      seconds = (msElapsed / 1000).toFixed(1),
      minutes = (msElapsed / (1000 * 60)).toFixed(1),
      hours = (msElapsed / (1000 * 60 * 60)).toFixed(1),
      days = (msElapsed / (1000 * 60 * 60 * 24)).toFixed(1);
  switch (true) {
    case seconds < 60:
      return seconds + " seconds";
    case minutes < 60:
      return minutes + " minutes";
    case hours < 24:
      return hours + " hours";
    default:
      return days + " days";
  }
}



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map