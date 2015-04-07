TrelloClone.Views.Lists = Backbone.View.extend({
  template: JST['lists/show'],

  initialize: function (options) {
    this.board = options.board;
    this.cards = this.model.cards();
    this.listenTo(this.cards, 'sync remove', this.render);
    this.$el.ready(this.onRender.bind(this));
  },

  events: {
    "click .new-card-btn": "newCard",
    "click .delete-list-btn": "deleteList"
  },

  render: function () {
    var that = this;
    this.$el.addClass('lists-item');
    var content = this.template({list: this.model});
    this.$el.html(content);
    this.$el.data('list-name', this.model.name);
    var cards = this.cards;
    this.model.cards().each(function(card){
      var cardView = new TrelloClone.Views.Card({model: card, collection: cards});
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
  },

  deleteList: function (event) {
    this.model.destroy();
    this.collection.remove(this.model);
  },

  onRender: function () {
    this.$el.draggable();
    // this.$el.droppable();
    // this.$el.sortable();
  }
})
