import Backbone from 'backbone';
import { VideoModel } from '../../models/index.js'

const VideosCollection = Backbone.Collection.extend({
  initialize: function(_, options){
    this.screen_name = options.screen_name;
    Backbone.Collection.prototype.initialize.call(this, arguments);
  },

  model: VideoModel,
  
  urlRoot: process.env.YOUTUBE_URL,

  url: function(){
    const apiKey = process.env.API_KEY
    return this.urlRoot + `?part=snippet&key=${apiKey}&q=IronMaiden`
  },

  fetch: function(options){
    options = options || {};
    options = {
      ...options,
      success: (_, response) => {
        if(response.error){
          console.log("error", response.error.message)
          return
        }

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
      complete: (_, response) => {
        console.log("completeeee: ", response)
      }
    }
    options.dataType = 'jsonp';
    Backbone.Collection.prototype.fetch.call(this, options);
  },
});

export {
  VideosCollection
}