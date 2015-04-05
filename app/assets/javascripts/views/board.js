TrelloClone.Views.Board = Backbone.View.extend({
  template: JST["boards/show"],

  initialize: function(options) {
    this.board = options.board;
    this.listenTo(this.board, 'sync', this.render);
  },

  events: {
    "click .new-list-btn": "listForm"
  },

  render: function () {
    var that = this;
    var content = this.template({board: this.board});
    this.$el.html(content);
    this.board.lists().each(function(list) {
      var view = new TrelloClone.Views.Lists({model: list});
      that.$el.find('.lists').append(view.render().$el);
    });
    return this;
  },

  listForm: function () {
    var list = new TrelloClone.Models.List({board_id: this.board.id, ord: 0});
    var view = new TrelloClone.Views.NewList({model: list});
    this.$el.append(view.render().$el);
  }
})
