import $ from 'jquery'
import { VideoView } from '../video.view/video.view.js'

const VideoCollectionView = Backbone.View.extend({
  tagName: "ul",
  className: 'video-collection',

  initialize: function(options){
    this.template = options.template
    this.collection = options.collection
    this.listenTo(this.collection, 'add', this.renderOne);
  },

  populate: function(){
    if(this.collection.isEmpty())
      this.refresh();
    else
      this.renderAll();
  },

  refresh: function(){
    this.collection.reset()
    this.collection.fetch();
  },

  render: function() {
    this.populate()
    return this
  },

  renderAll: function(){
    this.collection.forEach(this.renderOne, this);
  },

  renderOne: function(data){
    const video = new VideoView({model: data, template: this.template}).render()
    $(video.el).appendTo(this.el)

    return this
  }
});

export {
  VideoCollectionView
}