TrelloClone.Views.Card = Backbone.View.extend({
  template: JST['cards/show'],

  events: {
    "click .hover-delete-card": "deleteCard"
  },

  render: function () {
    // debugger
    var content = this.template({card: this.model});
    this.$el.html(content);
    this.$el.addClass('card');
    return this;
  },

  deleteCard: function (event) {
    this.model.destroy();
    this.collection.remove(this.model);
  }
})
