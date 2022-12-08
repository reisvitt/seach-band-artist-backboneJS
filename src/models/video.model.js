import Backbone from "backbone";

const VideoModel = Backbone.Model.extend({
  getUrlVideo: function(){
    if(this.get("videoId")){
      return `https://youtube.com/watch?v=${this.get("videoId")}`
    }

    return '#'
  },

  getUrlChannel: function(){
    if(this.get("channelId")){
      return `https://youtube.com/channel/${this.get("channelId")}`
    }

    return '#'
  },
  
  toJSON: function(){
    return {
      title: this.get('title'),
      url: this.getUrlVideo(),
      channelTitle: this.get('channelTitle'),
      description: this.get('description'),
      videoId: this.get('videoId'),
      channelId: this.get('channelId'),
      thumbnails: this.get('thumbnails'),
      urlChanel: this.getUrlChannel(),
    }
  }
})

export {
  VideoModel
}