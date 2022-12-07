const VideoView = Backbone.View.extend({
  tagName: "li",
  className: 'video',
  //template: _.template($('#video-template').html()),
  initialize: function() {
      this.render();
  },
  render: function() {
    if(this?.model){
      return this?.model?.toJSON();
    }

    return ''
  }
});

export {
  VideoView
}