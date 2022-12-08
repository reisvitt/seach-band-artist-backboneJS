import Backbone from "backbone";
import $ from 'jquery'
import { VideosCollection } from './collections/videos.collections/videos.collections.js'
import { VideoCollectionView } from './views/video.collection.view/video.collection.view'
import { SectionView } from "./views/view.section/view.section.js";
import { DetailsModel } from "./models/index.js";
import { DetailsView } from "./views/details.view/details.view";
import { SectionTitle } from "./views/view.section.title/view.section.title";

import "./styles/general.css"

const App = Backbone.View.extend({
  Models: {},
  Collections: {},
  Views: {},
  start: function(rootEl){
    this.el = rootEl
    
    $("#search-input").on('keypress', (data) => {
      if(data.key === 'Enter'){
        data.preventDefault()

        if(data.target.value === ''){
          this.reset()
        }else{
          this.onSearch(data.target.value)
          this.decreaseSizeForm()
        }
      }
    })
  },


  onSearch: function(data){
    this.reset()
    this.initializeVideos({search: data});
    this.render()
  },

  initializeVideos: function(options){
    this.videos = new VideosCollection([], options);
    this.details = new DetailsModel({search: options.search})
  },

  reset: function(){
    this.el.empty()
    $('#container-form').removeClass("close")
  },

  decreaseSizeForm: function(){
    $('#container-form').addClass('close')
  },

  render: function(){
    this.renderVideos();
    return this;
  },

  renderVideos: function(){
    const templateVideo = $('#video-template').html()
    const templateDetails = $('#details-template').html()

    this.videoSection = new SectionView({className: 'video-section'})
    this.videos = new VideoCollectionView({
      collection: this.videos, 
      template: templateVideo, 
      search: this.search
    });

    const titleVideos = new SectionTitle({title: 'Videos'}).render()
    titleVideos.$el.prependTo(this.videoSection.el)

    this.videoSection.$el.appendTo(this.el)
    this.videos.render().$el.appendTo(this.videoSection.el);


    this.bandDetailsSection = new SectionView({className: 'band-details'})
    this.details = new DetailsView({
      model: this.details,
      template: templateDetails, 
      search: this.search,
    })


    const titleDetails = new SectionTitle({title: 'Detalhes'}).render()
    titleDetails.$el.prependTo(this.bandDetailsSection.el)

    this.details.render().$el.appendTo(this.bandDetailsSection.el);
    this.bandDetailsSection.$el.appendTo(this.el)

  },
})

new App().start($("#content"))