"use strict";

var _composeTwitchStreamersList = require("./composeTwitchStreamersList");

var debug = true,
    streamers = ["geekandsundry", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
    activeTmpl = $.templates("#activeStreamTemplate"),
    inactiveTmpl = $.templates("#inactiveStreamTemplate"),
    listHTML = ""; /*jslint devel:true */
/*global $, jQuery*/

$(document).ready(function () {
  if (debug) {
    console.log("Document ready!");
  };
  (0, _composeTwitchStreamersList.getTList)(streamers);
  $('#streamList').html(listHTML);
});
