/*jslint devel:true */
/*global $, jQuery*/

import {
  timeElapsed
} from './util';

let debug = true,
  onlinetmpl = $.templates( '#activeStreamTemplate' ),
  offlinetmpl = $.templates( '#inactiveStreamTemplate' );

function getTList( streamers ) {
  let streamerRequests = [],
    channelRequests = [];
  const baseURLonline = 'https://wind-bow.glitch.me/twitch-api/streams/',
    baseURLoffline = 'https://wind-bow.glitch.me/twitch-api/channels/';
  streamers.forEach( streamer => {
    streamerRequests.push( $.getJSON( baseURLonline + streamer, function ( results ) {
      return results;
    } ) );
    channelRequests.push( $.getJSON( baseURLoffline + streamer, function ( results ) {
      return results;
    } ) );
  } );
  let onlinePromises = Promise.all( streamerRequests ),
    offlinePromises = Promise.all( channelRequests );
  Promise.all( [ onlinePromises, offlinePromises ] ).then( ( [ online, offline ] ) => {
    for ( let [ index, streamerResult ] of online.entries() ) {
      if ( streamerResult.stream !== null ) {
        const streamerStrippedResults = {
          stream: {
            preview: {
              large: streamerResult.stream.preview.large
            },
            channel: {
              display_name: streamerResult.stream.channel.display_name,
              status: streamerResult.stream.channel.status,
              game: streamerResult.stream.channel.game
            }
          }
        };
        addHTMLToList( onlinetmpl.render( streamerStrippedResults ) );
      } else {
        const channelStrippedResults = {
          channel: {
            display_name: offline[ index ].display_name,
            url: offline[ index ].url,
            logo: offline[ index ].logo || "/mister-twitch/images/logo-transp-dark-300.png",
            last_seen: timeElapsed( offline[ index ].updated_at )
          }
        };
        console.log( "\nOffline:\n" + JSON.stringify( channelStrippedResults, null, '\t' ) );
        addHTMLToList( offlinetmpl.render( channelStrippedResults ) );
      }
    }
  } );
};

function addHTMLToList( renderedHTML ) {
  $( '#streamList' ).append( composedListHTML );
}
export {
  getTList
};
