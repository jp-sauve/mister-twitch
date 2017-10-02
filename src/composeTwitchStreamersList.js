/*jslint devel:true */
/*global $, jQuery*/

let debug = true,
  onlinetmpl = $.templates('#activeStreamTemplate'),
  offlinetmpl = $.templates('#inactiveStreamTemplate');
// Take in list of Twitch streamer names, make api call
// and return HTML list, ready for insertion

function getTList(...allProps) {
  let [streamers, ...moreProps] = allProps,
  streamerRequests = [],
    channelRequests = [],
    baseURLonline = 'https://wind-bow.glitch.me/twitch-api/streams/',
    baseURLoffline = 'https://wind-bow.glitch.me/twitch-api/channels/';

  for (let [index, streamer] of streamers.entries()) {
    streamerRequests.push($.getJSON(baseURLonline + streamer, function(results) {
      return results;
    }));
    channelRequests.push($.getJSON(baseURLoffline + streamer, function(results) {
      return results;
    }));
  }
  let onlinePromises = Promise.all(streamerRequests),
    offlinePromises = Promise.all(channelRequests);

  Promise.all([onlinePromises, offlinePromises])
    .then(allResults => {

      for (let [index, streamerResult] of allResults[0].entries()) {
        if (streamerResult.stream !== null) {
          const streamerStrippedResults = {
            stream: {
            preview: {
              large: streamerResult.stream.preview.large,
            },
            channel: {
              display_name: streamerResult.stream.channel.display_name,
              status: streamerResult.stream.channel.status,
              game: streamerResult.stream.channel.game,
            }
          }
          };
          console.log("\nOnline:\n" + JSON.stringify(streamerStrippedResults,null,'\t'));
          addHTMLToList(onlinetmpl.render(streamerStrippedResults));
        } else {
          const channelStrippedResults = {
            channel: {
              display_name: allResults[1][index].display_name,
              url: allResults[1][index].url,
              logo: allResults[1][index].logo || "/mister-twitch/images/logo-transp-dark-300.png"
            }
          };
          console.log("\nOffline:\n" + JSON.stringify(channelStrippedResults,null,'\t'));
          addHTMLToList(offlinetmpl.render(channelStrippedResults));
        }
      }
    });

};

function addHTMLToList(renderedHTML) {
  let composedListHTML = renderedHTML;
  $('#streamList').append(composedListHTML);
}
export {
  getTList
};
