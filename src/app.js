/*jslint devel:true */
/*global $, jQuery*/

import {
  getTList
} from './composeTwitchStreamersList';

let debug = true,
  streamers = [ "geekandsundry", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas" ],
  activeTmpl = $.templates( "#activeStreamTemplate" ),
  inactiveTmpl = $.templates( "#inactiveStreamTemplate" ),
  listHTML = "";

$( document ).ready( function () {
  if ( debug ) {
    console.log( "Document ready!" );
  };
  getTList( streamers );
  $( '#streamList' ).html( listHTML );

} );
