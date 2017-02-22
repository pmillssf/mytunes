// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    // this.on('enqueue', console.log('enqueue was seen!'));
    // on add and on remove -> 
    this.collection.on('add remove', this.render, this);
    // this.on('dequeue', this.$el.html(''));
    this.render();
  },

  render: function() {
    // console.log('render called!');
    // to preserve event handlers on child nodes,
    // we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  
    // console.log(this.$el);
    // // return this.$el;
    // if (!song) {
    //   this.$el.html('<th class="songQueue">Song Queue</th>');
    // } else {
    //   $('.songQueue').append( new SongQueueEntryView({model: song}).render());
    // }
  }
});
