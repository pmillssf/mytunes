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
      this.remove(this.models[0]);
      if (this.models.length > 0) {
        this.playFirst();
      }
    });
    this.on('dequeue', function() { 
      this.remove(this.models[0]);
      // Come back here if dequeue means
      // remove any song from the queue

    });
  },

  playFirst: function() {
    this.models[0].play();
  }






});