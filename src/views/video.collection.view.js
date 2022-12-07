const VideoCollectionView = Backbone.View.extend({
  tagName: "ul",
  className: 'video-collection',
  initialize: function() {
      this.render();
  },
  render: function() {
      $(this.el).append("<h1>VideoCollectionView</h1>");
  }
});

export {
  VideoCollectionView
}