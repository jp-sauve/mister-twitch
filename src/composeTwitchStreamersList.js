/*jslint devel:true */
/*global $, jQuery*/

let debug = true,
tmpl = $.templates('#streamerTemplate');

// Take in list of Twitch streamer names, make api call
// and return HTML list, ready for insertion

function getTList (...allProps) {
  let [streamers, ...moreProps] = allProps,
  allRequestPromises = [],
  baseURL = 'https://wind-bow.glitch.me/twitch-api',
  composedListHTML = '';
  if (debug) {console.log('Getting TList for ' + streamers.toString())};

for (let [index, streamer] of streamers.entries()) {
  if (debug) {console.log('About to push entry ' + index + ".\n");}
  allRequestPromises.push($.getJSON(baseURL + '/streams/' + streamer + '?callback=?', processResults)
    .then(processResults));
}};

function processResults(results) {
  if (debug) {console.log("Processing:\n" + JSON.stringify(results,null,'\t'));};
  let strippedResults = {};
  ({stream:strippedResults[stream] {
      preview:strippedResults.preview {
        large:strippedResults.preview.large
      },
    channel:strippedResults.stream.channel {
      display_name:strippedResults.stream.channel.display_name,
      status:strippedResults.stream.channel.status,
      game:strippedResults.stream.channel.game
    }
  }} = results);
  return tmpl.render(strippedResults);
}

export { getTList };
