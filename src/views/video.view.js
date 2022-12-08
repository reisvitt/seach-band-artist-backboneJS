import $ from 'jquery'
import _ from 'underscore'

const VideoView = Backbone.View.extend({
  tagName: "li",
  className: 'video',
  template: _.template($('#video-template').html()),
  
  render: function() {
    var innerHTML = this.template(this?.model.toJSON())
    this.$el.html(innerHTML)
    
    return this
  },
});

export {
  VideoView
}