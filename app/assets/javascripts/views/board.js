TrelloClone.Views.Board = Backbone.View.extend({
  template: JST["boards/show"],

  initialize: function(options) {
    this.lists = options.lists;
    this.board = options.board;
    this.listenTo(this.board, 'sync', this.render);
    this.listenTo(this.lists, 'sync remove',  this.render);
  },

  events: {
    "click .new-list-btn": "listForm",
    "click .delete-board": "destroyBoard"
  },

  render: function () {
    var that = this;
    var content = this.template({board: this.board});
    this.$el.html(content);
    this.lists.each(function(list) {
      var view = new TrelloClone.Views.Lists({model: list, collection: that.lists, board: that.board});
      that.$el.find('.lists').append(view.render().$el);
    });
    return this;
  },

  listForm: function () {
    var list = new TrelloClone.Models.List({board_id: this.board.id, ord: 0});
    var view = new TrelloClone.Views.NewList({model: list, lists: this.lists});
    this.$el.find('.new-list-btn').remove();
    this.$el.append(view.render().$el);
  },

  destroyBoard: function (event) {
    var $target = $(event.currentTarget);
    var id = $target.attr('data-id');
    var board = this.collection.getOrFetch(id);
    board.destroy({
      success: function () {
        Backbone.history.navigate("", {trigger: true});
      }
    });

  }
})
