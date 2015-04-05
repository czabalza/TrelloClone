TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: 'api/boards',

  parse: function (response, options) {
    if (response.lists) {
      this.lists().set(response.lists);
      delete response.lists;
    }
    return response;
  },

  lists: function () {
    if (!this._lists) {
      this._lists = new TrelloClone.Collections.Lists()
    }

    return this._lists;
  }
})
