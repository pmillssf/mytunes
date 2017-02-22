// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.enqueue);

    
    this.on('ended', function() {
      console.log('something ended');
      this.models[0].dequeue();
      if (this.models.length > 0) {
        this.playFirst();
      }
    });

    this.on('dequeue', function() { 
      // console.log(this.shift(), "shifted");
      // this.shift();
      this.remove(this.models[0]);
      // Come back here if dequeue means
      // remove any song from the queue

    });

    this.on('enqueue', function() {
      console.log('enqueue was seen!');
      // this.playFirst();
       //this.add(this);
    });


  },

  playFirst: function() {
    // console.log(this, 'playFirst');
    this.models[0].play();
  }, 

  dequeue: function() {

  }, 

  enqueue: function() {
    if (this.models.length === 1) {
      this.playFirst();
    }

  },

  playNext: function() {

  }






});