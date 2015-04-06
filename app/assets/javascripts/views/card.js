TrelloClone.Views.Card = Backbone.View.extend({
  template: JST['cards/show'],

  render: function () {
    // debugger
    var content = this.template({card: this.model});
    this.$el.html(content);
    return this;
  }
})
