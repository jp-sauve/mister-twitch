/*jslint devel:true */
/*global $, jQuery*/

var debug = false,
stitch = require("stitch"),
streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
baseURL = "https://wind-bow.glitch.me/twitch-api",
tmpl = $.templates("#streamerTemplate"),
listHTML = "",
client = new stitch.StitchClient("mister-twitch-cebka"),
db = client.service('mongodb', 'mongodb-atlas').db('Mister-Twitch');

$(document).ready(function () {
  if (debug){console.log("Document ready!");}
  $.getJSON(baseURL + '/streams/freecodecamp?callback=?', processResults);
$.getJSON(baseURL + '/streams/geekandsundry?callback=?', processResults);

});
function processResults(results) {
  if (debug) {console.log("Processing:\n" + JSON.stringify(results,null,'\t'));};
  listHTML += tmpl.render(results);
//  console.log("ListHTML = " + listHTML);
  $('#streamList').html(listHTML);
}
