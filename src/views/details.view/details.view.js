import $ from 'jquery'
import _ from 'underscore'

const DetailsView = Backbone.View.extend({
  className: 'details',
  initialize: function(options){
    this.template = _.template(options.template)
    
    this.search = options.search
    this.model = options.model

    this.listenTo(this.model, 'change', this.renderDetails);
  },

  populate: function(){
    this.model.fetch();
  },

  render: function() {
    this.populate()
    this.renderDetails()
    return this
  },

  renderDetails: function(){
    var innerHTML = this.template(this?.model.toJSON())
    this.$el.html(innerHTML)
    
    return this
  },
});

export {
  DetailsView
}