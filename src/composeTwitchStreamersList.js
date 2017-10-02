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
    baseURLoffline = 'https://wind-bow.glitch.me/twitch-api/channels/',
    composedListHTML = '';
if (allProps) {console.log("You've given unexpected properties to getTList function!\n");}
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
    .then(results => {

      results[0].forEach(function(item) {
        console.log("\nCOMPLETED PROMISES 0\n" + JSON.stringify(item));
      });
      results[1].forEach(function(item) {
        console.log("\nCOMPLETED PROMISES 2\n" + JSON.stringify(item));
      });

    })
};

function stripResults(...rawResults) {
  let onlineListedFirst = (rawResults[0].stream !== null);

  const onlineStrippedResults = {
    stream: results.stream,
    preview: {
      large: results.stream.preview.large,
    },
    channel: {
      display_name: results.stream.channel.display_name,
      status: results.stream.channel.status,
      game: results.stream.channel.game,
    }
  };
  const offlineStrippedResults = {
    channel: {
      display_name: results.display_name,
      url: results.url,
      logo: results.logo || "http://default.image"
    }
  };
}


function addHTMLToList(renderedHTML) {
  listHTML += renderedHTML;
  $('#streamList').html();
}
export {
  getTList
};
