import $ from 'jquery'
import Backbone from "backbone";

const DetailsModel = Backbone.Model.extend({
  initialize: function(options){
    Backbone.Model.prototype.initialize.call(this, arguments);
    this.search = options.search
  },

  urlRoot: process.env.TICKET_MASTER_URL,

  url: function(){
    return this.urlRoot + '/attractions'
  },

  urlAttraction: function(){
    return this.urlRoot + `/attractions/K8vZ9171G4V`
  },

  getParams: function(){
    const apiKey = process.env.TICKET_MASTER_API_KEY
    return ({
      sort: 'relevance,desc',
      apikey: apiKey,
      size: 1,
      keyword: this.search,
    })
  },
  
  toJSON: function(){
    return ({
      id: this.get('id'),
      url: this.get('url'),
      classifications: this.get('classifications') || [],
      name: this.get('name'),
      imageUrl: this.get("imageUrl"),
    })
  },

  parse: function(res) {
    const tempData = {
      id: res?._embedded?.attractions[0].id,
      url: res?._embedded?.attractions[0].url,
      classifications: res._embedded?.attractions[0].classifications,
      name: res?._embedded?.attractions[0].name,
      imageUrl: res?._embedded?.attractions[0].images.length > 0 ? res._embedded.attractions[0].images[0].url : '',
    }
    return tempData
  },

  fetch: function(options){
    options = options || {};
    options = {
      ...options,
      type: "GET",
      dataType: "JSON",
      jsonp:false,
      jsonpCallback: false,
      data: $.param(this.getParams()),
    }
    Backbone.Model.prototype.fetch.call(this, options);
  },
})

export {
  DetailsModel
}