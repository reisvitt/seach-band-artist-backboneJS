import Backbone from 'backbone';
import _ from 'underscore'

const VideoView = Backbone.View.extend({
  tagName: "li",
  className: 'video',
  //template: _.template(),
  initialize: function(options){
    this.model = options.model
    this.template = _.template(options.template)
  },
  
  render: function() {
    var innerHTML = this.template(this?.model.toJSON())
    this.$el.html(innerHTML)
    
    return this
  },
});

export {
  VideoView
}