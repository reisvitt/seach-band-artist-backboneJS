import Backbone from "backbone";

const VideoModel = Backbone.Model.extend({
  getUrlVideo: function(){
    if(this.get("videoId")){
      return `https://youtube.com/watch?v=${this.get("videoId")}`
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
    }
  }
})

export {
  VideoModel
}