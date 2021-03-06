// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    //console.log('playing');
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    // console.log('enqueued!');
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);    
  },

  ended: function() {
    // console.log('ended');
    this.trigger('ended', this);
  }

});
