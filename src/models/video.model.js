const VideoModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videoId: '',
      title: "",
      description: "",
      thumbnail: "",
      thumbnail: "",
      channelTitle: "",
      publishedAt: "",
      channelId: "",
    };
  },

  getUrlVideo: function(){
    return `https://youtube.com/watch?v=${this.videoId}`
  },
  
  toJSON: function(){
    return this
  }
})

export {
  VideoModel
}