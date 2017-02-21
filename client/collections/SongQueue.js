// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      console.log(this);
      if (this.models.length === 1) {
        this.playFirst();
      } 
    });

    this.on('ended', function() {
      console.log('something ended');
    });
  },

  playFirst: function() {
    this.models[0].play();
  }






});