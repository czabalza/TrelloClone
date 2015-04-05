TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = new TrelloClone.Collections.Boards();
  },

  routes: {
    "": "boardIndex",
    "boards/new": "boardNew",
    "boards/:id": "boardShow"
  },

  boardIndex: function () {
    this.collection.fetch();
    var view = new TrelloClone.Views.Boards({collection: this.collection});
    this.$rootEl.html(view.render().$el);
  },

  boardNew: function () {
    var board = new TrelloClone.Models.Board();
    var view = new TrelloClone.Views.NewBoard({collection: this.collection, model: board});
    this.$rootEl.html(view.render().$el);
  },

  boardShow: function (id) {
    var model = this.collection.getOrFetch(id);
    var view = new TrelloClone.Views.Board({board: model});
    this.$rootEl.html(view.render().$el);
  }
})
