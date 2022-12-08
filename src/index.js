import Backbone from "backbone";
import $ from 'jquery'
import { VideosCollection } from './collections/videos.collections/videos.collections.js'
import { VideoCollectionView } from './views/video.collection.view/video.collection.view'

const MOCKVIDEO = [
  {
    title: 'Vida loca parte 2',
    url: 'sadx',
    channelTitle: 'Real',
    description: 'teste',
  }
]

const App = new (Backbone.View.extend({
  Models: {},
  Collections: {},
  Views: {},
  start: function(rootEl, options){
    this.initializeVideos(options);
    this.render(rootEl)
  },

  initializeVideos: function(options){
    this.videos = new VideosCollection([], options);
    this.videos.add(MOCKVIDEO)
  },

  render: function(rootEl){
    this.el = rootEl;
    this.renderVideos();
    return this;
  },

  renderVideos: function(){
    const templateVideo = $('#video-template').html()

    this.videos = new VideoCollectionView({collection: this.videos, template: templateVideo});
    this.videos.render().$el.appendTo(this.el);
  },
}))

App.start($("#app"), {q: 'Iron Maiden'})