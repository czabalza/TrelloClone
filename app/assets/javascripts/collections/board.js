TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: 'api/boards',
  model: TrelloClone.Models.Board,

  getOrFetch: function (id) {
    if (this.get(id)) {
      this.get(id).fetch();
      return this.get(id);
    }
    var model = new TrelloClone.Models.Board({id: id});
    model.fetch({
      success: function () {
        this.add(model);
      }.bind(this)
    });
    return model;
  }
})
