TrelloClone.Views.Lists = Backbone.View.extend({
  template: JST['lists/show'],

  initialize: function (options) {
    this.board = options.board;
    this.cards = this.model.cards();
    this.listenTo(this.cards, 'sync', this.render);
  },

  events: {
    "click .new-card-btn": "newCard"
  },

  render: function () {
    var that = this;
    this.$el.addClass('lists-item');
    var content = this.template({list: this.model});
    this.$el.html(content);
    this.$el.data('list-name', this.model.name);
    this.model.cards().each(function(card){
      // debugger
      var cardView = new TrelloClone.Views.Card({model: card});
      that.$el.find('.cards').append(cardView.render().$el);
    })
    return this;
  },

  newCard: function (event) {
    this.$el.find('.new-card-btn').remove();
    var card = new TrelloClone.Models.Card();
    card.set('list_id', this.model.id);
    card.set('ord', 0);
    var view = new TrelloClone.Views.NewCard({model: card, collection: this.cards});
    this.$el.append(view.render().$el);
  }
})
