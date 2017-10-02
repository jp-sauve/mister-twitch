/*jslint devel:true */
/*global $, jQuery*/

let debug = true,
onlinetmpl = $.templates('#activeStreamTemplate'),
offlinetmpl = $.templates('#inactiveStreamTemplate');
// Take in list of Twitch streamer names, make api call
// and return HTML list, ready for insertion

function getTList (...allProps) {
  let [streamers, ...moreProps] = allProps,
  allRequestPromises = [],
  baseURLonline = 'https://wind-bow.glitch.me/twitch-api/streams/',
  composedListHTML = '';

  if (debug) {console.log('Getting TList for ' + streamers.toString())};

for (let [index, streamer] of streamers.entries()) {
  if (debug) {console.log('About to push entry ' + index + ".\n");}
  allRequestPromises.push($.getJSON(baseURLonline + streamer, processResults));
  }
Promise.all(allRequestPromises)
  .then(function(results){
    results.forEach(function(item){
      console.log("Item: " + JSON.stringify(item));
    })
  })
};

function processResults(results) {
  if (results.stream === null) {
    var user = results._links.self.substr(37);
    console.log(user + ' is offline!\n');
    return processOffline(user);
  } else {
    return new Promise((resolve,reject) => {
      const strippedResults = {
        stream: results.stream,
        preview: {
          large: results.stream.preview.large,
        },
        channel: {
          display_name: results.stream.channel.display_name,
          status: results.stream.channel.status,
          game: results.stream.channel.game,
    },
  };
  resolve(strippedResults);
      });
}}

function processOffline(user) {
  let baseURLoffline = 'https://wind-bow.glitch.me/twitch-api/channels/';
  return new Promise((resolve,reject) =>{
  $.getJSON(baseURLoffline + user + '?callback=',function(results) {
    const strippedResults = {
      channel: {
        display_name: results.display_name,
        url: results.url,
        logo: results.logo || "http://default.image"
      }
    };
      resolve(strippedResults);
//
  });
  });
  };


function addHTMLToList(renderedHTML) {
  listHTML += renderedHTML;
  $( '#streamList' ).html();
}
export { getTList };
