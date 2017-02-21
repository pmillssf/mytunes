// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.on('enqueue', this.render());
    this.on('dequeue', this.$el.html(''));
  },

  render: function() {
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
