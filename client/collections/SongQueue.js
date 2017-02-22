// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
  },

  playFirst: function() {
    // console.log(this, 'playFirst');
    this.at(0).play();
    // this.get(0).play()
  }, 

  dequeue: function(song) {
   // check if current song = shifted song
   // console.log(currentSong);
    if (this.at(0) === song) {
      this.playNext();
    } else {
      this.remove(song);
    }
   // if so check to see if there something in the queue
     // if yes, play else
     // if no set current to null
  }, 

  enqueue: function() {
    if (this.length === 1) {
      this.playFirst();
    }

  },

  playNext: function(song) {
    this.shift();
    if (this.models.length >= 1) {
      this.playFirst();
    } else {
      this.trigger('stop');
    }


  }






});