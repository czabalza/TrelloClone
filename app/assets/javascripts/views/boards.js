TrelloClone.Views.Boards = Backbone.View.extend({
  template: JST["boards/index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    var content = this.template({collection: this.collection});
    this.$el.html(content);
    return this;
  }
})
