TrelloClone.Collections.Cards = Backbone.Collection.extend({
  url: 'api/cards',
  model: TrelloClone.Models.Card,
  comparator: function (card) {
    return card.escape('ord');
  }
})
