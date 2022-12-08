import $ from 'jquery'
import { VideoView } from '../video.view/video.view.js'

const VideoCollectionView = Backbone.View.extend({
  tagName: "ul",
  className: 'video-collection',

  initialize: function(options){
    this.template = options.template
    this.collection = options.collection
  },

  populate: function(){
    if(this.collection.isEmpty())
      this.refresh();
    else
      this.renderAll();
  },

  refresh: function(){
    //this.loadingMessage('Carregando...');
    //this.collection.fetch();
    console.log("REFRESH")
  },

  render: function() {
    this.populate()
    return this
  },

  loadingMessage: function(message){
    this?.$('ul')?.text(message);
  },

  renderAll: function(){
    //this.reset();
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