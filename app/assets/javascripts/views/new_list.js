TrelloClone.Views.NewList = Backbone.View.extend({
  template: JST["lists/new"],

  initialize: function (options) {
    this.lists = options.lists;
  },

  events: {
    "click .create-list-btn": "createList"
  },

  render: function () {
    var content = this.template({list: this.model});
    this.$el.html(content);
    return this;
  },

  createList: function (event) {
    event.preventDefault();
    var data = $(event.currentTarget.parentElement).serializeJSON();
    this.model.set(data);
    this.model.save([], {
      success: function (list) {
        this.lists.add(list, {merge: true});
      }.bind(this),
      error: function (list, response) {
        this.$el.empty();
        this.$el.append(response.responseJSON);
        var content = this.template({list: list});
        this.$el.append(content);
      }.bind(this)
    })
  }
})
