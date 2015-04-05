TrelloClone.Views.NewBoard = Backbone.View.extend({
  template: JST['boards/new'],

  events: {
    "click .new-board-btn": "createBoard"
  },

  render: function () {
    var content = this.template({board: this.model});
    this.$el.html(content);
    return this;
  },

  createBoard: function (event) {
    event.preventDefault();

    var params = $(event.currentTarget.parentElement).serializeJSON();
    this.model.set(params);
    this.model.save([], {
      success: function (board) {
        if (this.collection) {
          this.collection.add(board, {merge: true});
        }
        Backbone.history.navigate("boards/" + board.id, {trigger: true});
      }.bind(this),
      error: function (board, response) {
        this.$el.empty();
        this.$el.append(response.responseJSON);
        var content = this.template({board: board});
        this.$el.append(content);
      }.bind(this)
    })
  }
})
