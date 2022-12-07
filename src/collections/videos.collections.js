import { VideoModel } from '../models/index.js'

const VideosCollection = Backbone.Collection.extend({
  model: VideoModel
});

export {
  VideosCollection
}