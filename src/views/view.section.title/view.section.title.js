import Backbone from 'backbone';

const SectionTitle = Backbone.View.extend({
  tagName: "h2",
  className: 'section-title',
  initialize: function(options){
    this.title = options.title
  },
  render: function(){
    this.$el.html(this.title)

    return this
  }
});

export {
  SectionTitle
}