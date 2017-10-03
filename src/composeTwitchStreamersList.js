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

  function timeElapsed(startTime, ...finishTime) {
    let now = new Date(),
      then = new Date(startTime),
      msElapsed = now - then,
      seconds = (msElapsed / 1000).toFixed(1),
      minutes = (msElapsed / (1000 * 60)).toFixed(1),
      hours = (msElapsed / (1000 * 60 * 60)).toFixed(1),
      days = (msElapsed / (1000 * 60 * 60 * 24)).toFixed(1);

      console.log('\nNow: ' + now);
      console.log('\nThen: ' + then);
      console.log('\nDifference: ' + (now - then));
    switch (true) {
      case (seconds < 60):
        return seconds + " seconds";
      case (minutes < 60):
        return minutes + " minutes";
      case (hours < 24):
        return hours + " hours";
      default:
        return days + " days";
    }

  }
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
          // console.log("\nWhole Channel Output:\n" + JSON.stringify(allResults[0][index]));
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
          //  console.log("\nOnline:\n" + JSON.stringify(streamerStrippedResults,null,'\t'));
          addHTMLToList(onlinetmpl.render(streamerStrippedResults));
        } else {
          //        console.log("\nWhole Channel Output:\n" + JSON.stringify(allResults[1][index]));
          const channelStrippedResults = {
            channel: {
              display_name: allResults[1][index].display_name,
              url: allResults[1][index].url,
              logo: allResults[1][index].logo || "/mister-twitch/images/logo-transp-dark-300.png",
              last_seen: timeElapsed(allResults[1][index].updated_at)
            }
          };
          console.log("\nOffline:\n" + JSON.stringify(channelStrippedResults, null, '\t'));
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
