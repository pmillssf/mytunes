// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  // server: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',

  // initialize: function(song) {
    
  //   var SongData = $.ajax({
  //     // This is the url you should use to communicate with the parse API server.
  //     url: this.server,
  //     type: 'GET',
  //     data: JSON.stringify(song),
  //     contentType: 'application/json',
  //     success: function (data) {
  //       console.log(this);
  //       console.log(data);
  //       return data;

        
  //     },
  //     error: function (data) {
  //       // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
  //       // console.error('chatterbox: Failed to send message', data);
  //     }
  //   });
  //   setTimeout(function() {
  //     console.log(SongData);
  //     // this.Songs.add(SongData);
  //   }, 100);
      
  // }
});