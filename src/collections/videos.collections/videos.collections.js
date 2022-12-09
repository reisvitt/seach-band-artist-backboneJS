import Backbone from 'backbone';
import $ from 'jquery'
import { VideoModel } from '../../models/index.js'

const VideosCollection = Backbone.Collection.extend({
  initialize: function(_, options){
    Backbone.Collection.prototype.initialize.call(this, arguments);
    this.screen_name = options.screen_name;
    this.search = options.search
  },

  model: VideoModel,
  
  urlRoot: process.env.YOUTUBE_URL,

  url: function(){
    return this.urlRoot + '/search'
  },
  
  getParams: function(){
    const apiKey = process.env.YOUTUBE_API_KEY
    return ({
      part: 'snippet', 
      q: this.search,
      key: apiKey,
    })
  },

  parse: function(response){
    return  response.items.map(video => ({
      videoId: video.id.videoId,
      channelId: video.snippet.channelId,
      channelTitle: video.snippet.channelTitle,
      description: video.snippet.description,
      publishTime: video.snippet.publishTime,
      publishedAt: video.snippet.publishedAt,
      thumbnails: video.snippet.thumbnails.default.url,
      title: video.snippet.title,
    }))
  },

  fetch: function(options){
    options = options || {};
    options = {
      ...options,
      type: "GET",
      dataType: "JSON",
      jsonp: false,
      jsonpCallback: false,
      contentType:'jsonp',
      data: $.param(this.getParams()),
    }
    Backbone.Collection.prototype.fetch.call(this, options);
  },
});

export {
  VideosCollection
}