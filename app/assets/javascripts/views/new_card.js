TrelloClone.Views.NewCard = Backbone.View.extend({
  template: JST['cards/new'],

  // initialize: function (options) {
  //   this.model = options.model;
  // },

  events: {
    "click .create-card-btn": "createCard"
  },

  render: function () {
    var content = this.template({card: this.model});
    this.$el.html(content);
    return this;
  },

  createCard: function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget.parentElement);
    var data = $target.serializeJSON();
    var card = this.model.set(data);
    card.save([], {
      success: function (card) {
        this.collection.add(card, {merge: true});
      }.bind(this),
      error: function () {
        debugger
      }
    })
  }
})
